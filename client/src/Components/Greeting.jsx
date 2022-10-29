import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Greeting(){
    return(
        <div className="Greeting">
        <Container className='WhiteBox'>
            <Row>
                <Col><h1>Wallace<br/> Residencia</h1></Col>
            </Row>
            <Row>
                <Col>
                    <img src="https://i.pinimg.com/564x/b3/df/17/b3df17c88af0b6e56988d42cb2c35e63.jpg" alt="boat"/>
                </Col>
                <Col>
                    <img src="https://www.sheknows.com/wp-content/uploads/2018/08/boys-on-beach-unsupervised.jpeg" alt="fun"/>
                </Col>
            </Row>
        </Container>
            
            
        </div>
    );
}

export default Greeting;