import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.scss";
export const VsItem = (props) => {
  const { r_logo, d_logo } = props;
  return (
    <div className="vs">
      <img src={r_logo} alt="r_logo" />
      <p>vs</p>
      <img src={d_logo} alt="d_logo" />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(VsItem);
