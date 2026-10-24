import express from "express";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";
import {ApiError} from "./utils/ApiError.js";

const app = express();
const PORT = Number(process.env.PORT) || 4000;

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Weblinic API is running",
    timestamp: new Date().toISOString()
  });
});

app.get("/api/health/error-test", () => {
  throw new ApiError(404, "Test error handler");
});

app.get("/",(_,res)=>{
  res.status(200).send(
    console.log("Home Page")
  )
})

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Weblinic API running at http://localhost:${PORT}`);
});
