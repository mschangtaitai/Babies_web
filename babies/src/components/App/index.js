import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from '../../store';
import AddBaby from '../AddBaby';
import Dashboard from '../Dashboard';
import Event from '../Event';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <AddBaby onSubmit={() => alert('Bebé creado!')}/>
        {/* <Dashboard onSubmit={() => alert('Evento creado!')}/> */}
        <Event/>
    </Provider>
);

export default App;