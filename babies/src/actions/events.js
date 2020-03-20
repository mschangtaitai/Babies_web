import * as types from '../types/events';

export const addEvent  = (id, type, note, dateTime, babyId) => ({
    type: types.EVENT_ADDED,
    payload: { id, type, note, dateTime, babyId }
});

export const deleteEvent  = (id, babyId) => ({
    type: types.EVENT_DELETED,
    payload: { id, babyId }
});