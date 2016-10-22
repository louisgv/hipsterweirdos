import React, { Component, PropTypes } from 'react';
 
export default class BasicInfo extends Component {
  render() {
    return (
        <div>
            <h2>Basic Info</h2>
            <div className="name-field">
                <label>First Name <small>required</small>
                <input name="firstName2" type="text" required pattern="[a-zA-Z]+" />
                </label>
                <small className="error">Name is required and must be a string.</small>
            </div>
            <div className="name-field">
                <label>Last Name <small>required</small>
                <input name="lastName2" type="text" required pattern="[a-zA-Z]+" />
                </label>
                <small className="error">Name is required and must be a string.</small>
            </div>
        </div>
    );
  }
}