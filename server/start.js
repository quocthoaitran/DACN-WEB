const express = require('express')
const app = express()
const path = require('path')

const port = 5000;

app.use( express.static( `${ __dirname }/../build` ) );

app.get('*', (req, res)=>{
	res.sendFile(path.join(__dirname, '../build/index.html'));
})

app.listen(port, '0.0.0.0',
	() => {
		console.log(`Example app listening on port ${ port }!`)
		console.log(`http://localhost:${ port }`);
	}
)