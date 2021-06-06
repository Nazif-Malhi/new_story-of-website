import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import MenuePic from '../../Images/menueBack/menueBack.jpg'

const MenueOfShop = () => {
    return (
        <Container>
            <img src={MenuePic} alt="Cofee"/>
        </Container>
       
    )
}

export default MenueOfShop
