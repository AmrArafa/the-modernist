import React from 'react';
import styled from 'styled-components';
import StyledLink from '../styled_link';
import FooterTitle from './footer_title';

const QuickLinksWrapper = styled.div`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 13px;
  }

  li {
    ::before {
      content: '»';
      color: #979797;
      margin-right: 5px;
    }

    border-bottom: 1px solid #404040;
    line-height: 1;
    padding-bottom: 8px;

    :not(:last-child) {
      margin-bottom: 12px;
    }
  }
`;

const QuickLinks = () => {
  return (
    <QuickLinksWrapper>
      <FooterTitle>Quick Links</FooterTitle>
      <ul>
        <li>
          <StyledLink href="#!">Lorem ipsum dolor sit</StyledLink>
        </li>
        <li>
          <StyledLink href="#!">Amet consectetur</StyledLink>
        </li>
        <li>
          <StyledLink href="#!">Praesent vel sem id</StyledLink>
        </li>
        <li>
          <StyledLink href="#!">Curabitur hendrerit est</StyledLink>
        </li>
        <li>
          <StyledLink href="#!">Aliquam eget erat nec sapien</StyledLink>
        </li>
        <li>
          <StyledLink href="#!">Cras id augue nunc</StyledLink>
        </li>
        <li>
          <StyledLink href="#!">Sed a nulla urna</StyledLink>
        </li>
      </ul>
    </QuickLinksWrapper>
  );
}

export default QuickLinks;