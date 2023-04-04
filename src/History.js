import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Base } from "./Base";

export function History({ his, setHis }) {
  const deleteUser = (idx) => {
    const alterList = his.filter((per) => per.id !== idx);
    setHis(alterList);
  };
  const history = useHistory();

  return (
    <Base title={"History"}>
      {" "}
      
      <div className="mastercrd">
        {his.map((per, idx) => (
          <div className="card" key={idx}><br></br>
            <Card style={{ width: "18rem" }} key={idx}>
              <Card.Img variant="top" className="img" src={per.image} />
              <Card.Body>
                <Card.Title>{per.name}</Card.Title>
                <Card.Text>{per.author}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => history.push(`/hisview/${idx}`)}
                >
                  View
                </Button>{" "}
                <Button
                  variant="success"
                  onClick={() => history.push(`/hisedit/${per.id}`)}
                >
                  Edit
                </Button>{" "}
                <Button variant="danger" onClick={() => deleteUser(per.id)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div><br></br>
      <Button
        variant="dark"
        className="add"
        onClick={() => history.push("/hisadd")}
      >
        Add
      </Button>{" "}
      <Button variant="dark" className="add" onClick={() => history.push("/library")}>
        Back
      <br></br>
      </Button><br></br><br></br>
    </Base>
  );
}
