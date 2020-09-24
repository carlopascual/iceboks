import Head from "next/head";
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
      <List>
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

  const markdownFiles = importAll(
    require.context("../content", false, /\.md$/)
  ).map((item) => item.attributes);

  return {
    props: {
      markdownFiles,
    },
  };
};

export default Page;
