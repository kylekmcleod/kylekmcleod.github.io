import React from "react";
import { Card, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

export default function Projects() {
  return (
    <div className="max-w-[900px] mx-auto gap-3 grid grid-cols-12 grid-rows-2 px-8 justify-center items-center">

      <a href="https://github.com/kylekmcleod/Song-Seperator" target = "_blank" className="relative group col-span-12 sm:col-span-4 h-[200px]">
          <h4 className="text-white font-medium text-large">Song Seperator</h4>
          <p className="text-tiny text-white/60 uppercase font-bold mb-2">Web app for music producers </p>
        <Card className="col-span-12 sm:col-span-4 h-[150px]">
          <div className="relative w-full h-full">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/images/songSeperator.png"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </Card>
      </a>
      
      <a href="https://github.com/kylekmcleod/Ticket-Apprentice" target = "_blank" className="relative group col-span-12 sm:col-span-4 h-[200px]">
        <h4 className="text-white font-medium text-large">Ticket Apprentice</h4>
        <p className="text-tiny text-white/60 uppercase font-bold mb-2">Event ticketing software </p>
        <Card className="col-span-12 sm:col-span-4 h-[150px]">
          <div className="relative w-full h-full">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/images/ticketApprentice.png"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </Card>
      </a>

      <a href="https://github.com/kylekmcleod/E-Commerce-Watch-Store" target = "_blank"className="relative group col-span-12 sm:col-span-4 h-[200px]">
        <h4 className="text-white font-medium text-large">Time Piece Vault</h4>
        <p className="text-tiny text-white/60 uppercase font-bold mb-2">E-commerce watch store </p>
        <Card className="col-span-12 sm:col-span-4 h-[150px]">
          <div className="relative w-full h-full">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/images/timePieceVault.png"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </Card>
      </a>
    </div>
  );
}
