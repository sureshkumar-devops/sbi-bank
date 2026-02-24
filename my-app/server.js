const express = require("express");
const path = require("path");
const fs = require("fs"); // Import file system module
const app = express();

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "index.html");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading file");
    }
    // Replace the placeholder with the environment variable
    const version = process.env.APP_VERSION || "1.0.0";
    const modifiedHtml = data.replace("{{VERSION}}", version);
    res.send(modifiedHtml);
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});




// app.get("/", (req, res) => {
//   //res.send("GitOps + ArgoCD Image Updater Demo 🚀");
//   res.sendFile(path.join(__dirname, "index.html"));
// });

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });


// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send(`Hello from Node app — version: ${process.env.APP_VERSION}`);
// });

// app.listen(PORT, () => console.log(`Listening on ${PORT}`));