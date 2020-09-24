import Head from "next/head";

export default ({ markdownFiles }) => (
  <>
    <Head>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Head>
    {JSON.stringify(markdownFiles)}
  </>
);

export const getStaticProps = async () => {
  //https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
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
