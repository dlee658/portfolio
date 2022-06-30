import styled from "styled-components";

import { COLORS, FONTCOLOURS } from "../constants/Colour";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.HeaderBackground};
  height: 100vh;
  min-height: 450px;
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

const Header = () => {
  return (
    <HeaderContainer>
      <Avatar src={"/avatar.png"} alt="avatar" />
      <Description>Hello, this is Donghyun Lee.</Description>
      <Description>I am a software engineer.</Description>
    </HeaderContainer>
  );
};

export default Header;
