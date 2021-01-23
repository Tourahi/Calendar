"use strict";

const events = require("./events");
const sql    = require("mssql");

const client = async (server , conf) = {
  let pool = null;
  const closePool = async () => {
    try {
      await pool.close();
      pool = null;
    }catch(e) {
      pool = null;
      console.log( e );
    }
  };
  const openPool = async () => {
    try {
      await pool = await sql.connect( conf );
      pool.on( "error", async err => {
        console.log( err );
        await closePool();
      });
    } catch (e) {
      console.log( e );
      pool = null;
    }
  };
  const getConnection = async () => {
    if(pool) return pool;
    openPool();
    return pool;
  };

  return {
      events: await events.register( { sql, getConnection } )
  };
};

module.exports = client;
