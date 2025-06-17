   .......... * A Full Stack Application * ....... 
[ Using Express JS for backend and BootStrap for frontend ]

.......... * Branch # 1 : Basic_SetUp *.............
In This branch we did the basic installations.
Initialize the data base.
The folders/files structure is like this :
app.JS
init/data.jS
init/index.jS
models/listing.js
views/listings/edit.ejs
views/listings/index.ejs
views/listings/new.ejs
views/listings/show.ejs

.......... * Branch # 2 : Adding_style *.............
* Setting Up Boilerplate *
Installing ejs-mate, and requiring it.
Create   views/layouts/boilerplate.ejs and code like :
<body>
    <h1>WanderLust</h1>
    <div class="container">
        <%- body %>
    </div>
</body>
and in any other file to use it we write :
<% layout("/layouts/boilerplate") %>
Create (in main folder): public/css/style.css , working check.

* NavBar *
added : BootStrap in the boilerplate.ejs
created : views/includes/navbar.ejs
