import React from 'react';
import {
    Scheduler,
    WeekView,
    Appointments
} from "@devexpress/dx-react-scheduler-material-ui";

const Table = () => {
    return (
        <div>
            <Scheduler
                height={660}
                >
                
                <WeekView
                    startDayHour={9}
                    endDayHour={19}
                />
                <Appointments />
            </Scheduler>
        </div>
    )
}

export default Table;