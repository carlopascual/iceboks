import styled from "styled-components";
import Link from "next/link";
import { BORDER_COLOR } from "./styles";
import getFavicon from "../lib/get-favicon";

const Outline = styled.div`
  padding: 16px;
  width: 100%;
  border: 1px solid ${BORDER_COLOR};
  border-radius: 4px;
`;

const Title = styled.h3`
  width: fit-content;
  font-size: 24px;

  &:hover {
    text-decoration: underline;
  }
`;

const URL = styled.h5`
  font-weight: 400;
  opacity: 0.25;
`;

const Favicon = styled.img`
  height: 14px;
  width: 14px;
`;

const Description = styled.p``;

export default ({ name, description, url, favicons, ...props }) => (
  <Outline>
    <Link href={url}>
      <a>
        <Title>{name}</Title>
        <Description style={{ marginTop: "8px" }}>{description}</Description>
        <div style={{ display: "flex", alignItems: "center" }}>
          {getFavicon(favicons) && (
            <Favicon
              src={getFavicon(favicons)}
              style={{
                marginRight: "8px",
                // makes the favicon look more aligned
                marginTop: "2px",
              }}
            />
          )}
          <URL>{url}</URL>
        </div>
      </a>
    </Link>
  </Outline>
);
