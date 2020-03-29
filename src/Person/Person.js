import React from 'react'
const person = (props) => {
	return (
		<div onClick={props.click}>
		      <p > I'm {props.name} and i am {props.age} years old!!</p>
		      <p>{props.children} </p>
		      <input type='text' onChange={props.changed} value= {props.name} />
		</div>
		)

}

export default person;