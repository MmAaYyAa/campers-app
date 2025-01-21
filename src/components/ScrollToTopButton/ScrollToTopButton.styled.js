import styled from "styled-components";

export const TopButton = styled.button`
  position: fixed;
  bottom: 50px;
  right: 10px;
  padding: 10px;
  background-color: transparent;
  color: var(--button);
  border: 1px solid var(--gray-light);
  border-radius: 50%;
  z-index: 1000;
  transition: opacity var(--transition);

  &:hover,
   :focus{
   border: 1px solid var(--button-hover);
   color: var(--button-hover);
 }
`;
