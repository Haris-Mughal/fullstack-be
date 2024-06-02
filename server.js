import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

const childInfo = [
  {
    id: 1,
    name: "cerulean",
    year: 2000,
  },
  {
    id: 2,
    name: "fuchsia rose",
    year: 2001,
  },
  {
    id: 3,
    name: "true red",
    year: 2002,
  },
  {
    id: 4,
    name: "aqua sky",
    year: 2003,
  },
  {
    id: 5,
    name: "shims loco",
    year: 2004,
  },
  {
    id: 6,
    name: "blue turquoise",
    year: 2005,
  },
];

app.get("/", (req, res) => {
  res.send("Frontend!");
});

app.get("/api/childinfo", (req, res) => {
  res.send(childInfo);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
