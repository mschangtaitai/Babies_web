import React, { useState, Fragment } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import * as selectors from '../../reducers/index'

const BabySelector = ({ onSubmit, babies }) => {
    const [value1, changeValue1]=useState('')

    return (
        <Fragment>
            <label>Select baby: </label> 
            <input list="babies"/> 
            <datalist id="babies"> 
                {
                    babies.length === 0 ? (
                    <option value="none"/>
                    ) : (
                    babies.map((baby,index) => (<option key={index} value={baby.name} />))
                    )
                }
                onChange={e => changeValue1(e.target.value)}
            </datalist> 
            <button type="submit" onClick={() => onSubmit(value1)}>
            {'Select'}
            </button>
        </Fragment>
    )
}

export default withRouter(
  connect(
    (state, {id}) => ({
      babies: selectors.getBabies(state),
    }),
    dispatch => ({
      onSubmit( value1 ) {
      }
    })
)(BabySelector));