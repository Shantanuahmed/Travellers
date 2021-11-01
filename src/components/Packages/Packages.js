import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Packages = (props) => {
    const { packages, details, duration, facilities, noHC, notIncluded, picture, price, queries, special, whatToSee, whyUs, _id } = props.pack;
    return (
        <div className="m-5">
            <CardGroup>
                <Card className="text-center">
                    <div>
                        <Card.Img variant="top" src={picture} className="w-75" height="300px" />
                    </div>
                    <Card.Body>
                        <Card.Title>{packages}</Card.Title>
                        <Card.Text>
                            <h6>{details}</h6>
                            <p>visiting places: {whatToSee}</p>
                            <p>Facilities: {facilities}</p>
                            <p>{noHC}</p>
                            <p>Not Included: {notIncluded}</p>
                            <p>Special:{special}</p>
                            <p>Duration: {duration}</p>
                            <p>Price: {price}</p>
                            <p>Why us: {whyUs}</p>
                            <p>Any queries: {queries}</p>
                        </Card.Text>
                    </Card.Body>
                    <Link to={`/packages/${_id}`}><button>Click for more</button></Link>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Packages;