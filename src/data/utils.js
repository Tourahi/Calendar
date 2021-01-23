"use strict";

const fs = require("fs-extra");
const { join } = require("path");

const loadSqlQueries = async folderName => {
  const filePath  = join( process.cwd(), "src", "data", folderName ); //path where the sql queries files '.sql' are stored
  const files     = await(fs.readdir(filePath)); // read all the files with the extensions
  const sqlFiles  = files.filter( f => f.endsWith( ".sql" ));
  const queries   = {};
  for( const sqlFile of sqlFiles ) {
    const query = fs.readFileSync( join( filePath , sqlFile ), { encoding: "UTF-8" } );
    queries[sqlFile.replace(".sql" , "")] = query;
  };
  return queries;
};

module.exports = {
  loadSqlQueries
};
