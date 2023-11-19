
export default function Home() {
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-3">
        <div className="bg-blue-300" >
          Booking
        </div>
        <div className="col-span-2 bg-red-300 ">
        {/* order-first md:order-last */}
          map
        </div>
      </div>
    </div>
  )
}
