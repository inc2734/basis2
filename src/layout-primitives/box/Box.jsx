import React from 'react';

export const Box = ({
  backgroundColor,
  borderColor,
  borderRadius,
  borderWidth,
  color,
  padding,
  shadow,
  style,
  ...props
}) => {
  style = {
    ...style,
    '--background-color': backgroundColor,
    '--border-color': borderColor,
    '--border-radius': borderRadius,
    '--border-width': borderWidth,
    '--color': color,
  };

  return (
    <div
      data-layout={[
        'box',
        'undefined' !== typeof padding ? `-padding:${padding}` : undefined,
        !!shadow ? '-shadow' : undefined,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      {props.children}
    </div>
  );
};
