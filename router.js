function router(handle,pathname,response,request){
	console.log('About:'+pathname);
	if  (typeof handle[pathname]  ===  'function')  {
        handle[pathname](response,request);  }  
    else  {
        console.log("No request handler found for "  + pathname);  
        response.writeHead(200,{'Content-Type':'text/plain'});
        response.write('404 not found');
        response.end();
    }
}

exports.router = router;