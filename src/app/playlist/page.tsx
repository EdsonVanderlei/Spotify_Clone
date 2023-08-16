"use client";
import Image from "next/image";
import Layout from "../Layout/Layout";
import cyberPunk from "../../../public/cyber.jpg";
import { AiFillHeart, AiFillPlayCircle, AiOutlineSearch } from "react-icons/ai";
import { BsSpotify } from "react-icons/bs";
import { FiDownloadCloud } from "react-icons/fi";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowDropdown,
} from "react-icons/io";

const PlayList = () => {
  return (
    <Layout>
      <section className="flex gap-2 flex-1 rounded-lg overflow-hidden w-full">
        <div className="flex-1 flex flex-col  h-[calc(100vh-100px)] overflow-y-auto overflow-x-hidden ">
          <div
            className={`flex w-full justify-between items-center fixed top-6 z-20  bg-transparent px-5`}
          >
            <div className="flex items-center gap-3 flex-1 ">
              <div className="bg-black cursor-pointer flex items-center justify-center rounded-full w-8 h-8  shrink-0">
                <IoIosArrowBack className="text-white text-lg " />
              </div>
              <div className="bg-black cursor-pointer flex items-center justify-center rounded-full w-8 h-8  shrink-0">
                <IoIosArrowForward className="text-white text-lg " />
              </div>
            </div>
            <div className="flex items-center gap-3 flex-1 justify-end">
              <div className="basis-6 grow-0 shrink-0 h-6 rounded-full bg-white"></div>
              <div className="basis-6 grow-0 shrink-0 h-6 rounded-full bg-white"></div>
            </div>
          </div>
          <section className="grid gap-3 content-start bg-gray-900">
            <div className="flex items-end gap-7 h-auto bg-gradient-to-t from-gray-800 via-gray-800 to-gray-600 px-4 py-6 pt-20 ">
              <div className="bg-white w-52 h-52 shrink-0 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"></div>
              <div className="flex flex-col items-start gap-6">
                <p className="text-white font-semibold text-sm">
                  Playlist pública
                </p>
                <p className="text-white font-bold text-8xl">
                  Lucas + Lucas + Edson
                </p>
                <p className="text-zinc-300 text-sm -mb-3">
                  Um match de músicas feito para Edson,Lucas e Lucas. Atualizado
                  todos os dias
                </p>
                <div className="flex items-center gap-2 text-white text-sm">
                  <BsSpotify className="text-green-500 text-lg" />
                  <p className=" font-semibold">Spotify</p>
                  <p>3 curtidas</p>
                  <p>50 músicas,</p>
                  <p className="text-zinc-300">3h 4min</p>
                </div>
              </div>
            </div>
            <div className="px-4">
              <div className="flex justify-between items-center p-4">
                <div className="flex items-center gap-6">
                  <AiFillPlayCircle className="text-5xl text-green-500" />
                  <AiFillHeart className="text-2xl text-green-500" />
                  <FiDownloadCloud className="text-zinc-600 text-2xl" />
                  <div className="flex items-center gap-2">
                    {Array(3)
                      .fill("x")
                      .map((_, index) => {
                        return (
                          <div
                            key={index}
                            className="w-1 h-1 rounded-full bg-white"
                          ></div>
                        );
                      })}
                  </div>
                </div>
                <div className="flex items-center text-zinc-400 gap-4 ">
                  <AiOutlineSearch className="text-xl" />
                  <div className="flex items-center gap-1">
                    <p>Ordem personalizada</p>
                    <IoMdArrowDropdown className="text-2xl" />
                  </div>
                </div>
              </div>
              <table className="table-auto w-full border-separate border-spacing-y-7">
                <thead className="[&>tr>th]:sticky [&>tr>th]:top-0 [&>tr>th]:text-zinc-500 [&>tr>th]:text-left [&>tr>th]:text-base [&>tr>th]:font-normal [&>tr>th]:border-b-1 [&>tr>th]:border-zinc-500">
                  <tr>
                    <th>#</th>
                    <th>Título</th>
                    <th>Álbum</th>
                    <th>Adicionada por</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody className="w-full">
                  {Array(10)
                    .fill("0")
                    .map((_, index) => {
                      return (
                        <tr
                          key={index}
                          className="[&>p]:text-zinc-400 [&>p]:text-xs"
                        >
                          <td>
                            <p className="text-zinc-500">{index}</p>
                          </td>
                          <td>
                            <div className="flex gap-2">
                              <div className="w-12 h-12 shrink-0 bg-white rounded-sm relative overflow-hidden">
                                <Image
                                  src={cyberPunk.src}
                                  fill={true}
                                  alt="Imagem CyberPunk Music"
                                />
                              </div>
                              <div className="flex flex-col justify-between items-start">
                                <p className="text-white font-semibold text-sm">
                                  Square Hammer
                                </p>
                                <p className="text-zinc-500">Ghost</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-zinc-500">Meliora{"(Redux)"}</p>
                          </td>
                          <td>
                            <div className="bg-white w-6 h-6 rounded-full"></div>
                          </td>
                          <td>
                            <p className="text-zinc-500">4:31</p>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default PlayList;
