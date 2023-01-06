import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "../css/main.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaCheckCircle } from "react-icons/fa";
import { FaAdjust } from "react-icons/fa";
import { FooterButton } from "./footerButton";
import {AiFillDelete} from "react-icons/ai";
import IconButton from '@mui/material/IconButton';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
function Main() {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [mainTitle, setMainTitle] = useState("");
  const [boardBtn, setBoardBtn] = useState(false);
  const [boards, setBoards] = useState([]);
  const [target, setTarget] = useState({ cId: "", bId: " " });
  //--------------FUNCTION ----------
  const addBoard = () => {
    if (!mainTitle) {
      alert("Please add Card Title.");
    } else {
      setBoards([
        ...boards,
        {
          id: Date.now() + Math.random(),
          title: mainTitle,
          cards: [],
          boardTaskButton: false,
        },
      ]);
      setMainTitle("");
      setBoardBtn(false);
    }
    console.log(boards);
  };

  const MainTitleHandler = (event) => {
    setMainTitle(event.target.value);
  };

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const bodyHandler = (event) => {
    setBody(event.target.value);
  };

  const addTitle = (event, boardId) => {
    if (!title) {
      alert("Please add Card Title.");
    } else if (!body) {
      alert("Please add Card Content.");
    } else {
      const newData = {
        id: Date.now() + Math.random(),
        title: title,
        body: body,
        btn: false,
      };

      const index = boards.findIndex((item) => item.id === boardId);
      if (index < 0) return;
      const tempBoard = [...boards];
      tempBoard[index].cards.push(newData);
      tempBoard[index].boardTaskButton = false;

      setBoards(tempBoard);
      console.log(boards);
      setBody("");
      setTitle("");
    }
  };

  const removeBoard = (boardId) => {
    const index = boards.findIndex((item) => item.id === boardId);
    if (index < 0) return;

    const tempBoards = [...boards];
    tempBoards.splice(index, 1);
    setBoards(tempBoards);
  };

  const handleDragEnter = (cId, bId) => {
    setTarget({ cId, bId });
    console.log(bId);
  };

  const handleDragEnd = (cId, bId) => {
    // s_bIndex = Source body index    t_cIndex = Source body index = Target card index

    console.log(bId);
    let s_bIndex, s_cIndex, t_bIndex, t_cIndex;
    s_bIndex = boards.findIndex((board) => board.id === bId);
    if (s_bIndex < 0) return;

    s_cIndex = boards[s_bIndex].cards.findIndex((card) => card.id === cId);
    if (s_cIndex < 0) return;
   
    t_bIndex = boards.findIndex((board) => board.id === target.bId);
    if (t_bIndex < 0) return;

    t_cIndex = boards[t_bIndex].cards.findIndex(
      (card) => card.id === target.cId );
   

    const tempBoards = [...boards];
    const tempCard = tempBoards[s_bIndex].cards[s_cIndex];

    if (t_cIndex  === 0) {
    tempBoards[s_bIndex].cards.splice(s_cIndex, 1);
    tempBoards[t_bIndex].cards.push(tempCard)}
   else{ 
    tempBoards[s_bIndex].cards.splice(s_cIndex, 1);
    tempBoards[t_bIndex].cards.splice(t_cIndex, 0, tempCard);}
    
    setBoards(tempBoards);
  };

  function showForm(boardId) {
    const flagTrue = boards.map((board) =>
      board.id === boardId ? { ...board, boardTaskButton: true } : board
    );
    setBoards(flagTrue);
  }

  function hideForm(boardId) {
    const flagFalse = boards.map((board) =>
      board.id === boardId ? { ...board, boardTaskButton: false } : board
    );
    setBoards(flagFalse);
  }

  const btnTrue = () => {
    setBoardBtn(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  // -------------------- Functions End ----------------------------------------

  //  -----------------------------board Start ----------------------------------------

  return (
    <div className="d-flex mainOne ">
      {boards.map((board) => {
        return (
          <div className="main containe-fluid " key={board.id}>
            <form onSubmit={handleSubmit} className="d-flex  ">
              <Card
                style={{ padding: "10px", width: "18rem" }}
                className="sec--padding"
              >
                <Card.Body>
                  <div className="d-flex  justify-content-between">
                    <Card.Title>
                      {board.title} {`(${board.cards.length})`}
                    </Card.Title>

                    <Button
                      variant="outline-danger"
                      className="button--css--remove"
                      onClick={() => removeBoard(board.id)}
                    >    <  AiFillDelete  color = "red" size="25px"/>
                   
                     
                    </Button>
                  </div>
                  {board.cards.map((elem) => {
                    return (
                      <div
                        className="item"
                        key={elem.id}
                        draggable
                        onDragEnd={() => handleDragEnd(elem.id, board.id)}
                        onDragEnter={() => handleDragEnter(elem.id, board.id)}
                      >
                        <div className="title--text"> {elem.title}</div>
                        <div className="title--text">{elem.body}</div>  
                      </div>
                    );
                  })}
                </Card.Body>
                {board.boardTaskButton && (
                  <div>
                    <div>
                      <Form.Group
                        className="mb-1 border"
                        controlId="formBasicEmail"
                      >
                        <Form.Control
                          className=" border"
                          type="text"
                          placeholder="Add Card Title"
                          name="title"
                          onChange={titleHandler}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-1 border"
                        controlId="formBasicPassword"
                      >
                        <Form.Control
                          className=" border"
                          as="textarea"
                          rows={3}
                          placeholder="Add Card Content"
                          name="body"
                          onChange={bodyHandler}
                        />
                      </Form.Group>
                      <div className="d-flex justify-content-end">
                        <button
                          className="button--css--remove"
                          name="accept"
                          onClick={(event) => addTitle(event, board.id)}
                        >
                     
                          <FaCheckCircle color="green" size="30px" />
                        </button>
                        <button
                
                          className="button--css--remove"
                          name="accept"
                          onClick={() => {
                            hideForm(board.id);
                          }}
                        >      <IconButton aria-label="delete">
                          <FaAdjust color="red" size="30px" />
                          </IconButton>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {!board.boardTaskButton && (
                  <div>
                    <Button
                      variant="outline-primary"
                      onClick={() => showForm(board.id)}
                    >
                      Add Task
                    </Button>
                  </div>
                )}
              </Card>
            </form>
          </div>
        );
      })}
      {/* ------------------------       Board End         -------------------------------- */}

      {/* ------------------------   start Add Board Layout   -------------------------------- */}
      <FooterButton
        boardBtn={boardBtn}
        mainTitle={mainTitle}
        MainTitleHandler={MainTitleHandler}
        addBoard={addBoard}
        btnTrue={btnTrue}
      />
      {/* ------------------------   start Add Board Layout   -------------------------------- */}
    </div>
  );
}

export default Main;
