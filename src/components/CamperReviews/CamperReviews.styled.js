import styled from "styled-components";


export const StyledStarIcon = styled.svg` 
width: 20px; 
height: 20px; 

&.filled { fill: var( --rating); } 
&.notFilled { fill: var(--text); } `;

export const Section = styled.section`
  width: 632px;
   /*height: 579px; */
  margin-top: 12px;
  
`;

export const Item = styled.li`
 /* margin-bottom: 44px; */
 margin-bottom: 24px;
`;

export const ReviewInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  
`;

export const Reviewer= styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  width: 60px;
  height: 60px;
  font-weight: 600;
  font-size: 24px;
  line-height: 133%;
  color: var(--button);
  background-color: var(--badges);

`;

export const Name = styled.h4`
font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 4px;
  
`;

export const Comment = styled.p`
color: var(--text);
  
`;