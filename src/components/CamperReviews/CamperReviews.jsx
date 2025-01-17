import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {selectCamperDetails} from '../../redux/catalog/catalogSelectors';
import {fetchCamperById} from '../../redux/catalog/catalogOperations.js';
import icons from '../../assets/icons/sprite.svg';
import {StyledStarIcon, Reviewer, Section, Item, ReviewInfo, Name, Comment} from '../CamperReviews/CamperReviews.styled'

export default function CamperReviews() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const camper = useSelector(selectCamperDetails);
    const reviews = camper?.reviews || [];
    console.log('reviews: ',reviews)

    useEffect(() => {
      dispatch(fetchCamperById(id));
    }, [dispatch, id]);

    const renderStars = rating => {
      const stars = [];
      for (let i = 0; i < 5; i++) {
        stars.push(
          <StyledStarIcon
            key={i}
            className={i < rating ? 'filled' : 'notFilled'}>
            <use href={`${icons}#icon-star`} />
          </StyledStarIcon>
        );
      }
      return stars;
    };

    const reviewer = name => {
      const initial = name.charAt(0).toUpperCase();
      return <Reviewer>{initial}</Reviewer>;
    };

    return (
      <Section>
        <ul>
          {reviews.map((review, index) => (
            <Item key={index}>
              <ReviewInfo>
                {reviewer(review.reviewer_name)}
                <div>
                  <Name>{review.reviewer_name}</Name>
                  <div>
                    {renderStars(review.reviewer_rating)}
                  </div>
                </div>
              </ReviewInfo>
              <Comment>{review.comment}</Comment>
            </Item>
          ))}
        </ul>
      </Section>
    );
  }