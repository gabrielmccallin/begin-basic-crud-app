@app
begin-app

@http
get  /todos
get  /fast
get  /session
post /photo
post /todos/delete

@tables
data
  scopeID *String
  dataID **String
  ttl TTL