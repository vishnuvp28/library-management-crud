import { Card } from "react-bootstrap";
import { Base } from "./Base";
import { useHistory, useParams } from "react-router-dom";
import { historydata } from "./historydata";
import { geodata } from "./geodata";

export function Geoview({ geo, setGeo }) {

  const {id}=useParams();
  const per=geodata[id];

  const history=useHistory();
  return (
    <Base title={"Geography"}>
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
          onClick={() => history.push("/geography")}
        >
          Back
        </button>
        </div></Base>
  );
}
