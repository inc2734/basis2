import React from 'react';

import {
  Decorator,
  Container,
  Cover,
  CoverContent,
  Stack,
  WithSidebar,
} from '@inc2734/unitone-css';

export const MediaText2 = (props) => (
  <Decorator color={props.color}>
    <WithSidebar
      gap={2}
      contentMinWidth="min(100%, var(--unitone--measure) / 2)"
      sidebar="right"
      sidebarWidth="50%"
      alignItems="center"
    >
      <Cover noPadding minHeight="0">
        <CoverContent>
          <Container gutters={0} maxWidth="var(--unitone--measure)">
            <Stack gap={2}>
              {!!props.title && (
                <Stack style={{ '--unitone--font-size': 4 }}>
                  <h2>{props.title}</h2>
                </Stack>
              )}
              <Stack>{props.children}</Stack>
            </Stack>
          </Container>
        </CoverContent>
      </Cover>
      {!!props.src && (
        <div>
          <img src={props.src} alt="" />
        </div>
      )}
    </WithSidebar>
  </Decorator>
);
