import React from 'react';
import styled , {css} from 'styled-components';
import MenueTable from '../Images/menueBack/MenueTable.jpg';


const Container=styled.div`
width: 100vw;
height: 100vh;
`;
const Imagel=styled.img`

background-repeat: no-repeat;
    background-size: cover;
   // position: absolute;
    align-items: center;
   // justify-content: center;
    width: 100vw;
    height: 100vh;
    background-attachment: fixed;
`;

const MenueCard=styled.div`
margin-top: 50px;
height: 100vh;

`;

const BaseOFCard=styled.div`
width: 25vw;
height: 70vh;
background: rgba(0,0,0,0.5);
position: relative;
left: 50%;
top: 50%;
transform: translate(-50%,-50%);
perspective: 1000px;
border-radius: 10px;
cursor: pointer;
`;

const LeftSide=styled.div`
width: 25vw;
height: 100%;
position: absolute;
background-color: rgba(0,0,0,0.5);
transform: rotateY(0deg);
transition: all 1s ease-out;
transform-style: preserve-3d;
transform-origin: left;
cursor: pointer;
border-radius: 10px;
`;

const RightSide=styled.div`
width: 25vw;
height: 100%;
position: absolute;
background-color: rgba(0,0,0,0.5);
transform: rotateY(0deg);
transition: all .5s ease-in;
transform-style: preserve-3d;
transform-origin: right;
cursor: pointer;
border-radius: 10px;
`;

const figurea=css`
margin:0;
display: block;
position: absolute;
width: 100%;
height: 100%;
backface-visibility: hidden;
border-radius: 10px;
`;
const LeftFront=styled.figure`
${figurea}
background: red;

`;
const LeftBack=styled.figure`
${figurea}
background: green;
transform: rotateY(180deg);
`;
const RightFront=styled.figure`
${figurea}

    


`;
const RightBack=styled.figure`
${figurea}
background: yellow;
transform: rotateY(180deg);
`;


const Image=styled.img`

`;
const FoldingCard = () => {

    let Open=false;

    function openingMenue(){
        if(Open===false){
        document.getElementById("right").style.transform = "rotateY(180deg)"; 
        document.getElementById("left").style.transform = "rotateY(-180deg)";
        Open=true;
        }
        else{
            document.getElementById("right").style.transform = "rotateY(0deg)"; 
        document.getElementById("left").style.transform = "rotateY(0deg)";
        Open=false;
        }
    }
    
   
   
    return (
       <Container>
           <MenueCard>
               <BaseOFCard  id='center'>
           <LeftSide  id='left'>
               <LeftFront>
               </LeftFront>
               <LeftBack>
               </LeftBack>
           </LeftSide>
           <RightSide  onClick={openingMenue} id='right'>
           <RightFront >
               <h1>
                   Click Here to Open the Menue
               </h1>
               </RightFront>
               <RightBack>
               </RightBack>
           </RightSide>
       </BaseOFCard>
        </MenueCard>
           <Imagel src={MenueTable} >

           </Imagel>
          
       </Container>
      
        
          
      
    )
}

export default FoldingCard
