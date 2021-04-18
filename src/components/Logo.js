import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ text }) => <h1>{text}</h1>;

Logo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Logo;
