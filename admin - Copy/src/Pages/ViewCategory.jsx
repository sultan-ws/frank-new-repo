
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; 

const ViewCategory = () => {
  const  [category, setcategory] = useState([]);
  const [checkedcat, setcheckedcat] = useState([]);
  const [ifAllChecked, setifAllChecked] = useState(false);


const readCategory = async() => {
  try{
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/admin-panel/parent/read-parent`);

    if(response.status !== 200) return  Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Error!",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
      console.log(response.data)

    setcategory(response.data.data)
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

useEffect(()=>{readCategory()},[])


const   handleDeleteCategory = async(_id) => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      axios.delete(`${process.env.REACT_APP_API_URL}/api/admin-panel/parent/delete-parent/${_id}`)
      .then((response) => {
        if(response.status !== 200) return  alert("Error")
          console.log(response.data)

        setcategory((precategory)=>(
          precategory.filter((cat)=> cat._id !== _id)
          ))
          // setcategory(response.data.data)
      })
      .catch((error) => {
        console.log(error)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      })
      swalWithBootstrapButtons.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Your imaginary file is safe :)",
        icon: "error"
      });
    }
  });
  
  
 

  console.log(_id)


};

const handelupdatestatus  = async(e) => {
  const id =  e.target.value;

  const newStatus = e.target.textContent !== 'Active';
  console.log(id, newStatus)
  try{
     const response = await axios
    .put(`${process.env.REACT_APP_API_URL}/api/admin-panel/parent/update-status/${e.target.value}`,  {status:newStatus})


    if(response.status !== 200) return  alert("Error")
      console.log(response.data)

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your status has been  updated",

      showConfirmButton: false,
      timer: 1500
    });

    setcategory((precategory)=>(
      precategory.map((cat)=>(
        (cat._id === e.target.value) ?  {...cat, status:newStatus} : cat

      ))
    ))

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

const handlecheckedcategory =  async(e) => {
    if(e.target.checked){
      setcheckedcat([...checkedcat, e.target.value])
    }
    else{
      setcheckedcat(checkedcat.filter((col)=> col !== e.target.value))
    }
}

const handleAllchecked = (e)=>{
 if(e.target.checked){
  setcheckedcat(category.map((item)=> item._id))
 }
 else{
  setcheckedcat([])
 }
}

const handleMultipleDelete = ()=>{
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      axios
    .put(`${process.env.REACT_APP_API_URL}/api/admin-panel/parent/multi-delete`,  {ids : checkedcat})
    .then((response)=>{
      console.log(response.data)
      setcategory((precategory)=>(
        precategory.filter((item)=> !checkedcat.includes(item._id))
      ))
      setcheckedcat([])
    })


      swalWithBootstrapButtons.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Your imaginary file is safe :)",
        icon: "error"
      });
    }
  });
}

useEffect(()=>{
setifAllChecked(checkedcat.length === category.length &&  checkedcat.length !== 0)
},[checkedcat,category])

const showtulip =  (e) => {
  tippy('#tulip', {
    content: `updated to ${(e.target.textContent === 'Active') ? 'Inactive' : 'Active'}`,
    placement: 'right-end',
  });
 }

 const handleSearchCat =  (e) => {
  if(e.target.value){
    axios.get(`${process.env.REACT_APP_API_URL}/api/admin-panel/parent/search-category/${e.target.value}`)
    .then((response)=>{
        console.log(response)

        if(response.status === 404){
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "result don't match!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        }
        else if(response.status === 200){
          setcategory(response.data.data)
        }

      })
      .catch((error)=>{
        console.log(error)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "result don't match!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
     
      })
  }
  else{
    readCategory();
  }
 }

return (
  <div className="w-[90%] bg-white rounded-[10px] border mx-auto my-[150px]">
    <span className="block h-[40px] border-b rounded-[10px_10px_0_0] bg-[#f8f8f9] text-[#303640] p-[8px_16px] text-[20px]">
      View category
    </span>
    <div className="w-[90%] mx-auto my-[20px]">
      <div>
        <input type="text" className="border p-2 mb-2 w-full" placeholder="Search" 
        onChange={handleSearchCat}
        />
      </div>
      <table className="w-full">
        <thead>
          <tr className="border-b text-left">
            <th className="flex p-2">
              <button className="bg-[#5351c9] font-light text-white rounded-md p-1 w-[80px] h-[35px] my-[10px] mr-[10px]"
              onClick={handleMultipleDelete}
              >
                Delete
              </button>
              <input
              onClick={handleAllchecked}
              checked={ifAllChecked}
                type="checkbox"
                name="deleteAll"
                className="cursor-pointer accent-[#5351c9] input"
              />
            </th>
            <th className="p-2">Sno.</th>
            <th className="p-2">Ctegory Name</th>
            <th className="p-2">description</th>
            <th className="p-2">Action</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
            {
              category.map((category, index) => (
                <tr className="border-b" key={index}>
                <td className="p-2">
                  <input
                  value={category._id}
                  onClick={handlecheckedcategory}
                    type="checkbox"
                    name="delete"
                    className="cursor-pointer accent-[#5351c9] input"
                    checked={checkedcat.includes(category._id)}

                  />
                </td>
                <td className="p-2">{index +1}</td>
                <td className="p-2">{category.name}</td>
                <td>{category.description}</td>
                <td className="p-2">
                  <MdDelete className="my-[5px] text-red-500 cursor-pointer inline" onClick={()=>{handleDeleteCategory(category._id)}}/>{" "}
                  |{" "}
                  <Link to={`/dashboard/category/update-category/${category._id}`}>
                    <CiEdit className="my-[5px] text-yellow-500 cursor-pointer inline" />
                  </Link>
                </td>
                <td className="p-2">
                <button
                value={category._id}
                onClick={handelupdatestatus}
                id="tulip"
                onMouseEnter={showtulip}
                className={`${(category.status) ?  'bg-green-600' : 'bg-red-600'} text-white font-light rounded-md p-1 w-[80px] h-[35px] cursor-pointer`}
                >

                    {
                      (category.status) ?  "Active" : "Inactive"

                    }
                  </button>
                </td>
              </tr>
              ))
            }
          
          {/* <tr className="border-b">
            <td className="p-2">
              <input
                type="checkbox"
                name="delete"
                className="cursor-pointer accent-[#5351c9] input"
              />
            </td>
            <td className="p-2">2</td>
            <td className="p-2">green</td>
            <td className="p-2">
              <div className="w-[90%] mx-auto h-[20px] bg-green-500 border"></div>
            </td>
            <td className="p-2">
              <MdDelete className="my-[5px] text-red-500 cursor-pointer inline" />{" "}
              |{" "}
              <Link to="/dashboard/category/update-category">
                <CiEdit className="my-[5px] text-yellow-500 cursor-pointer inline" />
              </Link>
            </td>
            <td className="p-2">
              <button className="bg-green-600 text-white font-light rounded-md p-1 w-[80px] h-[35px] cursor-pointer">
                Active
              </button>
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-2">
              <input
                type="checkbox"
                name="delete"
                className="cursor-pointer accent-[#5351c9] input"
              />
            </td>
            <td className="p-2">3</td>
            <td className="p-2">blue</td>
            <td className="p-2">
              <div className="w-[90%] mx-auto h-[20px] bg-blue-500 border"></div>
            </td>
            <td className="p-2">
              <MdDelete className="my-[5px] text-red-500 cursor-pointer inline" />{" "}
              |{" "}
              <Link to="/dashboard/category/update-category">
                <CiEdit className="my-[5px] text-yellow-500 cursor-pointer inline" />
              </Link>
            </td>
            <td className="p-2">
              <button className="bg-green-600 text-white font-light rounded-md p-1 w-[80px] h-[35px] cursor-pointer">
                Active
              </button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  </div>
);

};

export default ViewCategory;
