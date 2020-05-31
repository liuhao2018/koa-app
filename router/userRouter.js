const userController = require('../controller/userController');
const Router = require('@koa/router');

const userRouter = new Router();

userRouter.post('/users/user/login',userController.login);

module.exports = userRouter;