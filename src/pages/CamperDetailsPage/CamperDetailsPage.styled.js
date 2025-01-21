import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkBack = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 8px;
  margin-bottom: 24px;
  width: 120px;
  border: 1px solid var(--gray-light);
  border-radius: 200px;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  transition: border-color var(--transition);
  cursor: pointer;
  &:hover,
   :focus {
    border: 1px solid var(--button-hover);
  }
`;

export const Container = styled.main`
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
 padding: 48px 64px 80px;
`;

// export const MainContent = styled.div`
//   display: flex;
//   justify-content: space-between;
//   gap: 40px;
//   margin-top: 24px;
// `;

export const ListLinks = styled.ul`
  display: flex;
  gap: 40px;
  width: 100%;
  padding-bottom: 24px;
  margin-bottom: 44px;
  border-bottom: 1px solid var(--gray-light);
`;

export const LinkItem = styled.li``;

export const NavLinkStyled = styled(NavLink)`
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  padding-bottom: 24px;
  border-bottom: 5px solid transparent;
  transition: border-color var(--transition);

  &.active {
    border-bottom: 5px solid var(--button);
  }
`;

export const Bottom = styled.div`
  display: flex;
  gap: 40px; 
  align-items: flex-start; 
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

export const Sidebar = styled.aside`
width: 641px;
  padding: 24px;
  border: 1px solid var(--gray-light);
  border-radius: 8px;
  background-color: var(--white);

`;