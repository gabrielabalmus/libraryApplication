import React from 'react';
import styled from 'styled-components';
import {
  space,
  color,
  layout,
  flexbox,
  position,
  SpaceProps,
  FlexboxProps,
  LayoutProps,
  ColorProps,
  PositionProps,
  BorderRadiusProps,
} from 'styled-system';

export interface ContainerProps
  extends SpaceProps,
    FlexboxProps,
    LayoutProps,
    ColorProps,
    BorderRadiusProps,
    PositionProps {
  children: React.ReactNode;
}

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  min-width: 0;
  ${space}
  ${flexbox}
  ${layout}
  ${color}
  ${position}
`;

export default Container;
