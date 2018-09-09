import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// AUTHOR NAME COMPONENT
const Author = (props) => {
    return(
      <TransitionGroup id="author-div">
        <CSSTransition
          key={props.id}
          timeout={1000}
          classNames="animate-left"
        >
          <p id="author">-- {props.name}</p>
        </CSSTransition>
      </TransitionGroup>
    );
  };

  Author.propTypes = { text:
    PropTypes.string.isRequired
  }
  
  Author.defaultProps = {
    text: 'Loading...'
  };

  export default Author;