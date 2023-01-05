import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const UserDetail = (props) => {
  return (
    <Card style={{ width: "18rem", textAlign: "center" }}>
      <Card.Img variant="top" src={props.detail.picture.large} />
      <Card.Body>
        <Card.Title>
          {props.detail.name.first} {props.detail.name.last}
        </Card.Title>
        <Card.Text>
          <label><b>Username</b></label>:&nbsp;
          <span>{props.detail.login.username}</span>
        </Card.Text>
        <Card.Text>
          <label><b>Password</b></label>:&nbsp;
          <span>{props.detail.login.password}</span>
        </Card.Text>
        <Button variant="primary" onClick={props.onGenerateUser}>
          Generate New User
        </Button>
      </Card.Body>
    </Card>
  );
};
export default UserDetail;
