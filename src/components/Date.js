import DatePicker from "react-datepicker";
import styled from "styled-components";
import { useGlobalContext } from "../context/AppContext";

function Date() {
  const { handleDate,startDate } = useGlobalContext();

  return (
    <Wrapper>
      <DatePicker selected={startDate} onChange={handleDate} />
    </Wrapper>
  );
}

const Wrapper=styled.div`
margin:2rem;
`;
export default Date;
