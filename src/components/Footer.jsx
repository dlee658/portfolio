import styled from "styled-components";

import { COLORS } from "../constants/Colour";

const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.FooterBackground};
  min-height: 450px;
  width: 100%;
  flex-direction: column;
`;

const Footer = () => {
  return <Container id="contact"></Container>;
};

export default Footer;
