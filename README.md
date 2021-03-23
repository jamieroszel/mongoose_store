# myexpressboilerplate

# BOILERPLATE DIRECTIONS

- clone with command `npx degit githubusername/githubreponame#branchname projectName`

- cd into new project folder

- run `npm install` to install dependencies

- rename template.env to .env

- make sure to replace MONGODB_URL with a working Mongo URL

- enjoy!

# Organization
## controllers
* Controller functions get the requested data from the models, create an HTML page displaying the data, and return it to the user to view in the browser.
* functions that separate out the code to route requests from the code that actually processes requests.
## db
## models
## public
## routes
* URL-handling code
* A route is a section of Express code that associates an HTTP verb (GET, POST, PUT, DELETE, etc.), a URL path/pattern, and a function that is called to handle that pattern.
* Routes forward the supported requests (and any information encoded in request URLs) to the appropriate controller functions.
## views
* the views folder holds the HTML that will be returned to the client URL request 
* this will be an HTML template that also uses ejs to dynamically render pages for the user