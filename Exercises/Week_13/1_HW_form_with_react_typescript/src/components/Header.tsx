import { useState } from "react"

const data = [
    {id: 1 , text : "Company",},
    {id: 2 , text : "services",},
    {id: 3 , text : "finTech Solution",},
    {id: 4 , text : "Products",},
    {id: 5 , text : "Portfolio",},
    {id: 6 , text : "Contact us",},
]

export default function Header({content}:{content : (i : boolean)=>void}) {
  const [menu , setMenu] = useState<boolean>(false);
    let linksEl = data.map((obj)=>{
       return <a href="" className="text-nowrap grow max-md:grow-0" key={obj.id}>{obj.text}</a>
    })
    const onClickHandler : React.MouseEventHandler<HTMLDivElement> = ()=>{
      setMenu(!menu)
      content(!menu)
    }
  return (
    <div className="bg-grayApp px-28 max-md:px-10 flex gap-x-28 justify-center py-4 items-center mx-auto max-md:justify-between  max-md:flex-wrap fixed w-full">
      {/* <h2 className="text-grayApp text-xl font-semibold ">LOGO</h2> */}
      <img className="size-10" src="./src/assets/gold-medal.svg" alt="" />
      <div className="text-goldApp text-sm font-normal flex gap-x-6 grow max-w-[597px] max-md:hidden">
        {linksEl}
      </div>
      <div className="shrink-0 hidden max-md:block " onClick={onClickHandler}>
        <img className="size-10 cursor-pointer" src="./src/assets/burger-menu.svg" alt="" />
        <div className={`absolute bg-grayApp left-0 pb-2 ${menu ? "" : "hidden"} text-goldApp text-sm font-normal flex flex-col gap-y-8 w-full max-md:h-screen items-center pt-5`}>
        {linksEl}
      </div>
      </div>
    </div>
  );
}
