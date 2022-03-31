const Author = require('../models/author.model');  

module.exports.createAuthor = (request, response) => {
    Author.create(request.body)
        .then(author => response.json(author))
        .catch(err => response.json(err));
}

module.exports.getAllAuthors = (request, response) => {
    console.log("entered getAll");
    Author.find({})
        .then(authors => {
            console.log(authors); 
            response.json(authors);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}
module.exports.getEachAuthor = (request, response) => {
    console.log(request.params.id);
    console.log("entered geteach");
    Author.findOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err))
}
module.exports.updateEachAuthor = (request, response) => {
    console.log("entered update");
    console.log(request.body);
    console.log(request.params.id);
    Product.findOneAndUpdate({_id:request.params.id}, request.body, {new:true})
    .then(updatedAuthor => response.json(updatedAuthor))
    .catch(err => response.json(err))
}