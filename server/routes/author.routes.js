const AuthorController = require('../controllers/author.controller');  //Import the code from Code Block 1
module.exports = (app) => {
    // app.get('/', AuthorController.index);
    app.get('/', AuthorController.getAllAuthors);
    app.get('/:id', AuthorController.getEachAuthor);
    app.put('/edit/:id', AuthorController.updateEachAuthor);
    app.post('/new', AuthorController.createAuthor);
} 