import React from 'react';
import { Spinner as Loader } from 'react-bootstrap';

const spinnerStyle = {
  // all CSS names must be in camelCase like marginTop
  position: 'absolute',
  top: 'calc(50% - 1rem)',
  left: 'calc(50% - 1rem)',
};

const Spinner = () => (
  <Loader style={spinnerStyle} animation="border" variant="primary" />
);

export default Spinner;
