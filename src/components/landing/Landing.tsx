
const Landing = () => {
    const a = Array.from({length: 20}, () => Math.floor(Math.random() * 100))
    const handleLink = (url:string) => {
        window.open(url)
    }

    return(
        <main className="flex flex-col items-center w-[500px] h-screen overflow-hidden mx-auto">
        <div className="pt-[15vh] w-[500px]">
          <h1 className="font-bold text-6xl animate-fadeIn w-fit mx-auto">Prism</h1>
          <div className="flex flex-row w-50 justify-around mt-10">
            <div className="cursor-pointer hover:underline" onClick={() => handleLink('https://github.com/yungukbae')}>Github</div>
            <div  className="cursor-pointer hover:underline" onClick={() => handleLink('https://www.linkedin.com/in/%EC%9C%A4%EA%B5%AD-%EB%B0%B0-133855175/')}>LinkedIn</div>
            <div>Profile</div>
          </div>
        </div>
        <div className="flex flex-col gap-10 overflow-scroll w-full pb-10 shadow-inner">
          <div className="min-h-[35vh] w-full"></div>
          {a.map((v,i) => {
              return(
              <div key={i} className="flex flex-col justify-start">
                <div className="text-2xl"> How to Improve the rainbow effect?</div>
                <div className="text-sm text-slate-400"> 2023.01.10 </div>
              </div>)
          })}
        </div>
      </main>
    )
}

export default Landing