import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import { enUS } from 'date-fns/locale';
import { format, isToday, isPast } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import { StyledDatePickerWrapper } from './DatePicker.styled';
import FormField from '../FormField/FormField';

const Datepicker = ({ onChange, selected }) => {
    const [placeholder, setPlaceholder] = useState('Booking date*');
  
    const CustomInput = forwardRef(({ value, onClick }, ref) => (
      <FormField
      ref={ref}
        name="bookingDate"
        value={value}
        onClick={onClick}
        onFocus={(e) => {
          setPlaceholder('Select a date');
          onClick(e);
        }}
        onBlur={() => {
          if (!value) setPlaceholder('Booking date*');
        }}
        placeholder={placeholder}
      
      />
    ));
  
    CustomInput.displayName = 'CustomInput';
  
    const customLocale = {
      ...enUS,
      options: {
        ...enUS.options,
        weekStartsOn: 1,
      },
      localize: {
        ...enUS.localize,
        day: (n) => format(new Date(2023, 0, n + 1), 'EEE'),
      },
    };
  
    registerLocale('custom-en', customLocale);
  
    const customDayClassName = (date) => {
      if (isToday(date)) return 'today';
      if (isPast(date)) return 'past';
      return undefined;
    };

    return (
      <StyledDatePickerWrapper>
        <DatePicker
          locale="custom-en"
          selected={selected}
          onChange={onChange}
          dateFormat="yyyy/MM/dd"
          customInput={<CustomInput />}
          dayClassName={customDayClassName}
          minDate={new Date()} 
         
        />
      </StyledDatePickerWrapper>
    );
  };
  
  export default Datepicker;
  