import { Base } from "./Base";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";

export function Tamil({tamil,setTamil}) {

  const deleteUser=(idx)=>{
    const alterList=tamil.filter((per)=>per.id !== idx);
    setTamil(alterList)
  }
  const history=useHistory();

  return (
    <Base title={"Tamil"}>
     
     
      <div className="mastercrd">
        {tamil.map((per,idx)=>(
          <div className="card" key={idx} idx={idx}><br></br>
        <Card style={{ width: "18rem" }} key={idx}>
          <Card.Img variant="top" className="img" src={per.image} />
          <Card.Body>
            <Card.Title>{per.name}</Card.Title>
            <Card.Text>
             {per.author}
            </Card.Text>
           
            <Button variant="primary" onClick={()=>history.push(`/tamilview/${idx}`)}>
              View
            </Button>{" "}
            <Button variant="success" onClick={()=>history.push(`/tamiledit/${per.id}`)}>
              Edit
            </Button>{" "}
            <Button variant="danger" onClick={()=>deleteUser(per.id)}>
             Delete
            </Button>
          </Card.Body>
        </Card>
        </div>
        ))}
          </div>
          <br></br> <Button variant="dark" className="add" onClick={() => history.push("/tamiladd")}>
        Add
      </Button>{" "}
      <Button variant="dark" className="add" onClick={() => history.push("/library")}>
        Back
      </Button><br></br><br></br><br></br>
    </Base>
  );
}


