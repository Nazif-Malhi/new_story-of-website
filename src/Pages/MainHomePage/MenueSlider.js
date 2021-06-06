import React, {Component} from "react";
import styled        from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {resturantMenueData} from "../../Data/ResturantMenueData.js";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button } from "../../Components/Button.js";


const CardWrapper =styled.div`
  padding-top: 20%;
  padding-left: 20%;
  background-color: whitesmoke;
  //margin-bottom: 60px;
   // background-color: whitesmoke;
    padding-bottom: 54px;
`;
const ButtonWrapper=styled.div`
padding-left: 30px;

`;

const MenueSlider = () => {
    var settings_3 = {
        dots            : true,
        infinite        : true,
        speed           : 500,
        slidesToShow    : 3,
        slidesToScroll  : 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        
    };
     
    
    return (
            <Slider {...settings_3 }>
                    {resturantMenueData.map((items,index) => (
                         <CardWrapper >
                            
                        <div class = "card" style={{width: '18rem'}}>
                            <img src = {items.image} class="card-img-top" alt="..." height="200px"/>
                            <div class = "card-body">
                            <h5 class  = "card-title">{items.title}</h5>
                            <p class   = "card-text">{items.Range}</p>
                            <ButtonWrapper>
                            <Button primary = 'true' >Check Menue</Button>
                            </ButtonWrapper>
                            </div>
                        </div>
                         </CardWrapper>
                    ))}
                   
            </Slider>
            );
}

export default MenueSlider 
