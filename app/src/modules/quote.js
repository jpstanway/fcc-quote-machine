import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// QUOTE TEXT COMPONENT
const Quote = (props) => {
    return(
      <TransitionGroup id="quote-div">
        <CSSTransition
          key={props.id}
          timeout={300}
          classNames="animate"
        >
          <p id="text"><i className="fas fa-quote-left"></i> {props.text}</p>
        </CSSTransition>
      </TransitionGroup>
    );
  };

  export default Quote;