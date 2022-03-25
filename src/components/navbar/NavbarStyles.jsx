import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 2rem;
  background: #e1f1dd;
  font-size: 2rem;
  font-family: "Girassol", sans-serif;
`;

export const Logo = styled(Link)`
  padding: 1rem 0;
  color: #393e46;
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
  font-family: "Girassol", sans-serif;

  span {
    font-weight: 400;
    font-size: 2rem;
    color: #00adb5;
  }
`;

export const MenuLink = styled.div`
  padding: 1rem 0;
  color: #393e46;
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
  font-family: "Girassol", sans-serif;

  span {
    font-weight: 400;
    font-size: 2rem;
    color: #00adb5;
  }
`;
