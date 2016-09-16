import Glue from 'glue'
import { manifest } from '~/server/config/manifest'

Glue.compose(manifest, { relativeTo: __dirname })
    .then(server => {
      server.start()
    })
    .catch(err => console.error(err))
