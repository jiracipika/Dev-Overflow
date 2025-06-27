import { EditorContent, useEditor, EditorProvider } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import React,{useEffect} from 'react'

const extensions = [
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
      bulletList: { keepMarks: true, keepAttributes: false },
      orderedList: { keepMarks: true, keepAttributes: false },
      heading: true,
  })
]

const content = ``


const TextEditor = ({getTextEditorData}) => {
  const editor = useEditor({
    extensions,
    content,
    onUpdate: ({ editor }) => {
      handleTextEditorData(); 
    }
  })

const handleTextEditorData = () =>{
  const html = editor.getHTML();

  getTextEditorData(html)
}
  

  if (!editor) {
    return null
  }



  return (
    <div className="control-group">
      <div className="button-group flex bg-[#151821] p-1 rounded-t-md">
        <button
          onClick={(event) => { event.preventDefault(); editor.chain().focus().toggleBold().run(); }}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active bg-[#212734] p-3 rounded-sm' : 'rounded-sm p-3'}
        >
         <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.7 5.0925C7.4275 4.59 7.9375 3.765 7.9375 3C7.9375 1.305 6.625 0 4.9375 0H0.25V10.5H5.53C7.0975 10.5 8.3125 9.225 8.3125 7.6575C8.3125 6.5175 7.6675 5.5425 6.7 5.0925ZM2.5 1.875H4.75C5.3725 1.875 5.875 2.3775 5.875 3C5.875 3.6225 5.3725 4.125 4.75 4.125H2.5V1.875ZM5.125 8.625H2.5V6.375H5.125C5.7475 6.375 6.25 6.8775 6.25 7.5C6.25 8.1225 5.7475 8.625 5.125 8.625Z" fill="#858EAD"/>
</svg>

        </button>

        <button
          onClick={(event) => { event.preventDefault(); editor.chain().focus().toggleItalic().run(); }}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active bg-[#212734] p-3 rounded-sm' : 'rounded-sm p-3'}
        >
          <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 0V2.25H5.1575L2.5925 8.25H0.5V10.5H6.5V8.25H4.8425L7.4075 2.25H9.5V0H3.5Z" fill="#858EAD"/>
</svg>
        </button>
        
        <button
          onClick={(e) => {
            e.preventDefault(); 
            editor.chain().focus().toggleHeading({ level: 1 }).run();
          }}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active bg-[#212734] p-3 rounded-sm' : 'rounded-sm p-3'}
        >
          <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.33545 11.5H7.13818V6.92969H2.85352V11.5H0.65625V0.835938H2.85352V5.15723H7.13818V0.835938H9.33545V11.5Z" fill="#858EAD"/>
</svg>
        </button>

        <button
          onClick={(e) => {
            e.preventDefault(); 
            editor.chain().focus().toggleHeading({ level: 2 }).run();
          }}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active bg-[#212734] p-3 rounded-sm' : 'rounded-sm p-3'}
        >
        <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.56055 9.5H5.51562V5.9375H2.48633V9.5H0.429688V0.96875H2.48633V4.35547H5.51562V0.96875H7.56055V9.5Z" fill="#858EAD"/>
        </svg>

        </button>

        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleBulletList().run()
        }}
          className={editor.isActive('bulletList') ? 'is-active bg-[#212734] p-3 rounded-sm' : 'rounded-sm p-3'}
        >
        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.1875 4.875C0.565 4.875 0.0625 5.3775 0.0625 6C0.0625 6.6225 0.565 7.125 1.1875 7.125C1.81 7.125 2.3125 6.6225 2.3125 6C2.3125 5.3775 1.81 4.875 1.1875 4.875ZM1.1875 0.375C0.565 0.375 0.0625 0.8775 0.0625 1.5C0.0625 2.1225 0.565 2.625 1.1875 2.625C1.81 2.625 2.3125 2.1225 2.3125 1.5C2.3125 0.8775 1.81 0.375 1.1875 0.375ZM1.1875 9.375C0.565 9.375 0.0625 9.885 0.0625 10.5C0.0625 11.115 0.5725 11.625 1.1875 11.625C1.8025 11.625 2.3125 11.115 2.3125 10.5C2.3125 9.885 1.81 9.375 1.1875 9.375ZM3.4375 11.25H13.9375V9.75H3.4375V11.25ZM3.4375 6.75H13.9375V5.25H3.4375V6.75ZM3.4375 0.75V2.25H13.9375V0.75H3.4375Z" fill="#858EAD"/>
        </svg>

        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleOrderedList().run()
        }}
          className={editor.isActive('orderedList') ? 'is-active bg-[#212734] p-3 rounded-sm' : 'rounded-sm p-3'}
        >
        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.25 9.75H1.75V10.125H1V10.875H1.75V11.25H0.25V12H2.5V9H0.25V9.75ZM1 3H1.75V0H0.25V0.75H1V3ZM0.25 5.25H1.6L0.25 6.825V7.5H2.5V6.75H1.15L2.5 5.175V4.5H0.25V5.25ZM4 0.75V2.25H14.5V0.75H4ZM4 11.25H14.5V9.75H4V11.25ZM4 6.75H14.5V5.25H4V6.75Z" fill="#858EAD"/>
        </svg>
        </button>
        
      </div>

      <div className='bg-[#212734] rounded-md'>
        

        <EditorContent editor={editor}></EditorContent>
      

      </div>
    </div>
  )
}


export default TextEditor