const AutoCompleteAddress = () => {
  return (
    <div className="mt-5">
      <div>
        <lable className="text-gray-400">Where From?</lable>
        <input
          type="text"
          className="bg-white p-1 border w-full rounded-md outline-none focus:border-yellow-300"
        />
      </div>
      <div className="mt-3">
        <lable className="text-gray-400">Where To?</lable>
        <input
          type="text"
          className="bg-white p-1 border w-full rounded-md outline-none focus:border-yellow-300"
        />
      </div>
    </div>
  );
};

export default AutoCompleteAddress;
