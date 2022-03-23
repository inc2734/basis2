import React from 'react';

export const Cluster = ({ alignItems, gap, justifyContent, tagName = 'div', style, ...props }) => {
  const Tag = tagName;

  style = {
    ...style,
  };

  return (
    <Tag
      data-layout={[
        'cluster',
        'undefined' !== typeof gap ? `-gap:${gap}` : undefined,
        'undefined' !== typeof alignItems ? `-align-items:${alignItems}` : undefined,
        'undefined' !== typeof justifyContent ? `-justify-content:${justifyContent}` : undefined,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      {props.children}
    </Tag>
  );
};
