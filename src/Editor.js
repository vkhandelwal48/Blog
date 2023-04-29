import React from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

function Editor({value,onChange}) {
  return (
    <ReactQuill
        onChange={onChange}
        theme={'snow'}
        value={value} 
        modules={modules}
      />
  )
}

export default Editor