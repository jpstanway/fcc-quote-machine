import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// AUTHOR NAME COMPONENT
const Author = (props) => {
    return(
      <TransitionGroup id="author-div">
        <CSSTransition
          key={props.id}
          timeout={300}
          classNames="animate"
        >
          <p id="author">-- {props.name}</p>
        </CSSTransition>
      </TransitionGroup>
    );
  };

  export default Author;