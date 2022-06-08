import React from 'react';

const Card = (props) => {
  const classes = 'card ' + props.className; // don't forget to add space between props.className and 'card'

  return <div className={classes}>{props.children}</div>;
};

export default Card;
