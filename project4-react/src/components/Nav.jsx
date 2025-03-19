import React, { useContext } from 'react';
import { ProductContext } from '../utils/Context';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [products] = useContext(ProductContext);

    // Ensure products is an array before calling reduce
    let distinct_category = Array.isArray(products) 
        ? products.reduce((acc, currval) => [...acc, currval.category], []) 
        : [];

    distinct_category = [...new Set(distinct_category)];

    const color = () => {
        return `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},0.4)`;
    };

    return (
        <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5">
            <a className="py-2 px-5 border rounded border-blue-200 text-blue-300" href="/create">
                Add New Product
            </a>
            <hr className="my-3 w-[80%]" />
            <h1 className="text-2xl mb-3 w-[80%]">Category Filter</h1>

            {distinct_category.map((c, i) => (
                <div key={i} className="w-[80%]">
                    <Link to={`/?category=${c}`} className="flex items-center mb-3">
                        <span
                            style={{ backgroundColor: color() }}
                            className="block w-[15px] h-[15px] bg-blue-100 rounded-full mr-2"
                        ></span>
                        {c}
                    </Link>
                </div>
            ))}
        </nav>
    );
};

export default Nav;
