import { RECEIVE_DATE, RECEIVE_ALL_DATES } from '../actions/date_actions';

export default function (state = {}, action) {
  switch (action.type) {
    case RECEIVE_ALL_DATES:
      return action.dates;
    case RECEIVE_DATE:
      let newState = Object.assign({}, state, { [action.date.id]: action.date });
      return newState;
    default:
      return {};
  }
}
