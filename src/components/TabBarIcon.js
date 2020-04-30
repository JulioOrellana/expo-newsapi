import { FontAwesome, Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import Colors from '../constants/Colors';

export default TabBarIcon = ({ name, focused }) =>
  <Ionicons
    name={name}
    size={30}
    style={{ marginBottom: -3 }}
    color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  />

export const CustomIcon = ({ name, style, size, color = Colors.tabIconDefault }) =>
  <FontAwesome
    name={name}
    size={size}
    style={style}
    color={color}
  />
