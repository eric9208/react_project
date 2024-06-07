Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
        origins '127.0.0.1:5500', 'localhost:5500','127.0.0.1:9999', 'localhost:9999',  '192.168.1.76:9999' #whitelist domains
        # origins '*' <- this will allow anyone to use this api. 
    resource(
        '/api/*', #limit requests to paths that look like /api
        headers: :any, # all the request to contain any headers
        credentials: true, #becuase we're sending cookies with CORS, we must add this flag
        methods: [:get, :post, :patch, :put, :options, :delete] #allow these http verbs
    )
    end
end