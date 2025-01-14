import { StyledHeader, Logo, NavList, StyledNavLink } from './Header.styled';
import icons from '../../assets/icons/sprite.svg';

const Header = () => {
  return (
    
    <StyledHeader>
       
      <Logo>
      <use href={`${icons}#icon-Logo`} />
      </Logo>
      <NavList>
          <li>
            <StyledNavLink to="/" end>
              Home
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/catalog">Catalog</StyledNavLink>
          </li>
          {/* <li>
            <StyledNavLink to="/favorites">Favorites</StyledNavLink>
          </li> */}
        </NavList>
    </StyledHeader>
    
  );
};

export default Header;

