import React from "react"; 
import{
    Nav, 
    NavLink, 
    Bars, 
    NavMenu, 
    NavBtn, 
    NavBtnLink
} from "./NavbarElements"; 

const Navbar = () => {

    return(
        <>
            <Nav> 
                <Bars />
                <NavMenu> 
                    <NavLink to="/bookings">
                        Bookings
                    </NavLink>

                    <NavLink to="/gallery">
                        Gallery
                    </NavLink>

                    <NavLink to="/merch">
                        Merchandise
                    </NavLink>

                    <NavLink to="/murals">
                        Murals
                    </NavLink>

                    <NavLink to="/contact">
                        Contact Us
                    </NavLink>

                </NavMenu>
            </Nav>
        </>
    ); 
    
}; 

export default Navbar;