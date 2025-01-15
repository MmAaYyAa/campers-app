import { Link } from 'react-router-dom';
import { HeroSection, HeroContent, HeroButton, HeroImage } from './HomePage.styled';
export default function HomePage() {
    return (
        <HeroSection>
          <HeroImage /> 
          <HeroContent>
            <h1>Campers of your dreams</h1>
            <p>You can find everything you want in our catalog</p>
            <Link to="catalog">
            <HeroButton>View Now</HeroButton>
            </Link>
            
          </HeroContent>
        </HeroSection>
      );
}