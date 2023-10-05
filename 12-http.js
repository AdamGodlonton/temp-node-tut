const http = require('http')

const server = http.createServer((req, res)=>{

	console.log(req.url);

	// if(req.url === '/'){
	// 	res.end('welcome to our homepage')
	// }
	if(req.url === '/about'){
		res.end('Here is our short history')
	}

	res.end(`
	<h1>Ooops!</h1>
	<p>We cant seem to find what your looking for</p>
	<a href="/">back home</a>
	`)
})

server.listen(5000)