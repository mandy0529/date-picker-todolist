import React from "react";

function Form() {
  return (
    <form className="grocery-form" onSubmit={handleSubmit}>

      <h3>Date Picker To do list</h3>
      <div className="form-control">
        <input
          type="text"
          className="grocery"
          placeholder="e.g. eggs"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          {isEditing ? "edit" : "submit"}
        </button>
      </div>
    </form>
  );
}

export default Form;
