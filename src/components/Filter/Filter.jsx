import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchCampers} from '../../redux/catalog/catalogOperations.js';
import { selectFilters } from '../../redux/filters/filterSelectors';
import { addFilters, clearFilters } from '../../redux/filters/filterSlice';
import { clearCatalog } from '../../redux/catalog/catalogSlice';
import toast from 'react-hot-toast';
import { equipmentIcons, typeIcons, formatString  } from '../../utils/utils';
import icons from '../../assets/icons/sprite.svg';
import { FormWrapper, StyledInputLocationIcon, InputWrapper, Title, FilterTitle, FilterList, Input, StyledCheckbox, StyledRadio, HiddenInput, ButtonBlock, Button } from '../Filter/Filter.styled';

export default function Filter() {
    const [formState, setFormState] = useState({
        location: '',
        transmission: '',
        camperEquipment: [],
        form: '',
      });

      const filters = useSelector(selectFilters);
      const dispatch = useDispatch();

      const handleChange = (field, value) => {
        setFormState(prevState => ({
          ...prevState,
          [field]: value,
        }));
      };

      const handleCamperEquipmentChange = equipment => {
        setFormState(prevState => {
          const isSelected = prevState.camperEquipment.includes(equipment);
          const updatedEquipment = isSelected
            ? prevState.camperEquipment.filter(item => item !== equipment)
            : [...prevState.camperEquipment, equipment];
          return {
            ...prevState,
            camperEquipment: updatedEquipment,
          };
        });
    }

        const handleSubmit = (e) => {
            e.preventDefault();
        
            const { location, transmission, camperEquipment, form } = formState;
        
            if (!location && !camperEquipment.length && !form && !transmission) {
              toast.error('At least one filter should be chosen');
              return;
            }
        
            const newFilters = {
              location,
              transmission: transmission ? 'automatic' : '',
              camperEquipment,
              form,
            };
        
            dispatch(addFilters(newFilters));
        
            dispatch(fetchCampers({ page: 1, filters: newFilters, reset: true }))
              .unwrap()
              .catch(() => {
                dispatch(clearCatalog());
              });
          };
        
          const handleReset = () => {
            setFormState({
              location: '',
              transmission: false,
              camperEquipment: [],
              form: '',
            });
            dispatch(clearFilters());
            dispatch(fetchCampers({ page: 1, filters, reset: true }));
          };


  return (
    
    <FormWrapper onSubmit={handleSubmit}>
      <Title>Location</Title>
      <InputWrapper>
        <StyledInputLocationIcon className={formState.location ? 'inputFilled' : 'inputEmpty'}>
          <svg>
            <use href={`${icons}#icon-map`} />
          </svg>
        </StyledInputLocationIcon>
        <Input
          type="text"
          placeholder="City"
          value={formState.location}
          onChange={e => handleChange('location', e.target.value)}
          className={formState.location ? 'inputFilled' : 'inputEmpty'}
        />
      </InputWrapper>
      <Title>Filters</Title>
      <FilterTitle>Vehicle Equipment</FilterTitle>
      <FilterList>
        {Object.keys(equipmentIcons).map(equipment => (
          <StyledCheckbox key={equipment} checked={formState.camperEquipment.includes(equipment)}>
            <HiddenInput
              type="checkbox"
              onChange={() => handleCamperEquipmentChange(equipment)}
            />
            <svg>
              <use href={`${icons}#${equipmentIcons[equipment]}`} />
            </svg>
            <span>{formatString(equipment)}</span>
          </StyledCheckbox>
        ))}
      </FilterList>

      <FilterTitle>Vehicle Type</FilterTitle>
      <FilterList>
        {Object.keys(typeIcons).map(type => (
          <StyledRadio key={type} checked={formState.form === type}>
            <HiddenInput
              type="radio"
              name="vehicleType"
              onChange={() => handleChange('form', type)}
            />
            <svg>
              <use href={`${icons}#${typeIcons[type]}`} />
            </svg>
            <span>{formatString(type)}</span>
          </StyledRadio>
        ))}
      </FilterList>

      <ButtonBlock>
        <Button
          type="submit"
          disabled={!formState.location &&  !formState.camperEquipment.length &&  !formState.form && !formState.transmission}
        >
          Search
        </Button>
        <Button
          type="button"
          disabled={!formState.location &&  !formState.camperEquipment.length &&  !formState.form &&  !formState.transmission}
          onClick={handleReset}
        >
          Reset
        </Button>
      </ButtonBlock>
    </FormWrapper>
  );
      };

