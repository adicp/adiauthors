import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import CancelButton from './CancelButton';


const NewAuthor = (props) => {
    const [authorName, setAuthorName] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/new",{
            name: authorName
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/")
            })
            .catch((err) => {
                console.log(err.data)
            })
    }



    return(
        <div>
            <header>
            <h1> Favorite Authors</h1>
                <Link to = {"/"}>Home</Link>
                <p>Add a new author</p>
                <hr />
            </header>

            <form onSubmit = {handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type='text' value = {authorName} onChange = {(e) => setAuthorName(e.target.value)} />
                </div>

                <CancelButton /> 
                <input id = "submit" type="submit"/>
                
            </form>
        </div>
    )
}

export default NewAuthor;