import { StyledLink, Message } from "./NotFoundPage.styled";

export default function NotFoundPage() {
    return (<Message>
      Sorry, page is not found! Please back to <StyledLink to="/">Home Page</StyledLink>!
    </Message>); 
  }