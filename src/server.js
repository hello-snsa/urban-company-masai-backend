//config data

const connect = require("./config/connectionDb");

//connect to express
const express = require("express");
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors());
app.use(cors());

// Controller

const professionalController = require("./controllers/professional.controller");
const userController = require("./controllers/user.controller");
const servicesController = require("./controllers/services.controller");
const serviceCardController = require("./controllers/serviceCard.controller");
const serviceProfessionalController = require("./controllers/serviceProfessional.controller");
const professionalProfileController = require("./controllers/professionalProfile.controller");


app.use("/professional", professionalController);
app.use("/users", userController);
app.use("/services", servicesController);
app.use("/serviceCard", serviceCardController);
app.use("/serviceProfessional", serviceProfessionalController);
app.use("/professionalProfile", professionalProfileController);


app.use(function (req, res, res, next) {
  return res.status(404).send("No Route found. Server is still running.");
});

const PORT = process.env.PORT || 8080;
const start = async () => {

  app.listen(PORT, async () => {
    await connect();

    console.log("server connected. port: ", PORT)
  })
}

module.exports = start;