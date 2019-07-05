import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import Input from './components/Input'
import Weather from './components/Weather'

class App extends Component {

  state = {
    meteo: [],
    cityName: ''
  }

  getWeather = (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;
    const apiKey = 'a7a5b513df534c6480881914190606'
    console.log('Ville = ', city)
    const urlApi = `https://api.apixu.com/v1/forecast.json?key=a7a5b513df534c6480881914190606&q=${city}&days=5&APPID=${apiKey}` 
    axios.get(urlApi)
    .then((response) => {
      console.log('Response = ', response.data.forecast.forecastday)
      this.setState({ meteo: response.data.forecast.forecastday})
      this.setState({ cityName: city})
      console.log(this.state)
    })
    .catch((error) => {
      console.log('Error = ', error)
    })
  }

  render() {

    return (
      <div>
        <p className="title text-uppercase">Meteo</p>
        <Input loadWeather={this.getWeather}></Input>
        <Weather datas={this.state.meteo} cityName={this.state.cityName}></Weather>  
      </div>
    )
  }
}

export default App