import styled from "styled-components";
import { HIGHLIGHT_COLOR } from "./styles";

const Header = styled.header`
  font-size: 15px;
  color: white;
  padding: 16px;
  background: ${HIGHLIGHT_COLOR};
`;

const BodyWrapper = styled.div`
  padding: 20px;
  margin-bottom: 50px;
`;

export default ({ children }) => (
  <div>
    <Header>Iceboks</Header>
    <BodyWrapper>{children}</BodyWrapper>
  </div>
);
