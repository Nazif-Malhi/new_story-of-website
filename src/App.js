import React from 'react';
import styled from 'styled-components';
import FoldingCard from './Components/FoldingCard';
import { grabingDealsData } from './Data/GrabingDealsData';
import Contact from './Pages/MainHomePage/Contact';
import DealsSection from './Pages/MainHomePage/DealsSection';
import Footer from './Pages/MainHomePage/Footer';
import Mainpage from './Pages/MainHomePage/Mainpage';
import MenueSlider from './Pages/MainHomePage/MenueSlider';

const PageAndSliderConnector=styled.div`
text-align: center;
background-color: whitesmoke;
padding-top: 50px;

`;

function App() {
  return (
    <>
     {/* <FoldingCard/> */}
   <Mainpage/>
  <PageAndSliderConnector>
    <h1 style={{marginBottom:'0rem'}}>Check items in Menue</h1>
  </PageAndSliderConnector>
   <MenueSlider/> 
  <DealsSection grab ={grabingDealsData}/>
  <Contact/>
  <Footer/>
  </>
  );
}

export default App;
