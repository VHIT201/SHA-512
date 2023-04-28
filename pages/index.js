import Image from "next/image";
import { Inter } from "next/font/google";
import { FiCopy } from "react-icons/fi";
import { useState } from "react";
import sha512 from "js-sha512";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const notifyCopy = () =>
    toast.success("🦄 Copy thành công", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const notifyClear = () =>
    toast.warn("🦄 Xoá thành công", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleHashSha512 = (input) => {
    const temp = sha512(input);
    setOutput(temp);
  };

  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    notifyCopy();
  };

  return (
    <>
      <Head>
        <title>Hash Generator</title>
      </Head>
      <main className="flex-col h-screen w-screen bg-slate-400 flex  ">
        <div className="w-full h-[60vh] bg-[#391F67] gap-4 flex flex-col justify-center items-center">
          <h1 className="text-white text-[2rem]">
            Online SHA-512 Hash Generator
          </h1>
          <h1 className="text-white text-[1.2rem]">
            Simple tool from engineers for engineers to easily compute SHA-512
            hash of any string
          </h1>
        </div>
        <section className="flex flex-col lg:flex-row w-full py-12 px-8 bg-white justify-between">
          <div className="lg:w-[49%] w-full">
            {/* input */}
            <div className="flex flex-col gap-6 outline-none border px-4 py-4 rounded-lg border-sky-400">
              <label>INPUT STRING</label>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                cols="50"
                className=" p-3 w-full h-[160px] outline-none border focus:border-sky-400 rounded-lg"
              ></textarea>
              <div className="flex flex-row w-full justify-evenly  ">
                <button
                  onClick={() => {
                    handleHashSha512(input);
                  }}
                  className="hover:bg-sky-600 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer bg-sky-700 px-6 py-2 rounded-lg text-white font-bold"
                >
                  GENERATE HASH
                </button>

                <button
                  onClick={() => {
                    setInput("");
                    notifyClear();
                  }}
                  className="hover:translate-y-[-2px] cursor-pointer border border-slate-200 px-6 py-2 w-[160px] rounded-lg "
                >
                  CLEAR
                </button>
              </div>
            </div>

            {/* output */}
            <div className="w-full flex flex-col gap-2 p-4 border py-8 border-sky-500 rounded-lg mt-10 ">
              <label className="font-bold text-neutral-600">
                SHA-512 OUTPUT:
              </label>
              <span className="my-4 break-all h-full text-left w-full font-thin text-[24px]">
                {output}
              </span>
              <button
                onClick={() => {
                  copyToClipboard(output);
                }}
                className="font-bold flex items-center justify-center hover:translate-y-[-2px] w-full rounded-lg py-2 border border-gray-400"
              >
                <FiCopy className="mr-2" />
                COPY
              </button>
            </div>
          </div>
          <div className="lg:w-[1px] w-0 bg-black h-0 "></div>
          <div className="lg:w-[49%] w-full px-8 ">
            <h1 className="text-[2rem] font-thin">What is SHA-512?</h1>
            <p className="text-[1rem] text-neutral-500 my-6">
              SHA-512 Cryptographic Hash Algorithm. A cryptographic hash
              sometimes called digest is a kind of signature for a text or a
              data file. SHA-512 generates an almost-unique 512-bit 32-byte
              signature for a text.
            </p>
            <a
              className="text-sky-600 font-semibold"
              target={"_blank"}
              href="https://en.wikipedia.org/wiki/SHA-2"
            >
              Learn more »
            </a>
          </div>
        </section>
        <ToastContainer />
      </main>
    </>
  );
}
