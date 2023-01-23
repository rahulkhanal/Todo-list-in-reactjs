import React, { useEffect } from 'react'

function Alert({show, msg, type, removeAlert}) {
  useEffect(()=>{
    var a = setTimeout(() => {
      removeAlert()
    }, 1700)
    return ()=>clearTimeout(a)
  })
  return (
    <>
    <br />
    <p className={`alert-${type}`}>{msg}</p>
    </>
  )
}

export default Alert

