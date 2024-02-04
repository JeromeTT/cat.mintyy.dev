"use client";
import Image from "next/image";
import Player from "./components/player";
import Gallery from "./components/gallery";
export default function Home() {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="flex flex-col w-full items-center bg-green-200 rounded-3xl">
            <h1 className="text-5xl">Mr. Fresh</h1>
            <Gallery></Gallery>
            <Image
              src="https://media1.tenor.com/m/ovWTVvG3VBwAAAAd/mr-fresh-mr-fresh-multiverse.gif"
              width="400"
              height="400"
              alt="Mr. Fresh"
            ></Image>
            <p>(I spent 11 hours just for the stream to not work.)</p>
          </div>
        </main>
      </body>
    </html>
  );
}
