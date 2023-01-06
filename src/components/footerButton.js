
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const FooterButton = (props) => {
  return (
    <div className="main">
    {props.boardBtn && (
      <>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter Board Name"
            value={props.mainTitle}
            name="totitle"
            onChange={props.MainTitleHandler} />
        </Form.Group>
        <div>
          <Button variant="outline-primary" onClick={props.addBoard}>
            Add Board
          </Button>
        </div>
      </>
    )}
    {!props.boardBtn && (
      <div>
        <Button variant="outline-primary" onClick={props.btnTrue}>
          Add More List
        </Button>
      </div>
    )}
  </div>
  )
}
