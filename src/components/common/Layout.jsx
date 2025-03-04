import styled from 'styled-components';
import FlexBox from '../../styles/common/FlexStyle';

const StyledLayout = styled(FlexBox)`
  width: 1920px;
  height: 1080px;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const Layout = ({ children, ...props }) => {
  return (
    <StyledLayout dir="col" row="center" col="center" {...props}>
      {children}
    </StyledLayout>
  );
};

export default Layout;
