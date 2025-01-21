import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  font-size:16px;
  font-weight: 500;
  border: 1px solid var(--gray-light);
  border-radius: 200px;
  padding: 16px 32px;
  margin-top: 40px;
  background-color: transparent;
  transition: border var(--transition);
  color: var(--main);

  &:hover {
    border-color: var(--button-hover);
  }
`;