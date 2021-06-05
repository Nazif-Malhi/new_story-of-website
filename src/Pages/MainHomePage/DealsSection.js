import React, { useState } from 'react';
import styled, { css } from 'styled-components/macro';
import {IoArrowForward, IoArrowBack} from 'react-icons/io5';
import { RoundButton } from '../../Components/RoundButton';
import CountdownTimer from '../../Components/CountdownTimer';




const TimerContainer=styled.div`

background-color: rgba(0,0,0,0.5);
background-position: center;
background-size: cover;
width: 100%;
height: 100vh;


`;
const Timer=styled.div`
position: relative;
height: 100vh;

`;


const ColorDivContent=styled.div`
background-color: #FEDE17;
width: 100%;
height: 100vh;
position: absolute;
left: 50%;
top: 0;
transform: skewX(25deg);
`;

const ContentDiv = styled.div`
position: absolute;
text-align: center;
background-position: center;
margin-top: 40vh;
margin-left: 70px;
font-size: 20px;
font-style: italic;
color: #FEDE17;

`;

const arrowButtons=css`
width        : 50px;
height       : 50px;
color        : #fff;
cursor       : pointer;
background   : #000d1a;
border-radius: 10px;
padding      : 10px;
margin-right : 5rem;
user-select  : none;
transition   : 0.3s;

&:hover{
  background: #FEDE17;
  transform : scale(1.05);
}
`;

const SliderButton=styled.div`
position: absolute;
bottom  : 21px;
left   : 17vw;
display : flex;
z-index : 10;
`;


const PrevArrow = styled(IoArrowBack)`
${arrowButtons}
`;
const NextArrow = styled(IoArrowForward)`
${arrowButtons}
`;

const PictureDiv=styled.div`
box-shadow: -22px 10px 25px 6px rgba(0,0,0,0.5);
-webkit-box-shadow: -22px 10px 25px 6px rgba(0,0,0,0.5);
-moz-box-shadow: -22px 10px 25px 6px rgba(0,0,0,0.5);
background-color : rgb(127 127 127);
position: absolute;
width: 250px;
height: 450px;
right:150px;
border-radius: 10px;

h1{
    font-style: italic;
    text-align: center;
    padding-top: 5%;
}
h2{
    text-align: center;
    color: white;
    margin-bottom: -6px;
    padding-top: 10%;
}
h3{
    text-align: center;
    font-style: italic;
    color: whitesmoke;

    //bottom: 12px;
   
}
p{
    padding-left: 12%;
    color: whitesmoke;
}
h4{
    padding-top: 10%;
}
`;

const PictureDivHeading=styled.div`
-webkit-border-radius: 10px 10px 0 0;
border-radius: 8px 8px 0 0;
background-color: #FEDE17;
width: 100%;
height: 13%;

`;





const Btnwrapper=styled.div`
position: absolute;
bottom: 10px;
left: auto;
width: 55%;
margin: 0 22%;
`;

const JSXElementWrapper=styled.div``;


const DealsSection = ({grab}) => {
    const [current,setCurrent]=useState(0);
    const length=grab.length;
    
    const nextSlide= ()=>{
        setCurrent(current === length - 1 ? 0 : current +1);
        //console.log(current);
    }
    const prevSlide=() => {

        setCurrent(current === 0 ? length - 1 : current -1);
        //console.log(current); 
      };
      if(!Array.isArray(grab) || grab.length <= 0){
        return null
      }
    return (
        <TimerContainer>
            <Timer>
                <ContentDiv>
                    Times to End Click The Button Below
                </ContentDiv>
                <CountdownTimer/>
            <ContentDiv style={{marginTop:'55vh'}}> Grab deals as many as you want !</ContentDiv>
            <SliderButton>
            <PrevArrow onClick ={prevSlide} />
            <NextArrow onClick={nextSlide}/>
          </SliderButton>
            <ColorDivContent>
            </ColorDivContent>
            {grab.map((items,index) => (
                <JSXElementWrapper key = {index}>
                     {index === current &&(
                          <PictureDiv>
                          <PictureDivHeading>
                          <h1>{items.title}</h1>
                 </PictureDivHeading>
                 
                
                         <h2>{items.packageName}</h2>
                         <h4></h4>
                         <p>&#x25C9; {items.items1}  </p>
                         <p>&#x25C9; {items.items2} </p>
                         <p>&#x25C9; {items.items3} </p>
                         <p>&#x25C9; {items.items4} </p>
                         <p>&#x25C9; {items.items5} </p>
                         <h3>{items.price}</h3>
                 <Btnwrapper>
                 <RoundButton primary='true'>Grab Deal</RoundButton>
                 </Btnwrapper>
                 
                  </PictureDiv>
                 )}
                </JSXElementWrapper>
                
                    
                
               
            ))}
            </Timer>
        </TimerContainer>
    );
}

export default DealsSection
