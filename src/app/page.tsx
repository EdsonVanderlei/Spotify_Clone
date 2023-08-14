"use client";
import Image from "next/image";
import HomerAlbum from "../../public/HomerAlbum.jpg";
import MineMusicPhoto from "../../public/Mine.png";
import EminemDaily from "../../public/Eminem.png";
import { GoHome } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import {
  BsFillVolumeUpFill,
  BsPauseCircleFill,
  BsSoundwave,
} from "react-icons/bs";
import { LuLibrary } from "react-icons/lu";
import { LiaRandomSolid } from "react-icons/lia";
import { TbMicrophone2 } from "react-icons/tb";
import { RiMenu4Fill, RiRepeatLine } from "react-icons/ri";
import { FaComputer } from "react-icons/fa6";
import {
  AiFillPauseCircle,
  AiOutlinePlus,
  AiOutlineArrowRight,
  AiFillHeart,
  AiOutlinePlaySquare,
  AiFillStepBackward,
  AiFillStepForward,
  AiOutlineExpandAlt,
} from "react-icons/ai";
import {
  IoMdArrowDropdown,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import { useState } from "react";

export default function Home() {
  const [navBar, setNavBar] = useState(false);

  const handleScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const { scrollTop } = event.currentTarget;
    if (scrollTop > 400 && !navBar) {
      setNavBar(true);
    } else if (scrollTop < 400 && navBar) {
      setNavBar(false);
    }
  };

  return (
    <main className="flex flex-col bg-black h-screen w-full">
      <section className="flex gap-2 flex-1 p-3">
        <aside className="flex flex-col gap-2 w-auto ">
          <nav className="flex flex-col gap-1 p-4 bg-zinc-900 rounded-lg text-gray-400 font-bold">
            <a className="flex gap-4 p-1 cursor-pointer items-center">
              <GoHome size={24} /> Início
            </a>
            <a className="flex gap-4 p-1 cursor-pointer items-center">
              <FiSearch size={24} />
              Buscar
            </a>
          </nav>
          <nav className="flex flex-col gap-3  flex-1 bg-zinc-900 rounded-lg p-4  w-full">
            <div className="flex justify-between text-gray-400 font-bold mb-6 px-2">
              <p className="flex items-center gap-2">
                <LuLibrary size={24} /> Sua Biblioteca
              </p>
              <div className="flex gap-4">
                <AiOutlinePlus className="cursor-pointer" size={20} />
                <AiOutlineArrowRight className="cursor-pointer" size={20} />
              </div>
            </div>
            <div className="flex gap-2 items-start text-white text-sm font-semibold">
              <p className="rounded-2xl px-3 py-1 bg-zinc-700 whitespace-nowrap cursor-pointer">
                Playlists
              </p>
              <p className="rounded-2xl px-3 py-1  bg-zinc-700 whitespace-nowrap cursor-pointer">
                Podcasts e programas
              </p>
              <p className="rounded-2xl px-3 py-1 bg-zinc-700 whitespace-nowrap cursor-pointer">
                Álbuns
              </p>
            </div>
            <div className="flex justify-between items-center text-gray-400  px-2">
              <FiSearch size={18} />
              <p className="text-sm flex items-center gap-2 cursor-pointer">
                Recentes <IoMdArrowDropdown size={20} />
              </p>
            </div>
            <nav className="">
              {Array(5)
                .fill(0)
                .map((_, index) => {
                  return (
                    <div
                      key={index}
                      className="flex gap-2 px-3 py-2 hover:bg-gray-800 rounded-md cursor-pointer w-full"
                    >
                      <div className="basis-12 grow-0 shrink-0 h-12 flex-0 rounded-sm overflow-hidden relative">
                        <Image
                          fill={true}
                          src={HomerAlbum.src}
                          alt="Homer Photo Album Music"
                        />
                      </div>
                      <div className="flex justify-between items-center w-full ">
                        <div className="flex flex-col ">
                          <p className="text-white whitespace-nowrap">
                            Lucas + Lucas + Edson
                          </p>
                          <p className="text-zinc-700 text-sm">
                            Playlist spotify
                          </p>
                        </div>
                        <BsSoundwave className="text-green-500" size={24} />
                      </div>
                    </div>
                  );
                })}
            </nav>
          </nav>
        </aside>
        <div
          onScroll={(e) => handleScroll(e)}
          className="flex-1 flex flex-col gap-5 bg-gray-900 rounded-lg  "
        >
          <div
            className={`flex justify-between items-center sticky top-0 p-5 ${
              navBar ? "bg-slate-950" : "bg-transparent"
            }`}
          >
            <div className="flex items-center gap-3 flex-1 ">
              <div className="bg-black cursor-pointer flex items-center justify-center rounded-full basis-9 h-9 grow-0 shrink-0">
                <IoIosArrowBack className="text-white text-xl " />
              </div>
              <div className="bg-black cursor-pointer flex items-center justify-center rounded-full basis-9 h-9 grow-0 shrink-0">
                <IoIosArrowForward className="text-white text-xl " />
              </div>
            </div>
            <div className="flex items-center gap-3 flex-1 justify-end">
              <div className="basis-6 grow-0 shrink-0 h-6 rounded-full bg-white"></div>
              <div className="basis-6 grow-0 shrink-0 h-6 rounded-full bg-white"></div>
            </div>
          </div>
          <section className="p-5 grid gap-5 h-[calc(100vh-200px)] overflow-y-auto">
            <p className="text-3xl text-white font-bold">Boa noite</p>
            <div className="grid grid-cols-albuns gap-6">
              {Array(6)
                .fill("x")
                .map((_, index) => (
                  <div
                    key={index}
                    className="flex h-auto w-full rounded-md overflow-hidden cursor-pointer bg-slate-800 hover:bg-slate-700 transition-colors relative"
                  >
                    <div className="basis-20 grow-0 shrink-0 bg-white relative">
                      <Image
                        fill
                        src={HomerAlbum.src}
                        alt="Homer Photo Album Music"
                      />
                    </div>
                    <div className="flex items-center justify-between flex-1  px-4 py-4">
                      <p className="text-white">Lucas + Lucas + Edson</p>
                      <AiFillPauseCircle
                        size={48}
                        className="text-green-black"
                      />
                    </div>
                  </div>
                ))}
            </div>
            <section className="grid gap-7">
              {Array(6)
                .fill("x")
                .map((_, index) => {
                  return (
                    <section key={index} className="flex flex-col gap- jus">
                      <div className="flex justify-between w-full items-center">
                        <p className="text-white text-2xl font-bold">
                          Feito para Edson Vanderlei
                        </p>
                        <p className="text-sm text-zinc-500 font-bold ">
                          Mostrar tudo
                        </p>
                      </div>
                      <div className="flex justify-between gap-3">
                        {Array(7)
                          .fill("x")
                          .map((_, index) => {
                            return (
                              <div
                                key={index}
                                className="bg-zinc-900 p-3 rounded-lg grid gap-4 max-w-widthPhoto"
                              >
                                <div className=" h-40 rounded-xl overflow-hidden bg-white grow-0 shrink-0 relative">
                                  <Image
                                    fill={true}
                                    src={EminemDaily.src}
                                    alt="Eminem Photo to Daily Mix"
                                  />
                                </div>
                                <p className="text-white font-bold text-base">
                                  Daily Mix 1
                                </p>
                                <p className="text-zinc-500 text-sm font-semibold">
                                  Eminem, Travis Scott, Metro Boomin e mais
                                </p>
                              </div>
                            );
                          })}
                      </div>
                    </section>
                  );
                })}
            </section>
          </section>
        </div>
      </section>
      <footer className="h-auto p-3 flex justify-between items-center w-full px-5">
        <div className="flex items-center gap-3 flex-1">
          <div className="basis-12 grow-0 shrink-0 h-12 flex-0 rounded-sm bg-white relative">
            <Image
              src={MineMusicPhoto.src}
              fill={true}
              alt="Mine Mine Mine Music !"
            />
          </div>
          <div className="flex flex-col items-start">
            <p className="text-sm text-white font-semibold whitespace-nowrap ">
              Mine Mine Mine !
            </p>
            <p className="text-xs text-zinc-700">Wind Rose</p>
          </div>
          <AiFillHeart
            className="text-green-500 basis-5 shrink-0 grow-0 mx-4"
            size={20}
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-2 flex-1">
          <div className="flex items-center gap-4 text-white text-xl">
            <LiaRandomSolid className="cursor-pointer" />
            <AiFillStepBackward className="cursor-pointer" />
            <BsPauseCircleFill className="text-3xl cursor-pointer" />
            <AiFillStepForward className="cursor-pointer" />
            <RiRepeatLine className="cursor-pointer" />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-white text-xs font-semibold">0:00</p>
            <div className="w-[600px] bg-zinc-500 h-1 rounded-full">
              <div
                className="bg-white h-full rounded-full"
                style={{ width: "50%" }}
              ></div>
            </div>
            <p className="text-xs text-zinc-500 font-semibold">0:00</p>
          </div>
        </div>
        <div className="flex items-center gap-2 justify-end text-white text-lg flex-1">
          <AiOutlinePlaySquare className="cursor-pointer" />
          <TbMicrophone2 className="cursor-pointer" />
          <RiMenu4Fill className="cursor-pointer" />
          <FaComputer className="cursor-pointer" />
          <div className="flex items-center gap-2">
            <BsFillVolumeUpFill className="cursor-pointer" />
            <div className="w-20 h-1 rounded-full bg-zinc-700">
              <div
                className="bg-white flex justify-end items-center h-full rounded-full cursor-pointer "
                style={{ width: "50%" }}
              >
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
          <AiOutlineExpandAlt className="cursor-pointer" />
        </div>
      </footer>
    </main>
  );
}
