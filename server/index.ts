import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { logger } from 'hono/logger'

const app = new Hono()

app.use(logger())
app.use('/*', serveStatic({ root: './client/dist' }))

app.get('/api/people', (c) => {
  return c.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
  ])
})

export default app
