import { RECEIVE_DATE, RECEIVE_ALL_DATES, REMOVE_DATE_ITEM } from '../actions/date_actions';

export default function (state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_DATES:
      return action.dates;
    case RECEIVE_DATE:
      let newState = Object.assign({}, state, { [action.date.data._id]: action.date.data });
      return newState;
    case REMOVE_DATE_ITEM:
      newState = Object.assign({}, state);
      delete newState[action.dateItem.data._id];
      return newState;
    default:
      return state;
  }
}
