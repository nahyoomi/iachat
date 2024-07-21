/* import { useEffect, useRef } from 'react';
import { useChat } from '../hooks/useChat'; */

const ChatFooter = () => {
    //Funcion de la api de IA de vercel , hay que mirar si se debe instalar  
    // https://vercel.com/docs/integrations/ai/openai / https://www.youtube.com/watch?v=sHuIIX79MOs&t=101s
/*     const { messages, input, handleInputChange, handleSubmit } = useChat({
        api:'/api/openai',
    }); */

    //Funcion de scroll para el chat
/*     const chatContainer = useRef(null);

    const scroll = () =>{
        const { offsetHeight, scrollHeight, scrollTop } = chatContainer.current;
        if (scrollHeight >= scrollTop + offsetHeight) {
            chatContainer.current.scrollTo(0, scrollHeight + 200)
        }
    }

    useEffect(() => {
        scroll();
    }, [messages]); */

    //Renderiza la conversacion del chat 
/*     const renderResponse = () => {
        <div className="response">
            {messages.map((m, index) => (
                <div key={m.id} className={`chat-line ${m.role === 'user' ? 'user-chat' : 'ai-chat'}`}>
                    <img src={m.role === 'user' ? '/user-avatar.jpg' : '/lcb-avatar.jpg'} alt="avatar" className="response--chat__avatar" />
                    <div className="response--chat__message">
                        <p className="response-chat__text">{m.content}</p>
                        {index < messages.length - 1 && <div className='response-chat__horizontal'/>}
                    </div>
                </div>
            ))}
        </div>
    } */
  return (
    <div className="chat-footer">
        {/* {renderResponse()} */}
        <form /* onSubmit={handleSubmit}  */className="chat-footer__form">
            <input 
                name='input-field'
                type="text"
                /* onChange={handleInputChange}
                value={input}  */
                className="chat--footer__input" 
                placeholder="Escribe tu mensaje aqui"
            />
            <button type="submit" className="chat--footer__button">
                Enviar
            </button>
        </form>
    </div>
  )
}

export default ChatFooter;
