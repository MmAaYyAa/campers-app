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
`