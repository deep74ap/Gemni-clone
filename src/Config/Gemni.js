import { GoogleGenerativeAI } from '@google/generative-ai';
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; 

export async function runGemini(userInput) {
    try {
        const genAI = new GoogleGenerativeAI(API_KEY);
        // Initialize the generative model
        const genModel = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        // console.log(genModel);
        
        
        const chat = genModel.startChat({
            generationConfig: {
                temperature: 0.9,
                topK: 100,
                topP: 1,
                maxOutputTokens: 2048,
            },
            safetySettings: [
                {
                    category: "HARM_CATEGORY_HARASSMENT",
                    threshold: "BLOCK_MEDIUM_AND_ABOVE",
                },
                {
                    category: "HARM_CATEGORY_HATE_SPEECH",
                    threshold: "BLOCK_MEDIUM_AND_ABOVE",
                },
                {
                    category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                    threshold: "BLOCK_MEDIUM_AND_ABOVE",
                },
                {
                    category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                    threshold: "BLOCK_MEDIUM_AND_ABOVE",
                },
            ],
            history: [],
        });

        const result = await chat.sendMessage(userInput);  // Use the provided userInput
        const response = result.response;
        console.log(response.text());
        return response.text();
        


    } catch (error) {
        console.error("Error:", error);
        throw error; // Re-throw to be caught by caller
    }
}

// Example of how to call the function from another module:
// import { runGemini } from './your-module';  // Adjust the path as needed
//
// const userInput = "Tell me a joke";
// runGemini(userInput)
//   .then(({ simpleTextResponse, chatResponseText }) => {
//     console.log("Simple Text Response:", simpleTextResponse);
//     console.log("Chat Response:", chatResponseText);
//   })
//   .catch(err => console.error("Gemini run failed:", err));

