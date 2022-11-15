import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const ListBar = ({ value, setValue, list, setList, checked, setChecked }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleClick = () => {
    setList((list) => [...list, { task: value, isCkecked: checked }]);
    setValue("");
  };
  return (
    <div className="addListBar wrapper">
      <InputGroup size="lg" className="mb-3 w-100">
        <Form.Control
          type="search"
          placeholder="Add to do list"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={value}
          onChange={handleChange}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={handleClick}
        >
          Add Task
        </Button>
      </InputGroup>
    </div>
  );
};

export default ListBar;
