var koa = require('koa');
var app = new koa();
// This function is a middleware, which gets called whenever our server gets a request
// The context of this generator is called context in Koa
// This context is used to access and modify the request and response objects
app.use(function*(){
    this.body = 'Hello World!';
});
// This function binds and listens for connections on the specified port
// Port is the only required parameter here. The callback function is executed, if the app runs successfully
app.listen(3000, function(){
    console.log('Server running on http://localhost:3000')
});