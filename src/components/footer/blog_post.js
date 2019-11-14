import React from 'react';
import styled from 'styled-components';
import StyledLink from '../styled_link';

const BlogPostWrapper = styled.div`
  line-height: 1;

  h2 {
    font-size: 13px;
    margin: 0 0 17px 0;
  }

  .admin {
    color: #666666;
    font-size: 10px;
    margin: 0 0 12px 0;

    a:last-child {
      color: inherit;
      text-decoration: none;

      :hover {
        text-decoration: underline;
      }
    }
  }

  .date {
    color: #979797;
    font-size: 10px;
    margin: 0 0 14px 0;
  }

  .post-content {
    font-size: 13px;
    color: #979797;
    line-height: 1.6;
    margin: 0 0 15px 0;
  }

  .read-more {
    font-size: 13px;
  }
`;

const BlogPost = () => {
  return (
    <BlogPostWrapper>
      <h2>
        <StyledLink href="#!">Post Title</StyledLink>
      </h2>
      <p className="admin">
        <StyledLink href="#!">Admin</StyledLink>, <a href="#!">domainname.com</a>
      </p>
      <p className="date">Friday, 6th April 2000</p>
      <p className="post-content">Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt. Namjusto cras urna urnaretra lor urna neque sed quis orci nulla.</p>
      <StyledLink className="read-more" href="#!">Read More &raquo;</StyledLink>
    </BlogPostWrapper>
  );
}

export default BlogPost;