import { combineReducers } from 'redux';

import * as types from '../types/babies';

const order = (state = [], action) => {
    switch (action.type) {
        case types.BABY_ADDED: {
            return [...state, action.payload.id];
        }
        default: {
            return state;
        }
    }
};
  
const byId = (state = {}, action) => {
    switch (action.type) {
        case types.BABY_ADDED: {
            return {
                ...state,
                [action.payload.id]: {
                    name: action.payload.name,
                    lastname: action.payload.lastname,
                },
            };
        }
        default: {
            return state;
        }
    }
};

const selectedBaby = (state = null, action) => {
    switch(action.type) {
        case types.BABY_SELECTED: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};

const babies = combineReducers({
    byId,
    order,
    selectedBaby,
});

export default babies;

export const getBaby = (state, id) => id < state.lenght ? state[id] : undefined;

export const getBabies = state => state;

export const getSelectedBaby = state => state.selectedBaby;