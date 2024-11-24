// Chatbot.js

// Predefined question-answer pairs
const chatbotKnowledgeBase = {
    
    // General Knowledge and Facts
    "hi !": "Hello how i can help you.",
    "who made this chatbot?": "This Chatbot is made by Mohammed.",
    "what is the capital of france?": "The capital of France is Paris.",
    "who is the founder of microsoft?": "Microsoft was founded by Bill Gates and Paul Allen.",
    "what are the seven wonders of the modern world?":
      `1. Great Wall of China\n2. Petra (Jordan)\n3. Christ the Redeemer (Brazil)\n4. Machu Picchu (Peru)\n5. Chichen Itza (Mexico)\n6. Roman Colosseum (Italy)\n7. Taj Mahal (India)`,

    // Learning and Education
    "can you explain binary search in simple terms?":
      "Binary search is a method to find an item in a sorted list by repeatedly dividing the list into halves. It compares the middle element to the target value and narrows the search to the left or right half until the target is found or the list is empty.",
    "what are the best resources for learning python?":
      `- Online platforms like Codecademy, freeCodeCamp, or Udemy.\n- Books like "Automate the Boring Stuff with Python" by Al Sweigart.\n- Interactive websites like LeetCode and HackerRank for practice.`,
  
    // Programming and Technology
    "Write a python program to find the factorial of a number?":
      `def factorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * factorial(n-1)\n\nnumber = 5\nprint("Factorial:", factorial(number))`,
    "what is the difference between sql and nosql databases?":
      `- SQL databases are structured and use tables with predefined schemas. Examples: MySQL, PostgreSQL.\n- NoSQL databases are flexible, schema-less, and often used for unstructured data. Examples: MongoDB, Cassandra.`,
  
    // Project and Career Guidance
    "how can i improve my programming skills?":
      `- Practice daily with small coding tasks.\n- Contribute to open-source projects.\n- Work on real-world projects and challenges on platforms like GitHub, LeetCode, and Codeforces.\n- Learn new algorithms and data structures.`,
    "what are some project ideas for beginners in python?":
      `1. Calculator app\n2. To-do list manager\n3. Weather forecasting app using APIs\n4. Student attendance tracker`,
  
    // Productivity and Time Management
    "what are some effective time management tips for students?":
      `- Use the Pomodoro technique (25 minutes of focused work followed by a 5-minute break).\n- Prioritize tasks using a to-do list or apps like Todoist.\n- Avoid multitasking and focus on one task at a time.`,
    "how do i create a study plan for exams?":
      `- Break down the syllabus into smaller topics.\n- Allocate specific time slots for each subject daily.\n- Include short breaks to avoid burnout.\n- Revise regularly and solve past papers.`,
  
    // Entertainment and Fun
    "tell me a joke.": "Why do programmers prefer dark mode? Because light attracts bugs!",
    "can you share a motivational quote?": `"The only way to do great work is to love what you do." – Steve Jobs`,
  
    // Personal Development
    "how do i improve my communication skills?":
      `- Practice speaking in front of a mirror.\n- Join public speaking groups like Toastmasters.\n- Read books and listen to podcasts on effective communication.\n- Engage in conversations with diverse groups of people.`,
    "what are some strategies for building self-confidence?":
      `- Set small, achievable goals and celebrate successes.\n- Practice positive self-talk.\n- Learn new skills to boost your competence.\n- Surround yourself with supportive people.`,
  
    // Current Affairs and News
    "what are the latest developments in artificial intelligence?":
      `Some advancements include generative AI models like ChatGPT, autonomous vehicles, and AI-powered medical diagnostics. Large Language Models (LLMs) and edge AI are also gaining traction.`,
  
    // Creative and Writing Assistance
    "can you suggest a title for a python project that tracks attendance?":
      `"AttendEasy: A Smart Attendance Management System."`,
    "can you help me write a professional email?":
      `Subject: Request for Meeting\n\nDear [Recipient's Name],\n\nI hope this message finds you well. I am writing to request a meeting to discuss [specific topic]. Please let me know a convenient time for you.\n\nThank you for your time and consideration.\n\nBest regards,\n[Your Name]`,
  
    // Miscellaneous
    "what’s the weather like today?": "Please provide your location, and I’ll check for you.",
    "how do i plan a budget for a trip?":
      `- Calculate costs for travel, accommodation, food, and activities.\n- Allocate an emergency fund.\n- Use apps like Mint or Trail Wallet to track expenses.`,
  };
  
  // Function to fetch the chatbot response
  function getBotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    return chatbotKnowledgeBase[message] || "Sorry, I don't have an answer to that. Can you please rephrase?";
  }
  
  // Function to add a message to the chat window
  function addMessageToChat(message, sender) {
    const chatWindow = document.getElementById("chatWindow");
  
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message", sender === "user" ? "user-message" : "bot-message");
    messageElement.textContent = message;
  
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }
  
  // Event listener for the send button
  document.getElementById("sendButton").addEventListener("click", function () {
    const userInput = document.getElementById("userInput").value.trim();
    if (userInput === "") return;
  
    // Display the user's message
    addMessageToChat(userInput, "user");
  
    // Get and display the bot's response
    const botResponse = getBotResponse(userInput);
    setTimeout(() => addMessageToChat(botResponse, "bot"), 500);
  
    // Clear the input field
    document.getElementById("userInput").value = "";
  });
  
  // Allow pressing "Enter" to send a message
  document.getElementById("userInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("sendButton").click();
    }
  });
  