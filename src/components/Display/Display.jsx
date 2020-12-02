import React from "react";
import styled, { css } from "styled-components";
import "./Display.css";

const Display = ({changeInput}) => {
  return (
    <div className="Display">
      <input className="DisplayInput" readOnly="readonly" value = {changeInput}/>
    </div>
  );
};
export default Display;
