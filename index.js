const express = require('express')
const app = express()
const port = 3000
let userinput = '';

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML 5 Boilerplate</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
	  <form method="GET" class="example" action="/search">
  <input type="text" placeholder="Search.." id='search' name="search" value="">
  <button type="submit">Search</button>
  <p>the text being types is </p>
</form>
  </body>
</html>
  `)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



app.get('/search', function (req, res) {
  res.send(`  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML 5 Boilerplate</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
  <p>search page, ${req.query.search} </p>
  </body>
</html>`)
})
