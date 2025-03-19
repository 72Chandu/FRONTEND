import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get product ID from URL
  const [products, setProducts] = useContext(ProductContext);
  
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  // Load the existing product details
  useEffect(() => {
    const existingProduct = products.find((p) => p.id === id);
    if (existingProduct) {
      setTitle(existingProduct.title);
      setImage(existingProduct.image);
      setCategory(existingProduct.category);
      setPrice(existingProduct.price);
      setDescription(existingProduct.description);
    }
  }, [id, products]);

  const handleEditProduct = (e) => {
    e.preventDefault();

    if (title.trim().length < 5 || price.trim().length <1 || image.trim().length < 5 || category.trim().length < 5 || description.trim().length < 5) {
      alert("Each input must have at least 5 characters");
      return;
    }

    const updatedProducts = products.map((p) =>
      p.id === id ? { ...p, title, image, category, price, description } : p
    );

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    navigate("/");
  };

  return (
    <form onSubmit={handleEditProduct} className="flex flex-col items-center p-[5%] w-screen h-screen">
      <h1 className="mb-5 w-1/2 text-3xl">Edit Product</h1>
      <input type="url" placeholder="Image Link" className="text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3" onChange={(e) => setImage(e.target.value)} value={image}/>
      <input type="text" placeholder="Title" className="text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3" onChange={(e) => setTitle(e.target.value)} value={title}/>
      <div className="w-1/2 flex justify-between">
        <input type="number" placeholder="Price" className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3" onChange={(e) => setPrice(e.target.value)} value={price}/>
        <input type="text" placeholder="Category" className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3" onChange={(e) => setCategory(e.target.value)} value={category}/>
      </div>
      <textarea rows="10" placeholder="Enter Product Description..." className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
      <div className="w-1/2">
        <button className="py-2 px-5 border rounded border-blue-200 text-blue-300"> Save Changes</button>
      </div>
    </form>
  );
};
export default Edit;