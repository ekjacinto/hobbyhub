import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import LanguageSelect from "@/components/LanguageSelect";
import TextEditor from "@/components/TextEditor";

const CreatePost = () => {
  const supabaseUrl = "https://svyholmxkcaadmualsfs.supabase.co";
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [language, setLanguage] = useState<string>("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
  };

  const handleContentChange = (value: string) => {
    setContent(value);
    console.log(value);
  };

  const handleSetLanguage = (language: string) => {
    setLanguage(language);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data: postData, error: postError } = await supabase
      .from("posts")
      .insert([
        {
          title,
          description,
          image,
          content,
          language,
        },
      ]);
    if (postError) {
      console.error(postError);
    } else {
      console.log(postData);
    }
    window.location.href = "/view";
  };

  return (
    <div className="flex h-[92vh]">
      <div className="flex flex-col w-full justify-start items-center bg-[#0b0d11]">
        <form
          className="bg-[#0b0d11] border-[1px] border-[#4b4b51] mt-8 px-4 pt-6 w-[65rem] h-[55rem] rounded-lg text-white"
          onSubmit={handleSubmit}
        >
          <h1 className="text-start text-3xl font-open font-bold mb-4 text-white">
            Create Post:
          </h1>
          <hr className="border-gray-300 mb-6" />
          <div className="flex flex-col">
            <label
              className="font-open font-bold text-start text-lg mb-1"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="bg-white text-black pl-3 py-2 mb-8 rounded-md border-[2.5px] border-[#878795]"
              type="title"
              name="title"
              id="title"
              placeholder="Title"
              value={title}
              onChange={handleTitleChange}
            />
            <label
              className="font-open font-bold text-start text-lg mb-1"
              htmlFor="description"
            >
              Description
            </label>
            <input
              className="bg-white text-black pl-3 py-2 mb-8 rounded-md border-[2.5px] border-[#878795]"
              type="description"
              name="description"
              id="description"
              placeholder="Description"
              value={description}
              onChange={handleDescriptionChange}
            />

            <div className="flex justify-between items-center text-white mb-6">
              <div className="flex flex-col gap-1">
                <label
                  className="font-open font-bold text-start text-lg"
                  htmlFor="image"
                >
                  Image URL
                </label>
                <input
                  className="w-[50vh] bg-white text-black pl-3 py-2 rounded-md border-[2.5px] border-[#878795]"
                  type="text"
                  name="image"
                  id="image"
                  value={image}
                  onChange={handleImageChange}
                />
              </div>
              <LanguageSelect
                language={language}
                changeEvent={handleSetLanguage}
              />
            </div>
            <TextEditor value={content} changeEvent={handleContentChange} />
          </div>
          <hr className="border-gray-300 mb-6" />
          <button
            className="w-[12rem] h-[3rem] bg-blue-500 text-white text-2xl font-bold rounded-sm transition ease-in-out delay-150 hover:bg-indigo-500 hover:-translate-y-1 hover:scale-110 duration-200"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
