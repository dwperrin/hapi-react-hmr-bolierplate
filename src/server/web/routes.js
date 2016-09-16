import ReactDOMServer from 'react-dom/server'
import React from 'react'
import { Html } from './components/html'

const renderHomePage = () => {
  const page = ReactDOMServer.renderToStaticMarkup(<Html />);
  return `<!doctype html>${page}`
}

export function register (server, options, next) {
  server.route([
    {
      method: 'GET',
      path: '/',
      handler: (request, reply) => reply(renderHomePage())
    },
    {
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: {
          path: 'static'
        }
      }
    }])

  next()
}

register.attributes = {
  name: 'web-routes'
}
