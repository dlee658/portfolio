import styled from "styled-components";

import { FONTCOLOURS } from "../constants/Colour";
import { toExternalRoute } from "../utils/toExternalRoute";
import { scrollTo } from "../utils/scrollTo";

const NavBarContainer = styled.section`
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  background-size: cover;
  z-index: 10;
  transition: 0.5s height;
`;

const NavBarInnerContainer = styled.div`
  display: flex;
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

const RightLinkContainer = styled.div`
  display: flex;
`;

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    document.getElementById("navbar").classList.add("navbar-reduce");
    document.getElementById("navbar").classList.remove("navbar-init");
  } else {
    document.getElementById("navbar").classList.add("navbar-init");
    document.getElementById("navbar").classList.remove("navbar-reduce");
  }
});

const NavBar = () => {
  return (
    <NavBarContainer id="navbar">
      <NavBarInnerContainer>
        <NavBarLink
          onClick={() => toExternalRoute("https://github.com/dlee658")}
        >
          Donghyun
        </NavBarLink>
        <RightLinkContainer>
          <NavBarLink onClick={() => scrollTo("header")}>Home</NavBarLink>
          <NavBarLink onClick={() => scrollTo("experience")}>
            Experience
          </NavBarLink>
          <NavBarLink onClick={() => scrollTo("contact")}>Contact</NavBarLink>
        </RightLinkContainer>
      </NavBarInnerContainer>
    </NavBarContainer>
  );
};

export default NavBar;
