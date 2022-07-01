import styled from "styled-components";

import { COLORS, FONTCOLOURS } from "../constants/Colour";
import { scrollTo } from "../utils/scrollTo";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.HeaderBackground};
  height: 100vh;
  min-height: 450px;
  text-align: center;
  width: 100%;
  background-size: cover;
  flex-direction: column;
`;

const Description = styled.p`
  margin: 5px 0;
  font-size: 2rem;
  font-weight: 600;
  color: ${FONTCOLOURS.White};
`;

const Avatar = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin-bottom: 40px;
  border: 2px solid ${COLORS.DarkWhite};
`;

const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  background-color: transparent;
  margin: 40px 24px;
  padding: 8px 12px;
  cursor: pointer;
  border: 2px solid ${FONTCOLOURS.White};
  border-radius: 6px;
  color: ${FONTCOLOURS.White};

  &:hover {
    background: ${COLORS.FooterBackground};
  }
`;

const Header = () => {
  return (
    <HeaderContainer id="header">
      <Avatar src={"/avatar.png"} alt="avatar" />
      <Description>Hello, this is Donghyun Lee.</Description>
      <Description>I am a software engineer.</Description>
      <Button onClick={() => scrollTo("contact")}>Contact Me</Button>
    </HeaderContainer>
  );
};

export default Header;
