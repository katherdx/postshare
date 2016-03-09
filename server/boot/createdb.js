var server = require('../server');
var ds = server.dataSources.MySQL;
 

var lbTables = ['post','share'];
//ds.automigrate(lbTables, function(er) {
ds.autoupdate(lbTables, function(er) {
  if (er) throw er;
  console.log('Loopback tables [' + lbTables + '] created in ', ds.adapter.name);
  //ds.disconnect();
});