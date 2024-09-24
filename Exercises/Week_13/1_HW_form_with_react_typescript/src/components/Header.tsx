const data = [
    {id: 1 , text : "Company",},
    {id: 2 , text : "services",},
    {id: 3 , text : "finTech Solution",},
    {id: 4 , text : "Products",},
    {id: 5 , text : "Portfolio",},
    {id: 6 , text : "Contact us",},
]

export default function Header() {
    let linksEl = data.map((obj)=>{
       return <p className="text-nowrap grow" key={obj.id}>{obj.text}</p>
    })
  return (
    <div className="bg-grayApp px-28 flex gap-x-28 justify-center py-4 items-center mx-auto max-md:justify-between">
      <h2 className="text-grayApp text-xl font-semibold ">LOGO</h2>
      <div className="text-grayPApp text-sm font-normal flex gap-x-6 grow max-w-[597px] max-md:hidden">
        {linksEl}
      </div>
      <div className="shrink-0 hidden max-md:block">
        <img className="size-10 " src="./src/assets/burger-menu.svg" alt="" />
      </div>
    </div>
  );
}
