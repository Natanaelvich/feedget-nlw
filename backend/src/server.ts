import express from "express";
import { routes } from "./routes";
import cors from "cors";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger/swagger_output.json";

import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const app = express();
app.use(cors());
app.use(limiter);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.get("/swagger.json", (_, res) => {
  // #swagger.ignore = true

  return res.json(swaggerFile);
});

app.use(routes);

app.listen(3333).on("listening", () => {
  console.log("Running in port 3333");
});
