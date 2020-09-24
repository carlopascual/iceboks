import styled from "styled-components";
import Link from "next/link";

const Outline = styled.div`
  padding: 20px;
  font-size: 20px;
`;

const Title = styled.h3`
  margin: 0;
  width: fit-content;

  &:hover {
    text-decoration: underline;
  }
`;

const Description = styled.h5`
  margin: 0;
`;

export default ({ name, description, url }) => (
  <Outline>
    <Title>
      <Link href={url}>
        <a>{name} →</a>
      </Link>
    </Title>
    <Description style={{ marginTop: "20px" }}>{description}</Description>
  </Outline>
);
