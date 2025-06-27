import React, {useState, useRef} from 'react'
import TextEditor from '../Components/TextEditor'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaX } from 'react-icons/fa6'



const AskAQuestion = () => {

  const [tags, setTags] = useState([])
  const [titleInputVal, setTitleInputVal] = useState("")
  const [tagInputVal, setTagInputVal] = useState("")
  const [textEditorData, setTextEditorData] = useState("")

  const tagInputHandler = (e) =>{
    e.preventDefault()
    setTagInputVal(e.target.value)
    
  }

  const addTag = (e) =>{
    const tagText = e.target.innerText
    
    if(tagText.length > 10){
      toast.error("The length of the tag should be upto Ten letters");
      return
    }

    if(tags.length >= 5){
      toast.error("You cannot add tags more than 5");
    }else{
      setTags((prevTags) => [...prevTags, tagText]);
      setTagInputVal("")
    }
    console.log(e)
  }

  const removeTag = (indexToDelete) =>{
    
    setTags((prevItems) => {
      const updatedItems = [...prevItems]
      updatedItems.splice(indexToDelete, 1)
      return updatedItems
    })
    
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    const data = {
      titleInputVal,
      textEditorData,
      tags: [...tags]
    }

    console.log(data)
  }

  const getEditorData = (data) =>{
    setTextEditorData(data)
  }

  return (
    <section className='text-white Ask a py-6 px-20 question bg-gradient-to-r w-[calc(100%-330px)] from-[#0A0B10] to-black min-h-screen max-h-fit'>
      <ToastContainer />
      <form action="" className='flex flex-col gap-5'>
        <h1 className='text-2xl font-bold'>Ask a public question</h1>
        <div className='flex flex-col gap-1'>
          <label className='font-semibold text-[16px]' htmlFor="">Question title <span className='text-red-600'>*</span></label>
          <input value={titleInputVal} onChange={(e) => setTitleInputVal(e.target.value)} type="text" className='px-2 py-4 outline-none bg-[#151821] rounded-md'/>
          <p className='text-[#7B8EC8]'>Be specific and imagine you’re asking a question to another person.</p>
        </div>

        <div className='flex flex-col gap-1'>
          <label className='font-semibold text-[16px]' htmlFor="">Detailed explanation of your problem? <span className='text-red-600'>*</span></label>
          <TextEditor getTextEditorData={getEditorData} />
          <p className='text-[#7B8EC8]'>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>

          
        </div>

        <div className='flex flex-col gap-1 transition-all '>
          <label className='font-semibold text-[16px]' htmlFor="">Tags <span className='text-red-600'>*</span></label>
          <input 
            type="text" 
            value={tagInputVal} 
            onChange={tagInputHandler} 
            className='px-2 w-full py-4 outline-none bg-[#151821] rounded-md'/>
          <div className=' flex gap-3'>
            
            <div className='grid gap-2 w-fit '>
            {
                tags.length > 0 ? tags.map((item, index) =>{
                  
                  return (
                  <div key={index} className={`flex gap-3 ${tags.length > 0 ? "p-3" : ""} items-center bg-[#151821] rounded-md w-fit`}>
                    <span className='' >{item}</span>
                    <span onClick={() => removeTag(index)}><FaX className='text-[10px] cursor-pointer' style={{color: "white",}} /></span>
                    
                  </div>
                  )
                  
                }) : <span></span>
              }
            </div>

        <span onClick={addTag} className={` ${tagInputVal ? "p-3" : ""} bg-[#151821] w-fit h-fit rounded-md cursor-pointer`}>{tagInputVal}</span>


            

          </div>
        </div>
        <button onClick={handleSubmit} className='bg-custom-gradient p-3 w-fit rounded-md self-end'>Ask a question</button>
      </form>
    </section>
  )
}

export default AskAQuestion