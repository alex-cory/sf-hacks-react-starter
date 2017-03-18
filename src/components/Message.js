import React from 'react'
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import { ListItem } from 'material-ui/List';


export const Message = ({ username, body }) => (
		<ListItem
				primaryText={body}
				rightIcon={<CommunicationChatBubble />}
		/>
)
