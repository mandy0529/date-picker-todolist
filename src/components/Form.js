import React from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { useGlobalContext } from "../context/AppContext";
import styled from "styled-components";

function Form() {
  const { handleChange, handleSubmit,name } = useGlobalContext();
  return (
    <Wrapper onSubmit={handleSubmit}>
      <Input
        onChange={handleChange}
        type="text"
        placeholder="write your to do list"
        value={name}
      />
      <Button variant="contained" type="submit" className="submit-btn">
        add
      </Button>
    </Wrapper>
  );
}

const Wrapper=styled.form`
input {
    text-align:center;
}
button {
    margin:0 1rem;
}`;
export default Form;
