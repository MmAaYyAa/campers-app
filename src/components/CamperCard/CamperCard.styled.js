import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const CardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  border: 1px solid var(--gray-light);
  border-radius: 20px;
  background-color: var(--white);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const Img = styled.img`
  border-radius: 10px;
  width: 292px;
  object-fit: cover;
  height: 320px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const PriceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`;

export const HeartButton = styled.button`
background: transparent;
  border: none;
  cursor: pointer;
svg{
  width: 24px;
  height: 21px;
  fill: ${({ $isFavorite }) => $isFavorite ?"var(--button)" : "var(--main)"};
  transition: fill var(--transition);
}
`;

export const ReviewBox = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const Review = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const TextReview = styled.p`
  text-decoration: underline;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const StarStyled = styled.svg`
width: 16px;
height: 16px;
  fill: var(--rating);
`;

export const MapStyled = styled.svg`
width: 16px;
height: 16px;
fill: var(--main);
`;

export const Text = styled.p`
  width: 525px;
  margin-bottom: 24px;
  color: var(--text);
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 392px;
  margin-bottom: 40px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-basis: calc(100% / 3 - 16px);
  padding: 12px 18px;
  border-radius: 100px;
  background-color: var(--badges);
`;

export const Btn = styled(Link)`
 width: 130px;
  display: inline-block;
  padding: 12px 24px;
  background-color: var(--button);
  color: var(--white);
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  border-radius: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: var(--button-hover); 
  }

  &:active {
    background-color: var(--button-hover);
    
  }
`;