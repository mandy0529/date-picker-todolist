import styled from "styled-components";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import { TextField } from "@mui/material";
import { useState } from "react";
import { useGlobalContext } from "../context/AppContext";

function Date() {
    const {handleDate,selectedDate}=useGlobalContext();

  return (
    <Wrapper>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label={"선택날짜"}
          value={selectedDate}
          onChange={(date)=>handleDate(date)}
          inputFormat={"yyyy-MM-dd"}
          mask={"____-__-__"}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 2rem;
`;
export default Date;
