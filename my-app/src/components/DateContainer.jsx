import { useState } from "react";
import "./date.css";
import DateDisplay from "./DateDisplay";
const DateContainter = () => {
    const [date, setDate] = useState(Date.now());
    return (
        <>
            <input type="date" className="date-input" onChange={(e) => setDate(e.target.value)}/>
            <DateDisplay date={date}/>
        </>
    );
}
 
export default DateContainter;