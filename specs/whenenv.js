var we = require('em')('../lib/whenenv.js');

we.node(function(){
  console.log('whenEnv: running in node');
});

we.browser(function(){
  alert('whenEnv: running in browser!')
})
