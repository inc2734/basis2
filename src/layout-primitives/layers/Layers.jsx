import React from 'react';

export const Layers = ({ cover, fill, portrait, style, ...props }) => {
  style = {
    ...style,
  };

  return (
    <div
      data-unitone-layout={[
        'layers',
        true === cover ? `-cover` : undefined,
        true === fill ? `-fill` : undefined,
        true === portrait ? `-portrait` : undefined,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      {props.children}
    </div>
  );
};
