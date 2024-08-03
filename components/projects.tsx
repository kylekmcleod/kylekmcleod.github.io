import React from "react";
import { Card } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

export default function Projects() {
  return (
    <div className="w-full mx-auto gap-10 grid grid-cols-1 md:grid-cols-2">
      
      {/* Project */}
      <a href="https://github.com/kylekmcleod" target="_blank" rel="noreferrer" className="relative group">
        <div className="flex flex-col justify-center h-full">
          <h4 className="font-medium text-lg">Paper Trading App</h4>
          <p className="text-sm uppercase font-bold mb-2 text-gray-500">Invest with zero risk</p>
          <Card className="w-full">
            <div className="relative w-full h-full">
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="/images/paperTrader.png"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Card>
        </div>
      </a>

      {/* Project */}
      <a href="https://github.com/kylekmcleod/Algorithmic-Trading-Learning" target="_blank" rel="noreferrer" className="relative group">
        <div className="flex flex-col justify-center h-full">
          <h4 className="font-medium text-lg">Algorithmic Stock Trading</h4>
          <p className="text-sm uppercase font-bold mb-2 text-gray-500">Machine Learning Practice</p>
          <Card className="w-full">
            <div className="relative w-full h-full">
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="/images/algTrading.png"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Card>
        </div>
      </a>

      {/* Project */}
      <a href="https://github.com/kylekmcleod/Song-Seperator" target="_blank" rel="noreferrer" className="relative group">
        <div className="flex flex-col justify-center h-full">
          <h4 className="font-medium text-lg">Song Seperator</h4>
          <p className="text-sm uppercase font-bold mb-2 text-gray-500">AI Music Splitter</p>
          <Card className="w-full">
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
        </div>
      </a>
      
      {/* Project */}
      <a href="https://github.com/kylekmcleod/Ticket-Apprentice" target="_blank" rel="noreferrer" className="relative group">
        <div className="flex flex-col justify-center h-full">
          <h4 className="font-medium text-lg">Ticket Apprentice</h4>
          <p className="text-sm uppercase font-bold mb-2 text-gray-500">Event ticketing software</p>
          <Card className="w-full">
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
        </div>
      </a>

      {/* Project */}
      <a href="https://github.com/kylekmcleod/E-Commerce-Watch-Store" target="_blank" rel="noreferrer" className="relative group">
        <div className="flex flex-col justify-center h-full">
          <h4 className="font-medium text-lg">Time Piece Vault</h4>
          <p className="text-sm uppercase font-bold mb-2 text-gray-500">E-commerce watch store</p>
          <Card className="w-full">
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
        </div>
      </a>
    </div>
  );
}
