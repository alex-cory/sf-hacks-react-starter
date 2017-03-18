import React from 'react'
import { Message } from '../components/Message'


export const Messages = ({ messages }) => {
	 return (
			 {messages.map(message => (
					 <Message body={message.body} id={message.id} key={message.id} />
				))}
		)
}
