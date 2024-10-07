import CoffeesList from "../containers/CoffeesList";

export default function Products(){
    return <div className="bg-[#ececec] p-3 max-w-[1400px] mx-auto min-h-screen">
        <nav className="flex gap-x-2 justify-center">
            <img className="size-10" src="./src/assets/logo.png" alt="" />
            <h1 className="text-3xl font-bold">Starbucks</h1>
        </nav>
        {/* up */}
        <CoffeesList title="Starbucks Online Coffee Order"/>
        {/* down */}
        <CoffeesList title="Bill"/>
    </div>
}