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
              <span>✅{date}에 할 일</span>
              <div className="todo-list">
                <li> {title}</li>
                <Button
                  color="error"
                  variant="contained"
                  type="delete"
                  className="delete-btn"
                  onClick={() => handleDelete(id)}
                >
                  delete
                </Button>
              </div>
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
    max-width:30%;
      padding:1rem;
      border-radius:5px;
      border:2px solid lightgray;
      margin:1rem auto;

  }
  .todo-list {
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
