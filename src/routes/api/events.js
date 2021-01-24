"use strict";


module.exports.register = async server => {
    server.route({
      method: "GET",
      path: "/api/events",
      handler: async request => {
        try {
          const db = request.server.plugins.sql.client;

          const userId = "USER1"; // For testing
          const res  = await db.events.getEvents( userId );
          return res.recordset;
        } catch (e) {
          console.log(e);
        }
      }
    });
};
