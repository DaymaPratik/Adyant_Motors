import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
import { toast } from "react-toastify";

function DashboardBox() {
  const [array, setArray] = useState([]);
  const [ deleteId, setDeletingId ] = useState(null);
  const getContactDetailsFunction = async () => {
   
    try {
      const response = await fetch(
        "https://adyant-motors.onrender.com/getcontactdetails",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const data = await response.json();
      console.log(data);
      setArray(data.contactsArray);
     
    } catch (error) {
      console.log("ERROR WHILE GETTING CONTACT DETAILS FRONTEND", error);
      
    }
  };

  useEffect(() => {
    getContactDetailsFunction();
  }, []);
  const deleteContactUser = async (id) => {
    setDeletingId(id);
    try {
      const response = await fetch(
        `https://adyant-motors.onrender.com/delete-contact-user/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const data = await response.json();
      const fitleredArray = array.filter((item) => {
        return item._id != id;
      });
      setArray(fitleredArray);
      setDeletingId(null);
      console.log(data);
      toast("User details deleted successfully");
    } catch (error) {
      console.log("ERROR WHILE DELETEING CONTACT USER FRONTEND", error);
      setDeletingId(null);
    }
  };

  return (
    <main className="min-h-screen flex flex-col justify-start pt-[90px]">
      <h3 className="text-[40px] py-3 font-bold text-center ">
        Contact Form User Details
      </h3>
     
       
        <section
        className=' grid grid-cols-1 sm:grid-cols-3  gap-5 border-2 border-gray-300 py-[50px] p-5 bg-gray-50 overflow-y-auto bg-no-repeat bg-center bg-cover bg-fixed
                bg-[url("https://images.unsplash.com/photo-1714745454829-a64751d90480?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'
      >
        {array.map((item) => (
          <div
            key={item._id}
            className="text-white p-4 bg-[#0f0b0b7a] shadow-[0px_0px_5px_1px_#ff0000]  rounded-lg  text-[14px] xs:text-[17px] lg:text-[20px]"
          >
            <p className=" font-semibold mb-2">
              Name: <span className="font-normal">{item.name}</span>
            </p>
            <p className=" font-semibold mb-2">
              Company Name:{" "}
              <span className="font-normal">{item.companyName}</span>
            </p>
            <p className=" font-semibold mb-2">
              Email: <span className="font-normal">{item.email}</span>
            </p>
            <p className=" font-semibold mb-2">
              Phone: <span className="font-normal">{item.phone}</span>
            </p>
            <p className=" font-semibold mb-2">
              Enquiry Type:{" "}
              <span className="font-normal">{item.enquiryType}</span>
            </p>
            <p className="font-semibold mb-4">
              Message: <span className="font-normal">{item.message}</span>
            </p>
            {deleteId === item._id (
              <div className="flex justify-center items-center py-2 my-2">
                <FadeLoader color="#ff0000" />
              </div>
            )}
            <button
              className="px-4 py-2 block mx-auto bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2
                                 focus:ring-red-500"
              onClick={() => deleteContactUser(item._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </section>
     
    </main>
  );
}

export default DashboardBox;
