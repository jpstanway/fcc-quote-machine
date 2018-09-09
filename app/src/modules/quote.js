import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// QUOTE TEXT COMPONENT
const Quote = (props) => {
  return(
    <TransitionGroup id="quote-div">
      <CSSTransition
        key={props.id}
        timeout={1000}
        classNames="animate-right"
      >
        <p id="text"><i className="fas fa-quote-left"></i> {props.text}</p>
      </CSSTransition>
    </TransitionGroup>
  );
};

Quote.propTypes = { text:
  PropTypes.string.isRequired
}

Quote.defaultProps = {
  text: 'Loading...'
};

export default Quote;