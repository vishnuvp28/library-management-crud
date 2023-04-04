import { Base } from "./Base";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";



export function Geography({geo,setGeo}) {
  const deleteUser=(idx)=>{
    const alterList=geo.filter((per)=>per.id !== idx);
    setGeo(alterList)
  }
  const history=useHistory();

  return (
    <Base title={"Geography"}>
      {/* <div className="card" > */}
      {" "}
     
      <div className="mastercrd">

        {geo.map((per,idx)=>(
          <div className="card" key={idx}><br></br>
        <Card style={{ width: "18rem" }} key={idx}>
          <Card.Img variant="top" className="img" src={per.image} />
          <Card.Body>
            <Card.Title>{per.name}</Card.Title>
            <Card.Text>
            {per.author}

            </Card.Text>
           
            <Button variant="primary"  onClick={()=>history.push(`/geoview/${idx}`)}>
              View
            </Button>{" "}
            <Button variant="success"  onClick={()=>history.push(`/geoedit/${per.id}`)}>
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
         <br></br> <Button variant="dark" className="add" onClick={() => history.push("/geoadd")}>
        Add
      </Button>{" "}
      <Button variant="dark" className="add" onClick={() => history.push("/library")}>
        Back
      </Button>
      <br></br>
      <br></br>
      <br></br>

    </Base>
  );
}
