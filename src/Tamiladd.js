import { useState } from "react";
import { Base } from "./Base";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useHistory } from "react-router-dom";





export function Tamiladd({ tamil, setTamil }) {
  const history = useHistory();


  const [id,setId]=useState("");
  const [name,setName]=useState("");
  const [img,setImg]=useState("");
  const [author,setAuthor]=useState("");
  const [content,setContent]=useState("");
  const [year,setYear]=useState("");

  const addNewBook = () =>{
    const newBook={
      id,
      name,
      img,
      author,
      content,
      year,
    }
    console.log(newBook)
    setTamil([...tamil,newBook])
  history.push('/tamil')
  }
 

  return (
    <Base title={"Tamil Add book"}>
      <div >
             <div className='addnew'>
        

        <FloatingLabel controlId="floatingInput" label="ID" className="mb">
          <Form.Control type="text" placeholder="Id"
           
              onChange={(event)=>setId(event.target.value)} />
        </FloatingLabel>
  
        <FloatingLabel controlId="floatingPassword" label="Name" className="mb">
          <Form.Control type="text"    placeholder="Name"
            
              onChange={(event)=>setName(event.target.value)} />
        </FloatingLabel>
             
        <FloatingLabel controlId="floatingPassword" label="Img" className="mb">
          <Form.Control type="url"  placeholder="Img"
             
              onChange={(event)=>setImg(event.target.value)} />
        </FloatingLabel>
  
  
        <FloatingLabel controlId="floatingPassword" label="Author" className="mb">
          <Form.Control type="text" placeholder="Author"
            
              onChange={(event)=>setAuthor(event.target.value)} />
        </FloatingLabel>
  
  
        <FloatingLabel controlId="floatingPassword" label="Content" className="mb">
          <Form.Control type="text"   placeholder="Content"
             
              onChange={(event)=>setContent(event.target.value)} />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Year" className="mb">
          <Form.Control type="number"   placeholder="Year"
             
              onChange={(event)=>setYear(event.target.value)} />
        </FloatingLabel>
            

                <button
                onClick={addNewBook}
                >Add</button>
        </div>
        </div>
    </Base>
  );
}
