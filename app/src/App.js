import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import QUOTES from './modules/quotes';
import Quote from './modules/quote';
import Author from './modules/author';

// MAIN COMPONENT INCLUDING CONTROLS
class QuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: QUOTES,
      text: '',
      author: '',
      id: '',
      appear: true
    }
    this.getIndex = this.getIndex.bind(this);
    this.getQuote = this.getQuote.bind(this);
  }

  // renders random quote on initial load
  componentDidMount() {
    this.getQuote();
  }

  // generates random index
  getIndex() {
    let len = this.state.quotes.length;
    let index = Math.floor(Math.random() * (len - 0)) + 0;
    return index;
  }

  // retrieves random index from quotes array
  getQuote() {
    let obj = this.state.quotes[this.getIndex()];

    // if same quote is returned then recall method
    if (this.state.text === obj.quote) {
      return this.getQuote();
    } else {
      this.setState({
        text: obj.quote,
        author: obj.author,
        id: obj.id
      });
    }
  }

  render() {
    const { appear } = this.state;

    return(
      <div id="quote-box">
        <CSSTransition
          in={appear}
          appear={true}
          timeout={600}
          classNames="animate-right"
        >
          <Quote text={this.state.text} id={this.state.id} />
        </CSSTransition>
        <CSSTransition
          in={appear}
          appear={true}
          timeout={800}
          classNames="animate-left"
        >
          <Author name={this.state.author} id={this.state.id}/>
        </CSSTransition>
        
        {/* app controls */}
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
