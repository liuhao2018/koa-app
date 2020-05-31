class UserController {
    login(ctx) {
        console.log('login successful');
        ctx.body = 'Hello Koa';
    }
}

module.exports = new UserController();