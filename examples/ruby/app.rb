require 'sinatra'
require 'json'

set :port, (ENV["PORT"] or 8000)
set :bind, '0.0.0.0'

=begin
@api {get} /hello/{name} Prints "Hello {name}"
@apiName HelloWorld
@apiParam (Url) {String} name the name to print
@apiSuccess (200) {String} message the hello {name} message
=end
get '/hello/:name' do
  content_type :json
  {
    message: "Hello #{params['name']}"
  }.to_json
end

