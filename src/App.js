import styled from "styled-components";
import Date from "./components/Date";
import Form from "./components/Form";

function App() {
  return (
    <Wrapper className="App">
      <h1>Date Picker To do list</h1>
      <div className="app-list">
        <Date />
        <Form />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  h1 {
    margin:2rem;
    font-size:1.5rem;
    font-weight:bold;
}
`;

export default App;
