import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactForm = () => {

    return (
        <>
            <div className="pad-top-bot-100 px-5"> 
                <h1 className="heading2 mar-bot-20">Contact Form</h1>
                <Form>
                    <Form.Group className="mar-bot-30" controlId="name">
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mar-bot-30" controlId="email">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mar-bot-30" controlId="contactnumber">
                        <Form.Control type="tel" placeholder="Contact Number" />
                    </Form.Group>
                    <Form.Group className="mar-bot-30" controlId="message">
                        <Form.Control as="textarea" rows={3} placeholder="Message" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>                   
            </div>           
        </>
    );
}

export default ContactForm;