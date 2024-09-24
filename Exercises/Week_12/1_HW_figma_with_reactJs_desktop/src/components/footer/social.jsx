const data = [
    {id : 1 , src :"./src/assets/footer/social1.svg"},
    {id : 2 , src :"./src/assets/footer/social2.svg"},
    {id : 3 , src :"./src/assets/footer/social3.svg"},
    {id : 4 , src :"./src/assets/footer/social4.svg"},
]

export default function Social(){
    let socialEl = data.map((obj)=>{
        return <a href="" key={obj.id}><img src={obj.src} alt="" /></a>
    })
    return socialEl;
}