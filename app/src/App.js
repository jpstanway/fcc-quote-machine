import React, { Component } from 'react';

const Quote = () => {
  return(
    <div id="quote-div">
      <p id="text">Quote text goes here...</p>
    </div>
  );
};

const Author = () => {
  return(
    <div id="author-div">
      <p id="author">Author name goes here ...</p>
    </div>
  );
};

const Controls = () => {
  return(
    <div id="button-div">
      <button id="new-quote">New Quote</button>
      <a href="twitter.com/intent/tweet"><button id="tweet-quote">Tweet Quote</button></a>
    </div>
  );
};

class QuoteMachine extends React.Component {

  render() {
    return(
      <div id="quote-box">
        <Quote />
        <Author />
        <Controls />
      </div>
    );
  }
}

export default QuoteMachine;
