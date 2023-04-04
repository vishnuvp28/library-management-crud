import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import { Base } from "./Base";
import { useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import * as yup from "yup";
import { useFormik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";


const userSchemaValidation=yup.object({
  id:yup.string().required("please enter the valid id"),
  name:yup.string().required("please enter the valid name"),
  image:yup.string().url().required("pleade enter the valid image"),
  author:yup.string().required("pleade enter the valid author"),
  content:yup.string().required("pleade enter the valid content"),
  year:yup.string().required("pleade enter the valid year"),

})

export function Bioedit({ bio,setBio }) {

  const {id}=useParams();
  const history=useHistory();

  const selectedUser = bio.find((per)=>per.id===id)

  const{values,handleSubmit,handleBlur, handleChange,touched,errors}=useFormik({
    initialValues:{
        id : selectedUser.id,
        name : selectedUser.name,
        image: selectedUser.image,
        author: selectedUser.author,
        content: selectedUser.content,
        year: selectedUser.year,
      },
      validationSchema: userSchemaValidation,
        onSubmit : (newBook)=>{
          console.log(newBook)
          editNewBook(newBook)
        }
        
       
  })
  const editNewBook=(newBook)=>{
    const editIndex=bio.findIndex((per)=>per.id===id)
    bio[editIndex]=newBook;
    setBio([...bio])
     history.push("/biography")
  }


  return (
    <Base title={"biography"}>
    <Form className='addnew' onSubmit={handleSubmit}>
              <FloatingLabel controlId="floatingInput"label="id" className="mb" >
        <Form.Control type="text" placeholder="id" name="id" value={values.id} onBlur={handleBlur} onChange={handleChange}
        />
      </FloatingLabel>
      {touched.id && errors.id ? <p style={{ color: "red" }}>{errors.id}</p>:""}

      <FloatingLabel controlId="floatingPassword" label="name" className="mb">
        <Form.Control type="text" placeholder="name" name="name" value={values.name} onBlur={handleBlur} onChange={handleChange}/>
      </FloatingLabel>
      {touched.name && errors.name ? <p style={{ color: "red" }}>{errors.name}</p>:""}

      <FloatingLabel controlId="floatingPassword" label="image" className="mb">
        <Form.Control type="text" placeholder="image" name="image"value={values.image} onBlur={handleBlur} onChange={handleChange}/>
      </FloatingLabel>      
        {touched.image && errors.image ? <p style={{ color: "red" }}>{errors.image}</p>:""}

      <FloatingLabel controlId="floatingPassword" label="author" className="mb">
        <Form.Control type="text" placeholder="author"name="author" value={values.author} onBlur={handleBlur} onChange={handleChange}/>
      </FloatingLabel>
      {touched.author && errors.author ? <p style={{ color: "red" }}>{errors.author}</p>:""}

      <FloatingLabel controlId="floatingPassword" label="content" className="mb">
        <Form.Control type="text" placeholder="content" name="content" value={values.content} onBlur={handleBlur} onChange={handleChange}/>
      </FloatingLabel>
      {touched.content && errors.content ? <p style={{ color: "red" }}>{errors.content}</p>:""}

      <FloatingLabel controlId="floatingPassword" label="year" className="mb">
        <Form.Control type="text" placeholder="year" name="year" value={values.year} onBlur={handleBlur} onChange={handleChange}/>
      </FloatingLabel>
      {touched.year && errors.year ? <p style={{ color: "red" }}>{errors.year}</p>:""}

      <Button
          type="submit"
        >Add</Button>
      </Form>

      </Base>
  );
}
