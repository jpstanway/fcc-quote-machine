import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// QUOTE TEXT COMPONENT
const Quote = (props) => {
  return(
    <TransitionGroup id="quote-div">
      <CSSTransition
        key={props.id}
        timeout={2000}
        classNames="animate-right"
      >
        <p id="text"><i className="fas fa-quote-left"></i> {props.text}</p>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Quote;