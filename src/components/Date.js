import { useState } from "react";
import DatePicker from "react-datepicker";
import Button from "@mui/material/Button";

function Date() {
  const [startDate, setStartDate] = useState();

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <Button variant="contained" color="primary">
       add
      </Button>
    </div>
  );
}

export default Date;
