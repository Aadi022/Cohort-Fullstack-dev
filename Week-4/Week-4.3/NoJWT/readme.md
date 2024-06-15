
Creating a course selling website.
We are implementing a course selling app. First we set up the cluster- Course
It needs to support two types of users-
1) Admins 
2) Users

Admins are allowed to sign up and create courses
Users are allowed to sign up, view courses, purchaase courses
This in the real world would translate to an app like udemy

This one  doesn't use authentication in the right way. We will learn to do that in the later assignments.
For this one, in every authenticated requests, you need to send the username and password in the headers (and not the jwt).
Hence, this assign doesn't have a sign in route.

You need to use mongodb to store all the data persistently.

USER FUNCTIONS-
1) User can sign up(Creation of new account) POST
2) User can get list of all available courses on website GET 
3) User can purchase a course POST
4) Can get a list of all courses purchased GET

ADMIN FUNCTIONS-
1) Create a new admin account POST
2) Create new course POST
3) Admin can get all courses available on the website get

For both admin and user functions, after signing up, we'll have to pass the username and password in header section and check if
its the right username and password. This will be done for 2,3,4 in user functions and 2,3 in header functions. We will do this 
with the help of middlewares.