const ChatCard = ({ title, messageCount, lastEdited }) => {
    
  return (
    <div className="chat-card">
        <h3 className="chat-card__title">{title}</h3>
        <div className="chat-card__info">
            <span className="chat-card__message-count">{messageCount}</span>
            <span className="chat-card__last-edited">{lastEdited}</span>
        </div>
    </div>
  )
}

export default ChatCard;
