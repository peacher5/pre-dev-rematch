import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const { fname, lname } = useSelector(({ app }) => app)
  const { app } = useDispatch()

  useEffect(() => {
    app.fetchFname()
  }, [app])

  return (
    <div>
      ชื่อ: {fname}
      <br />
      นามสกุล: {lname}
      <hr />
      ชื่อ: <input onChange={e => app.setFname(e.target.value)} />
      <br />
      นามสกุล: <input onChange={e => app.setLname(e.target.value)} />
      <hr />
      <button onClick={() => app.fetchFname()}>Fetch</button>
    </div>
  )
}

export default App
