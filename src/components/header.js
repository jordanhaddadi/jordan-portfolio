import React from 'react';
import { Card, CardBody, CardHeader, CardSubtitle, CardImg } from 'reactstrap';

export const Header = () => {
    return (
        <div className="card">
            <Card> 
                <CardBody
                style={{ paddingTop: 50, backgroundColor: '#37474F' }}
                >
                <CardHeader 
                style={{ textAlign: 'center', margin: 0, backgroundColor: '#263238', WebkitTextFillColor: '#ECEFF1'}}
                tag="h1">
                Jordan Elizabeth Haddadi
                </CardHeader>
                <CardSubtitle 
                style={{ textAlign: 'center',backgroundColor: '#37474F', WebkitTextFillColor: '#ECEFF1'}}
                >Full Stack Frontend Developer and Web Designer</CardSubtitle>
                </CardBody>
                <CardImg
                style={{ opacity: 0.9, }}
                className="card-img" 
                top width="100%"
                src="https://images.unsplash.com/photo-1535813381253-2917d694ff3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80" /> 
            </Card>
        </div>
    )
}

export default Header;