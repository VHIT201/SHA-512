import Image from "next/image";
import { Inter } from "next/font/google";
import { FiCopy } from "react-icons/fi";
import { useState } from "react";
import sha512 from "js-sha512";
import md5 from "js-md5";
import sha256 from "js-sha256";
import sha1 from "js-sha1";


import Particles from "react-particles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import ParticlesBackground from "@/src/ParticlesBackground";
import particlesConfig from "@/src/config/particles-config";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const notifyCopy = () =>
    toast.success("Copy thành công", {
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
    toast.warn("Xoá thành công", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    const tsParticles = require("tsparticles-engine");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleHash = (input) => {
    if (hash.name === "SHA-512") {
      const temp = sha512(input);
      setOutput(temp);
    }
    if(hash.name === "SHA-1") {
      const temp = sha1(input);
      setOutput(temp);
    }
    
    if (hash.name === "SHA-256") {
      const temp = sha256(input);
      setOutput(temp);
    }
    if (hash.name === "MD5") {
      const temp = md5(input);
      setOutput(temp);
    }
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

  const [hash, setHash] = useState({
    name: "SHA-512",
    link: "https://en.wikipedia.org/wiki/SHA-2",
    text: "",
  });

  return (
    <>
    
      <Head>
        <title>Hash Generator</title>
      </Head>
     
      <main className="flex-col h-screen w-screen bg-slate-400 flex  ">
      
        <div className="w-full h-[60vh]  bg-[#391F67] gap-4 flex flex-col justify-center items-center">
        
          <h1 className="text-white text-[3rem]">
            Online {hash.name} Hash Generator
          </h1>
          
          <h1 className="text-white text-[1.6rem]">
            Simple tool from engineers for engineers to easily compute{" "}
            {hash.name }
             {" "}hash of any string
          </h1>
          <div className="flex gap-4 mt-6">
            <button
              onClick={() =>
                setHash({
                  name: "MD5",
                  link: "https://vi.wikipedia.org/wiki/MD5",
                  text: "MD5 Message Digest Algorithm 5 is a widely used cryptographic hash function that produces a 128-bit 16-byte hash value. It is commonly used for checking data integrity, verifying message authentication, and storing passwords. MD5 is a one-way function, meaning it is not reversible and cannot be decrypted back to the original input data. Despite its widespread use in the past, MD5 has been considered insecure in recent years due to vulnerabilities and collisions found in the algorithm.",
                })
              }
              className={`${
                hash.name === "MD5"
                  ? "bg-sky-600 rounded-full text-white  border border-white px-10 py-2"
                  : "rounded-full text-white  border border-white px-10 py-2 hover:translate-y-[-2px] hover:bg-neutral-400" 
              }`}
            >
              MD5
            </button>
            <button
              onClick={() =>
                setHash({
                  name: "SHA-1",
                  link: "https://vi.wikipedia.org/wiki/SHA-1",
                  text: "SHA-1 is a cryptographic hash function that generates a 160-bit `20-byte` hash value, typically rendered as a hexadecimal number. It is no longer considered secure for cryptographic purposes due to vulnerabilities found in the algorithm. SHA-2, which includes SHA-256, SHA-384, and SHA-512, is currently recommended for most cryptographic applications.",
                })
              }
              className={`${
                hash.name === "SHA-1"
                  ? "bg-sky-600 rounded-full text-white  border border-white px-10 py-2"
                  : "hover:bg-neutral-400 rounded-full text-white  border border-white px-10 py-2 hover:translate-y-[-2px]"
              }`}
            >
              SHA-1
            </button>
            
            <button
              onClick={() =>
                setHash({
                  name: "SHA-256",
                  link: "https://en.wikipedia.org/wiki/SHA-2",
                  text: "SHA-256 `Secure Hash Algorithm 256` is a cryptographic hash function that takes an input and generates a fixed-size 256-bit `32-byte` hash value. It is a widely used hash function and is considered to be secure for most cryptographic purposes, including digital signatures and message authentication codes `MACs`. SHA-256 is a member of the SHA-2 family of hash functions, which also includes SHA-224, SHA-384, and SHA-512. It was designed by the National Security Agency `NSA` and published by the National Institute of Standards and Technology `NIST` in 2001.",
                })
              }
              className={`${
                hash.name === "SHA-256"
                  ? "bg-sky-600 rounded-full text-white  border border-white px-10 py-2"
                  : "hover:bg-neutral-400 rounded-full text-white  border border-white px-10 py-2 hover:translate-y-[-2px]"
              }`}
            >
              SHA-256
            </button>
            <button
              onClick={() =>
                setHash({
                  name: "SHA-512",
                  link: "https://en.wikipedia.org/wiki/SHA-2",
                  text: "SHA-512 Cryptographic Hash Algorithm. A cryptographic hash `sometimes called `digest`` is a kind of `signature` for a text or a data file. SHA-512 generates an almost-unique 512-bit `32-byte` signature for a text.",
                })
              }
              className={`${
                hash.name === "SHA-512"
                  ? "bg-sky-600 rounded-full text-white  border border-white px-10 py-2"
                  : "hover:bg-neutral-400 rounded-full text-white  border border-white px-10 py-2 hover:translate-y-[-2px]"
              }`}
            >
              SHA-512
            </button>
          </div>
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
                    handleHash(input);
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
                {hash.name} OUTPUT:
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
            <h1 className="text-[3rem] font-thin">What is {hash.name}?</h1>
            <p className="text-[1.5rem] text-neutral-500 my-6">{hash.text}</p>
            <a
              className="text-sky-600 font-semibold text-[1.5rem]"
              target={"_blank"}
              href={hash.link}
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
