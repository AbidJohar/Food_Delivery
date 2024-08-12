import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({url}) => {
  const [list, setList] = useState([]);

  const fetchlist = async () => {
    const response = await axios.get(`${url}/api/food/foodlist`);

    if (response.data.success) {
      setList(response.data.data);
    } else{
        toast.error("Error");
    }
  };

  const removeFood = async(foodid)=>{
       const response = await axios.post(`${url}/api/food/remove`,{id: foodid});
       fetchlist();
       if(response.data.success){
        toast.success(response.data.message);
       } else{
        toast.error('Error');
       }
      
  }

  useEffect(() => {
    fetchlist();
  }, []);

  return (
    <div className="bg-gray-100 w-[80%] p-4">
      <div className="flex items-center justify-between bg-gray-200 border-b-2 border-gray-300 p-4 font-semibold text-gray-700">
        <p className="w-[10%] ml-8">S.No</p>
        <p className="w-[20%]">Image</p>
        <p className="w-[20%]">Name</p>
        <p className="w-[15%]">Price</p>
        <p className="w-[15%]">Category</p>
        <p className="w-[20%] text-center">Action</p>
      </div>
      <div className="flex flex-col  overflow-y-scroll h-[68vh]">
        {list?.map((item, index) => (
          <div
            className="flex items-center justify-between bg-white border-[1px] border-gray-300 p-4 hover:bg-gray-50"
            key={item._id}
          >
            <p className="w-[10%] ml-6">{index + 1}.</p>
            <div className="w-[20%]">
              <img
                src={`${url}/images/${item.image}`}
                alt={item.name}
                className="w-12 h-12 object-cover rounded-md"
              />
            </div>
            <p className="w-[20%] text-gray-700">{item.name}</p>
            <p className="w-[15%] text-gray-700">{item.price}</p>
            <p className="w-[15%] text-gray-700">{item.category}</p>
            <p onClick={()=>removeFood(item._id)} className="w-[15%] text-center text-red-500 cursor-pointer">Delete</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
