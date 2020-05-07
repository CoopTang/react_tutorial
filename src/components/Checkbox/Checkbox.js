import React from 'react'

import "./Checkbox.css"

const Checkbox = ({isChecked}) => (
  <div className="checkbox-container">
    <input className="checkbox"
      type="checkbox"
      defaultChecked={isChecked}
    />
    <span className="checkmark" />
  </div>
)

export default Checkbox