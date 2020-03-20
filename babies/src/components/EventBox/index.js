import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import range from 'lodash/range';

import './styles.css';
import Event from '../Event';
import * as selectors from '../../reducers';
import * as actions from '../../actions/events';


const EventBox = ({ selectedBaby, babyEvents}) => (
    <Fragment className="events">
        <div className="eventBox">
            {babyEvents.length === 0 ? (
                <h1>{"No hay eventos!"}</h1>
            ) : ( babyEvents.map((event,i) => (
                <Event key={i} selectedBaby={selectedBaby} />
            )))}
        </div>
    </Fragment>
);

export default connect(
    (state, {id}) => ({
        babyEvents: selectors.getBabyEvents(state, id)
    })
)(EventBox);