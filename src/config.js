"use strict";

const dotenv = require( "dotenv" );
const assert = require('assert');
dotenv.config();
const {
  PORT,
  HOST,
  HOST_URL,
  COOKIE_ENCRYPT_PWD,
  SQL_USER,
  SQL_PASS,
  SQL_DATABASE,
  SQL_SERVER,
  SQL_ENCRYPT,
  OKTA_ORG_URL,
  OKTA_CLIENT_ID,
  OKTA_CLIENT_SECRET
} = process.env;

const sqlEncrypt = rocess.env.SQL_ENCRYPT == "true";

assert( PORT, "PORT is required" );
assert( HOST, "HOST is required" );
assert( SQL_USER, "SQL_USER is required" );
assert( SQL_PASS, "SQL_PASS is required" );
assert( SQL_DATABASE, "SQL_DATABASE is required" );
assert( SQL_SERVER, "SQL_SERVER is required" );

module.exports = {
	port: PORT,
	host: HOST,
	url: HOST_URL,
	cookiePwd: COOKIE_ENCRYPT_PWD,
	sql: {
		server: SQL_SERVER,
		database: SQL_DATABASE,
		user: SQL_USER,
		password: SQL_PASSWORD,
		options: {
			encrypt: sqlEncrypt,
			enableArithAbort: true
		}
	},
	okta: {
		url: OKTA_ORG_URL,
		clientId: OKTA_CLIENT_ID,
		clientSecret: OKTA_CLIENT_SECRET
	}
};
