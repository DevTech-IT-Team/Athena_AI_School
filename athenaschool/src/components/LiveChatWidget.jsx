import { MessageCircle, X, Send } from 'lucide-react';
import { useState } from 'react';

function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! 👋 Welcome to Edulectual K12. How can we help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSend = (e) => {
    e.preventDefault();

    const messageText = inputValue.trim();
    if (!messageText) return;

    const newUserMessage = {
      id: Date.now(),
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue('');

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "Thanks for reaching out! Our education specialist will get back to you shortly.",
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 font-sans">

      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          aria-label="Open Edulectual support chat"
          className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#172554] text-white rounded-full shadow-xl hover:bg-[#253B80] transition-all duration-300 hover:scale-105"
        >
          <MessageCircle size={26} />

          {/* Notification Dot */}
          <span className="absolute top-1 right-1 w-3 h-3 bg-[#FACC15] rounded-full border-2 border-white" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[320px] sm:w-[360px] h-[480px] max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">

          {/* Header */}
          <div className="bg-[#172554] text-white px-5 py-4 flex justify-between items-center">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <MessageCircle size={20} />
              </div>

              <div>
                <h3 className="font-bold text-sm">
                  Edulectual K12
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-blue-100 mt-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>Online support</span>
                </div>
              </div>

            </div>

            <button
              onClick={toggleChat}
              aria-label="Close chat"
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X size={20} />
            </button>

          </div>

          {/* Welcome Message */}
          <div className="px-4 py-3 bg-[#F1F0FF] border-b border-slate-100">

            <p className="text-xs text-[#172554] leading-relaxed">
              Welcome! Ask us about admissions, programmes, fees,
              curriculum or online classes.
            </p>

          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 bg-[#F8F8FC]">

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex mb-4 ${
                  message.sender === 'user'
                    ? 'justify-end'
                    : 'justify-start'
                }`}
              >

                <div
                  className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed shadow-sm ${
                    message.sender === 'user'
                      ? 'bg-[#172554] text-white rounded-2xl rounded-br-sm'
                      : 'bg-white text-slate-700 border border-slate-100 rounded-2xl rounded-bl-sm'
                  }`}
                >
                  {message.text}

                  <span
                    className={`block text-[10px] mt-2 ${
                      message.sender === 'user'
                        ? 'text-blue-100'
                        : 'text-slate-400'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>

              </div>
            ))}

          </div>

          {/* Input Area */}
          <form
            onSubmit={handleSend}
            className="p-4 bg-white border-t border-slate-100"
          >

            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full p-1.5 focus-within:border-[#4F46E5] focus-within:ring-2 focus-within:ring-indigo-100 transition-all">

              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                aria-label="Type your message"
                className="flex-1 bg-transparent px-3 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />

              <button
                type="submit"
                disabled={!inputValue.trim()}
                aria-label="Send message"
                className="w-10 h-10 flex items-center justify-center bg-[#FACC15] text-[#172554] rounded-full hover:bg-yellow-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <Send size={17} />
              </button>

            </div>

          </form>

        </div>
      )}
    </div>
  );
}

export default LiveChatWidget;