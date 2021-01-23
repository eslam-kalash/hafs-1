import React, { useState } from 'react';
import DashboardSidebar from '../DashboardSidebar';
import Table from './Table';
import DatePicker from "react-datepicker";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import { Button } from 'react-bootstrap';


const SchedulePage = () => {
    const today = new Date();
    const [availableDate, setAvailableDate] = useState(new Date());
    const [startTime, setStartTime] = useState(today.setHours(0,0));
    const [endTime, setEndTime] = useState(moment(startTime).add(30, 'm').toDate());

    console.log()
    return (
        <div className='schedule'>
            <div className="row">
                <div className="col-lg-2">
                    <DashboardSidebar />
                </div>
                <div className="col-lg-10">
                    <div className="schedule__main">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="schedule__table">
                                    <h2>Schedule</h2>
                                    <Table />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="schedule__availability">
                                    <h2>Availability Schedule</h2>
                                    <div className="schedule__availability--container"> 
                                        <div className="mb-3">
                                            <h4>
                                                Start from
                                            </h4>
                                            <DatePicker 
                                                selected={startTime} 
                                                onChange={date => setStartTime(date)} 
                                                showTimeSelect 
                                                showTimeSelectOnly 
                                                timeIntervals={30} 
                                                timeCaption="Time" 
                                                dateFormat="h:mm aa" 
                                            />
                                        </div>    
                                        <div className="mb-3">
                                            <h4>
                                                End at
                                            </h4>                       
                                            <DatePicker 
                                                selected={(endTime>startTime)?endTime:setEndTime(moment(startTime).add(30, 'm').toDate())} 
                                                minTime={moment(startTime).add(30, 'm').toDate()}
                                                maxTime={today.setHours(23,30)}
                                                onChange={date => setEndTime(date)} 
                                                showTimeSelect 
                                                showTimeSelectOnly 
                                                timeIntervals={30} 
                                                timeCaption="Time" 
                                                dateFormat="h:mm aa" 
                                            />
                                        </div>
                                        <div className='mb-3'>
                                            <h4>
                                                Day
                                            </h4>
                                            <DatePicker 
                                                selected={availableDate} 
                                                onChange={date => setAvailableDate(date)} 
                                                minDate={today}
                                            />
                                        </div>
                                        <Button className='btn btn--primary'>Save</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchedulePage;