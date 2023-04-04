import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Base } from "./Base";

export function Science({science,setScience}) {
  const deleteUser=(idx)=>{
    const alterList=science.filter((per)=>per.id !== idx);
    setScience(alterList)
  }
  const history=useHistory();

  return (

    <Base title={"Science Fiction"}>
     {" "}
  
      <div className="mastercrd">

  {science.map((per,idx)=>(
          <div className="card" key={idx}><br></br>
        <Card style={{ width: "18rem" }} key={idx}>
          <Card.Img variant="top" className="img" src={per.image} />
          <Card.Body>
            <Card.Title>{per.name}</Card.Title>
            <Card.Text>
            {per.author}

            </Card.Text>
         
            <Button variant="primary" onClick={()=>history.push(`/scienceview/${idx}`)}>
              View
            </Button>{" "}
            <Button variant="success" onClick={()=>history.push(`/scienceedit/${per.id}`)}>
              Edit
            </Button>{" "}
            <Button variant="danger" onClick={()=>deleteUser(per.id)}>
             Delete
            </Button>
          </Card.Body>
        </Card>
        </div>
        ))}
        </div> <br></br>   <Button variant="dark" className="add" onClick={() => history.push("/scienceadd")}>
        Add
      </Button>{" "}
      <Button variant="dark" className="add" onClick={() => history.push("/library")}>
        Back
      </Button><br></br><br></br><br></br></Base>
  );
}
