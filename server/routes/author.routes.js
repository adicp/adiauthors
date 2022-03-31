const AuthorController = require('../controllers/author.controller');  //Import the code from Code Block 1
module.exports = (app) => {
    app.get('/', AuthorController.index);
    app.post('/', AuthorController.createAuthor);
}