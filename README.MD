create root folder
====================== Client =====================
create Client Folder
npx create-react-app memories

===================== Server ======================
create Server Folder
create index.js file
cd server
npm init -y
npm i body-parser cors express mongoose nodemon
add "type":"module" to package.json
change test script from test to start: "nodemon index.js"
create connection to mongodb
create routes folder