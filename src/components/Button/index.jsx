import React, { useState, useEffect } from "react";

import { Wrapper } from "./Button.style";
import PropTypes from "prop-types";

const Button = ({ text, callback }) => (
  <Wrapper type="button" onClick={callback}>
    {text}
  </Wrapper>
);

Button.protoTypes = {
  text: PropTypes.string,
  callback: PropTypes.func,
};
export default Button;
