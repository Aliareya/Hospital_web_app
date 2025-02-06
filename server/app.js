import express from 'express';
import cors from "cors";

const app = express();
const data = [{id:1 , name : 'Alireza'}]

app.use(cors({
  origin: "https://areyaeditor.netlify.app/",
})); 

app.use(express.json()); 

app.get('/', (req, res) => {
  res.json(data);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
