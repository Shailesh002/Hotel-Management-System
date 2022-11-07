import { Form, Button } from "react-bootstrap";
import React, { } from 'react';
// import IconButton from "@material-ui/core/IconButton";
// import Visibility from "@material-ui/icons/Visibility";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import Input from "@material-ui/core/Input";

function BookingForm() {

    async function handleBooking(event) {

    }

    return(
        <div>
            <h1 className="Center">FILL</h1>

            <div className="Center">
            <div className="Center FormContainer" style={{width:'600px', height:'1300px'}}>
                <Form 
                    onSubmit={handleBooking}
                    className="" style={{color:"#48466D"}}
                >

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="">Occupant Name</Form.Label>
                        <Form.Control className="" type="text" name="Username" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="">Phone Number</Form.Label>
                        <Form.Control className="" type="text" name="Username" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="">Email ID</Form.Label>
                        <Form.Control className="" type="text" name="Username" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="">Date Of Birth</Form.Label>
                        <Form.Control className="" type="text" name="Username" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="">Address</Form.Label>
                        <Form.Control className="" type="text" name="Username" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="">Zip Code</Form.Label>
                        <Form.Control className="" type="text" name="Username" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="">Nationality</Form.Label>
                        <Form.Control className="" type="text" name="Username" required />
                    </Form.Group>

                    <br/><br/>
                    <h3 style={{fontSize:'20px'}}>CREDIT CARD INFORMATION</h3>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="">Type</Form.Label>
                        <Form.Control className="" type="text" name="Username" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="">Holder</Form.Label>
                        <Form.Control className="" type="text" name="Username" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="">Number</Form.Label>
                        <Form.Control className="" type="text" name="Username" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="">Expiration</Form.Label>
                        <Form.Control className="" type="text" name="Username" required />
                    </Form.Group>

                    <p>
                        Please Note: Rooms can not be confirmed without credit card information.
                        In case of no-show or late cancellation - 10 working days prior to arrival 
                        - you will be charged a fee corresponding to one night's room price.
                    </p>

                    <Button 
                    className="" variant="primary" 
                    type="submit"  style={{width:'400px'}}
                    >
                    PROCEED
                    </Button>
                    <br/>
                </Form>
            </div>
            </div>
        </div>
    );
}

export default BookingForm;