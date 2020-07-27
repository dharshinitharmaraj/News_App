import React from "react";
import "./App.css";
import ReactDOM from "react-dom";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      country: "ca"
    };

    this.CountryHandle = this.CountryHandle.bind(this);
    this.displayNews = this.displayNews.bind(this);
  }

  async componentDidMount() {
    const url = `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=43a55dfa2cbc4cdb94268be90fab192e`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ articles: data.articles });
  }

  CountryHandle = e => {
    this.setState({ country: e.target.value }, () => {
      this.displayNews();
    });
  };

  displayNews = async () => {
    {
      console.log(this.state.country + " this is actuall caled");
      const url = `http://newsapi.org/v2/top-headlines?country=${this.state.country}&category=business&apiKey=43a55dfa2cbc4cdb94268be90fab192e`;
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

export default News;
