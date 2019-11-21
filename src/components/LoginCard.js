import React from "react";
import { Card, CardBody, CardTitle, CardFooter, Button, Form, FormInput, FormGroup } from "shards-react";

export default function LoginCard() {
  return (
    <Card>
      <CardBody>
        <Form>
        <CardTitle>Login</CardTitle>
            <FormGroup>
            <label htmlFor="#username">Username</label>
                <FormInput id="#username" placeholder="Username" />
            </FormGroup>
            <FormGroup>
            <label htmlFor="#password">Password</label>
                <FormInput id="#username" placeholder="Username" />
            </FormGroup>
            <FormGroup>
            <Button>Login &rarr;</Button>
            </FormGroup>
        </Form>
      </CardBody>
      <CardFooter>
        <p>Don't have an account?</p>
      </CardFooter>
    </Card>
  );
}