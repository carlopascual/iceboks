import styled from "styled-components";

const Header = styled.header`
  font-size: 20px;
  padding: 20px;
`;

const BodyWrapper = styled.div`
  padding: 20px;
`;

export default ({ children }) => (
  <div>
    <Header>Iceboks</Header>
    <BodyWrapper>{children}</BodyWrapper>
  </div>
);
