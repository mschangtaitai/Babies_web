import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import EventBox from '../EventBox';
import CreateEvent from '../CreateEvent';

const Dashboard = () => (
    <Fragment>
        <div className="dashboard">
            <div>
                <EventBox/>
            </div>
            <div>
                <CreateEvent/>
            </div>
        </div>
    </Fragment>
);

export default Dashboard;