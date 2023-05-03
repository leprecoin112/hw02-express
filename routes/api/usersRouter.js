const express = require("express");

const { userValidationSchemas } = require("../../utils/validation");
const { validateBody } = require("../../utils");
const ctrl = require("../../controllers/users.controllers");

const router = express.Router();

router.post(
  "/register",
  validateBody(userValidationSchemas.addSchema),
  ctrl.register
);

router.post(
  "/login",
  validateBody(userValidationSchemas.addSchema),
  ctrl.login
);

module.exports = router;
