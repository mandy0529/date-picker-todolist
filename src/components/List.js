import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/AppContext";
import Button from "@mui/material/Button";

function List() {
  const { items, handleDelete, handleClear } = useGlobalContext();
  return (
    <Wrapper>
      {items &&
        items.map((item) => {
          const { id, title, date } = item;
          return (
            <ul key={id}>
              <li> {title}</li>
              <span>{date}</span>
              <Button
                color="error"
                variant="contained"
                type="delete"
                className="delete-btn"
                onClick={()=>handleDelete(id)}
              >
                delete
              </Button>
            </ul>
          );
        })}
      {items.length > 0 && (
        <Button
          color="error"
          variant="outlined"
          type="delete"
          className="clear-btn"
          onClick={handleClear}
        >
          clear
        </Button>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 3rem;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    li {
      font-size: 1.3rem;
      font-weight: bold;
    }
    span {
      margin: 0 1rem;
    }
  }
  button {
    margin: 0 2rem;
  }
`;
export default List;
