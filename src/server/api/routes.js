export function register (server, options, next) {
  server.route([
    {
      path: '/version',
      method: 'GET',
      handler: function (request, reply) {
        reply('Hello!')
      }
    }
  ])

  next()
}

register.attributes = {
  name: 'api-routes'
}
