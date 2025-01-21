import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
position: sticky;
top: 0;
z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color:  var(--inputs);
  width: 100%;
  height: 72px;
  padding: 28px 64px;
  border-bottom: 1px solid var(--badges);
  
`;

export const Logo = styled.svg`
position: absolute;
top: 28px;
left: 64px;
width: 136px;
height: 16px;
  
`;

export const NavList = styled.ul`
  display: flex;
  gap: 32px;
  justify-content: center; 
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: var(--main);
  font-size: 16px;

  &.active {
    color: var(--button-hover);
    font-weight: 500;
    padding-bottom: 2px;
  }

  &:hover {
    color: var(--gray-light);
    transition: var(--transition);
  }
`;
  