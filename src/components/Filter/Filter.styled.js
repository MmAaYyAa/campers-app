import styled, { css } from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: var(--gray);
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  margin: 8px 0 40px;
`;

export const StyledInputLocationIcon = styled.div`
position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
svg {
  width: 20px;
  height: 20px;
  fill: var(--gray);
  transition: fill 0.3s;
}

&.inputFilled svg {
    fill: var(--main); 
  }
 `;

export const Input = styled.input`
 width: 100%;
  border: none;
  border-radius: 12px;
  padding: 16px 16px 16px 48px; 
  background-color: var(--inputs);
  color: var(--gray); 
  transition: color 0.3s;

  &::placeholder {
    font-size: 16px;
    color: var(--gray);
    transition: color 0.3s;
  }

  &:focus {
    outline: none;
  }

  &.inputFilled {
    color: var(--main); 
  }

  &.inputFilled::placeholder {
    color: var(--main); 
  }
`;

export const FilterTitle = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  margin: 32px 0 24px;
  color: var(--main);
`;


export const FilterList = styled.div`
 display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 360px;
  padding-top: 24px;
  margin-bottom: 40px;
  border-top: 1px solid var(--gray-light);
`;

const sharedStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 80px;
  border: 1px solid var(--gray-light);
  border-radius: 12px;
  background-color: var(--white);
  color: var(--main);
  cursor: pointer;
  transition: all 0.3s;

  svg {
    width: 24px;
    height: 24px;
    margin-bottom: 4px;
    transition: fill 0.3s;
  }

  span {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2; 
    text-align: center;
  }

  &:hover {
    border-color: var(--button);
  }

  ${(props) =>
    props.checked &&
    css`
      border-color: var(--button);
    `}
    
`;


export const StyledCheckbox = styled.label`
  ${sharedStyle}
`;


export const StyledRadio = styled.label`
  ${sharedStyle}
`;


export const HiddenInput = styled.input`
  display: none;
`;

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Button = styled.button`
width: 130px;
padding: 12px 24px;
  border: none;
  border-radius: 200px;
  background-color: ${(props) => (props.disabled ? 'var(--gray-light)' : 'var(--button)')};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: var(--white);
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? 'var(--gray-light)' : 'var(--button-hover)')};
  }
`;