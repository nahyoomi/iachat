

const ChatArea = () => {
    const messagesMock = [
        {
          id: 1,
          type: 'user',
          imgSrc: 'path/to/userImage.png', // Asegúrate de reemplazar esto con la ruta real
          text: 'Hello, how can I help you today?'
        },
        {
          id: 2,
          type: 'bot',
          imgSrc: 'path/to/botImage.png',
          text: 'I have a question about programming.'
        }
      ];
       
  return (
    <div className="chats">
        {messagesMock.map(message => (
            <div key={message.id} className={`chat ${message.type}`}>
                <img src={message.imgSrc} alt="Profile" className="chat__img" />
                <p className="chat__text">{message.text}</p>
            </div>
        ))}
    </div>
  )
}

export default ChatArea;
