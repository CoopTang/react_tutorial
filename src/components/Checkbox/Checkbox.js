import React from 'react'

import "./Checkbox.css"

const Checkbox = ({isChecked, onCheckboxChange}) => (
  <label className="container">
    <input className="checkbox"
      type="checkbox"
      checked={isChecked}
      onChange={onCheckboxChange}
    />
    <span className="checkmark" />
  </label>
)

export default Checkbox