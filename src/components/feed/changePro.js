import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./pop.css";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import api from "../../server/api";
import { changeListener } from "../../server/auth";
import { useDispatch, useSelector } from "react-redux";

export default function Pop({ open, setOpen }) {
  const dispatch = useDispatch();
  const cancelButtonRef = useRef(null);

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);

  const postContent = () => {
    const title = titleRef.current.value;
    const text = descriptionRef.current.value;
    console.log("file: ", selectedFile);

    api
      .createPost(title, text, selectedFile)
      .then(() => {
        dispatch(changeListener(new Date()));
      })
      .finally(() => {
        setOpen(false);
      });
  };

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const { categories } = useSelector((state) => state.global);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-color bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          ></span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative pop inline-block align-bottom rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex flex-col gap-7">
                <div className="flex flex-col items-start gap-2">
                  <div className="flex justify-between items-center w-full">
                    <h1> Create Post</h1>
                    <div class="flex justify-center w-36">
                      <div class="mb-3 xl:w-96">
                        <select
                          class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          aria-label="Default select example"
                        >
                          {categories &&
                            categories.map((e) => <option>{e.name}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>

                  <input
                    ref={titleRef}
                    className="pop-input outline-none pl-3 border-none"
                    placeholder="The start of a wonderful story..."
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex items-center gap-10 ">
                  <textarea
                    ref={descriptionRef}
                    className="outline-none w-2/3 pt-2 pl-3"
                    placeholder="description"
                  />
                  <div className="w-4/12   back-color image flex flex-col justify-center items-center">
                    <FontAwesomeIcon
                      className="top-10 w-4/5 "
                      icon={faImage}
                      color="var(--back-color)"
                    />
                    <input
                      className=" input w-24 rounded-sm  bg-"
                      type="file"
                      onChange={onFileChange}
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2  text-base font-medium text-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => postContent()}
                >
                  Post
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
