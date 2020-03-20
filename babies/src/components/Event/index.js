import React, { useState, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/events';
import moment from 'moment';

const Event = ({event, onClick}) => {
	return (	
        <div> 
            <article>
                <h1 >{moment(event.dateTime).format("ddd, h:mmA")}</h1>
                <span>{event.type}</span>
                <span>{event.note}</span>
            </article>
            <button onClick={onClick}>{'Eliminar'}</button>
        </div>

  );
};

export default connect(
    (state, id) => ({
        event: selectors.getEvent(state, id),
    }),
    (dispatch) => ({
        onClick() {
            dispatch(actions.deleteEvent);
        },
   }),
)(Event);