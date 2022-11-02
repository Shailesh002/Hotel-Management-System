import { FaBeer } from 'react-icons/fa';
// import {GiCoffeePot} from 'react-icons/GiCoffeePot'
import { TbBath } from "react-icons/tb";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Room(props) {

    var list = props.UTILITIES;

    function callSwitch(item){
        switch(item){
            case 1: {
                return <FaBeer />
            }break;

            // case 2:{
            //     return <GiCoffeePot />
            // }

            case 2:{
                return <TbBath />
            }

            default: {
                return <FaBeer />
            }
        }
    }

    return (
        <div className="SingleCardBox">
            <Container className=''>
                <Row className='SingleCard'>
                    <Col className=''>
                        <img alt='Room' src={props.IMG}/>
                    </Col>
                    <Col className='RoomText'>
                        <Row>
                            <h3>{props.TITLE}</h3>
                            <h6>{props.VOL}</h6><h6>{props.CAPACITY}</h6>
                        </Row>

                        <Row>
                            <p>{props.BODY}</p>
                        </Row>

                        <Row>
                            <h5 className='IconsList'>
                            { list && list.length>0 && list.map((item)=> (
                                callSwitch(item)
                            ) ) }
                            </h5>
                        </Row>

                        <Row>
                            <button>BOOK</button>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Room;