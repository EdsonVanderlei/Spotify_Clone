"use client";
import Image from "next/image";
import EminemDaily from "../../public/Eminem.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Layout from "./Layout/Layout";
import { useRef, useState } from "react";
import MarkProfile from "../../public/markProfile.jpg";
import useFixed from "@/hooks/useFixed";
import LinkinParkAlbum from "../../public/LinkinParkAlbum.jpg";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const parent = useRef<HTMLDivElement>(null);
  const child = useRef<HTMLDivElement>(null);
  const [Adviser, setAdviser] = useState<boolean>(true);
  useFixed({ parent, child });

  return (
    <Layout>
      <section className="flex gap-2 flex-1 w-full overflow-hidden rounded-lg relative">
        <div
          ref={parent}
          className="flex-1 flex flex-col gap-5 bg-gray-900 h-[calc(100vh-100px)] overflow-y-auto overflow-x-hidden w-full relative"
        >
          <div
            ref={child}
            className={`flex w-full justify-between items-center absolute top-6 z-20 left-0 right-0  bg-transparent px-3`}
          >
            <div className="flex items-center gap-3 flex-1 ">
              <div className="bg-black cursor-pointer flex items-center justify-center rounded-full w-8 h-8 shrink-0">
                <IoIosArrowBack className="text-white text-lg " />
              </div>
              <div className="bg-black cursor-pointer flex items-center justify-center rounded-full w-8 h-8 shrink-0">
                <IoIosArrowForward className="text-white text-lg " />
              </div>
            </div>
            <div className="flex items-center gap-3 flex-1 justify-end ">
              <div className="w-8  shrink-0 h-8 rounded-full  overflow-hidden relative">
                <Image src={MarkProfile.src} alt="Profile Photo" fill={true} />
              </div>
              <div className="w-8 shrink-0 h-8 rounded-full overflow-hidden relative">
                <Image src={MarkProfile.src} alt="Profile Photo" fill={true} />
              </div>
            </div>
          </div>
          <section className="p-5 grid gap-5 mt-6">
            <AnimatePresence>
              {Adviser && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="px-4 flex m-auto items-center py-6 gap-4 bg-gradient-to-bl from-slate-900 rounded-xl via-zinc-900 to-black w-[80%]"
                >
                  <div className="w-48 h-48 bg-white shrink-0 rounded-lg relative overflow-hidden">
                    <Image
                      src={LinkinParkAlbum.src}
                      alt="LinkinPark Album Photo"
                      fill={true}
                    />
                  </div>
                  <div className="flex items-start w-full justify-between">
                    <div className="flex flex-col justify-start">
                      <p className="text-white text-xs font-semibold mb-3">
                        ÁLBUM
                      </p>
                      <div className="grid gap-2">
                        <p className="text-white font-bold text-7xl">
                          Linkin Park
                        </p>
                        <p className="text-white text-xs font-semibold">
                          Linkin Park
                        </p>
                        <p className="text-white">Linkin Park. Ouça agora!</p>
                        <div className="flex gap-2 items-center">
                          <p className="text-black bg-green-500 border-1 border-green-500 cursor-pointer px-8 py-3 rounded-3xl">
                            Play
                          </p>
                          <p className="border-solid border-1 text-white cursor-pointer border-white px-8 py-3 rounded-3xl">
                            Salvar
                          </p>
                          <div className="flex gap-2 cursor-pointer p-3">
                            {Array(3)
                              .fill("0")
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
                      </div>
                    </div>
                    <p
                      onClick={() => setAdviser(false)}
                      className="text-white p-2 cursor-pointer rounded-3xl bg-black font-bold text-sm"
                    >
                      Ocultar Propagandas
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className=" grid gap-6 mt-5">
              <p className="text-4xl font-bold text-white">Boa Tarde</p>
              <div className="grid grid-cols-3 gap-3">
                {Array(6)
                  .fill("x")
                  .map((_, index) => {
                    return (
                      <div
                        key={index}
                        className="flex cursor-pointer hover:bg-zinc-600 transition-colors bg-zinc-700  items-center rounded-md overflow-hidden w-full"
                      >
                        <div className="w-20 h-20 shrink-0 relative">
                          <Image
                            src={MarkProfile.src}
                            alt="Mark Album"
                            fill={true}
                          />
                        </div>
                        <div className="flex items-center p-2">
                          <p className="text-white font-bold text-sm">
                            Album Markinho
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            <section className="grid gap-7">
              {Array(6)
                .fill("x")
                .map((_, index) => {
                  return (
                    <section key={index} className="flex flex-col gap-4 ">
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
                                className="bg-zinc-900 p-3 rounded-lg grid basis-48 shrink-0 grow-0 gap-4 max-w-widthPhoto"
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
    </Layout>
  );
}
