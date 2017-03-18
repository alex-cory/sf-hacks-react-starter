import React from 'react'
import _ from 'lodash'
import { Message } from '../components/Message'
import { connect } from 'react-firebase'
import { RaisedButton, TextField } from 'material-ui'


const Messages = ({ messages, addMessage }) => {
	let input = null

	return (
		<div>
			{_.map(messages, (m, i) => (
				<Message {...m} key={i} />
			))}

			<TextField ref={r => input = r} />
			<RaisedButton label="SEND" onClick={() => {
					addMessage(input.input.value)
					input.input.value = ''
				}} />
		</div>
	)
}

export default connect((props, ref) => ({
	messages: 'messages',
	addMessage: text => ref('/messages').push({
		userName: props.userName,
		body: text
	})
}))(Messages)
