module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function
    response.json({     // This is where we're setting the API's response to the requesting client
       message: "Hello World"
    });
}
module.exports.createAuthor = (request, response) => {
    // Mongoose's "create" method is run using our Person model to add a new person to our db's person collection.
    // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
    Author.create(request.body) //This will use whatever the body of the client's request sends over
        .then(author => response.json(author))
        .catch(err => response.json(err));
}