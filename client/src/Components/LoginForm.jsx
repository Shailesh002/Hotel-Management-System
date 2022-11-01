import { Form, Button } from "react-bootstrap";
import React, {useState,useEffect} from 'react';

function LoginForm (props) {
  return (
        <Form action="/login" method="post" className="">

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="">Username</Form.Label>
          <Form.Control className="" type="text" name="Username" required />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="">Email</Form.Label>
          <Form.Control className="" type="email" name="Email" required />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="">Password</Form.Label>
          <Form.Control className="" type="password" name="Password" required />
          
        </Form.Group>
        
        {/* {renderErrorMessage("uname")}
        {renderErrorMessage("email")}
        {renderErrorMessage("pass")} */}

        <Button className="ButtonStyle" variant="primary" type="submit">Submit</Button>

      </Form>
    );
}

export default LoginForm;