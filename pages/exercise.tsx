function Header() {
  return (
    <div>
      <header className="bg-gray-900">
        <div className=" px-4 py-3 flex justify-between ">
          <div>
            <svg
              viewBox="0 0 185 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-auto"
            >
              <path
                d="M121.09 28.336c2.352 0 4.392-1.248 5.424-3.12l-2.688-1.536c-.48.984-1.512 1.584-2.76 1.584-1.848 0-3.216-1.368-3.216-3.264 0-1.92 1.368-3.288 3.216-3.288 1.224 0 2.256.624 2.736 1.608l2.664-1.56c-.984-1.848-3.024-3.096-5.376-3.096-3.648 0-6.336 2.76-6.336 6.336 0 3.576 2.688 6.336 6.336 6.336zM137.084 16v1.416c-.864-1.08-2.16-1.752-3.912-1.752-3.192 0-5.832 2.76-5.832 6.336 0 3.576 2.64 6.336 5.832 6.336 1.752 0 3.048-.672 3.912-1.752V28h3.096V16h-3.096zm-3.336 9.384c-1.896 0-3.312-1.368-3.312-3.384s1.416-3.384 3.312-3.384c1.92 0 3.336 1.368 3.336 3.384s-1.416 3.384-3.336 3.384zM149.851 18.976V16h-2.712v-3.36l-3.096.936V16h-2.088v2.976h2.088v4.992c0 3.24 1.464 4.512 5.808 4.032v-2.808c-1.776.096-2.712.072-2.712-1.224v-4.992h2.712zM153.57 14.56c1.056 0 1.92-.864 1.92-1.896s-.864-1.92-1.92-1.92c-1.032 0-1.896.888-1.896 1.92s.864 1.896 1.896 1.896zM152.034 28h3.096V16h-3.096v12zM163.676 28.336c3.528 0 6.36-2.76 6.36-6.336 0-3.576-2.832-6.336-6.36-6.336-3.528 0-6.336 2.76-6.336 6.336 0 3.576 2.808 6.336 6.336 6.336zm0-3.024c-1.824 0-3.24-1.368-3.24-3.312 0-1.944 1.416-3.312 3.24-3.312 1.848 0 3.264 1.368 3.264 3.312 0 1.944-1.416 3.312-3.264 3.312zM178.886 15.664c-1.608 0-2.856.6-3.576 1.68V16h-3.096v12h3.096v-6.48c0-2.088 1.128-2.976 2.64-2.976 1.392 0 2.376.84 2.376 2.472V28h3.096v-7.368c0-3.192-1.992-4.968-4.536-4.968z"
                fill="#A3BFFA"
              ></path>
              <path
                d="M61.063 28h3.768l3.144-11.088L71.143 28h3.768l4.704-16.8h-3.48L72.92 23.656 69.391 11.2H66.56l-3.504 12.456L59.84 11.2h-3.48L61.063 28zM85.674 28.336c3.528 0 6.36-2.76 6.36-6.336 0-3.576-2.832-6.336-6.36-6.336-3.528 0-6.336 2.76-6.336 6.336 0 3.576 2.808 6.336 6.336 6.336zm0-3.024c-1.824 0-3.24-1.368-3.24-3.312 0-1.944 1.416-3.312 3.24-3.312 1.848 0 3.264 1.368 3.264 3.312 0 1.944-1.416 3.312-3.264 3.312zM97.308 18.064V16h-3.096v12h3.096v-5.736c0-2.52 2.04-3.24 3.648-3.048V15.76c-1.512 0-3.024.672-3.648 2.304zM113.831 28l-4.968-6.072L113.687 16h-3.696l-4.128 5.28V11.2h-3.096V28h3.096v-5.448L110.231 28h3.6z"
                fill="#fff"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M43.911 12.604L36.213 8.16v20.645h9v2h-44v-2h4v-12.72l-3.728.933L1 15.078l21.09-5.273h3.122a9.552 9.552 0 0 0-.68 2.559l-.483 3.975 5.164-2.982v15.448h5V8.161l-7.696 4.444a7.502 7.502 0 0 1 2.565-4.8h-4.12a7.489 7.489 0 0 1 6.646-2.973l-5.591-3.228a7.488 7.488 0 0 1 6.696.402c1.039.6 1.88 1.41 2.5 2.347a7.461 7.461 0 0 1 2.5-2.347 7.49 7.49 0 0 1 6.698-.402l-5.593 3.228a7.488 7.488 0 0 1 6.646 2.973h-4.12a7.498 7.498 0 0 1 2.567 4.8zM25.213 28.805v-10h-6v10h6zm-11-8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
                fill="#A3BFFA"
              ></path>
            </svg>
          </div>
          <div className="flex">
            <button className="px-2 hover:text-white focus:outline-none focus:text-white">
              <img
                className="w-6 h-6 fill-current "
                src="https://s2.svgbox.net/hero-solid.svg?ic=menu&color=aaa"
              ></img>
            </button>
          </div>
        </div>

        <nav>
          <div className=" pt-2 pb-5 px-2 py-5 border-b border-gray-800">
            <a
              href="#"
              className="block px-3 py-1 rounded leading-tight  font-semibold text-white hover:bg-gray-800"
            >
              List your property
            </a>
            <a
              href="#"
              className="mt-1 block px-3 py-1 rounded leading-tight  font-semibold text-white hover:bg-gray-800"
            >
              Trips
            </a>
            <a
              href="#"
              className="mt-1 block px-3 py-1 rounded leading-tight  font-semibold text-white hover:bg-gray-800"
            >
              Messages
            </a>
          </div>
          <div className="px-5 py-5">
            <div className="flex items-center">
              <img
                className="w-10 h-10 object-cover rounded-full border-2 border-gray-600"
                src="https://images.unsplash.com/photo-1514846326710-096e4a8035e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4ncyUyMGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              ></img>
              <span className="ml-4 font-semibold text-gray-200">
                Isla Schoger
              </span>
            </div>
            <div className="mt-5">
              <a href="#" className="block text-gray-400  hover:text-white">
                Account Settings
              </a>
              <a
                href="#"
                className="block mt-3 text-gray-400  hover:text-white"
              >
                Support
              </a>
              <a
                href="#"
                className="block mt-3 text-gray-400  hover:text-white"
              >
                Sign out
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

function Card() {
  return (
    <div className="border w-full">
      <div>
        <div>
          <img
            className="rounded-lg shadow-md h-fit w-full"
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          ></img>
        </div>
        <div className="relative px-4 -mt-16">
          <div className="bg-white rounded-lg px-4 py-3 shadow-lg ">
            <div className="flex">
              <span className="px-2 py-2 leading-none inline-block  bg-teal-200 text-teal-800 font-semibold rounded-full uppercase tracking-wide text-xs">
                Plus
              </span>
              <div className="text-xs ml-2 text-gray-600 font-semibold uppercase tracking-wide">
                3 beds &bull; 2 baths
              </div>
            </div>

            <h4 className="text-gray-900 font-semibold text-lg mt-1">
              Modern home in city center
            </h4>
            <div className="mt-1">
              <span className="text-gray-900">1,400$ </span>
              <span className=" ml-1  text-sm text-gray-600">/wk</span>
              <div className="text-sm text-gray-600">34 reviews</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Filtra() {
  return (
    <div className="px-4 py-4">
      <form className="">
        <div className=" grid gap-4">
          {/* 1 */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">
                Pick the best fantasy franchise
              </span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Pick one
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </div>
          {/* 2 */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">
                Pick the best fantasy franchise
              </span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Pick one
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </div>
        </div>

        <div className="divider" />
        {/* 2 */}
        <div>
          <span className="block text-sm font-semibold text-gray-500 mb-2">
            Amenities
          </span>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            <div className="form-control border w-fit">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="text-sm ml-2">Remember me</span>
              </label>
            </div>
            <div className="form-control border w-fit">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="text-sm ml-2">Remember me</span>
              </label>
            </div>
            <div className="form-control border w-fit">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="text-sm ml-2">Remember me</span>
              </label>
            </div>
            <div className="form-control border w-fit">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="text-sm ml-2">Remember me</span>
              </label>
            </div>
            <div className="form-control border w-fit">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="text-sm ml-2">Remember me</span>
              </label>
            </div>
            <div className="form-control border w-fit">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="text-sm ml-2">Remember me</span>
              </label>
            </div>
            <div className="form-control border w-fit">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="text-sm ml-2">Remember me</span>
              </label>
            </div>
            <div className="form-control border w-fit">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="text-sm ml-2">Remember me</span>
              </label>
            </div>
            <div className="form-control border w-fit">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="text-sm ml-2">Remember me</span>
              </label>
            </div>
          </div>
        </div>

        <div className="divider" />
        <button className="btn w-full">Update results</button>
      </form>
    </div>
  );
}
export default function Exercise() {
  return (
    <div id="app" className="">
      <main>
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr]">
          <div className="bg-base-300 md:sticky md:top-0 md:h-screen h-fit border">
            <div className="md:hidden  shadow border navbar bg-base-100">
              <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
              </div>
              <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-5 h-5 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <Filtra />
          </div>

          <div className="border">
            <header className="h-20 border w-full shadow sticky top-0 bg-white hidden md:block z-50"></header>
            <div className="grid  md:grid-cols-2 lg:grid-cols-3 p-8 gap-4">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
