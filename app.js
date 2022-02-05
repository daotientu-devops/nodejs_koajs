var koa = require('koa');
var app = new koa();
// This function is a middleware, which gets called whenever our server gets a request
// The context of this generator is called context in Koa
// This context is used to access and modify the request and response objects
/**
 * Generators
 * Used a function*() notation to pass a callback to app.use()
 * Koa is an object, which contains an array of middleware generator functions, all of which are composed and executed in a stack-like manner upon each request
 * Koa also implements downstreaming followed by upstreaming of control flow
 */
app.use(function*(next){
    // do something before yielding to next generator function
    // in line which will be 1st event in downstream
    console.log("1");
    yield next;
    // do something when the execution returns upstream, this will be last event in upstream
    console.log("2");
});
app.use(function*(next){
    // This shall be 2nd event downstream
    console.log("3");
    yield next;
    // This would be 2nd event upstream
    console.log("4");
});
app.use(function*(){
    // Here it would be last function downstream
    console.log("5");
    // Set response body
    this.body = "Hello Generators";
    // First event of upstream (from the last to first)
    console.log("6");
});
// This function binds and listens for connections on the specified port
// Port is the only required parameter here. The callback function is executed, if the app runs successfully
app.listen(3000, function(){
    console.log('Server running on http://localhost:3000')
});