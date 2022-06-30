import styled from "styled-components";

import { COLORS, FONTCOLOURS } from "../constants/Colour";
import { toExternalRoute } from "../utils/toExternalRoute";

const NavBarContainer = styled.section`
  display: flex;
  align-items: center;
  background-color: ${COLORS.NavBarBackground};
  height: 50px;
  position: fixed;
  width: 100%;
  background-size: cover;
`;

const NavBarInnerContainer = styled.div`
  justify-content: space-between;
  width: 100%;
  margin: 0 20px;
`;

const NavBarLink = styled.div`
  padding: 10px;
  cursor: pointer;
  color: ${FONTCOLOURS.White};

  &:hover {
    font-weight: 700;
    color: ${FONTCOLOURS.DarkBlue};
  }

  &:active {
    transform: translateY(1px);
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarInnerContainer>
        <NavBarLink
          onClick={() => toExternalRoute("https://github.com/dlee658")}
        >
          Donghyun
        </NavBarLink>
        <NavBarLink>Experience</NavBarLink>
      </NavBarInnerContainer>
    </NavBarContainer>
  );
};

export default NavBar;
