import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import CancelButton from './CancelButton';


const EditAuthors = (props) => {

    const navigate = useNavigate();

    const {id} = useParams();
    const [authorName, setAuthorName] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/"+ id)
            .then((res)=> {
                console.log(res);
                console.log(res.data);
                setAuthorName(res.data.name);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handleEdit = (e) => {
        e.preventDefault();

        axios.put("http://localhost:8000/edit/" + id, {
            name: authorName
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })

        
    }

    return (
        <div>
            <header>
                <h1>Favorite Authors</h1>
                <Link to = '/'>Home</Link>
                <p>Edit this author</p>
            </header>
            <form onSubmit={handleEdit} >
                <div>
                    <label>Name: </label>
                    <input type='text' value = {authorName} onChange = {(e) => setAuthorName(e.target.value)} />
                </div>
                <CancelButton /> 
                <input id = "submit" type="submit"/>
            </form>
        </div>
    )
}


export default EditAuthors;