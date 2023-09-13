import useObserver from "@/hooks/useObserver";
import { cn } from "@/util/cn";
import { useEffect, useRef, useState } from "react"

const Landing = () => {
    const isRef = useRef<HTMLDivElement>(null);
    const observed = useObserver({
      itemRef: isRef,
      options: {
        rootMargin: '0px 0px -30px 0px'
      }
    });
    const [show, setShow] = useState(false);
    const a = Array.from({length: 20}, () => Math.floor(Math.random() * 100))
    const handleLink = (url:string) => {
        window.open(url)
    }

    useEffect(() => {
      setTimeout(() => {
        if(!show)
         setShow(true)
      },3000)
    },[show])

    return(
      <main className={cn(["transition duration-1000 flex flex-col items-center w-screen h-screen overflow-hidden",!observed && ' backdrop-blur-sm'])}>
        <div className="pt-[15vh] w-[500px]">
          <h1 className={cn(["font-bold text-6xl w-fit mx-auto", show ? 'animate-fadeIn' : 'opacity-0'])}>Prism</h1>
          <div className="flex flex-row w-50 justify-around mt-10">
            <div className="  cursor-pointer hover:underline" onClick={() => handleLink('https://github.com/yungukbae')}>Github</div>
            <div  className="cursor-pointer hover:underline" onClick={() => handleLink('https://www.linkedin.com/in/%EC%9C%A4%EA%B5%AD-%EB%B0%B0-133855175/')}>LinkedIn</div>
          </div>
        </div>
        <div className="flex flex-col overflow-scroll no-scrollbar w-[500px]">
          <div ref={isRef} className="min-h-[35vh] w-full"></div>
          {a.map((v,i) => {
              return(
              <div key={i} className={cn(["flex flex-col justify-start pb-10", show ? `animate-fadeInoDown` : 'opacity-0'])}>
                <div className="text-2xl"> How to Improve the rainbow effect?</div>
                <div className="text-sm text-slate-400"> 2023.01.10 </div>
              </div>)
          })}
          <div className="min-h-[5vh] w-full"></div>
        </div>
      </main>
    )
}

export default Landing