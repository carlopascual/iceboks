import _ from "lodash";
import getFavicons from "get-website-favicon";
import styled from "styled-components";
import Layout from "../components/layout";
import Post from "../components/post";

const Header = styled.h1`
  font-size: 44px;
  line-height: 1.14;
`;

const List = styled.div`
  display: grid;
  grid-gap: 20px;
`;

const Page = ({ markdownFiles }) => (
  <>
    <Layout>
      {/* getting the style that aligns left with a margin then collapses on mobile */}
      {/* https://stackoverflow.com/questions/36861406/add-horizontal-margin-if-space-available */}
      <div style={{ display: "flex" }}>
        <div style={{ flex: "1 0 0", maxWidth: "108px" }}></div>
        <div style={{ width: "684px" }}>
          <Header>
            Free, curated, and categorized library of digital resources
          </Header>
          <List style={{ marginTop: "40px" }}>
            {markdownFiles.map((item) => (
              <Post {...item} />
            ))}
          </List>
        </div>
      </div>
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
