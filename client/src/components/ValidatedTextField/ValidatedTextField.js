import React from "react";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";

import { blueGrey900 } from "material-ui/styles/colors";

const styles = {
  fieldStyle: {
    width: "100%"
  },
  errorStyle: {
    color: blueGrey900,
    position: "absolute",
    bottom: "-0.42rem"
  },
  underlineStyle: {
    borderColor: blueGrey900
  }
};

export const ValidatedEmailField = (field) => (
  <TextField
    style={styles.fieldStyle}
    id="username"
    // hintText={label}
    // floatingLabelText={label}
    errorStyle={styles.errorStyle}
    underlineFocusStyle={styles.underlineStyle}
    hintText="Please enter your email"
    {...field.input}
  />
);

export const ValidatedPassField = (field) => (
  <TextField
    style={styles.fieldStyle}
    id="password"
    // hintText={label}
    // floatingLabelText={label}
    errorStyle={styles.errorStyle}
    underlineFocusStyle={styles.underlineStyle}
    hintText="Please enter your password"
    type="password"
    {...field.input}
  />
);

ValidatedEmailField.propTypes = {
  label: PropTypes.string.isRequired
};

ValidatedPassField.propTypes = {
  label: PropTypes.string.isRequired
};
