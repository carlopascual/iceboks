import styled from "styled-components";
import Link from "next/link";
import { BORDER_COLOR } from "./styles";
import normalizeUrl from "normalize-url";

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

const Thumbnail = styled.img`
  height: 14px;
  width: 14px;
`;

const Description = styled.p``;

export default ({ name, description, url, thumbnail, ...props }) => {
  return (
    <Outline>
      <Link href={url}>
        <a target="_blank" rel="noreferrer">
          <Title>{name}</Title>
          <Description style={{ marginTop: "8px" }}>{description}</Description>
          <div style={{ display: "flex", alignItems: "center" }}>
            {thumbnail && (
              <Thumbnail
                src={thumbnail}
                style={{
                  marginRight: "8px",
                  // makes the favicon look more aligned
                  marginTop: "2px",
                }}
              />
            )}
            <URL>{normalizeUrl(url, { stripProtocol: true })}</URL>
          </div>
        </a>
      </Link>
    </Outline>
  );
};
