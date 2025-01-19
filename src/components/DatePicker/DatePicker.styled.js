import styled from 'styled-components';

export const StyledDatePickerWrapper = styled.div`
width: 100%;

.react-datepicker * {
  font-family: "Inter", sans-serif;
  background-color: var(--white);
  color: var(--main);
}

.react-datepicker {
  width: 100% !important;
  border-radius: 12px !important;
}

.react-datepicker__month-container {
  width: 100% !important;
}

.react-datepicker-wrapper {
  width: 100% !important;
  margin-top: 4px;
}

.react-datepicker-popper {
  width: 100%;
  max-width: 276px;
}

.react-datepicker__current-month {
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  padding-bottom: 15px;
}



.react-datepicker__day-name {
  color: var(--text);
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
}

.react-datepicker__header,
.react-datepicker__month-container,
.react-datepicker {
  border-radius: 12px !important;
}
.react-datepicker__header {
  font-size: 16px;
  font-weight: 600;
    background-color: var(--white);
    border-bottom: 1px solid var(--gray-light);
    padding: 12px;
  }

.react-datepicker__day:hover:not(.react-datepicker__day--disabled) {
  outline: 1px solid var(--text);
  background-color: transparent;
  border-radius: 50%;
}

.react-datepicker__day {
  font-size: 14px;
  font-weight: 400;
  color: var(--main);
}

.today {
   
    border: 1px solid var(--text);
    border-radius: 50% !important;
  }

.react-datepicker__day--outside-month {
    color: var(--text);
  }
.react-datepicker__day--selected {
  background-color: var(--button) !important;
  color: var(--white);
  border-radius: 50%;
}

.react-datepicker__day--selected:hover {
  outline: 1px solid var(--text);
  background-color: var(--button-hover);
  border-radius: 50%;
}

.react-datepicker__day--disabled {
  cursor: not-allowed;
  color: var(--gray-light);
  
}

.react-datepicker__triangle {
    border-radius: 2px;
    fill: var(--white) !important;
  }

/* .react-datepicker-wrapper {
  width: 100%;
}

.react-datepicker__input-container {
  width: 100%;
}

  .react-datepicker {
    border: 1px solid var(--gray-light);
    border-radius: 12px;
    font-family: 'Inter', sans-serif;
    line-height: 1.5;
  }

  .react-datepicker__triangle {
    border-radius: 2px;
    fill: var(--white) !important;
  }

  .react-datepicker__header {
    background-color: var(--white);
    border-bottom: 1px solid var(--gray-light);
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    padding: 12px;
  }

  .react-datepicker__current-month {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 14.5px;
  }

  .react-datepicker__day {
    display: inline-block;
    width: 36px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    font-size: 14px;
    color: var(--main);
    border-radius: 50%;
  }

  .react-datepicker__day--selected{
    background-color: var(--button) !important;
    color: var(--white) !important;
    border: 1px solid var(--text);
    border-radius: 50% !important;
  }

  .react-datepicker__day--selected:hover{
    background-color: var(--button-hover) !important;
  }

  .react-datepicker__day:hover{
    border: 1px solid var(--text);
    background-color: var(--gray-light);
    border-radius: 50%!important;

  }
  .react-datepicker__day--outside-month {
    color: var(--text);
  }

  .react-datepicker .react-datepicker__day--outside-month.react-datepicker__day--selected {
  background-color: transparent !important;
  color: var(--text) !important; 
  border: none !important;
}

  .today {
    background-color: transparent;
    color: var(--main);
    border: 1px solid var(--text);
    border-radius: 50% !important;
  }

  .past {
    color: #d3d3d3; 
    pointer-events: none; 
  } */
`;
