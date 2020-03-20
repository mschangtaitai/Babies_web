import * as types from '../types/babies';

export const addBaby = (id, name, lastname) => ({
    type: types.BABY_ADDED,
    payload: { id, name, lastname },
});

export const selectBaby = index => ({
    type: types.BABY_SELECTED,
    payload: { index },
});