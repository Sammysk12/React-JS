import React from 'react'

const Usercard = (props) => {
  
  console.log(props.data);
    return (
    <div className='user-card'>

        <img src={props.data.picture.large}/>
        <p>Name - {props.data.name.first} {props.data.name.last}</p>
        <p>Address - {props.data.location.street.name}- {props.data.location.street.number},{props.data.location.city}, {props.data.location.state},{props.data.location.country} </p>
        <p>Phone no. - {props.data.phone}</p>
    </div>
  )
}

export default Usercard