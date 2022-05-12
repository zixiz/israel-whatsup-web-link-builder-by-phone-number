import React, {useState} from 'react';
import {Container,Row,Col,Button,Form} from 'react-bootstrap'

function App() {
  const [phoneNumber,setPhoneNumber] = useState('')


  return (
    <Container> 
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form.Group>
              <Form.Label htmlFor="input">Enter a Phone number:</Form.Label>
              <Form.Control id="input" value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                {phoneNumber ? 
                <Button variant="primary" block target="_blank" href={`https://wa.me/+972${phoneNumber}`}>
                  What's Up: {phoneNumber}</Button>
                 : null}
            </Form.Group>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
