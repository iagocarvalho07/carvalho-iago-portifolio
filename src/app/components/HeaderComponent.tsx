export const HeaderComponent = () => {
    return (
        <div className="fixed top-8 mx-4 container h-24 bg-headerBackgroud rounded-xl flex  items-center ">
            <div className=" w-2/5 flex md:gap-3 text-red-600 content-center justify-start ml-5" >
                xxx
            </div>
            <div className=" container w-3/5 h-24  flex content-center justify-around place-content-center, items-center ">
                <a className="h-fit" href="">Home</a>
                <a className="h-fit" href="">Sobre</a>
                <a className="h-fit" href="">Habillidades</a>
                <a className="group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-black focus:outline-none focus:ring active:text-opacity-75"
                href="#">
                    <span className="block rounded-full bg-slate-900 px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                Contato</span></a>
            </div>
        </div>
    )
}