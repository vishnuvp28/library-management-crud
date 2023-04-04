import { Base } from "./Base";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useParams } from "react-router-dom/cjs/react-router-dom";


const userSchemaValidation = yup.object({
  id: yup.string().required("Enter a vlaid ID"),
  name: yup.string().required("Please fill in your name..."),
  image: yup.string().url().required("Enter a valid image"),
  author: yup.string().required("please enter the author name"),
  content: yup.string().required("Please enter a valid content"),
  year: yup.string().required("Please enter the year").min(4,"It is not a valid year")
})

export function Tamiledit({ tamil, setTamil }) {


  const { id } = useParams();

  const history = useHistory();

  const selectedUser = tamil.find((per) => per.id === id);
console.log("selectedUser",selectedUser);

  const { values, handleChange, handleSubmit,handleBlur, errors,touched } = useFormik({
    initialValues: {
      id:selectedUser.id,
      name: selectedUser.name,
      image: selectedUser.image,
      author: selectedUser.author,
      content: selectedUser.content,
      year: selectedUser.year,
    },
    validationSchema: userSchemaValidation,
    onSubmit: (newBook) => {
      console.log(newBook)
      editNewBook(newBook)
    }
  });

  const editNewBook = (newBook) => {
    const editIndex = tamil.findIndex((per) => per.id === id);
    console.log(editIndex);
    tamil[editIndex] = newBook;
     setTamil([...tamil])
    history.push('/tamil')
  }


  return (
    <Base title={"Tamil"}>

      <Form className='addnew' onSubmit={handleSubmit}>


        <FloatingLabel controlId="floatingInput" label="ID" className="mb">
          <Form.Control type="text" placeholder="Id" name="id" value={values.id} onBlur={handleBlur}

            onChange={handleChange} />
        </FloatingLabel>
        {touched.id && errors.id ? <p style={{ color: "red" }}>{errors.id}</p>:""}
        <FloatingLabel controlId="floatingPassword" label="Name" className="mb">
          <Form.Control type="text" placeholder="Name" name="name" value={values.name} onBlur={handleBlur}

            onChange={handleChange} />
        </FloatingLabel>
        {touched.name && errors.name ? <p style={{ color: "red" }}>{errors.name}</p>:""}

        <FloatingLabel controlId="floatingPassword" label="Image" className="mb">
          <Form.Control type="text" placeholder="image" name="image" value={values.image} onBlur={handleBlur}
            onChange={handleChange} />
        </FloatingLabel>

        {touched.image && errors.image ? <p style={{ color: "red" }}>{errors.image}</p>:""}


        <FloatingLabel controlId="floatingPassword" label="Author" className="mb">
          <Form.Control type="text" placeholder="Author" name="author" value={values.author} onBlur={handleBlur}
            onChange={handleChange} />
        </FloatingLabel>

        {touched.author && errors.author ? <p style={{ color: "red" }}>{errors.author}</p>:""}


        <FloatingLabel controlId="floatingPassword" label="Content" className="mb">
          <Form.Control type="text" placeholder="Content" name="content" value={values.content} onBlur={handleBlur}
            onChange={handleChange} />
        </FloatingLabel>

        {touched.content && errors.content ? <p style={{ color: "red" }}>{errors.content}</p>:""}

        <FloatingLabel controlId="floatingPassword" label="Year" className="mb">
          <Form.Control type="number" placeholder="Year" name="year" value={values.year} onBlur={handleBlur}
            onChange={handleChange} />
        </FloatingLabel>

        {touched.year && errors.year ? <p style={{ color: "red" }}>{errors.year}</p>:""}

        <Button
          type="submit"
        >Add</Button>
      </Form>

    </Base>
  );
}
