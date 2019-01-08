import { combineReducers } from 'redux';

// import filters from './filters_reducer';
import modal from './modal_reducer';
import editStickyId from './edit_sticky_reducer';

export default combineReducers({
  // filters,
  modal,
  editStickyId
});


