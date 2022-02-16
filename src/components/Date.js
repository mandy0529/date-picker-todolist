import DatePicker from "react-datepicker";
import styled from "styled-components";
import { useGlobalContext } from "../context/AppContext";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { TextField } from "@mui/material";

function Date() {
  const { handleDate, startDate } = useGlobalContext();

  return (
    <Wrapper>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label={"선택날짜"}
          value={startDate}
          onChange={handleDate}
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
