import React, { useEffect, useState } from 'react';
import { Accordion, Card, CardGroup } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './PackageId.css';

const PackageId = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const { packageId } = useParams();
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5001/packages/${packageId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    const onSubmit = data => {
        fetch('http://localhost:5001/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Your booking successful')
                    reset()
                }
            })
    }

    return (
        <div className="m-5">
            <CardGroup>
                <Card className="text-center">
                    <div>
                        <Card.Img variant="top" src={packages.picture} className="w-75" height="300px" />
                    </div>
                    <Card.Body>
                        <Card.Title>{packages.packages}</Card.Title>
                        <Card.Text>
                            <h6>{packages.details}</h6>
                            <p>visiting places: {packages.whatToSee}</p>
                            <p>Facilities: {packages.facilities}</p>
                            <p>{packages.noHC}</p>
                            <p>Not Included: {packages.notIncluded}</p>
                            <p>Special:{packages.special}</p>
                            <p>Duration: {packages.duration}</p>
                            <p>Price: {packages.price}</p>
                            <p>Why us: {packages.whyUs}</p>
                            <p>Any queries: {packages.queries}</p>
                        </Card.Text>
                    </Card.Body>

                </Card>
            </CardGroup>
            <Accordion defaultActiveKey="0" className="text-center">
                <Accordion.Item eventKey="0" >
                    <Accordion.Header className="me-4 text-center">Click here to book your trip with Travellers</Accordion.Header>
                    <Accordion.Body>
                        <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user.displayName} {...register("name")} />
                            <input defaultValue={user.email} {...register("email", { required: true })} />
                            {errors.email && <span className="error">This field is required</span>}
                            <input placeholder="Address" defaultValue="" {...register("address")} />
                            <input placeholder="City" defaultValue="" {...register("city")} />
                            <input placeholder="phone number" defaultValue="" {...register("phone")} />
                            <input defaultValue={packages.packages} {...register("Package_id")} />
                            <input placeholder="Desired Date" defaultValue="" {...register("date")} />
                            <input type="submit" />
                        </form>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    );
};

export default PackageId;