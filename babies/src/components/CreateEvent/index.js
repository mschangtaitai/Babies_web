import React, { useState, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { Field,reduxForm } from 'redux-form';
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
                <div className="flex items-center justify-start">
                    <Field component="select" name="eventType">
                        <option value="Nap">Nap</option>
                        <option value="Feeding Bottle">Feeding bottle</option>
                        <option value="Diaper Change(1)">Diaper Change(1)</option>
                        <option value="Diaper Change(2)">Diaper Change(2)</option>
                        <option value="Breast">Breast</option>
                    </Field>            
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

export default EventForm;