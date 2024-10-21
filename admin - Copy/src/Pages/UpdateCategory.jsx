import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling

const UpdateCategory = () => {
 const {_id} = useParams();
 const nav =  useNavigate();


 const [data ,  setData] = useState({});

 useEffect(()=>{console.log(_id)

  axios.get(`${process.env.REACT_APP_API_URL}/api/admin-panel/parent/read-catrgory-byId/${_id}`)
  .then((response)=>{
    setData(response.data.data[0])
  })
 },[_id])

 const handleupdateCategory =  () => {
   axios.put(`${process.env.REACT_APP_API_URL}/api/admin-panel/parent/update-category/${_id}`,
    {
      name: data.name,
      description: data.description,
    }
   )
   .then((response)=>{
    console.log(response)
    if(response.status ===  200){
      let timerInterval;
      Swal.fire({
      title: "Status updated!",
      html: "Returning to view page  in <b></b> milliseconds.",
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
      }).then((result) => {
      /* Read more about handling dismissals below */
     nav('/dashboard/category/view-category')
      });
        }

        })
 }





  return (
    <div className="w-[90%] mx-auto my-[150px] bg-white border rounded-[10px]">
      <span className="bg-[#f8f8f9] rounded-[10px_10px_0_0] border-b p-[8px_16px] text-[20px] font-bold block text-[#303640]">
        Update Category
      </span>
      <div className="w-[90%] mx-auto my-[20px]">
        <form >
          <div className="w-full my-[10px]">
            <label htmlFor="categoryName" className="block text-[#303640]">
              Category Name
            </label>
            <input
              type="text"
              name="name"
              value={data.name}
              id="categoryName"
              placeholder="Category Name"
              onChange={(e)=>{
                setData({...data,  name:e.target.value})

              }}
              className="input border p-1 w-full rounded-[5px] my-[10px]"
            />
          </div>
          {/* <div className="w-full my-[10px]">
            <label htmlFor="categoryImg" className="block text-[#303640]">
              Category Image
            </label>
            <input
              type="file"
              name="categoryImg"
              id="categoryImg"
              className="input border w-full rounded-[5px] my-[10px] category"
            />
          </div> */}
          <div className="w-full my-[10px]">
            <label htmlFor="categoryDesc" className="block text-[#303640]">
              Category Description
            </label>
            <textarea
              type="file"
              name="description"
              id="categoryDesc"
              value={data.description}
              onChange={(e)=>{
                setData({...data,  description:e.target.value})

              }}
              className="input border w-full rounded-[5px] my-[10px]"
            />
          </div>
          {/* <div className="w-full my-[10px]">
            <label
              htmlFor="categoryStatus"
              className=" text-[#303640] mr-[20px]"
            >
              Status
            </label>
            <input
              type="radio"
              name="categoryStatus"
              id="categoryStatus"
              value="0"
              className="input my-[10px] mx-[10px] accent-[#5351c9] cursor-pointer"
            />
            <span>Display</span>
            <input
              type="radio"
              name="categoryStatus"
              id="categoryStatus"
              value="1"
              checked
              className="input my-[10px] mx-[10px] accent-[#5351c9] cursor-pointer"
            />
            <span>Hide</span>
          </div> */}
          <div className="w-full my-[20px] " >
            <button type="button" onClick={handleupdateCategory} 
           
            className="bg-[#5351c9] rounded-md text-white px-3 h-[35px]">
              Update Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCategory;
