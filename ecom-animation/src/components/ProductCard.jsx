import Link from 'next/link';

const ProductCard = ({ product }) => {
    return (
        <Link href={`/product/${product.slug}`} passHref>
            <div className="bg-white rounded-md ml-2 transform hover:shadow-xl sm:w-64 w-1/4 mt-2 ">
                <div className="overflow-hidden transform hover:scale-105">
                    <img src={product.image} alt="" className="h-[256px] w-[256px] rounded-sm"/>
                </div>
                <h3 className="font-bold text-center mt-2">{product.name}</h3>
                <div className="mt-2 text-center">{product.description}</div>
                <div>
                    <div className="text-right mt-4">
                        <span className="font-semibold">${product.price}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
