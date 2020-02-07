import express from 'express'
import consola from 'consola'

const isProduction = process.env.NODE_ENV === 'production'

const app = express()
const { Nuxt, Builder } = require('nuxt')
const config = require('../nuxt.config')
config.dev = !isProduction

async function start () {
  const nuxt = new Nuxt(config)
  const { host, port } = nuxt.options.server

  await nuxt.ready(consola)

  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(nuxt.render)
  app.listen(port, host)

  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
