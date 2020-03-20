import react from 'react';
import { Link } from 'react-router';

const Route = ({ filter, children }) => (
    <Link to={filter === 'baby' ? '' : filter}></Link>
);

//Realizado con la ayuda de Sebastian Gonzalez