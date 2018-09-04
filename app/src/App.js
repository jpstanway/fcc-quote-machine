import React, { Component } from 'react';
import QUOTES from './modules/quotes';


const Quote = (props) => {
  return(
    <div id="quote-div">
      <p id="text">{props.text}</p>
    </div>
  );
};

const Author = (props) => {
  return(
    <div id="author-div">
      <p id="author">{props.name}</p>
    </div>
  );
};

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: QUOTES,
      text: '',
      author: ''
    }
    this.getQuote = this.getQuote.bind(this);
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote() {
    let len = this.state.quotes.length;
    let index = Math.floor(Math.random() * (len - 0 + 1)) + 0;
    let obj = this.state.quotes[index];
    this.setState({
      text: obj.quote,
      author: obj.author
    });
  }

  render() {
    return(
      <div id="quote-box">
        <Quote text={this.state.text}/>
        <Author name={this.state.author}/>
        <div id="button-div">
          <button id="new-quote" onClick={this.getQuote}>New Quote</button>
          <a href="twitter.com/intent/tweet" target="_blank">
            <button id="tweet-quote">Tweet Quote</button>
          </a>
        </div>
      </div>
    );
  }
}

export default QuoteMachine;
