import React  from 'react';
import styled from 'styled-components';
import {FaPhoneAlt,FaRegEnvelope,FaFacebook} from 'react-icons/fa';
import { Button } from '../../Components/Button';


const MainContectSection=styled.div`
width           : 100%;
height          : 150vh;
background-color: whitesmoke;
text-align: center;
h1{
    padding-top: 100px;
}
`;

const Cards=styled.div`
width: 100%;
height: 130px;
margin-top: 7%;

`;

const SmallCards=styled.div`
 width: 300px;
 background-color: whitesmoke;
 height: 90px;
 margin-left: 20px;
 margin-top: 20px;
 border-radius: 10px;
 display: flex;
 justify-content: start;
 align-items: center;
 -webkit-box-shadow: -9px 10px 12px 1px rgba(0,0,0,0.82); 
box-shadow: -9px 10px 12px 1px rgba(0,0,0,0.82);
`;

const Imageive=styled.div`
width: 80px;
padding-left: 20px;
`;
const ContentDiv=styled.div`
padding-left: 30px;
text-align: center;
padding-top: 20px;

h4{
    font-style: italic;
    font-size: 16px;
}
p{
    
font-size: 15px;
}
`;

const FormsDiv=styled.div`

//border:2px;
`;

const FormWrapper=styled.div`
width: 40vw;
height: 50vh;
margin: auto;
padding-top: 80px;
`;

const ButtonWrapper=styled.div`
width: 100px;
margin: auto;
padding-top: 10px;
`;

const Contact = () => {
    return (
      
<MainContectSection>
<h1>Contact us</h1>
         <Cards>
         <div class = "container">
         <div class = "row">
         <div class = "col-sm">
             <SmallCards>
                 <Imageive>
                 <FaPhoneAlt style={{width:'50px'}}/>
                 </Imageive>
                 <ContentDiv>
                 <h4>Phone</h4>
                 <p>+92 032287161</p>
                 </ContentDiv>
               
             </SmallCards>
         </div>
        <div class = "col-sm">
            <SmallCards>
                <Imageive>
                <FaRegEnvelope style={{width:'50px'}}/>
                </Imageive>
                <ContentDiv  style={{paddingLeft:'0px'}} >
                <h4  style={{paddingRight:'20px'}}>Support Mail</h4>
                 <p style={{paddingRight:'7px'}}>Support@SpinzerBurger.com</p>

                </ContentDiv>
            </SmallCards>
        </div>
        <div class = "col-sm">
            <SmallCards>
            <Imageive>
                <FaFacebook style={{width:'50px'}}/>
                </Imageive>
                <ContentDiv  style={{paddingLeft:'0px'}} >
                <h4  style={{paddingRight:'15px'}}>Facbook Page</h4>
                 <p style={{paddingRight:'7px'}}>SpinzerBurger/fb</p>

                </ContentDiv>
            </SmallCards>
        </div>
        </div>
        </div>
         </Cards>
       
<FormsDiv>
    <h1 style={{fontSize:'30px'}}>Fill the form for any suggestion, complain or to contact us</h1>
             <FormWrapper>
             <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<ButtonWrapper>
<Button primary='true'> Submit </Button>
</ButtonWrapper>

             </FormWrapper>
         
         </FormsDiv>
</MainContectSection>
    )
}

export default Contact
