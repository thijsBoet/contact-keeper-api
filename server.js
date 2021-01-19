const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Contact Keeper Server started at http://localhost:${PORT}`));