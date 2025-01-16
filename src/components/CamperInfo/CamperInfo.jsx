import {formatLocation, formatPrice} from '../../utils/utils';
import icons from '../../assets/icons/sprite.svg';
import {Section, Title, ReviewBox, Review, Star, ReviewText, Location, List, Image, Description} from '../CamperInfo/CamperInfo.styled';

export default function CamperInfo({
    camper: {name, price, rating,reviews, description,gallery, location},
}) {
    return(
        <>
        <Section>
            <Title>{name}</Title>
            <ReviewBox>
                <Review>
                     <Star>
                          <use href={`${icons}#icon-star`} />
                          </Star>
                          <ReviewText>{`${rating}(${reviews.length} Reviews)`}</ReviewText>
                </Review>
                <Location>
                    <svg>
                <use href={`${icons}#icon-map`} />
                </svg>
                <p>{formatLocation(location)}</p>
              </Location>
            </ReviewBox>
            <Title>{formatPrice(price)}</Title>
            <List>
              {gallery.map((image, index) => (
                <li key={index}>
                  <Image
                    src={image.thumb}
                    alt="photo of camper"
                  ></Image>
                </li>
              ))}
            </List>
            <Description>{description}</Description>
        </Section>
        </>
    );
}