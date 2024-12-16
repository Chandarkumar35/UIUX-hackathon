import Image from "next/image";
import { FaEye, FaHeart, FaStar } from "react-icons/fa";


const product = [
    {
    title: "the North Coat",
    price: "$260",
    image: "/jacket.png",
    rating: 5,
    reviews: 65,
},

    {
        title: "GGucci Duffle Bag",
        price: "$960",
        image:"/bag.png",
        rating: 4,
        reviews: 65,
},
    {
        title: "RGB Liquid CPU Cooler",
        price: "$160",
        oldPrice: "$170",
        image:"/speaker.png",
        rating: 4,
        reviews: 65,
},
    {
        title: "Small Bookshelf",
        price: "$360",
        oldPrice: null,
        image:"/shelf.png",
        rating: 4,
        reviews: 65,
}];

const ProductBox = ({product}: { product: any }) => (
    <div className="w-[220px]">
        <div className=" group shadow-md bg-neutral-100 w-[220px] h-[180px] flex justify-center items-center relative cursor-pointer">
            <Image src={product.image} width={150} height={100} alt={product.title}/>
            <div className="absolute top-2 right-2 flex flex-col items-center">

                <FaHeart className="text-2xl text-black rounded-full p-1 bg-white"/>
                <FaEye className="text-2xl text-black rounded-full p-1 bg-white"/>

            </div>
            {/* <button className=" w-full absolute bottom-0 text-white px-4 py-2 rounded-sm opacity-0 hover:opacity-100 transition-opacity duration-300 ">
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
const Products =()=>{
    return(
        <main>
        <div className="w-full justify-center items-center mt-10 mb-1">
        <div className="w-[70%] mx-auto">
        <div className="flex flex-col">
        <h3 className="text-red-500 font-bold border-l-8 border-red-500 pl-3 ml-1">This Month</h3>
        <div className="flex justify-between">
        <h1 className="text-slate-800 font-bold sm:text-md md:text-3xl lg:text-4xl">Best Selling Product</h1>
        <a href="#products" className="bg-red-500 hover:bg-red-600 sm:px-3 md:px-7 sm:text-sm py-0 text-white rounded-m h-10 mt-3 pt-2">View all</a>
        </div>
        </div>
        <div className="flex flex-wrap justify-between mt-5 gap-y-5">
        {product.map((product, index)=>(
            <ProductBox key={index} product ={product}/>
        ))}
        </div>
        </div>
        </div>
        </main>
    );
};
export default Products
