import React from 'react';
import styled from 'styled-components';

const Container=styled.div`
height: 10vh;
background-color: #7f7f7f;
font-style: italic;
font-size: 15px;
align-items: center;
justify-content: center;
display: flex;
`;

const Footer = () => {
    return (
      <Container>
       <p>Copyright &#xA9; 2020, Revoation. All Rights Reserved.</p>
      </Container>

    )
}

export default Footer
