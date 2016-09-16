export const manifest = (function makeManifest () {
  const config = {}

  config.connections = [{
    'labels': [
      'api'
    ],
    'host': 'localhost',
    'port': 5030,
    'routes': {
      'cors': true,
      'security': true
    },
    'router': {
      'stripTrailingSlash': true
    }
  },
    {
      'labels': [
        'web'
      ],
      'host': 'localhost',
      'port': 5031,
      'routes': {
        'cors': true,
        'security': true
      },
      'router': {
        'stripTrailingSlash': true
      }
    }
  ]

  config.registrations = (() => {
    const registrations = [
      {
        plugin: 'inert',
        options: {
          select: ['web']
        }
      },
      {
        plugin: './web/routes.js',
        options: {
          select: ['web']
        }
      },
      {
        plugin: './api/routes.js',
        options: {
          routes: { prefix: '/api/v1' },
          select: ['api']
        }
      }
    ]

    if (process.env.NODE_ENV === 'development') {
      registrations.push({
        plugin: './web/webpack-middleware.js'
      })
    }

    return registrations
  })()

  return config
})()
