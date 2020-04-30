import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import React from 'react';
import Colors from '../constants/Colors';

export const CustomIcon = ({ name, style, size, color = Colors.tabIconDefault }) =>
  <MaterialCommunityIcons
    name={name}
    size={size}
    style={style}
    color={color}
  />

CustomIcon.propTypes = {
  name: PropTypes.string,
  style: PropTypes.shape(),
  size: PropTypes.number,
  color: PropTypes.string,
}

CustomIcon.defaultProps = {
  name: '',
  style: {},
  size: 10,
  color: Colors.tabIconDefault,
}