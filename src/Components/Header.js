import React from 'react'
import {ButtonGroup,Dropdown,DropdownButton} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
    const navStyle ={ color: 'white', textDecoration:'none'};
    const logoStyle= { color : 'blue', textDecoration:'none'}
    return(
        <div>
            <nav className="navbar navbar-light bg-light static-top">
                <div className="container">
                    <a className="navbar-brand" href='#home'><Link style={logoStyle} to='/'>Brain Bin</Link></a>
                        {(['Courses'    ].map(
                            (toggle)=> (
                                <DropdownButton
                                as={ButtonGroup}
                                key={toggle}
                                id={'dropdown-variants${}'}
                                title={toggle}
                                >
                                    <Dropdown.Item href="#/action-1">Front-End Development</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Back-End Development</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Mobile Development</Dropdown.Item>
                             
                                </DropdownButton>
                            )
                        ))}
                        <div>
                        
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic2">
                                Careers
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Become a Mentor</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Become a Instructor </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </div>
                            <button className="btn btn-primary" onClick='' ><Link style={navStyle} to='/signup'>Sign in</Link></button>
                </div>  
            </nav>
        </div>
        )

    }

    


export default Header;