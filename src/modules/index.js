import { combineReducers } from 'redux';

import base from './base';
import contacts from './contacts';
import modal from './modal';

export default combineReducers({
    base,
    contacts,
    modal
});