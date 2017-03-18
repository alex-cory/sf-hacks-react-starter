import React from 'react'
import { Paper, RaisedButton, TextField } from 'material-ui'


const styles = {
  container: {
    maxWidth: 300,
    margin: 'auto',
    padding: 20
  },

}

const LoginPage = ({ setUserName }) => {
  let input = null

  return (
    <Paper style={styles.container}>
      <TextField name="Username" placeholder="What people should call you" ref={r => input = r} />
      <RaisedButton fullWidth
        onClick={() => setUserName(input.input.value)}
        label="Signin With Facebook"
        />
    </Paper>
  )
}


export default LoginPage