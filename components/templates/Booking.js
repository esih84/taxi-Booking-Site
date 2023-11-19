"use client";
import AutoCompleteAddress from "../module/AutoCompleteAddress";

const Booking = () => {
  const screenHight = window.innerHeight * 0.72;
  return (
    <div className="p-5">
      <h2 className=" text-[20px] font-semibold">Booking</h2>
      <div className="border p-5 rounded-md  " style={{ height: screenHight }}>
        <AutoCompleteAddress />
      </div>
    </div>
  );
};

export default Booking;
