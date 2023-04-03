import { useHistory, useParams } from "react-router-dom";
import { Base } from "./Base";
import { Card } from "react-bootstrap";

export function Scienceview({ science, setScience }) {
  const {id}=useParams();
  const per = science[id];
 
   const history=useHistory();
  return (<Base title={"Science"}>
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
          onClick={() => history.push("/science")}
        >
          Back
        </button><br></br>
      </div></Base>
  );
}
