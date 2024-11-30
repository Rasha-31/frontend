import React from 'react'
import './Upload.css'

const Upload = () => {
  return (
    <div className="summarize-form">
      {/* <div className="input-group">
        <button className="input-button">URL</button>
        <button className="input-button">Upload</button>
        <button className="input-button">Text</button>
      </div> */}
      <div>
      <input
        type="text"
        placeholder="Upload a Book"
        className="url-input"
      />
      <button className="summarize-button">Summarize Now</button>
      </div>
    </div>
  )
}

export default Upload



