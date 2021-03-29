const express = require("express");
const bodyParser = require("body-parser");

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route("/").all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  next();
});
leaderRouter.get("/", (req, res, next) => {
  res.end("Will send all the leaders to you!");
});

leaderRouter.post("/", (req, res, next) => {
  res.end(
    "Will add the leader: " +
      req.body.name +
      " with details: " +
      req.body.description
  );
});
leaderRouter.put("/", (req, res, next) => {
  res.statusCode = 403;
  res.end("PUT operation not supported on /leads");
});
leaderRouter.delete("/", (req, res, next) => {
  res.end("Deleting all leaders");
});

leaderRouter.get("/:leadId", (req, res, next) => {
  res.end("Will send details of the leader: " + req.params.leadId + " to you!");
});

leaderRouter.post("/:leadId", (req, res, next) => {
  res.statusCode = 403;
  res.end("POST operation not supported on /leads/" + req.params.leadId);
});
leaderRouter.put("/:leadId", (req, res, next) => {
  res.write("Updating the leader: " + req.params.leadId + "\n");
  res.end(
    "Will update the leader: " +
      req.body.name +
      " with details: " +
      req.body.description
  );
});
leaderRouter.delete("/:leadId", (req, res, next) => {
  res.end("Deleting leader: " + req.params.leadId);
});

module.exports = leaderRouter;
