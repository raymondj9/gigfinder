import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Icon from "../Atoms/Icon";

const Navbar = () => {
  return (
    <StyledNav
      className={`bg-base py-3 px-4 fixed w-full z-50 border-b`}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <NavLink to={"/"} className="font-bold">
          GigFinder
        </NavLink>
        <div className="flex gap-x-6">
          <Icon icon="heart" />
          <Icon icon="search" />
        </div>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  background-color: #ffffff;
`;

export default Navbar;
