import Link from "next/link";
import styled from "styled-components";

const LinkStyle = styled.a`
  margin-right: 15px;
  color: red;
`;

const Header = () => {
  return (
    <div>
      <Link href="/">
        <LinkStyle>Home</LinkStyle>
      </Link>
      <Link href="/profile">
        <LinkStyle>Profile</LinkStyle>
      </Link>
    </div>
  );
};

export default Header;
