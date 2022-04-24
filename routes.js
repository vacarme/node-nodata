const fs = require('fs')

function requestHandler(req, res) {
  const url = req.url
  const method = req.method
  if (url === '/') {
    res.write('<html>')
    res.write('<head><title>Messagr</title></head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="inputName"><button type="submit">Send</button></form></body>')
    res.write('</html>')
    return res.end()
  }

  if (url === '/message' && method === 'POST') {
    const body = []
    req.on('data', (chunk) => {
      console.log(chunk)
      body.push(chunk)
    })
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      const message = parsedBody.split('=')[1]
      fs.writeFile('message.txt', message, err => {
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
      })
    })
  }
}

exports.handler = requestHandler // module.exports.handler = ...
