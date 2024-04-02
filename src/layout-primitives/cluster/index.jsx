import React from 'react';

export const Cluster = ({
  alignItems,
  divider,
  gap,
  columnGap,
  rowGap,
  justifyContent,
  tagName = 'div',
  style,
  ...props
}) => {
  const Tag = tagName;

  return (
    <Tag
      data-unitone-layout={[
        'cluster',
        !!divider ? `-divider:${divider}` : undefined,
        'undefined' !== typeof gap ? `-gap:${gap}` : undefined,
        'undefined' !== typeof columnGap ? `-column-gap:${columnGap}` : undefined,
        'undefined' !== typeof rowGap ? `-row-gap:${rowGap}` : undefined,
        'undefined' !== typeof alignItems ? `-align-items:${alignItems}` : undefined,
        'undefined' !== typeof justifyContent ? `-justify-content:${justifyContent}` : undefined,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
      {...props}
    >
      {props.children}
    </Tag>
  );
};
