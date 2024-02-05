const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const costsRoutes = require("./routes/costsRoutes");

dotenv.config({ path: `./config.env` });

// process.on('uncaughException', (err) => {
//   console.log(err);
//   console.log(err.name, err.message);
//   process.exit(1);
// });

const app = express();

// app.enable("trust proxy");
app.use(express.json());
app.use(cors());
app.options("*", cors());

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully.'))
    .catch(err => console.error('MongoDB connection error:', err));


app.use("/api", costsRoutes);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});

// process.on("unhandledRejection", (err) => {
//   console.log(err.name, err.message);
//   console.log("unhandler rejection");
//   server.close(() => {
//     process.exit(1);
//   });
// });

// process.on("SIGTERM", () => {
//   console.log("SIGTERM RECEIVED , Shutting down gracefully");
//   server.close(() => {
//     console.log("process terminated!");
//   });
// });
