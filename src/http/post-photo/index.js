let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = async function post (req) {
  let photo;
  try {
    photo = arc.http.helpers.bodyParser(req) // Base64 decodes + parses body
  } catch {
    return {
      statusCode: 400,
      headers: {
        'content-type': 'application/json; charset=utf8',
        'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
      },
      body: "😢 Bad request"
    }
  }
  photo.created = photo.created || Date.now()
  await data.set({
    table: 'photos',
    ...photo
  })
  return {
    statusCode: 200,
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: "✊ Photo saved"
  }
}
