import { Map, List, fromJS } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

const CREATE = 'contact/CREATE';
const MODIFY = 'contact/MODIFY';
const REMOVE = 'contact/REMOVE';
const TOGGLE_FAVORITE = 'contact/TOGGLE_FAVORITE';
const LOAD_CONTACTS = 'contact/LOAD_CONTACTS';

export const create = createAction(CREATE); // { id, name, phone, color }
export const modify = createAction(MODIFY); // { id, contact: { name, phone } }
export const remove = createAction(REMOVE); // id
export const toggleFavorite = createAction(TOGGLE_FAVORITE); // id
export const loadContacts = createAction(LOAD_CONTACTS);


const initialState = List([
    Map({
        "id": "SyKw5cyAl",
        "name": "김민준",
        "phone": "010-0000-0000",
        "color": "#40c057",
        "favorite": true
    }),
    Map({
        "id": "r1s_9c10l",
        "name": "아벳",
        "phone": "010-0000-0001",
        "color": "#12b886",
        "favorite": true
    }),
    Map({
        "id": "BJcFqc10l",
        "name": "베티",
        "phone": "010-0000-0002",
        "color": "#fd7e14",
        "favorite": false
    }),
    Map({
        "id": "BJUcqqk0l",
        "name": "찰리",
        "phone": "010-0000-0003",
        "color": "#15aabf",
        "favorite": false
    }),
    Map({
        "id": "rJHoq91Cl",
        "name": "데이비드",
        "phone": "010-0000-0004",
        "color": "#e64980",
        "favorite": false
    })
]);

export default handleActions({
    [CREATE]: (state, action) => {
        return state.push(Map(action.payload));
    },
    [MODIFY]: (state, action) => {
        const index = state.findIndex(contact => contact.get('id') === action.payload.id);
        
        return state.mergeIn([index], action.payload.contact);
    },
    [REMOVE]: (state, action) => {
        const index = state.findIndex(contact => contact.get('id') === action.payload);

        return state.delete(index);
    },
    [TOGGLE_FAVORITE]: (state, action) => {
        const index = state.findIndex(contact => contact.get('id') === action.payload);
        return state.update(index, contact => contact.set('favorite', !contact.get('favorite')));
    },
    [LOAD_CONTACTS]: (state, action) => {
        return fromJS(action.payload);
    }
}, initialState)