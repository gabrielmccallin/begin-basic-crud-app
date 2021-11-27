let begin = require('@architect/functions')

async function addOne (req) {
  let count = (req.session.count || 0) + 1
  let session = { count }
  let location = '/'
  return {
    statusCode: 307,
    session,
    location
  }
}

exports.handler = begin.http.async(addOne)