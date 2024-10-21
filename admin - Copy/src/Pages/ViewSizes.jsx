import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const ViewSizes = () => {
   const [sizes, setSizes] = useState([]);
   const [checkedsize, setcheckedsize] = useState([]);
   const [ifAllChecked, setifAllChecked] = useState(false);

  const readSize = async() => {
    try{
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/admin-panel/size/read-sizes`);

          if(response.status !== 200) return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
            console.log(response.data)

            setSizes(response.data.data)
    }
    catch(error){
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });

    }
  }
  useEffect(()=>{readSize()},[])

  const handleDeletesize = async(_id)=>{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "py-2 px-4 mx-2 bg-green-500",
        cancelButton: "py-2 px-4 mx-2 bg-red-500"
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
        try{
           axios.delete(`${process.env.REACT_APP_API_URL}/api/admin-panel/size//delete-size/${_id}`)
           .then((response)=>{
            if(response.status !== 200) return alert('Error')
              console.log(response.data)

            setSizes(response.data.data)
           })
          
          }
        catch(error){
            console.log(error);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              footer: '<a href="#">Why do I have this issue?</a>'
            });
    
           }
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
     
 
      console.log(_id);

      setSizes((predata)=>(
         predata.filter((size)=>size._id !== _id)
      ))
  }

  const handelcheckedsize = (e)=>{
   if(e.target.checked){
    setcheckedsize([...checkedsize, e.target.value])
   }
   else{
    setcheckedsize(checkedsize.filter(item => item  !== e.target.value))
   }
  };

  const handelcheckedAll =  (e)=>{
    if(e.target.checked){
      setcheckedsize(sizes.map((size)=> size._id))
    }
    else{
      setcheckedsize([])
    }
  }

  const handelsizeStatus =  (e)=>{
    const newStatus = e.target.textContent !== 'Active'
    console.log(e.target.value, newStatus);
      
    axios.put(`${process.env.REACT_APP_API_URL}/api/admin-panel/size/update-size-status/${e.target.value}`, {status: newStatus})
    .then((response)=>{
      console.log(response)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
      setSizes((presize)=>(
        presize.map((item)=> item._id === e.target.value ? {...item, status:newStatus} : item)

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


  const handelMultiDelete =  ()=>{
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

        axios.put(`${process.env.REACT_APP_API_URL}/api/admin-panel/size/delete-sizes`, {ids :checkedsize})
        .then((response)=>{
          console.log(response.data);
          setSizes((presize)=>(
            presize.filter((size)=> !checkedsize.includes(size._id))
          ));
          setcheckedsize([]);
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
    setifAllChecked(checkedsize.length === sizes.length && sizes.length != 0)
  },[checkedsize,sizes])

  return (
    <div className="w-[90%] bg-white mx-auto border rounded-[10px] my-[150px]">
      <span className="block border-b rounded-[10px_10px_0_0] bg-[#f8f8f9] text-[#303640] h-[50px] p-[8px_16px] text-[23px] font-bold">
        View Size
      </span>
      <div className="w-[90%] mx-auto">
        <table className="w-full my-[20px]">
          <thead>
            <tr className="text-left border-b">
              <th>
                 <button 
               className="bg-red-400 rounded-sm px-2 py-1"
               onClick={handelMultiDelete}
               >Delete</button>
                <input
                onClick={handelcheckedAll}
                checked={ifAllChecked}
                  type="checkbox"
                  name="deleteAll"
                  className="m-[0_10px] accent-[#5351c9] cursor-pointer input"
                />
              </th>
              <th>Sno</th>
              <th>Size Name</th>
              <th>Size Order</th>
              <th>Action</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
           {

           sizes.map((size, index) => (


            <tr className="border-b"key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={checkedsize.includes(size._id)}
                  value={size._id}
                  onClick={handelcheckedsize}
                  name="delete"
                  className="accent-[#5351c9] cursor-pointer input"
                />
                {
                  console.log(size)
                }
              </td>
              <td>{index +1}</td>
              <td>{size.name}</td>
              <td>{size.order}</td>
              <td className="flex gap-[5px]">
                <MdDelete className="my-[5px] text-red-500 cursor-pointer"  onClick={()=>{handleDeletesize(size._id)}}/> |{" "}
                <Link to={`/dashboard/sizes/update-size/${size._id}`}>
                  <CiEdit className="my-[5px] text-yellow-500 cursor-pointer" />
                </Link>
              </td>
              <td>{size.status}</td>
               <td className="p-2">
                
                  <button
                   className={`${(size.status) ?  'bg-green-600' : 'bg-red-600'} text-white font-light rounded-md p-1 w-[80px] h-[35px] cursor-pointer`}
                     onClick={handelsizeStatus}
                     value={size._id}
                     >

                      {
                        (size.status) ?  "Active" : "Inactive"

                      }
                    </button>
                  </td>
            </tr>
           ))
           }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewSizes;
