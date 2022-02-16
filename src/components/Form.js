import React from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

function Form() {
  return (
    <form>
      <Input  type="text" placeholder="write your to do list" />
      <Button variant="contained" element type="submit" className="submit-btn">
        add
      </Button>
    </form>
  );
}

export default Form;
