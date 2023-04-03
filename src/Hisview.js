import { Card } from "react-bootstrap";
import { Base } from "./Base";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom";

export function Hisview({ his}) {
 const {id}=useParams();
 const per = his[id];

  const history=useHistory();
  return (
    <Base title={"History"}>
    <div className="cardview">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" className="img" src={per.image} />
          <Card.Body>
            <Card.Title><h4>{per.name}</h4></Card.Title>
            <Card.Text><b>{per.author}</b></Card.Text>
            <Card.Text className="con">{per.content}</Card.Text>
            <Card.Text className="con"><b>{per.year}</b></Card.Text>

          </Card.Body>
        </Card><br></br>
        <button
          variant="dark"
          className="back"
          onClick={() => history.push("/history")}
        >
          Back
        </button>
        </div>
        </Base>
  );
}
