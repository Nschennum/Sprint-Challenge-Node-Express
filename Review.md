# Review Questions

## What is Node.js?
Node.js is a javascript framework environment that enables the use of JavaScript outside of a browser with the execution of applications. 
## What is Express?
Express is a framework that assists in the creation of backend creation and API calls via JavaScript. It is middleware that can read, convert, or change requests and responses, and orchestrate the initiaiton of the next server function. 
## Mention two parts of Express that you learned about this week.
Express makes creating backend software incredibly more simple. It allows access to a request object and a response object; accept the request, carry out funcitons, and return a response. Express can also convert data into JSON without a body parser (with stringify). 
## What is Middleware?
Middleware extends the functionality of our application. It is middle fucntions/frameworks that are more commonly run between receiving a request and sending a response, although
it can also be something that is run after the response is sent.
## What is a Resource?
It is something that can be accessed, managed, and/or supplied to the client via a HTTP request.
## What can the API return to help clients know if a request was successful?
Various status codes:
200-299 Successfull
300-399 Redirections
400-499 User errors
500-599 Server Errors
## How can we partition our application into sub-applications?
Express Routers based on types and feature of resourse. 
## What is CORS and why do we need it?
Cross-Origin Recourse Sharing. It allows outside sources to request information from our server, bridging built-in software protections. 
