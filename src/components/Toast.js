import PropTypes from 'prop-types';
import React from "react";
import Toast from 'react-native-easy-toast';
import Colors from "../constants/Colors";

export default ToastComponent = ({ toastRef }) => (
  <Toast
    ref={toastRef}
    position="center"
    style={{ backgroundColor: Colors.tintColor }}
  />
)

ToastComponent.propTypes = {
  toastRef: PropTypes.any.isRequired
}