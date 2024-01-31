import Script from "next/script";
import Player from "./components/player";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1 className="text-5xl">CAT.MINTYY.DEV</h1>
          <Image
            src="https://media1.tenor.com/m/ovWTVvG3VBwAAAAd/mr-fresh-mr-fresh-multiverse.gif"
            width="400"
            height="400"
            alt="Fresh"
          ></Image>
          <p>Surely I get this working soon™...</p>
        </main>
      </body>
    </html>
  );
}
