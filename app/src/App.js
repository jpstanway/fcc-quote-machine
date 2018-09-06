import React, { Component } from 'react';
import QUOTES from './modules/quotes';


const Quote = (props) => {
  return(
    <div id="quote-div">
      <p id="text"><i className="fas fa-quote-left"></i> {props.text}</p>
    </div>
  );
};

const Author = (props) => {
  return(
    <div id="author-div">
      <p id="author">-- {props.name}</p>
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
    this.getIndex = this.getIndex.bind(this);
    this.getQuote = this.getQuote.bind(this);
  }

  componentDidMount() {
    this.getQuote();
  }

  getIndex() {
    let len = this.state.quotes.length;
    let index = Math.floor(Math.random() * (len - 0)) + 0;
    console.log(index);
    return index;
  }

  getQuote() {
    let obj = this.state.quotes[this.getIndex()];
    if (this.state.text === obj.quote) {
      console.log('identical quote found');
      return this.getQuote();
    } else {
      this.setState({
        text: obj.quote,
        author: obj.author
      });
    }
  }

  render() {
    return(
      <div id="quote-box">
        <Quote text={this.state.text}/>
        <Author name={this.state.author}/>
        <div id="button-div">
          <button id="new-quote" className="btn-style" onClick={this.getQuote}>New Quote</button>
          <a href="twitter.com/intent/tweet" target="_blank">
            <button id="tweet-quote" className="btn-style">
              <i id="twitter-icon" className="fab fa-twitter"></i> Tweet Quote
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default QuoteMachine;
