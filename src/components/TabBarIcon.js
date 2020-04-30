import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import React from 'react';
import Colors from '../constants/Colors';

export default TabBarIcon = ({ name, focused }) =>
  <Ionicons
    name={name}
    size={30}
    style={{ marginBottom: -3 }}
    color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  />

TabBarIcon.propTypes = {
  name: PropTypes.string,
  focused: PropTypes.bool,
}

TabBarIcon.defaultProps = {
  name: '',
  focused: false,
}