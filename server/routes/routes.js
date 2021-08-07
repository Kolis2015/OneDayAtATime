const BlogController = require('../controller/Blog.controller');
const RatingController = require('../controller/Rating.controller');
const UserController = require('../controller/User.controller');

module.exports = (app) => {
    app.get('/api/Blog', BlogController.getAll);
    app.post('/api/Blog', BlogController.create);
    app.get('/api/Blog/:id', BlogController.getOne);
    app.put('/api/Blog/:id', BlogController.update);
    app.delete('/api/Blog/:id', BlogController.delete);

    app.get('/api/Rating', RatingController.getAll);
    app.get('/api/Rating/average/:link', RatingController.getAverage); // get average rating of a link across all users
    app.post('/api/Rating', RatingController.create);
    app.get('/api/Rating/:id', RatingController.getOne);
    app.put('/api/Rating/:id', RatingController.update);
    app.delete('/api/Rating/:id', RatingController.delete);

    //app.get('/api/User', UserController.getAll);
    app.post('/api/User', UserController.create);
    //app.get('/api/User/:id', UserController.getOne);
    app.post('/api/User/login', UserController.login);
    app.post('/api/User/logout', UserController.logout);
    //app.put('/api/User/:id', UserController.update);
    //app.delete('/api/User/:id', UserController.delete);
}