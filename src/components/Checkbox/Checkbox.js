import React from 'react'

import "./Checkbox.css"

const Checkbox = ({isChecked, onCheckboxChange}) => (
  <div className="checkbox-container">
    <input className="checkbox"
      type="checkbox"
      checked={isChecked}
      onChange={onCheckboxChange}
    />
    <span className="checkmark" />
  </div>
)

export default Checkbox