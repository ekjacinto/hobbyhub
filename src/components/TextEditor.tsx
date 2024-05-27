import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface TextEditorProps {
  value: string;
  changeEvent: (value: string) => void;
}

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "underline", "strike", "blockquote"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "underline",
  "strike",
  "blockquote",
  "bullet",
  "clean",
];

const TextEditor = ({ value, changeEvent }: TextEditorProps) => {
  return (
    <ReactQuill
      className="bg-white mt-4 mb-8 rounded-sm text-gray-800 h-[20rem] overflow-y-auto"
      theme="snow"
      value={value}
      onChange={changeEvent}
      modules={modules}
      formats={formats}
    />
  );
};

export default TextEditor;
