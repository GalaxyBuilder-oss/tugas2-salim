export default function Header() {

    
    return (
        <header className="flex flex-row items-center gap-4 p-4 w-full bg-slate-400 shadow-lg sticky top-0 z-10">
            <img src="/fruit.png" alt="" className="h-10" />
            <h1 className="text-4xl font-bold animate-bounce">
                Salim FruitShop
            </h1>
        </header>
    )
}