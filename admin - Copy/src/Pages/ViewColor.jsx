import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ViewColor = () => {
    const  [colors, setColors] = useState([]);
    const [checkedcolor, setcheckedcolor] = useState([]);
    const [ifAllChecked, setifAllChecked] = useState(false);


  const readColor = async() => {
    try{
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/admin-panel/color/read-color`);

      if(response.status !== 200) return  Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
        console.log(response.data)

      setColors(response.data.data)
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
  
  useEffect(()=>{readColor()},[])


  const   handeldeleteColor = async(_id) => {
    if(!window.confirm('are you sure you want to delete')) return

    try{
      const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/admin-panel/color/delete-color/${_id}`)

      if(response.status !== 200) return  Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
        console.log(response.data)

      setColors((preColor)=>(
      preColor.filter((col)=> col._id !== _id)
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

    console.log(_id)


  };

  const handelStatus  = async(e) => {
  
    const newStatus = e.target.textContent !== 'Active'
    console.log(e.target.value, newStatus);
      
    axios.put(`${process.env.REACT_APP_API_URL}/api/admin-panel/color/update-color-status/${e.target.value}`, {status: newStatus})
    .then((response)=>{
      console.log(response)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
      setColors((precolor)=>(
        precolor.map((color)=> color._id === e.target.value ? {...color, status:newStatus} : color)

      ))
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

  const handlecheckedcolor =  async(e) => {
      if(e.target.checked){
        setcheckedcolor([...checkedcolor, e.target.value])
      }
      else{
        setcheckedcolor(checkedcolor.filter((col)=> col !== e.target.value))
      }
  }

  const handleAllchecked = (e)=>{
   if(e.target.checked){
    setcheckedcolor(colors.map((col)=> col._id))
   }
   else{
    setcheckedcolor([])
   }
  }

  const handelMultideletecol = ()=>{
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
        axios.put(`${process.env.REACT_APP_API_URL}/api/admin-panel/color/multidelete-color`, {ids:checkedcolor })
        .then((response)=>{
           console.log(response.data.data)
           setColors((precolor)=>(
            precolor.filter((item)=>  !checkedcolor.includes(item._id))
           ));
           checkedcolor([]);
        })
        .catch((error)=>{
            console.log(error)
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
  setifAllChecked(checkedcolor.length === colors.length &&  checkedcolor.length !== 0)
},[checkedcolor,colors])

  return (
    <div className="w-[90%] bg-white rounded-[10px] border mx-auto my-[150px]">
      <span className="block h-[40px] border-b rounded-[10px_10px_0_0] bg-[#f8f8f9] text-[#303640] p-[8px_16px] text-[20px]">
        View Color
      </span>
      <div className="w-[90%] mx-auto my-[20px]">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="flex p-2">
                <button className="bg-[#5351c9] font-light text-white rounded-md p-1 w-[80px] h-[35px] my-[10px] mr-[10px]"
                onClick={handelMultideletecol}
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
              <th className="p-2">Color Name</th>
              <th className="p-2">Color</th>
              <th className="p-2">Action</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
              {
                colors.map((color, index) => (
                  <tr className="border-b" key={index}>
                  <td className="p-2">
                    <input
                    value={color._id}
                    onClick={handlecheckedcolor}
                      type="checkbox"
                      name="delete"
                      className="cursor-pointer accent-[#5351c9] input"
                      checked={checkedcolor.includes(color._id)}

                    />
                  </td>
                  <td className="p-2">{index +1}</td>
                  <td className="p-2">{color.name}</td>
                  <td className="p-2">
                    <div className="w-[90%] mx-auto h-[20px] bg-red-500 border"></div>
                  </td>
                  <td className="p-2">
                    <MdDelete className="my-[5px] text-red-500 cursor-pointer inline" onClick={()=>{handeldeleteColor(color._id)}}/>{" "}
                    |{" "}
                    <Link to={`/dashboard/color/update-colors/${color._id}`}>
                      <CiEdit className="my-[5px] text-yellow-500 cursor-pointer inline" />
                    </Link>
                  </td>
                  <td className="p-2">
                
                  <button
                   className={`${(color.status) ?  'bg-green-600' : 'bg-red-600'} text-white font-light rounded-md p-1 w-[80px] h-[35px] cursor-pointer`}
                     onClick={handelStatus}
                     value={color._id}
                     >

                      {
                        (color.status) ?  "Active" : "Inactive"

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
                <Link to="/dashboard/color/update-colors">
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
                <Link to="/dashboard/color/update-colors">
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

export default ViewColor;
