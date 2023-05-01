import './App.css';
import { marked } from 'marked';
import { useState } from 'react';


const Editor = (props) => {
  return(
    <div className="m-2 mb-0">
      <div id="editor-box" className="border border-1 border-dark border-bottom-0" style={{width: 723}}>
        <h5 className="ps-2 m-0 pb-1 pt-1 font-weight-bold" style={{fontWeight: 'bolder'}}><i class="bi bi-code-square"></i> Editor</h5>
      </div>
      <div>
        <textarea id="editor" rows="27" cols="73" value={props.textAreaMarkdown} onChange={props.handleChangeFunc} style={{fontFamily: 'Courier New', fontWeight: 'bold'}}></textarea>
      </div>
    </div>
  )
}

const Previewer = (props) => {
  return(
    <div className=' previewer-box-outline border border-1 border-dark m-2 h-100'>
      <div id="previewer-box" className='border border-1 border-dark border-top-0 border-end-0 border-start-0'>
        <h5 className="ps-2 m-0 pb-1 pt-1 font-weight-bold" style={{fontWeight: 'bolder'}}><i class="bi bi-collection-play"></i> Previewer</h5>
      </div>
      <div className="p-2" id="preview" dangerouslySetInnerHTML={props.createMarkupFunc}>
      </div>
    </div>
  )
}


const App = () => {
  const [textAreaInput, setTextAreaInput] = useState(`
  # Welcome to my React Markdown Previewer \n\n 
  ## This is a sub-heading \n 
  **bolded text** \n
  > blockQuotes \n
  There's also [links](https://freecodecamp.org) \n\n
  Inline code \`<div></div>\` between two backticks \n\n
  \`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  return firstLine + lastLine;
}
\`\`\` \n\n
1. And there are numbered lists too. \n
1. Use just 1s if you want! \n
1. And last but not least, let's not forget embedded images: \n\n
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `);

  const createMarkup = () => {
    return {__html: marked(textAreaInput)};
  }

  const changeTextAreaMarkup = (e) => {
    setTextAreaInput(e.target.value);
  }

  return(
    <div className="container-fluid">
      <div className='row'>
        <div className='col-6'>
          <Editor textAreaMarkdown={textAreaInput} handleChangeFunc={changeTextAreaMarkup}/>
        </div>
        <div className='col-6'>
          <Previewer createMarkupFunc={createMarkup()}/>
        </div>
      </div>
    </div>
  )
}

export default App;
