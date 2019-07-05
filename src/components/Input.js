import React from 'react';

const Input = (props) => {
    return(
        <form onSubmit = {props.loadWeather} className="input">
          <input type="text" name="city" placeholder="City..."/>
          <button>GO</button>
        </form>
       )
}

export default Input;