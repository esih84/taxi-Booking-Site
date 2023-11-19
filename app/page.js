import Booking from "@/components/templates/Booking";

export default function Home() {
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-3">
        <div className="" >
          <Booking/>
        </div>
        <div className="col-span-2 bg-red-300 ">
        {/* order-first md:order-last */}
          map
        </div>
      </div>

    </div>
  )
}
