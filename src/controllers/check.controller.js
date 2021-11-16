//create a router
const { request } = require("express");
const express = require("express");
const router = express.Router();





router.get("/", async function (req, res) {
    try {

        return res.status(200).send("check success");
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
});

module.exports = router;