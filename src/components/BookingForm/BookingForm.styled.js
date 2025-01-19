import styled from "styled-components";
import {InputField} from '../FormField/FormField.styled';

export const Section =  styled.section`
  padding: 24px 12px;
  border-radius: 10px;
  width: 527px;
`;

export const Title = styled.h3`
font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 8px;
  color: var(--main);
`;

export const Text = styled.p`
color: var(--text);
margin-bottom: 24px;
font-size: 16px;
line-height: 1.5;
`;

export const SubmitButton = styled.button`
  padding: 16px 63px;
  margin: 0 auto;
  background-color: var(--button);
  color: var(--white);
  border: none;
  border-radius: 200px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 166px;

  &:hover {
    background-color: var(--button-hover);
  }

  &:disabled {
    background-color: var(--gray-light);
    cursor: not-allowed;
  }
`;


export const StyledForm = styled.form`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

