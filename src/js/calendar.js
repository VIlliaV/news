import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  dateFormat: 'Y-m-d',
  defaultDate: new Date(),
  maxDate: 'today',
};

const timerDataInput = new flatpickr('input#date-picker', options);
console.log(timeData);
