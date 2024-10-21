import { render } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const AddPCategory = () => {
  const [addParentcategory, setaddParentcategory] = useState([]);
 const [preImg,  setpreImg] = useState('');


  const nav = useNavigate();

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_API_URL}/api/admin-panel/parent/get-parent-cat`)
    .then((response)=>{
        console.log(response)
        setaddParentcategory(response.data.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  const handleaddCategory = (e)=>{
    e.preventDefault();
    
    
    axios.post(`${process.env.REACT_APP_API_URL}/api/admin-panel/product-categoty/addproduct-category`, e.target)
    .then((response)=>{
        console.log(response)

        if(response.status === 200) {
         
      let timerInterval;
      Swal.fire({
        title: "Auto close alert!",
        html: "I will close in <b></b> milliseconds.",
        timer: 2000,
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
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
         
      nav('/dashboard/products/view-category');

        }
        
    })
    .catch((error)=>{
      console.log(error)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    })
  }

  const handlePreimg =  (e)=>{
    const file =  e.target.files[0];
   
    if(file){
      const reader =  new FileReader();

      reader.readAsDataURL(file);
      reader.onloadend = () => {

        setpreImg(reader.result)

        console.log(reader.result)
      }

    }

  

  }

 

  return (
    <div className="w-[90%] mx-auto my-[150px] bg-white border rounded-[10px]">
      <span className="bg-[#f8f8f9] rounded-[10px_10px_0_0] border-b p-[8px_16px] text-[20px] font-bold block text-[#303640]">
        Add Category
      </span>
      <div className="w-[90%] mx-auto my-[20px]">
        <form method="post" onSubmit={handleaddCategory} >
          <div className="w-full my-[10px]">
            <label htmlFor="categoryName" className="block text-[#303640]">
              Category Name
            </label>
            <input
              type="text"
              name="name"
              id="categoryName"
              placeholder="Category Name"
              className="input border p-1 w-full rounded-[5px] my-[10px]"
            />
          </div>
          <div className="w-full my-[10px]">
            <label htmlFor="categoryImg" className="block text-[#303640]">
              Category Image
            </label>
            <input
              type="file"
              name="thumbnail"
              id="categoryImg"
              className="input border w-full rounded-[5px] my-[10px] category"
              onChange={handlePreimg}
            />
            <img src={preImg} style={{width: '100px'}} alt="" />
          </div>
          <div className="w-full my-[10px]">
            <label htmlFor="categoryImg" className="block text-[#303640]">
              Parent Category
            </label>
            <select name="parent_category" id="" className="border w-full rounded-[5px] my-[10px] category input">
             {
              addParentcategory.map((category)=>(
                <option value={category._id}>{category.name}</option>
              ))
             }
              {/* <option>men</option>
              <option>women</option>
              <option>kids</option> */}
            </select>
          </div>
          <div className="w-full my-[10px]">
            <label htmlFor="categoryDesc" className="block text-[#303640]">
              Category Description
            </label>
            <textarea
              type="file"
              name="description"
              id="categoryDesc"
              className="input border w-full rounded-[5px] my-[10px]"
            />
          </div>
          <div className="w-full my-[10px]">
            <label
              htmlFor="categoryStatus"
              className=" text-[#303640] mr-[20px]"
            >
              Status
            </label>
            <input
              type="radio"
              name="status"
              id="categoryStatus"
              value={true}
              className="input my-[10px] mx-[10px] accent-[#5351c9] cursor-pointer"
            />
            <span>Display</span>
            <input
              type="radio"
              name="status"
              id="categoryStatus"
              value={false}
              className="input my-[10px] mx-[10px] accent-[#5351c9] cursor-pointer"
            />
            <span>Hide</span>
          </div>
          <div className="w-full my-[20px] ">
            <button type="submit" className="bg-[#5351c9] rounded-md text-white w-[100px] h-[35px]">
              Add Size
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPCategory;

