import React from 'react'
import styled from 'styled-components';

const Row =styled.div`
text-align: center;
width: 90px;
height: 80px;
margin:20px auto;
background-color: #FEDE17;
white-space    : nowrap;
outline        : none;
border         : none;
cursor         : pointer;
text-decoration: none;
transition     : 0.3s;
justify-content: center;
align-items    : center;
&:hover{
    transform: translateY(2px);
}
`;
const Sd1=styled.div`
width: 100%;
height: 35px;
position: relative;
background-color: #FEDE17;

&::before , ::after{
    position: absolute;
    content: '';
    width: 100%;
    height: 90%;
    top: 50px;
    left: 0;
    background-color: #FEDE17;
    transform: skewY(20deg);
    z-index: -1;
}
&::after{
    transform: skewY(-20deg);
}
`;
const D=styled.p`
font-size: 18px;
padding-top: 40px;
font-style: italic;
`;
const HighLigtedButton = (Link) => {
    return (
        <Row>
            <Sd1>
                <D >
                    Deals
                </D>
            </Sd1>
        </Row>
    )
}

export default HighLigtedButton
