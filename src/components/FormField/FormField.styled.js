import styled, { css } from 'styled-components';

export const FieldWrapper = styled.div`
  position: relative;
`;

export const InputField = styled.input`
  padding: 18px;
  padding-right: 40px;
  background-color: var(--inputs);
  border: 1px solid transparent;
  border-radius: 12px;
  width: 100%;
  font-size: 16px;
  margin-bottom: 14px;

  ${({ $hasError }) =>
    $hasError &&
    css`
      border:  1px solid var(--button);
    `}

  ${({ $extraClass }) =>
    $extraClass &&
    css`
      ${$extraClass}
    `}
`;

export  const ErrorText = styled.div`
   position: absolute;
  font-size: 12px;
  color: var(--button);
  right: 10px;
  top: 2px;
`;