import { button as buttonStyles } from "@nextui-org/theme";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen">
      <div className="relative min-h-[calc(100vh-150px)] bg-base-200 text-center flex items-center justify-center mb-32 flex-col">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl font-light mb-4">This page does not exist.</p>
        <Link
          href="/"
          className={buttonStyles({
            variant: "bordered",
            radius: "full",
          })}
        >
          Home
        </Link>
      </div>
    </div>
  );
}
