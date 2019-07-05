import React, { Fragment } from 'react'

const Input = (props) => {
    return(
    <Fragment>
      <div className="text-center cards"><p className="city">{props.cityName}</p></div>
      <div className="row">
          {props.datas.map((item, index) => {

            let day = new Date (item.date).toLocaleDateString('fr-FR', {weekday: 'short'})

            return (
              <Fragment  key={index}>
              <div className="jumbotron card">
                <p className="day">{day}</p>
                <p className="items">Morning: <span className="temp">{item.day.mintemp_c}</span></p>
                <p className="items">Afternoon: <span className="temp">{item.day.maxtemp_c}</span></p>
                <img src={item.day.condition.icon} alt={item.day.condition.text}/>
              </div>
              </Fragment>
            )
          })}
        </div>
    </Fragment>
    )
}

export default Input;