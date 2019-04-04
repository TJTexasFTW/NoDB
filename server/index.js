const express = require("express");
const app = express();
const PORT = 6060;
const cont = require("./controller")

app.use(express.json());        //allows use of req.body

// app.get("/api/users",/", (request, response) => {
    // response.status(200).json(users) 
// });

// app.get("/api/users", getUsers);
app.post("/api/users", cont.create);
// app.put("/api/users", putUsers);
app.delete("/api/users/:id", cont.delete);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));