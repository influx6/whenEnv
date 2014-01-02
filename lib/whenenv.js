require('em')('whenEnv',function(em){
        
        var isBrowser = (function(){
	        return (((typeof window !== 'undefined' && !!navigator && !!document) || 
	        (typeof opera !== 'undefined' && opera.toString() === "[object Opera]")) ?
	         true : false);
	    })(),
	    isNode = (function(){
		return ((typeof process !== 'undefined' && typeof module !== 'undefined') 
		&& (process['title'] === 'node' && typeof module['exports'] !== 'undefined')
		&& (typeof process['execPath'] !== 'undefined' && !!process['execPath'].match(/node$/)));
	    })(),
	    apply = function(fn){
	        return function(){
	           return fn.apply(this,arguments);
	        }
	    }
	    doWhen = function(state,fn){
	        if(!!state) return fn.call(this,state);
	        return null;
	    };   
	
	this.exports = {
	   node: function(fn){
	        return doWhen(isNode,fn);
	   },
	   browser: function(fn){
	        return doWhen(isBrowser,fn);
	   }
	};
	
},this);
