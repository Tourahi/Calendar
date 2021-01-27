"use strict";


const sql = require("./sql");
const auth = require("./auth");

const handlebars = require('handlebars');
const inert = require("@hapi/inert");
const vision = require("@hapi/vision");

module.exports.register = async server => {
  await server.register( [ auth , inert, vision, sql ] );

  server.views({
    engines: { hbs : handlebars },
    relativeTo: __dirname,
    path: "../views",
    layoutPath: '../views/layout',
    layout: 'main',
    //helpersPath: 'views/helpers',
    //partialsPath: 'views/partials'
  });
};
