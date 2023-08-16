import React from "react";
import Image from "next/image";
import MineMusicPhoto from "../../../public/Mine.png";
import {
  AiFillHeart,
  AiFillStepBackward,
  AiFillStepForward,
  AiOutlineExpandAlt,
  AiOutlinePlaySquare,
} from "react-icons/ai";
import { BsPauseCircleFill, BsFillVolumeUpFill } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import { LiaRandomSolid } from "react-icons/lia";
import { RiRepeatLine, RiMenu4Fill } from "react-icons/ri";
import { TbMicrophone2 } from "react-icons/tb";

const Footer = () => {
  return (
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
  );
};

export default Footer;
