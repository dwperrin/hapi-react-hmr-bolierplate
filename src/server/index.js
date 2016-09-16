import Glue from 'glue'
import { manifest } from '~/server/config/manifest'
import { forEach } from 'ramda'

Glue.compose(manifest, { relativeTo: __dirname })
    .then(server => { return server.start().then(() => { return server }) })
    .then(server => forEach(c => logServerConnection(c), server.connections))
    .catch(err => console.error(err))

function logServerConnection (conn) {
  console.log(`Server ${conn.settings.labels} stared at: ${conn.info.uri}`)
}
