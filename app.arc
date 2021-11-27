@app
begin-app

@http
get  /todos
get  /fast
post /photo
post /todos/delete

@tables
data
  scopeID *String
  dataID **String
  ttl TTL