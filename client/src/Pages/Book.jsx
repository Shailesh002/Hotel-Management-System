import React, {useState} from 'react';

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

// import DatalistInput from 'react-datalist-input';
// import 'react-datalist-input/dist/styles.css';


import Room from "../Components/Room"
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Book(){

    const [startDate, setStartDate] = useState(new Date());

    async function checkRoomsAvailableOnThisDate(DATE) {
        let ANS = null;

        console.log('IN THE FXN, DATE = '+DATE);

        await fetch(`/counter/date?DATE=${encodeURIComponent(DATE)}`)
        .then(response => {
            console.log("RESPONSE RECEIVED");
            console.log(response);
            // response.json()
        })
        // .then(data => {
        //     console.log("RESPONSE")
        //     console.log(data)
        // })
        // .catch(error => {
        //     //handle error
        //     console.log("ERROR");
        //     console.log(error);
        // });  

        // SINGLE ROOM 

        // DOUBLE ROOM

        // TWIN ROOM

        // KING ROOM

        return ANS;
    }

    return(
        <div className=''>
            <h1 className="Center">Available Suits</h1>

            <div className="RoomsInputContainer">
                <Container className="" >
                    <Row className="SingleCardBox RoomsInputBox">
                        <Col>
                            <label>Check-in</label>
                            <DatePicker  
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                value={startDate}
                                required
                                onSelect={(date) => {
                                    // let CHECKINDATE = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
                                    // console.log('ON SELECTION = '+CHECKINDATE);
                                    // console.log('ON SELECTION = '+date);

                                    checkRoomsAvailableOnThisDate(date);
                                }}
                                dateFormat={'y-MM-dd'}
                                name="DATE"
                            />
                        </Col>
                        <Col>
                            <label>Check-out</label>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        </Col>
                        <Col>
                            <label>Occupancy</label>
                            {/* <DatalistInput
                                placeholder="1 room  2 adults"
                                // label="Select ice cream flavor"
                                onSelect={(item) => console.log(item.value)}
                                items={[
                                    { id: 'SingleRoom', value: '1 room  1 adult' },
                                    { id: 'DoubleRoom', value: '1 room  2 adults' },
                                    { id: 'TwinRoom', value: '1 room  2 adults' },
                                    { id: 'KingRoom', value: '1 room  2 adults' },
                                ]}
                            /> */}
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="RoomsContainer">
                <Room 
                    TITLE="Single Room"
                    IMG="/Images/singleroom.jpg"
                    VOL=""
                    CAPACITY=""
                    BODY="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                    UTILITIES={[1,2,3]}
                />
                <Room 
                    TITLE="Double Room"
                    IMG="/Images/doubleroom.jpg"
                    VOL=""
                    CAPACITY=""
                    BODY="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                    UTILITIES={[1,2,3,4]}
                />
                <Room 
                    TITLE="Twin Room"
                    IMG="/Images/twinroom.jpg"
                    VOL=""
                    CAPACITY=""
                    BODY="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                    UTILITIES={[1,2,3,4,5]}
                />
                <Room 
                    TITLE="King Room"
                    IMG="/Images/kingroom.jpg"
                    VOL=""
                    CAPACITY=""
                    BODY="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                    UTILITIES={[1,2,3,4,5,6,7]}
                />
            </div>
        </div>
    );
}

export default Book;