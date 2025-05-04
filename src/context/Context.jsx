import { createContext,useState } from "react";
import { runGemini } from "../Config/Gemni";


export const Context = createContext(); 

const ContextProvider = (props)=>{

    const [input,setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompt,setPrevPrompt] = useState([]);
    const [showResult,setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData,setResultData] = useState("");

    const delayPara= (index,nextWord)=>{
        setTimeout(function(){
            setResultData(prev =>prev+nextWord);
        },75*index)
    }
    const newChat = ()=>{
        setLoading(false);
        setShowResult(false);

    }

    const onSent = async(prompt) =>{
        
        setResultData("");
        setLoading(true);
        setShowResult(true);
        let response;
        if(prompt !== undefined){
            response = await runGemini(prompt);
            setRecentPrompt(prompt);
        }else{
            
            setPrevPrompt(prev =>[...prev,input]);
            setRecentPrompt(input);
            response = await runGemini(input);

        }
        
        let responseArray = response.split("**");
        let newResponse="";
        for(let i =0;i<responseArray.length;i++){
            if(i===0 || i%2 !== 1){
                newResponse += responseArray[i];
            }
            else{
                newResponse += "<b>" + responseArray[i] +"</b>";
            }
        }
        let newRes = newResponse.split("*").join("</br>")
        let newResArr = newRes.split(" ");
        for(let i = 0;i<newResArr.length;i++){
            const nextWord = newResArr[i];
            delayPara(i,nextWord+" ");
        }
        setLoading(false);
        setInput("");
    }

   
    

    const contextValue = {
        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        setShowResult,
        loading,
        setLoading,
        input,
        setInput,
        resultData,
        setResultData,
        newChat,
    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;