import 'module-alias/register' // Used for '@' imports
import cors from 'cors'
import express, { Request, Response } from 'express'

import { Workspace, WorkspaceType } from '@alex/types'

const app = express()
const port = 8080

app.use(cors({ origin: 'http://localhost:3000' }))

app.get('/workspaces', (req: Request, res: Response) => {
  const workspaces: Workspace[] = [
    { name: 'api', version: '1.0.0', type: WorkspaceType.Cold },
    { name: 'types', version: '1.0.0', type: WorkspaceType.Hot },
    { name: 'web', version: '1.0.0', type: WorkspaceType.Hot },
  ]

  res.status(200).json(workspaces)
})

app.listen(port, () => console.log(`Listening on http://localhost:${port}`))
