import React from 'react';

export const Frame = ({ ratio, style, ...props }) => {
  style = {
    ...style,
    '--ratio': !!ratio ? ratio : undefined,
  };

  return (
    <div data-layout="frame" style={style}>
      {props.children}
    </div>
  );
};
