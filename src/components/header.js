import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import React, { useState } from "react";
import '../css/header.css'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function Header() {
  const [navBox, setNavbox] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [btn, setBtn] = useState(false);
  


  const setNavBoxInput = (event) => {
    setBtn(true);
    setNavbox((prev)=>event.target.value);
  };
  function deleteTitle() {
    setNavbox("");
    setBtn(false)
  }
  function addTitle() {
    const dFOne = new Date().toLocaleString();
    setTitle(navBox);
    setDate(dFOne)
    setBtn(false)
   
  }
 
  return (
    <>
      <Navbar bg="white" variant="dark">
        <Container fluid className="body--aligned">
          <Navbar.Brand href="#home">
            <section  className="navbar d-flex " >
           
              
               <Form.Group  controlId="formBasicEmail" className="px-2">
                <Form.Control
                  type="text"
                  placeholder="Enter Title"
                  value={navBox}
                  name="title"
                  onChange={setNavBoxInput} 
                />
              </Form.Group>
         
            {btn &&  <div>
              <Button  variant="outline-primary" className="submit--btn px-3 mx-2" onClick={addTitle}>
                Add
              </Button>
              
              <Button variant="outline-danger"className="submit--btn" onClick={deleteTitle}>
                delete
              </Button>
            
              
            </div>}
            </section>
            <section className="date">
              Last Modified : { `${date} `} 
            </section>
           

          </Navbar.Brand>
          <div className="right--aligned"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="130" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg></div>
        </Container>
        <div className="">
    
        </div>
      </Navbar>
    </>
  );
}

export default Header;
