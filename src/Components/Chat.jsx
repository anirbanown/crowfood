import React, { useState, useEffect } from 'react';
import "../Styles/Chat.scss";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { FaComments, FaTimes, FaRocketchat } from "react-icons/fa";


const gemi = process.env.REACT_APP_GEM_API;
console.log(gemi);


function Chat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false); // For toggling chatbox

  // Sample product data
  const products = [
  ];

  useEffect(() => {
    console.log("API Key:", gemi);
  }, []);

  // Function to handle form submission
  async function generateAnswer(e) {
    e.preventDefault();
    setGeneratingAnswer(true);
    
    // Check if the question includes "BharatSe"

    setAnswer("Loading your Personalized Answer...");
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBqi9tPth3tQlaWJyRzU-SVEDr3-qY9bds`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: "You are Vidhi, an AI Assistant for our a gamified platform which aims to simplify the language of the Constitution of India named 'Sansthaein Aur Samvidhan'. talk as a friend and also as a customer support executive. We have integrated games like Spin a Wheel, Memory Cards game, Quiz game, Progress Analytics, Quizes, Animations. Answer politely and Use Emojis but answer Very short and very crisp manner. You Must answer every question Accurately regarding Indian constitution or Indian Laws or related questions when asked to do so. " + question }] }],
        },
      });

      setAnswer(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setQuestion(""); // Clear the question after generating the answer
    setGeneratingAnswer(false);
  }

  // Function to handle Enter key press in the textarea
  function handleKeyDown(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();  // Prevent adding a new line
      generateAnswer(e);    // Trigger the form submission
    }
  } 

  return (
    <div className=''>
      {/* Floating Button with Icons */}
      <div className={`${isHover?'bg-bharatiai-hover':''} fixed z-9999 bottom-8 left-8 h-max w-max border-2 text-[#fab466] flex flex-row rounded-5xl justify-end items-center shadow-lg bg-bharatiai  transition-all  duration-350`}>
      <div
          className="w-max p-4 text-white transition-all duration-300 transform bg-violet-600 rounded-full cursor-pointer z-9999 scale-110 hover:bg-violet-600 hover:scale-125"
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={()=>setIsHover(true)}
          onMouseLeave={()=>{!isOpen && setIsHover(false)}}
        >
          {isOpen ? (
            <FaTimes size={24} />  // Close icon when open
        
          ) : (
            // <FaComments size={24} />  // Chat icon when closed
            <FaRocketchat className='text-2xl'/>
          )}
        </div>
        <div className={`text-2xl text-violet-600 flex justify-center items-center w-control h-control  transition-all delay-150 duration-350 overflow-x-hidden`}>Vidhi<span className="text-[#fab466]">.AI</span></div>
        
      </div>

      {/* Larger Animated Chatbox */}
      <div
        className={`fixed z-9999 bottom-28 left-6 shadow-5xl w-96 h-[30rem] rounded-lg shadow-lg p-6 flex flex-col transition-all duration-500 ease-in-out transform ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 "
        } bg-chatbot chatbox-responsive`}
        style={{ transformOrigin: "bottom left" }} // Animation origin for smooth open/close
      >
        {/* Heading with Animation */}
        <h2 className="mb-4 text-2xl font-bold text-violet-600">
          Personalized <span className='text-[#fab466]'>AI Assistant</span> 
        </h2>

        <form onSubmit={generateAnswer} className="flex flex-col flex-grow">
          <textarea
            required
            className="w-full p-3 my-2 border border-white placeholder-white text-white rounded outline-none focus:outline-none focus:shadow-xl bg-transparent transition-all"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask anything"
            onKeyDown={handleKeyDown}  // Add the key down listener here
          ></textarea>
          <button
            type="submit"
            className={`bg-violet-600 hover:bg-violet-800 text-white p-3 rounded-md mt-2 transition-all duration-300 genarate ${
              generatingAnswer ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={generatingAnswer}
          >
            Send Message
          </button>
        </form>

        {(answer!="" || generatingAnswer) && <div className="h-56 overflow-auto bg-gray-100 rounded-lg p-3mt-4 bg-gray-chatbox p-2 px-3 pr-5 text-white my-5 mx-3">
          <ReactMarkdown>{answer}</ReactMarkdown>
        </div>}
      </div>
    </div>
  );
}

export default Chat;