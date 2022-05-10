import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

function Card(props) {
  const { strThumb, name, cardType, id } = props;
  return (
    <Link
      className="card"
      to={ `/${cardType}/${id}` }
    >
      <img
        style={ { width: '150px' } }
        src={ strThumb }
        alt={ name }
      />
      <p style={ { maxWidth: '150px' } }>{ name }</p>
    </Link>
  );
}

Card.propTypes = {
  strThumb: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cardType: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;