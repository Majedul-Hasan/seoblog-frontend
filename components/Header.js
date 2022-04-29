import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { APP_NAME } from '../config';
import Link from 'next/link';
import { isAuth, signoutAction } from '../actions/authAction';








const Header = ()=>{
     const [isOpen, setIsOpen] = useState(false);

     const toggle =()=>{
         setIsOpen(!isOpen)
     } 

     return (
    <div>
      <Navbar color="light" light expand="md">
      <Link href="/"><NavLink className='font-weight-bold' href="/">{APP_NAME}</NavLink></Link>
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>

            {
              !isAuth() && <React.Fragment>
                <NavItem>
                  <Link  href="/signin"><NavLink>signin</NavLink></Link>
                </NavItem>
                
                <NavItem>
                  <Link  href="/signup"><NavLink>signup</NavLink></Link>
                </NavItem>
              
              </React.Fragment>
            }
            {
              isAuth() && <React.Fragment>
                <NavItem>
                  <NavLink style={{ cursor: 'pointer' }} onClick={() => signoutAction(() => Router.replace(`/signin`))} >signout</NavLink>
                </NavItem>
                
                
              
              </React.Fragment>
            }
            
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            {/*<UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>*/}
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );

}





export default Header;