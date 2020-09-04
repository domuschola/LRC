import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Nav, Container } from 'react-bootstrap';
import "../style/LinksStyle.scss";

export class Links extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Nav defaultActiveKey="/" className="navlink justify-content-end">
                        <Nav.Link><Link class="link-text" to="/h">Home</Link></Nav.Link>
                        
                        <Nav.Link><Link class="link-text" to="/sample1">Sample1</Link></Nav.Link>

                        <Nav.Link><Link class="link-text" to="/sample2">Sample2</Link></Nav.Link>
                    </Nav>
                </Container>
            </div>
        );
    }
}

export default Links
