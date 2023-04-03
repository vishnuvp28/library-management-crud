import { Card } from "react-bootstrap";
import { Base } from "./Base";
// import { Button } from "bootstrap";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useHistory } from "react-router-dom";
// import { Button } from "bootstrap";

export function Tamilview({ tamil, setTamil }) {
  const { id } = useParams();
  const per = tamil[id];

  const history = useHistory();
  return (
    <Base title={"Tamil"}>
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
          onClick={() => history.push("/tamil")}
        >
          Back
        </button><br></br>
      </div>
    </Base>
  );
}
