import React, { useEffect, useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import axios from 'axios'
import { toast } from 'react-toastify';

const Add = ({url}) => {
     const [image, setImage] = useState(false);
     const [data, setData] = useState({
        name: "",
        description:"",
        price:"",
        category: "select a category",
    
     });

 const onchangeHandler = (event)=>{
  const name= event.target.name;
  const value = event.target.value;

  setData(prevdata => ({...prevdata, [name]: value}));
 }

  const onSubmitHandler = async (event)=>{
     event.preventDefault();

   const formData = new FormData();
     formData.append("name", data.name);
     formData.append("description", data.description);
     formData.append("price", Number(data.price));
     formData.append("category", data.category);
     formData.append("image", image);

   const response =  await axios.post(`${url}/api/food/add`, formData);
    
    if(response.data.success){
        setData({
            name: "",
            description:"",
            price:"",
            category: "select a category"
        });
        setImage(false);
        toast.success(response.data.message);
    }
    else{
        toast.error(response.data.message);
    }

    }


  return (
    <div className='bg-gray-100 w-[80%]'>
      <form onSubmit={onSubmitHandler} method='post' className="w-2/3 flex flex-col bg-white p-8 py-3">
      <div className="mb-3">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
        Upload Image
      </label>

      <label 
        htmlFor="image" 
        className="flex items-center justify-center border border-dashed border-gray-400 rounded-md p-2 cursor-pointer"
      >
        <FaCloudUploadAlt className={ image ? 'text-green-400 text-2xl mr-3': 'text-gray-400 text-2xl mr-3' } />
        <span className="text-gray-600">
          {image ? image.name : 'Choose an image'}
        </span>
      </label>

      <input 
        onChange={(e) => setImage(e.target.files[0])} 
        type="file" 
        name="image" 
        id="image"
        hidden
        required
      />
    </div>

        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Food Name
          </label>
          <input 
            onChange={onchangeHandler}
            value={data.name}
            type="text" 
            name="name" 
            id="name" 
            placeholder="Enter food name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400"
          />
        </div>


        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea 
            onChange={onchangeHandler}
            value={data.description}
            name="description" 
            id="description" 
            placeholder="Write a description"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400"
          ></textarea>
        </div>


        <div className='flex items-center justify-between'>
        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            onChange={onchangeHandler}
            value={data.price} 
            type="text" 
            name="price" 
            id="price" 
            placeholder="Rs.100"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Category
          </label>
          <select 
            onChange={onchangeHandler}
            name="category" 
            id="category"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400"
          >
            <option  disabled selected>Select a category</option>
            <option value="Salad">Salad</option>
            <option value="Dessert">Dessert</option>
            <option value="Cake">Cake</option>
            <option value="Chicken">Chicken</option>
            <option value="Noodles">Noodles</option>
            <option value="Rolls">Rolls</option>
            <option value="Sandwich">Sandwich</option>
            <option value="Pure veg">Pure veg</option>
            <option value="Pasta">Pasta</option>
          </select>
        </div>
        </div>
        <button 
          type="submit" 
          className="w-full bg-orange-500 text-white font-bold py-2 rounded-md hover:bg-orange-600 transition duration-200"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}

export default Add;
