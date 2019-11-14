import styled from 'styled-components';

/** The StyledLink component is used to style most links in the footer to avoid redundant styling */
const StyledLink = styled.a`
  text-decoration: none;
  color: #76c38f;

  :hover {
    text-decoration: underline;
  }
`;

export default StyledLink;