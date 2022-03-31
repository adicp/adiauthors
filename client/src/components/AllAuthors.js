import React, {useState} from 'react';
import axios from 'axios';
import {useEffect} from 'react';
import { Link } from 'react-router-dom';


const AllAuthors = (props) => {
    const [authorsList, setAuthorsList] = useState([]);

    useEffect (() => {
        axios.get('http://localhost:8000')
            .then((response) => {
                console.log(response);
                console.log(response.data);
                setAuthorsList(response.data);
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    const deleteAuthor = (authorId) => {
        axios.delete("http://localhost:8000/" + authorId)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setAuthorsList(authorsList.filter((author, index)=> author._id !== authorId))
            })
            .catch((err)=>{
                console.log(err)
            })
    }


    return(
        <div>
            <header>
                <h1> Favorite Authors</h1>
                <Link to = {'/new'}>Add a Favorite Author</Link>
            </header>

                {
                    authorsList.length> 0 && authorsList.map((author, index) => (
                        <div key={index}>
                            <Link to = {`/${author._id}`}>
                            <p>{author.name}</p>
                            </Link>
                            <Link to = {`/edit/${author._id}`}>Edit</Link>
                            <button onClick = {() => deleteAuthor(author._id)}>Delete</button>
                        </div>

                    ) )
                }
                
        </div>
    )
}

export default AllAuthors;

