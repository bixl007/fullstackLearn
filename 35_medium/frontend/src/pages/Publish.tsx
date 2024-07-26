import { useState } from "react";
import { Appbar } from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Publish() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate()

  return (
    <div>
      <div>
        <Appbar />
      </div>
      <div className="py-14 max-w-full flex flex-col items-center mx-3 my-20 ">
        <h1 className="text-4xl font-bold text-gray-900 mb-10">Create Post</h1>
        <div className="max-w-2xl w-full">
          <label
            htmlFor="helper-text"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Title
          </label>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            id="helper-text"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
            placeholder="Title"
          />
        </div>

        <div className="max-w-2xl w-full mt-4">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your Thoughts
          </label>
          <textarea
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            id="message"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            rows={10}
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <div>
          <button
            onClick={async () => {
              const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title,
                content: description,
              }, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
              });
              navigate(`/blog/${response.data.id}`)
            }}
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] my-5"
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
