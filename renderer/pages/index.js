import { useState, useEffect } from 'react'

import styles from '../styles/App.module.css'

const App = () => {
  const [input, setInput] = useState('')
  const [message, setMessage] = useState(null)

  // useEffect(() => {
  //   const handleMessage = (event, message) => setMessage(message)
  //   window.ipcApi.on('message', handleMessage)

  //   return () => {
  //     window.ipcRenderer.removeListener('message', handleMessage)
  //   }
  // }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const result = await window.ipcApi.handleMessage(input)
    setMessage(result)
  }

  return (
    <div className={styles.height100}>
      {message && <p>{message}</p>}

      <form className={styles.height100} onSubmit={handleSubmit}>
        <input
          className={`${styles.height100} ${styles.width100} ${styles.font}`}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      <style jsx>{`
        h1 {
          color: red;
          font-size: 50px;
        }
      `}</style>
    </div>
  )
}

export default App
