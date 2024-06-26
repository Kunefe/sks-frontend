import styled from 'styled-components';

export const Blog = styled.div`
  .blogs {
    display: flex;
    gap: 20px;
    margin-top: 20px;
    flex-direction: row;
  }

  .blog {
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
    background-color: #f0f4f9;
    border-radius: 25px;
    width: 373px;
    height: 300px;
    padding-top: 10px;
    button {
      border: none;
      background: none;
      color: blue;
    }
    p {
      padding: 5px;
    }
    img {
      overflow: hidden;
      border-radius: 0 0 25px 25px;
    }
  }

  a {
    color: blue;
  }
`;
