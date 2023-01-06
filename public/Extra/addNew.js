
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
//import ListGroup from 'react-bootstrap/ListGroup';
import "../css/main.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export const AddNew = () => {
     const [tobdy, tosetBody] = useState("");
  const [tottl, tosetTitle] = useState("");
  const [tolist, tosetList] = useState([]);
  const [tobtn, tosetBtn] = useState(false);

  // const [titles, setTitles] = useState([]);
  const totitleHandler = (event) => {
    tosetTitle(event.target.value);

  };
  const tobodyHandler = (event) => {
    tosetBody(event.target.value);
   
  };

  const toaddTitle = (event) => {
    if (!tottl) {
      alert("Please add Card Title.");
    } else if (!tobdy) {
      alert("Please add Card Content.");
    } else {
      const newData = {
        id: new Date().getTime().toString(),
        title: tottl,
        body: tobdy,
      };
      tosetList((prev) => [...prev, newData]);
      tosetBody("");
      tosetTitle("");
      tosetBtn(false)
    
    }
  };

  function todeleteList(){
    tosetList([])
  }

  function toshowForm(event){
    tosetBtn(true);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="main">
    <form onSubmit={handleSubmit} className="d-flex">
      
      <Card style={{ width: "18rem" }} className="sec--padding">
        <Card.Body>
          <div className="d-flex  justify-content-between">
            <Card.Title>To-Do {`(${tolist.length})`}</Card.Title>
            <Button variant="outline-danger" onClick={todeleteList}>Delete All</Button>
          </div>
          {tolist.map((toelem) => {
            return (
              <div className="item" key={toelem.id}>
                <div className="title--text"> {toelem.title}</div>
                {toelem.body}
              </div>
            );
          })}
        </Card.Body>
        {tobtn && <div>
          <div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Add Card Title"
                value={tottl}
                name="totitle"
                onChange={totitleHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Add Card Content"
                value={tobdy}
                name="tobody"
                onChange={tobodyHandler}
              />
            </Form.Group>
            <div>
              <Button variant="outline-primary" onClick={toaddTitle}>
                Add Item
              </Button>
            </div>
          </div>
        </div> } 
        {!tobtn && <div>
          <Button variant="outline-primary"  onClick={toshowForm}>
            Add Item
          </Button>
        </div> }
       
      </Card>
    </form>
  </div>
  )
}
