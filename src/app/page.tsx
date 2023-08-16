"use client";
import Image from "next/image";
import EminemDaily from "../../public/Eminem.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Layout from "./Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="flex gap-2 flex-1 w-full overflow-hidden rounded-lg relative">
        <div className="flex-1 flex flex-col gap-5 bg-gray-900   h-[calc(100vh-100px)] overflow-y-auto overflow-x-hidden  ">
          <div
            className={`flex w-full justify-between items-center fixed top-6 z-20  bg-transparent px-3`}
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
              <div className="w-6  shrink-0 h-6 rounded-full bg-white"></div>
              <div className="w-6 shrink-0 h-6 rounded-full bg-white"></div>
            </div>
          </div>

          <section className="p-5 grid justify-items-center gap-5 ">
            <section className="grid justify-items-center p-5 mt-10 gap-6">
              <div className="w-auto px-4 flex items-center py-6 gap-4 bg-gradient-to-bl from-slate-900 rounded-xl via-zinc-900 to-black">
                <div className="w-48 h-[calc(100%-10px)] bg-white shrink-0 rounded-lg "></div>
                <div className="flex items-start">
                  <div className="flex flex-col justify-start ">
                    <p className="text-white text-xs font-semibold mb-3">
                      ÁLBUM
                    </p>
                    <div className="grid gap-2">
                      <p className="text-white font-bold text-7xl">
                        Tamborzão Raiz: Vol 2
                      </p>
                      <p className="text-white text-xs font-semibold">
                        MC Kevin o Chris
                      </p>
                      <p className="text-white">
                        'Tamborzão Raiz: Vol2' de Mc Kevin O Chris. Ouça agora!
                      </p>
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
                  <p className="text-white p-2 rounded-3xl bg-black font-bold text-sm">
                    Ocultar Propagandas
                  </p>
                </div>
              </div>
            </section>
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
