import { combineReducers } from 'redux';

import babies, * as babiesSelectors from './babies';
import events, * as eventsSelectors from './events';

const reducer = combineReducers({
    babies,
    events,
});

export default reducer;

export const getBaby = (state,id) => babiesSelectors.getBaby(state.baby, id);

export const getBabies = state => babiesSelectors.getBabies(state.babies);

export const getEvent = (state, id) => eventsSelectors.getEvent(state.events, id);

export const getBabyEvents = (state, babyId) => eventsSelectors.getBabyEvents(state.events, babyId);