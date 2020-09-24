import _ from "lodash";
import getFavicons from "get-website-favicon";
import urlMetadata from "url-metadata";
import styled from "styled-components";
import Layout from "../components/layout";
import Post from "../components/post";
import getFavicon from "../lib/get-favicon";

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
      async ({ attributes }) => {
        const entry = { ...attributes };

        const checkMissing = (required) =>
          _.reduce(
            required,
            (result, value) => {
              if (!entry[value]) {
                result[value] = true;
              }

              return result;
            },
            {}
          );

        // check missing entry attributes
        const missingEntries = checkMissing([
          "name",
          "description",
          "thumbnail",
        ]);

        // skip processing if nothing is missing
        if (missingEntries.length <= 0) return entry;

        // process thumbnail if missing
        if (missingEntries.thumbnail) {
          entry.thumbnail = getFavicon(await getFavicons(attributes.url));
        }

        const missingMetadata = _.omit(missingEntries, "thumbnail");

        // if any other metadata is missing
        if (Object.keys(missingMetadata).length > 0) {
          const fetchedMetadata = await urlMetadata(attributes.url);

          if (missingMetadata.name) entry.name = fetchedMetadata.title;
          if (missingMetadata.description)
            entry.description = fetchedMetadata.description;
        }

        return entry;
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
