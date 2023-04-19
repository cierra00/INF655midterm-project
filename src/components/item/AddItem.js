//import React,{useState} from 'react';
import Card from '../shared/Card';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function AddTask({handleAdd}) {
   /* const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handleTitleChange = (e)=> {
        setTitle(e.target.value);
    }
    const handleDescriptionChange = (e)=> {
        setDescription(e.target.value);
    }
    const handleSubmit =(e)=> {
        e.preventDefault();
        const newItem = {
            title, description,
            
        }
        handleAdd(newItem);
        setTitle("");
        setDescription("")
    } */

    const formik = useFormik({
      initialValues:{
        title: "",
        description: ""
      },
      validationSchema: Yup.object({
        title: Yup.string().max(12, "Title cannot exceed 12 characters").required("Header field cannot be empty"),
        description: Yup.string().max(20,"Title cannot exceed 20 characters").required("Description field cannot be empty")
      }),
      onSubmit: (values)=> {
        handleAdd(values);
      }
    });
   
  return (
    <div>
      <Card><form onSubmit={formik.handleSubmit}>
        <h2>Add Task</h2>
        <div className="inputBox">
            <div className="input_row">
                <label htmlFor="title" 
                 className={`label ${
                  formik.errors.title && formik.touched.title  ? "error" : ""
                  }`}
                  >
                    {formik.errors.title ? formik.errors.title : "Header"}
                    </label>
                <input type="text" 
                name="title" 
                id="title" //value={title}
                className="input" 
                placeholder="Item Title" 
                //onChange={handleTitleChange}
                onChange = {formik.handleChange}/>
                
            </div>
            <div className="input_row">
                <label htmlFor="description" className={`label ${
                  formik.errors.description && formik.touched.description  ? "error" : ""
                  }`}
                  >
                    {formik.errors.description ? formik.errors.description : "Description"}</label>
                <input type="text" name="description"// value={description} 
                id="description" className="input" placeholder="Item Description"
               // onChange={handleDescriptionChange}
                onChange = {formik.handleChange}/>
            </div>
        </div>
        <button className="btn" type="submit">Add Task</button>
        </form>
      </Card>
    </div>
  )
}
