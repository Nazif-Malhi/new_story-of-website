import React       from 'react';
import styled    ,      {css} from 'styled-components/macro';
import {Link}      from 'react-router-dom';
import {navbarData} from '../Data/NavbarData';
import { Button }  from './Button';
import {FaBars}    from 'react-icons/fa';
import HighLigtedButton from './HighLigtedButton';

const Nav=styled.nav`
height         : 60px;
display        : flex;
justify-content: space-between;
padding        : 1rem 2rem;
z-index        : 100;
position       : fixed;
width          : 100%;
`;

const NavLink=css`
color          : #fff;
display        : flex;
align-items    : center;
padding        : 0 1rem;
height         : 100%;
cursor         : pointer;
text-decoration: none;

`;
const Logo=styled(Link)`
${NavLink}
font-style: italic;
`;

const MenuBars=styled(FaBars)`
display: none;
@media screen and (max-width: 786px){
    display  : block;
    height   : 30px;
    width    : 30px;
    cursor   : pointer;
    position : absolute;
    top      : 0;
    right    : 0;
    transform: translate(-50%,50%);
}
`;
const NavMenu=styled.div`
display     : flex;
align-items : center;
margin-right: -48px;

@media screen and (max-width: 780px){
    display: none;

}
`;

const NavMenueLinks=styled(Link)`
${NavLink}
`;
const NavBtn=styled.div`
display     : flex;
align-items : center;
margin-right: 24px;
@media screen and (max-width: 780px){
    display: none;
}
`;
const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo     to      = "/">Spinzer</Logo>
            <MenuBars onClick = {toggle}/>
            <NavMenu >
                {navbarData.map(( items,index) => (
                    <NavMenueLinks to = {items.Link} key = {index}>
                        {items.title}
                    </NavMenueLinks>
                    
                ))}
                <HighLigtedButton ></HighLigtedButton>
            </NavMenu>
            <NavBtn>
                <Button to = '/orderNow' primary = 'true'>Order Now</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar