import { ThemeProvider } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Phone, Download } from "lucide-react";

export default function Home() {
  return (
      <ThemeProvider>
      <main className="flex min-h-screen w-full max-w-3xl flex-col justify-between py-32 px-16 sm:items-start">
          <div className="flex items-center gap-8 ml-50">
          <div className="w-70 h-70 bg-[#E4B9A5] rounded-full overflow-hidden flex items-center justify-center">
  <Image
    src="/sary.png"
    alt="logo"
    width={200}
    height={200}
    className="object-cover"
  />
</div>
<div className="flex flex-col items-center gap-8 ml-10 justify-center">
 <h1 className=" items-center font-normal"><span className="text-xl">Bonjour, je suis </span><br/> 
<span className="text-[#8a5209] text-5xl font-normal">Giovanni <br/></span><span className="text-3xl font-light">Développeur web et mobile</span></h1>   
<div className="flex items-center gap-4 ">
            <Button className="bg-transparent text-black border-2 hover:bg-gray-100 dark:text-white dark:hover:bg-black transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer"><Phone/>Contactez-moi</Button>
            <Button className="bg-[#8a5209] text-white hover:animate-bounce cursor-pointer hover:bg-amber-500 "><Download/>Télécharger mon CV</Button>
          </div>
          </div>
          </div>
         
      </main>
      </ThemeProvider>
  );
}
