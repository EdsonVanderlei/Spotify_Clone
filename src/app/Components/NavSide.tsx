import React from "react";
import Image from "next/image";
import { GoHome } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { LuLibrary } from "react-icons/lu";
import { AiOutlineArrowRight, AiOutlinePlus } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsSoundwave } from "react-icons/bs";
import { usePathname } from "next/navigation";
import HomerAlbum from "../../../public/HomerAlbum.jpg";
import Link from "next/link";

const NavSide = ({ isMenuMobile }: { isMenuMobile: boolean }) => {
  const pathName = usePathname();
  return (
    <aside className="flex flex-col gap-2 w-auto ">
      <nav
        className={`flex flex-col gap-4 p-4 bg-zinc-900 rounded-lg text-gray-400 font-bold ${
          isMenuMobile ? "items-center" : ""
        }`}
      >
        <Link
          href={"/"}
          className={`flex gap-4 p-1 cursor-pointer items-center ${
            pathName == "/" ? "text-white" : ""
          }`}
        >
          <GoHome size={24} />
          {!isMenuMobile && <p> Início</p>}
        </Link>
        <a className="flex gap-4 p-1 cursor-pointer items-center">
          <FiSearch size={24} />
          {!isMenuMobile && <p> Buscar</p>}
        </a>
      </nav>
      <nav
        className={`flex flex-col gap-3  flex-1 bg-zinc-900 rounded-lg p-4  w-full ${
          isMenuMobile ? "items-center" : ""
        }`}
      >
        <div
          className={`flex justify-between text-gray-400 font-bold  px-2  ${
            !isMenuMobile ? "mb-6" : ""
          }`}
        >
          <div className="flex items-center gap-2">
            <LuLibrary size={24} />
            {!isMenuMobile && <p>Sua biblioteca</p>}
          </div>
          {!isMenuMobile && (
            <div className="flex gap-4">
              <AiOutlinePlus className="cursor-pointer" size={20} />
              <AiOutlineArrowRight className="cursor-pointer" size={20} />
            </div>
          )}
        </div>
        {!isMenuMobile && (
          <>
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
          </>
        )}

        <nav
          className={` overflow-y-auto overflow-x-hidden rounded-lg ${
            isMenuMobile ? "h-[calc(100vh-300px)]" : " h-[calc(100vh-390px)]"
          }`}
        >
          {Array(5)
            .fill(0)
            .map((_, index) => {
              return (
                <Link
                  href={`/playlist`}
                  key={index}
                  className={`flex gap-2 py-2 items-center  hover:bg-gray-800 rounded-md cursor-pointer w-full ${
                    !isMenuMobile ? "px-3 " : ""
                  }`}
                >
                  <div className="h-12 w-12  shrink-0  rounded-md overflow-hidden relative">
                    <Image
                      fill={true}
                      src={HomerAlbum.src}
                      alt="Homer Photo Album Music"
                    />
                  </div>
                  {!isMenuMobile && (
                    <div className="flex justify-between items-center w-full gap-24 ">
                      <div className="flex flex-col ">
                        <p className="text-white whitespace-nowrap">
                          Lucas + Lucas + Edson
                        </p>
                        <p className="text-zinc-700 text-sm">
                          Playlist spotify
                        </p>
                      </div>
                      <BsSoundwave className="text-green-500 ml-8" size={24} />
                    </div>
                  )}
                </Link>
              );
            })}
        </nav>
      </nav>
    </aside>
  );
};

export default NavSide;
