import React from 'react'

import "./Checkbox.css"

const Checkbox = (props) => (
  <div className="checkbox-container">
    <input className="checkbox"
      type="checkbox"
      checked={props.isChecked}
      readOnly={true}
    />
    <span className="checkmark" />
  </div>
)

export default Checkbox