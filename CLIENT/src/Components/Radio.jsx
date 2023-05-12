import React from 'react'

function Radio(props) {
    const {label,value,onChange}=props
  return (
    <>
<div className='flex justify-center items-center'>
  <label >
    {label}
  </label>
  <div className="flex items-center m-1">
    <input
      type="radio"
      name={label}
      id={label}
      value={label}
      checked={value === label}
      onChange={(e) => onChange(e.target.value)}
    />
    </div>
    </div>



          </>
  )
}

export default Radio