var we = require('em')('../lib/whenenv.js');

var nid = we.node(function(){
  console.log('whenEnv: running in node');
  return -1;
});

var cid = we.browser(function(){
  alert('whenEnv: running in browser!');
  return 1;
});

console.log(nid,cid);


