var express = require("express");
var app = express();

const users = [
  {
    name: "john",
    password: "password1",
    profession: "teacher",
    id: 1,
  },
  {
    name: "james",
    password: "password2",
    profession: "librarian",
    id: 2,
  },
  {
    name: "todd",
    password: "password3",
    profession: "clerk",
    id: 3,
  },
  {
    name: "lloyd",
    password: "password4",
    profession: "clerk",
    id: 4,
  },
];

app.get("/listUsers", function (req, res) {
  return res.json(users);
});

app.delete("/deleteUser/:userId", function (req, res) {
  const id = req.params.userId;
  const indexToDelete = users.findIndex((p) => p.id == id);
  if (indexToDelete > -1) {
    users.splice(indexToDelete, 1);
  }
  return res.json(users);
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  // console.log("enviornmentVariable", process.env.TEST_ENV);
  console.log("Example app listening at http://%s:%s", host, port);
});
