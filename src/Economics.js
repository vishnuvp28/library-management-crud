import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Base } from "./Base";

export function Economics({ eco, setEco }) {
  const history = useHistory();

  const deleteUser = (idx) => {
    const alterList = eco.filter((per) => per.id !== idx);
    setEco(alterList)
  };

  return (
    <Base title={"Economics"}>
      {" "}
     
      <div className="mastercrd">

      {eco.map((per, idx) => (
        <div className="card" key={idx}><br></br>
        <Card style={{ width: "18rem" }} key={idx}>
          <Card.Img variant="top" className="img" src={per.image} />
          <Card.Body>
            <Card.Title>{per.name}</Card.Title>
            <Card.Text>{per.author}</Card.Text>
            <Button variant="primary" onClick={() => history.push(`/ecoview/${idx}`)}>
              View
            </Button>{" "}
            <Button variant="success" onClick={() => history.push(`/ecoedit/${per.id}`)}>
              Edit
            </Button>{" "}
            <Button variant="danger" onClick={() => deleteUser(per.id)}>
              Delete
            </Button>{" "}
          </Card.Body>
        </Card>
        </div>
      ))}
      </div>
      <br></br> <Button
        variant="dark"
        className="add"
        onClick={() => history.push("/ecoadd")}
      >
        Add
      </Button>{" "}
     
      <Button variant="dark" className="add" onClick={() => history.push("/library")}>
        Back
      </Button><br></br><br></br>
    </Base>
  );
}
