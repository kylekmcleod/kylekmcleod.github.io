import React from "react";
import { Card } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Snippet } from "@nextui-org/snippet";

export default function TechStack() {
  return (
    <div>
        <TechStackButton label="Windows" />
        <TechStackButton label="Java" />
        <TechStackButton label="Python" />
        <TechStackButton label="JavaScript" />
        <TechStackButton label="TypeScript" />
        <TechStackButton label="HTML" />
        <TechStackButton label="CSS" />
        <TechStackButton label="Node.js" />
        <TechStackButton label="Express.js" />
        <TechStackButton label="React" />
        <TechStackButton label="Next.js" />
        <TechStackButton label="MongoDB" />
        <TechStackButton label="MySQL" />
        <TechStackButton label="VS Code" />
        <TechStackButton label="Eclipse" />
        <TechStackButton label="Git" />
        <TechStackButton label="Docker" />
        <TechStackButton label="Google Cloud" />
        <TechStackButton label="Figma" />
        <TechStackButton label="Postman" />
    </div>
  );
}

// Tech Stack Button Component
const TechStackButton = ({ label }: { label: string }) => (
  <Snippet hideCopyButton symbol="" variant="bordered" className="py-2 px-3 mt-2" style={{ marginRight: '4px', marginLeft: '4px'}}>
    {label}
  </Snippet>
);
