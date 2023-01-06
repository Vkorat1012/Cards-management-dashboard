import React, { useState } from "react";
import Card from "react-bootstrap/Card";
//import ListGroup from 'react-bootstrap/ListGroup';
import "../css/main.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function Todo() {
  const [bdy, setBody] = useState("");
  const [ttl, setTitle] = useState("");
  const [list, setList] = useState([]);
  const [btn, setBtn] = useState(false);

  // const [titles, setTitles] = useState([]);
  const titleHandler = (event) => {
    setTitle(event.target.value);

  };
  const bodyHandler = (event) => {
    setBody(event.target.value);
   
  };

  const addTitle = (event) => {
    if (!ttl) {
      alert("Please add Card Title.");
    } else if (!bdy) {
      alert("Please add Card Content.");
    } else {
      const newData = {
        id: new Date().getTime().toString(),
        title: ttl,
        body: bdy,
      };
      setList((prev) => [...prev, newData]);
      setBody("");
      setTitle("");
      setBtn(false)
    
    }
  };

  function deleteList(){
    setList([])
  }

  function showForm(event){
    setBtn(true);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <Card style={{ width: "18rem" }} className="sec--padding">
          <Card.Body>
            <div className="d-flex  justify-content-between">
              <Card.Title>Introduction {`(${list.length})`}</Card.Title>
              <Button variant="danger" onClick={deleteList}>Delete All</Button>
            </div>
            {list.map((elem) => {
              return (
                <div className="item" key={elem.id}>
                  <div className="title--text"> {elem.title}</div>
                  {elem.body}
                </div>
              );
            })}
          </Card.Body>
          {btn && <div>
            <div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Add Card Title"
                  value={ttl}
                  name="title"
                  onChange={titleHandler}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Add Card Content"
                  value={bdy}
                  name="body"
                  onChange={bodyHandler}
                />
              </Form.Group>
              <div>
                <Button variant="primary" onClick={addTitle}>
                  Add Item
                </Button>
              </div>
            </div>
          </div> } 
          {!btn && <div>
            <Button variant="primary"  onClick={showForm}>
              Add Item
            </Button>
          </div> }
         
        </Card>
      </form>
    </div>
  );
}

export default Todo;
