import React from "react";

class Weather extends React.Component {
  state = {
    weather: []
  };

  async componentDidMount() {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=886705b4c1182eb1c69f28eb8c520e20";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ weather: data.weather });
  }

  render() {
    {
      return (
        <div>
          {this.state.weather.map(weather => (
            <div>{weather.name}</div>
          ))}
        </div>
      );
    }
  }
}

export default Weather;
