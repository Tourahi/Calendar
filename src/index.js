"use strict";
const server  = require("./server");
const conf    = require("./config");

const runServer  = async (conf) => {
  try {
    const app = await server(conf);
    await app.start();
    console.log(`Server running at http://${ conf.host }:${ conf.port }`);
  } catch (e) {
    console.log("Start Up error", e);
  }
};

runServer(conf);
