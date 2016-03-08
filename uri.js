class Uri {
	constructor(protocol, hostname, port, host, pathname, search, hash) {
		
	}
	
	static parse(/*string*/uri) {
		var parser = document.createElement('a');
		//parser.href = "http://example.com:3000/pathname/?search=test#hash";
		parser.href = uri;
		return new Uri(parser.protocol  // => "http:"
			, parser.hostname // => "example.com"
			, parser.port     // => "3000"
			, parser.host     // => "example.com:3000"
			, parser.pathname // => "/pathname/"
			, parser.search   // => "?search=test"
			, parser.hash     // => "#hash"
		)
	}
}