import React from "react";
import "./App.css";
import ReactDOM from "react-dom";

class NewsData extends React.Component {
  state = {
    articles: [],
    country: ""
  };

  async componentDidMount() {
    const url = `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=43a55dfa2cbc4cdb94268be90fab192e`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ articles: data.articles });
  }

  CountryHandle = event => {
    this.setState({ country: event.target.value });
    this.displayNews(this.state.country);
  };

  displayNews = async country => {
    {
      const url = `http://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=43a55dfa2cbc4cdb94268be90fab192e`;
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ articles: data.articles });
    }
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <select
              value={this.state.value}
              onChange={this.CountryHandle}
              className="dropdown"
            >
              <option value="select"> Select a Country</option>
              <option value="ca"> Canada</option>
              <option value="in"> India</option>
              <option value="us"> United States</option>
            </select>
          </div>
        </div>
        {this.state.articles.map(articles => (
          <div className="NewsBox">
            <img src={articles.urlToImage} className="NewsImage" />
            <a href={articles.url}>{articles.title}</a>
          </div>
        ))}
      </div>
    );
  }
}

export default NewsData;
