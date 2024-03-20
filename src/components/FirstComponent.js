import React from 'react'

export const FirstComponent = ({myName, myAge}) => {
    //console.log(props);
  return (
    <>
    <div>FirstComponent</div>
    <div>{myName}</div>
    <div>{myAge}</div>
    </>
  )
}