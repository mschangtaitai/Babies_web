import React, { useState, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/events';

const EventForm = ({ onSubmit }) => {
    const [value1, changeValue1] = useState('');
    const [value2, changeValue2] = useState('');
    return (
        <Fragment>
            <div className="event_form">
                <div className="title">
                    <t>Agregar Evento</t>
                </div>
                <div className="input">
                    <input 
                        type="text"
                        placeholder="Tipo"
                        value={value1}
                        onChange={e => changeValue1(e.target.value)}
                    />
                </div>
                <div className="input">
                    <input 
                        type="text"
                        placeholder="Notas"
                        value={value2}
                        onChange={e => changeValue2(e.target.value)}
                    />
                </div>
                <button className="button" type="submit" onClick={
                    () => onSubmit(value1, value2)
                }>
                    {'Agregar evento'}
                </button>
            </div>
        </Fragment>
    );
};

export default withRouter (
    connect(
        undefined,
        dispatch => ({
            onSubmit( value1, value2 ) {
                dispatch(actions.addEvent(value1, value2))
            }
        }),
    )(EventForm)
);