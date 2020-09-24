import _ from "lodash";
import getFavicons from "get-website-favicon";
import styled from "styled-components";
import Layout from "../components/layout";
import Post from "../components/post";
const List = styled.div`
  display: grid;
  grid-gap: 20px;
`;

const Page = ({ markdownFiles }) => (
  <>
    <Layout>
      <List style={{ marginTop: "40px" }}>
        {markdownFiles.map((item) => (
          <Post {...item} />
        ))}
      </List>
    </Layout>
  </>
);

export const getStaticProps = async () => {
  //inspired by: https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
  const importAll = (r) => r.keys().map(r);

  const markdownFiles = await Promise.all(
    importAll(require.context("../content", false, /\.md$/)).map(
      async (item) => {
        const favicons = await getFavicons(item.attributes.url);

        return { favicons, ...item.attributes };
      }
    )
  );

  return {
    props: {
      markdownFiles,
    },
  };
};

export default Page;
