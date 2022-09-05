import { Header } from "../../components/header";
import { Input } from "../../components/input";

export default function Register() {
  return (
    <div>
      <Header />
      <form className="p-8 mx-auto container">
        <h1 className="font-bold text-4xl ">Store</h1>
        <div className="grid grid-cols-2 gap-10">
          <div className="m-10">
            <Input className="mb-2" label="Name" />
            <Input className="mb-2" label="Address" />
            <Input className="mb-2" label="Phone" />
            <Input className="mb-2" label="Email" />
            <Input className="mb-2" label="Password" />
          </div>
          <div>
            <div className="mb-6 text-sm"> Store Image</div>
            <div className="flex space-x-6">
              <div className="flex justify-center mt-8 ">
                <div className="max-w-2xl rounded-lg  bg-gray-50 ">
                  <div className="m-4">
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                        <div className="flex flex-col items-center justify-center pt-7">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                          <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Attach a file
                          </p>
                        </div>
                        <input type="file" className="opacity-0" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn w-full  mb-20">Register</button>
      </form>
    </div>
  );
}
