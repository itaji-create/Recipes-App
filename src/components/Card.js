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
  strThumb: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cardType: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;