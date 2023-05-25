import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Icon from "../Atoms/Icon";

interface ILinks {
  title: string;
  url: string;
}

export const navLinks: ILinks[] = [
  { title: "Sign In", url: "/sign-in" },
  { title: "Sign Up", url: "/sign-up" },
];

const Navbar = () => {
  return (
    <StyledNav className={`bg-base py-3 px-8`}>
      <div className="flex justify-between items-center">
        <NavLink to={"/"}>GigFinder</NavLink>
        <div className="flex gap-x-6">
          {/* {navLinks.map((link) => (
            <NavLink to={link.url} className="p-2">
              {link.title}
            </NavLink>
          ))} */}
          <Icon icon="heart"/>
          <Icon icon="search"/>
        </div>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  background-color: #ffffff;
`;

export default Navbar;
