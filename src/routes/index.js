"use strict";

const api = require("./api");

module.exports.register = async server => {
  // api
  api.register( server );

  server.route({
    method: "GET",
    path: "/",
    handler: async (request,h) => {
      return "Hello Guys";
    }
  });
};
