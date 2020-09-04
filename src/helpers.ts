/* eslint-disable no-restricted-globals */
import { ObjectIndex, Values } from './interfaces';

export const showErrors = (name: string, errors: ObjectIndex, values: Values) => {
  let errorsList: ObjectIndex = { ...errors };

  switch (name) {
    case 'company':
      break;
    case 'number':
      if (!values.number.length) {
        errorsList = { ...errorsList, number: 'This field is required' };
      } else if (+values.number > 99 || +values.number < 1 || isNaN(+values.number)) {
        errorsList = { ...errorsList, number: 'Please enter number from 1 to 99' };
      }

      break;
    case 'business':
      if (!values.business.length) {
        errorsList = { ...errorsList, business: 'This field is required' };
      }

      break;
    case 'description':
      if (!values.description.length) {
        errorsList = { ...errorsList, description: 'This field is required' };
      }

      break;
    default:
  }

  return errorsList;
};
