import React from "react";
import { Card, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

export default function Projects() {
  return (
    <div className="max-w-[900px] mx-auto gap-3 grid grid-cols-12 grid-rows-2 px-8 justify-center items-center">

      <a href="#" className="relative group col-span-12 sm:col-span-4 h-[200px]">
        <Card className="col-span-12 sm:col-span-4 h-[150px]">
          <div className="relative">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-4.jpeg"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <h4 className="text-white font-medium text-large">Song Seperator</h4>
            <p className="text-tiny text-white/60 uppercase font-bold">Web app for music producers </p>
          </CardHeader>
        </Card>
      </a>
      
      <a href="#" className="relative group col-span-12 sm:col-span-4 h-[200px]">
        <Card className="col-span-12 sm:col-span-4 h-[150px]">
          <div className="relative">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-4.jpeg"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <h4 className="text-white font-medium text-large">Ticket Apprentice</h4>
            <p className="text-tiny text-white/60 uppercase font-bold">Event ticketing software </p>
          </CardHeader>
        </Card>
      </a>

      <a href="#" className="relative group col-span-12 sm:col-span-4 h-[200px]">
        <Card className="col-span-12 sm:col-span-4 h-[150px]">
          <div className="relative">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-4.jpeg"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <h4 className="text-white font-medium text-large">Time Piece Vault</h4>
            <p className="text-tiny text-white/60 uppercase font-bold">E-commerce watch store </p>
          </CardHeader>
        </Card>
      </a>

    </div>
  );
}
