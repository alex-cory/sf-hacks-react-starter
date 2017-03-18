import React from 'react'
import { Paper, RaisedButton, TextField } from 'material-ui'


const styles = {
  container: {
    maxWidth: 300,
    margin: 'auto',
    marginTop: 10,
    padding: 20
  },

  header: {
    margin: '5px 0',
    fontSize: 20
  }
}

const LoginPage = ({ setUserName }) => {
  let input = null

  return (
    <Paper style={styles.container}>
      <h1 style={styles.header}>Sign In</h1>

      <TextField
        name="Username"
        placeholder="What people should call you"
        ref={r => input = r}
        />

      <RaisedButton
        fullWidth
        onClick={() => setUserName(input.input.value)}
        label="Set your username"
        />
    </Paper>
  )
}


export default LoginPage