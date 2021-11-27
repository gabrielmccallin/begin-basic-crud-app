let begin = require('@architect/functions')

async function addOne (req) {
  let count = (req.session.count || 0) + 1
  let session = { count }
  let location = '/'
  return {
    statusCode: 200,
    session,
    location,
    body: JSON.stringify(session)
  }
}

exports.handler = begin.http.async(addOne)