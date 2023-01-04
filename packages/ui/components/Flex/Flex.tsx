import styled from 'styled-components';
import {
  flexbox,
  space,
  layout,
  FlexboxProps,
  SpaceProps,
  LayoutProps,
} from 'styled-system';

export interface FlexProps extends FlexboxProps, SpaceProps, LayoutProps {
  gap?: string;
  position?: string;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  ${flexbox}
  ${space}
  ${layout}
  gap: ${(props) => props.gap || '0px'};
  position: ${(props) => props.position || 'static'};
`;

const ColumnFlex = styled(Flex)`
  flex-direction: column;
`;

const CenteredFlex = styled(Flex)`
  justify-content: center;
`;

const SpaceBetweenFlex = styled(Flex)`
  justify-content: space-between;
`;

const CenteredALignedFlex = styled(CenteredFlex)`
  align-items: center;
`;

const RelativeCenteredFlex = styled(CenteredFlex)`
  position: relative;
`;

const StretchRelativeCenteredFlex = styled(RelativeCenteredFlex)`
  align-items: stretch;
`;

const RelativeCenteredALignedFlex = styled(CenteredALignedFlex)`
  position: relative;
`;

const SpaceBetweenCenterFlex = styled(SpaceBetweenFlex)`
  align-items: center;
`;

const SpaceBetweenStretchlex = styled(SpaceBetweenFlex)`
  align-items: stretch;
`;

const FlexStartSpaceBetweenFlex = styled(SpaceBetweenFlex)`
  align-items: flex-start;
`;

const FlexEndSpaceBetweenFlex = styled(SpaceBetweenFlex)`
  align-items: flex-end;
`;

const CenteredColumnFlex = styled(ColumnFlex)`
  align-items: center;
`;

const StretchColumnFlex = styled(ColumnFlex)`
  align-items: stretch;
`;

const SpaceBetweenColumnFlex = styled(ColumnFlex)`
  justify-content: space-between;
`;

const FlexStartSpaceBetweenColumnFlex = styled(SpaceBetweenCenterFlex)`
  align-items: flex-start;
`;

const FlexEndSpaceBetweenColumnFlex = styled(SpaceBetweenCenterFlex)`
  align-items: flex-end;
`;

export default Flex;

export {
  ColumnFlex,
  CenteredFlex,
  SpaceBetweenFlex,
  CenteredALignedFlex,
  SpaceBetweenCenterFlex,
  RelativeCenteredFlex,
  StretchRelativeCenteredFlex,
  RelativeCenteredALignedFlex,
  SpaceBetweenStretchlex,
  FlexStartSpaceBetweenFlex,
  FlexEndSpaceBetweenFlex,
  CenteredColumnFlex,
  StretchColumnFlex,
  SpaceBetweenColumnFlex,
  FlexStartSpaceBetweenColumnFlex,
  FlexEndSpaceBetweenColumnFlex,
};
