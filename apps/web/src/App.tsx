import { useEffect, useState } from 'react'

import './App.css'

import { Workspace } from '@alex/types'

function App() {
  const [data, setData] = useState<Workspace[]>([])

  // useEffect(() => {
  //   fetch('http://localhost:8080/workspaces')
  //     .then((response) => response.json())
  //     .then(({ data }) => {
  //       console.log({ data })
  //       setData(data)
  //     })
  // }, [])

  return (
    <div className="App">
      <h1>Building a fullstack TypeScript project with Turborepo</h1>
      <h2>Workspaces -!!- </h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default App
