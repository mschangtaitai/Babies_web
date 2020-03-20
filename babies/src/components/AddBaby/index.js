import React, { useState, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/babies';
import { createBrowserHistory } from 'history';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

export const history = createBrowserHistory()
const BabyForm = ({ onSubmit }) => {
    const [value1, changeValue1] = useState('');
    const [value2, changeValue2] = useState('');
    return (
        <Fragment>
            <div className="form">
                <div className="title">
                    <t>Agregar Bebé</t>
                </div>
                <div className="input">
                    <input 
                        type="text"
                        placeholder="Nombre"
                        value={value1}
                        onChange={e => changeValue1(e.target.value)}
                    />
                </div>
                <div className="input">
                    <input 
                        type="text"
                        placeholder="Apellido"
                        value={value2}
                        onChange={e => changeValue2(e.target.value)}
                    />
                </div>
                <Link to={{pathname: '/baby'}}>
                <button className="button" type="submit" onClick={
                    () => onSubmit(value1, value2)
                }>
                    {'Crear Bebé'}
                </button></Link>{' '}
            </div>
        </Fragment>
    );
};

export default withRouter(
    connect(
        undefined,
        dispatch => ({
            onSubmit( value1, value2 ) {
                history.push('/baby')
                dispatch(actions.addBaby( value1, value2 ))
            }
        }),
    )(BabyForm)
);