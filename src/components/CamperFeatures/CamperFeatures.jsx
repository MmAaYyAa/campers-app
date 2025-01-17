import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {selectCamperDetails} from '../../redux/catalog/catalogSelectors';
import {fetchCamperById} from '../../redux/catalog/catalogOperations.js';
import {formatDimension} from '../../utils/utils.js';
import icons from '../../assets/icons/sprite.svg';
import { Section, List, ListItem, Icon, Title,  DetailsList, DetailsItem, Details} from '../CamperFeatures/CamperFeatures.styled';

export default function CamperFeatures() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const camper = useSelector(selectCamperDetails);
    console.log('camper: ', camper);

    const {
        radio = false,
        microwave = false,
        petrol = false,
        gas = false,
        water = false,
        transmission = '',
        kitchen = false,
        AC = false,
        TV = false,
        bathroom = false,
        form = '',
        length = '',
        width = '',
        height = '',
        tank = '',
        consumption = '',
      } = camper || {};

useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  return (
    <Section>
    <List>
      {transmission === 'automatic' && (
        <ListItem>
         <Icon>
      <use href={`${icons}#icon-automatic`} />
      </Icon>
          <p>Automatic</p>
        </ListItem>
      )}
      {petrol && (
        <ListItem>
           <Icon>
      <use href={`${icons}#icon-petrol`} />
      </Icon>
          <p>Petrol</p>
        </ListItem>
      )}
      {gas && (
        <ListItem>
          <Icon>
      <use href={`${icons}#icon-gas`} />
      </Icon>
        </ListItem>
      )}
      {kitchen && (
        <ListItem>
          <Icon>
      <use href={`${icons}#icon-cup-hot`} />
      </Icon>
          Kitchen
        </ListItem>
      )}
      {microwave && (
        <ListItem>
          <Icon className="stroke-icon">
      <use href={`${icons}#icon-microwave`} />
      </Icon>
          <p>Microwave</p>
        </ListItem>
      )}
      {AC && (
        <ListItem>
          <Icon>
      <use href={`${icons}#icon-wind`} />
      </Icon>
          <p>AC</p>
        </ListItem>
      )}
      {TV && (
        <ListItem>
       <Icon>
      <use href={`${icons}#icon-tv`} />
      </Icon>
          <p>TV</p>
        </ListItem>
      )}
      {radio && (
        <ListItem>
           <Icon>
      <use href={`${icons}#icon-radio`} />
      </Icon>
          <p>Radio</p>
        </ListItem>
      )}
      {bathroom && (
        <ListItem>
           <Icon>
      <use href={`${icons}#icon-shower`} />
      </Icon>
          <p>Bathroom</p>
        </ListItem>
      )}
      {water && (
        <ListItem>
           <Icon className="stroke-icon">
      <use href={`${icons}#icon-water`} />
      </Icon>
          <p>Water</p>
        </ListItem>
      )}
    </List>
    <Title>Vehicle details</Title>
    <DetailsList>
      <DetailsItem>
        <Details>Form</Details>
        <Details>{form}</Details>
      </DetailsItem>
      <DetailsItem>
        <Details>Length</Details>
        <Details>{formatDimension(length)}</Details>
      </DetailsItem>
      <DetailsItem>
        <Details>Width</Details>
        <Details>{formatDimension(width)}</Details>
      </DetailsItem>
      <DetailsItem>
        <Details>Height</Details>
        <Details>{formatDimension(height)}</Details>
      </DetailsItem>
      <DetailsItem>
        <Details>Tank</Details>
        <Details>{formatDimension(tank)}</Details>
      </DetailsItem>
      <DetailsItem>
        <Details>Consumption</Details>
        <Details>{consumption}</Details>
      </DetailsItem>
    </DetailsList>
  </Section>
  );
}