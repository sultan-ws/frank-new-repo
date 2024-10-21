import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


const AddCategory = () => {
  const nav  = useNavigate();

     const handleAddparentCtegory = async(e)=>{
      e.preventDefault();
       
      console.log('hello')
      const data = {
        name:e.target.name.value,
        description:e.target.description.value,
        status:e.target.status.value
      }
      

      try{
           const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/admin-panel/parent/add-parent`, data);

           if(response.status !== 200) return alert('try after sometime');
           let timerInterval;
        Swal.fire({
        title: "Category Added Successfuly",
        html: "redirect to view category in <b></b> milliseconds.",
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

           nav('/dashboard/category/view-category');
              console.log(response)
      }
      catch(error){
        console.log(error)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
     }

  return (
    <div className="w-[90%] mx-auto my-[150px] bg-white border rounded-[10px]">
      <span className="bg-[#f8f8f9] rounded-[10px_10px_0_0] border-b p-[8px_16px] text-[20px] font-bold block text-[#303640]">
        Add Category
      </span>
      <div className="w-[90%] mx-auto my-[20px]">
        <form method="post" onSubmit={handleAddparentCtegory}>
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
          {/* <div className="w-full my-[10px]">
            <label htmlFor="categoryImg" className="block text-[#303640]">
              Category Image
            </label>
            <input
              type="file"
              name="thumbnail"
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
              value={true}

              className="input my-[10px] mx-[10px] accent-[#5351c9] cursor-pointer"
            />
            <span>Hide</span>
          </div>
          <div className="w-full my-[20px] ">
            <button className="bg-[#5351c9] rounded-md text-white w-[100px] h-[35px]">
              Add Size
            </button> 
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
