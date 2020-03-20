import { combineReducers } from 'redux';

import * as types from '../types/events';
import omit from 'lodash/omit';

const order = (state = [], action) => {
    switch (action.type) {
        case types.EVENT_ADDED: {
            return [...state, action.payload.id]
        }
        case types.EVENT_DELETED: {
            return omit (state, action.payload.id)
        }
        default: {
            return state
        }
    }
}


const byId = (state = {}, action) => {
    switch (action.type) {
        case types.EVENT_ADDED: {
            return {
                ...state,
                [action.payload.id]: {
                    type: action.payload.type,
                    note: action.payload.note,
                    dateTime: action.payload.dateTime,
                    babyId: action.payload.babyId,
                }
            }
        }
        case types,types.EVENT_DELETED: {
            return omit (state, action.payload.id)
        }
        default:
            return state;
    }
};

const events = combineReducers ({
    byId,
    order,
});

export default events;

export const getEvent = (state,id) => state[id];
// export const getEvent = (state, id) => id < state.lenght ? state[id] : undefined;


export const getBabyEvents = (state, babyId) => (
    state.order.map(id => getEvent(state,id).filter(events.babyId === babyId))
);