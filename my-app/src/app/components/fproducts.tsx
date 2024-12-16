import Image from "next/image";
import { FaEye, FaHeart, FaStar } from "react-icons/fa";


const product = [
    {
    title: "HAVIT HV-G92 Gamepad",
    price: "$120",
    oldPrice: "$160",
    image: "/game.png",
    rating: 5,
    reviews: 88,
    discount: 40,
},

    {
        title: "AK-900 Wired Keyboard",
        price: "$370",
        oldPrice: "$400",
        image:"/keyboard.png",
        rating: 4,
        reviews: 96,
        discount: 200,
},
    {
        title: "IPS LCD Gaming Monitor",
        price: "$160",
        oldPrice: "$170",
        image:"/lcd.png",
        rating: 4,
        reviews: 65,
        discount: 30,
},
    {
        title: "S-Series Comfort Chair ",
        price: "$370",
        oldPrice: "$400",
        image:"/chair.png",
        rating: 4,
        reviews: 88,
        discount: 30,
}];

const ProductBox = ({product}: { product: any }) => (
    <div className="relative">
        {product.discount && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-sm z-10">
                -{product.discount}%
            </div>
        )}



        <div className=" group shadow-md bg-neutral-100 w-[220px] h-[180px] flex justify-center items-center relative cursor-pointer">
            <Image src={product.image} width={150} height={100} alt={product.title}/>
            <div className="absolute top-2 right-2 flex flex-col items-center">

                <FaHeart className="text-2xl text-black rounded-full p-1 bg-white"/>
                <FaEye className="bg-white"/>

            </div>
            {/* <button className=" w-full absolute bottom-0 text-white px-4 py-2 rounded-sm opacity-0 hover: opacity-100 transition-opacity duration-300 ">
                Add to Cart
            </button> */}
        </div>
        <h1 className="font-bold font-sans pt-2">{product.title}</h1>
        <div className="flex items-center space-x-2"><span className="text-red-500 fold-bold">{product.price}</span>
        {product.oldPrice &&(
            <span className="text-gray-400 font-bold line-through">{product.oldPrice}</span>
        ) }
        </div>
        <div className="flex items-center space-x-1 text-yellow-400 text-md pt-1">
            {[...Array(5)].map((_, index) => index < product.rating ? (
                <FaStar key = {index}/>
            ):
            (
                <FaStar key = {index}/>   
            ))}
        <span className="text-gray-400 text-sm ml-1">{product.reviews}</span>

        </div>
    </div>

);
const fproducts =()=>{
    return(
        <main>
        <div className="w-full  flex justify-center items-center mt-10 mb-1">
        <div className="w-[80%]">
        
        <div className="flex flex-wrap justify-between mt-5 gap-y-5">
        {product.map((product, index)=>(
            <ProductBox key={index} product ={product}/>
        ))}
        </div>
        <div className="mt-5 flex justify-center pt-10">
            <button className="bg-red-500 text-white px-4 py-2 font-bold hover:bg-red-600 transition-all duration-300 ">View All Product</button>
        </div>


        </div>
        </div>
        </main>
    );
};
export default fproducts
