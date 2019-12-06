const express = require('express')
const app = express()

app.use(express.static('./admin-blog'))

const port = process.env.PORT || 3000
module.exports = app.listen(port, function(err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
