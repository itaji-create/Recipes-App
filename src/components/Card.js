import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

function Card(props) {
  const { strThumb, name, cardType, id } = props;
  return (
    <Link
      className="card"
      style={ { maxWidth: '150px' } }
      to={ `/${cardType}/${id}` }
    >
      <img
        src={ strThumb }
        alt={ name }
      />
      <p>{ name }</p>
    </Link>
  );
}

Card.propTypes = {
  strThumb: PropTypes.string,
  name: PropTypes.string,
  cardType: PropTypes.string,
  id: PropTypes.string,
};

export default Card;