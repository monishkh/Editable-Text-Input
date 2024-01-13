import {useState} from 'react'

import './index.css'

const EditableText = () => {
  const [input, setInput] = useState('')
  const [condition, setCondition] = useState(true)

  const getInputFromUser = () => (
    <>
      <div className="render-container">
        <h1>Editable Text Input</h1>
        <input onChange={e => setInput(e.target.value)} value={input} />
        <button type="button" onClick={() => setCondition(false)}>
          Save
        </button>
      </div>
    </>
  )

  const displayTextInput = () => (
    <>
      <div className="render-container">
        <h1>Editable Text Input</h1>

        <p>{input}</p>
        <button type="button" onClick={() => setCondition(true)}>
          Edit
        </button>
      </div>
    </>
  )

  return (
    <>
      <div className="app-page">
        {condition ? getInputFromUser() : displayTextInput()}
      </div>
    </>
  )
}

export default EditableText
