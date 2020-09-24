import styled from "styled-components";
import { HIGHLIGHT_COLOR } from "./styles";
import Logo from "./logo";

const Header = styled.header`
  display: flex;
  align-items: center;
  font-size: 15px;
  color: white;
  padding: 12px 16px;
  background: ${HIGHLIGHT_COLOR};
`;

const BodyWrapper = styled.div`
  padding: 20px;
  margin-bottom: 50px;
`;

export default ({ children }) => (
  <div>
    <Header>
      <div style={{ height: "24px", width: "24px" }}>
        <Logo />
      </div>
      <div style={{ marginLeft: "8px" }}>Iceboks</div>
    </Header>
    <BodyWrapper>{children}</BodyWrapper>
  </div>
);
