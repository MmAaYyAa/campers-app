import { useDispatch, useSelector } from 'react-redux';
import {addFavorite, removeFavorite} from '../../redux/favorites/favoritesSlice';
import { selectFavorites } from '../../redux/favorites/favoritesSelector';
import { formatLocation, formatPrice, truncateText } from '../../utils/utils';
import icons from '../../assets/icons/sprite.svg';
import {CardContainer, InfoContainer, Img, TitleBox, PriceBox, HeartButton,  ReviewBox, Review, TextReview, Location, StarStyled, MapStyled, Text, List, Item,Btn } from '../CamperCard/CamperCard.styled'

export default function CamperCard ({
    camper:  {
        id,
        name,
        price,
        rating,
        reviews,
        description,
        transmission,
        petrol,
        kitchen,
        AC,
        radio,
        bathroom,
        gallery,
        location,
      },
}) {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  console.log("favorites: ",favorites)

  const isFavorite = favorites.includes(id);
  console.log('isFavorite:', isFavorite);
  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };
    return (
        <CardContainer>
          <Img src={gallery[0].thumb} alt={name} />
          <InfoContainer>
            <TitleBox>
              <h3>{name}</h3>
              <PriceBox>
                <h3>{formatPrice(price)}</h3>
                <HeartButton
                   type="button"
                  onClick={handleFavoriteToggle}
                   $isFavorite={isFavorite}>
    <svg>
        <use href={`${icons}#icon-heart`} />
    </svg>
  </HeartButton>
              </PriceBox>
            </TitleBox>
            <ReviewBox>
              <Review>
              <StarStyled>
                <use href={`${icons}#icon-star`} />
                </StarStyled>
                <TextReview>{`${rating} (${reviews.length} Reviews)`}</TextReview>
              </Review>
              <Location>
              <MapStyled>
                <use href={`${icons}#icon-map`} />
                </MapStyled>
                <p>{formatLocation(location)}</p>
              </Location>
            </ReviewBox>
            <Text>{truncateText(description)}</Text>
            <List>
              {transmission === 'automatic' && (
                <Item>
                  <svg width={20} height={20}>
                <use href={`${icons}#icon-automatic`} />
                </svg>
                  <p>Automatic</p>
                </Item>
              )}
              {petrol && (
                <Item>
                 <svg width={20} height={20}>
                <use href={`${icons}#icon-petrol`} />
                </svg>
                  <p>Petrol</p>
                </Item>
              )}
              {kitchen && (
                <Item>
                   <svg width={20} height={20}>
                <use href={`${icons}#icon-cup-hot`} />
                </svg>
                  <p>Kitchen</p>
                </Item>
              )}
              {AC && (
                <Item>
                 <svg width={20} height={20}>
                <use href={`${icons}#icon-wind`} />
                </svg>
                  <p>AC</p>
                </Item>
              )}
              {radio && (
                <Item>
                 <svg width={20} height={20}>
                <use href={`${icons}#icon-radio`} />
                </svg>
                  <p>Radio</p>
                </Item>
              )}
              {bathroom && (
                <Item>
                  <svg width={20} height={20}>
                <use href={`${icons}#icon-shower`} />
                </svg>
                  <p>Bathroom</p>
                </Item>
              )}
            </List>
            <Btn to={`/catalog/${id}`}>Show More</Btn>
          </InfoContainer>
        </CardContainer>
      );
}
