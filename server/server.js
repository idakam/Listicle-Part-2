import express from "express";
import "./config/dotenv.js";
import treesRouter from "./routes/trees.js";

const app = express();

app.use("/public", express.static("./public"));

app.use("/scripts", express.static("./src/scripts"));

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      '<h1 style="text-align: center; margin-top: 50px;">Listicle API</h1>'
    );
});

app.use("/trees", treesRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
