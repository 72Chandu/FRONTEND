import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from './Nav';
import { ProductContext } from '../utils/Context';
import Loading from './Loading';
import axios from '../utils/axios';
const Home = () => {
    const [products] = useContext(ProductContext);
    const { search } = useLocation();
    
    // Extract category safely
    const categoryParam = new URLSearchParams(search).get("category");
    const category = categoryParam ? decodeURIComponent(categoryParam) : null;
    
    const [filteredProducts, setFilteredProducts] = useState(null);

    const getProductsByCategory = async () => {
        try {
            const { data } = await axios.get(`/products/category/${category}`);
            setFilteredProducts(data);
        } catch (error) {
            console.error("Error fetching category products:", error);
        }
    };

    useEffect(() => {
        if (!category || category === "undefined") {
            setFilteredProducts(products);
        } else {
            getProductsByCategory();
        }
    }, [category, products]);
    return products ? (
        <>
            <Nav />
            <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
                {filteredProducts && filteredProducts.map((p) => (
                    <Link key={p.id} to={`/detail/${p.id}`} className="mr-3 mb-3 card p-3 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center">
                        <div  className="mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center hover:scale-110"  style={{ backgroundImage: `url('${p.image}')` }} ></div>
                        <h1 className="text-center font-semibold text-sm md:text-base lg:text-lg text-gray-700 px-2 truncate max-w-full hover:text-blue-400">{p.title.length > 25 ? p.title.slice(0, 25) + '...' : p.title}</h1>
                    </Link>
                ))}
            </div>
        </>
    ) : <Loading />;
};

export default Home;
