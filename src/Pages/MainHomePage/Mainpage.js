import React    ,          {useState} from 'react';
import DropDown from '../../Components/Dropdown';
import Main from '../../Components/Main';
import Navbar from '../../Components/Navbar';
import { SliderData } from '../../Data/SliderData';
import GlobalStyle from '../../globalStyle';


function Mainpage () {
    const [isOpen, setIsOpen] = useState(false)

     const toggle= () => {
    setIsOpen(!isOpen)
    }
    return (
        <>
        <GlobalStyle/>
        <Navbar   toggle = {toggle}/>
        <DropDown isOpen = {isOpen} toggle = {toggle}/>
        <Main     slides = {SliderData}/>
        </>
    );
}

export default Mainpage;
