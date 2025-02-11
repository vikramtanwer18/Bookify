import { useState } from 'react'
import Data from '../../data.json'
function TestPage(){
 console.log(Data.results)
 const [question,setQuestion] = useState(0);
 const handleSelect = (index)=>{
     setQuestion(Data.results[index])
 }
    return(
        <div>
            <h2>Test</h2>
            <div className='flex flex-row w-100 justify-content-between'>
            <div>
            <div>{question?.question}</div> 
            <div>{1}.{question?.correct_answer}</div>     
            {
              
              question?.incorrect_answers?.map((data,index)=>{
                  return(
                      <> 
                     <div>{index+2}.{data}</div>
                      </>
                  )
                  })
         }
        </div>
          <div>
            {
              
                Data.results.map((data,index)=>{
                    return(
                        <> 
                       <button key={index} onClick={()=>handleSelect(index)}>{index+1}</button> 
                        </>
                    )
                    })
           }
           </div>
        </div>
        </div>
    )
}


export default TestPage