import bodezLogo from "../../assets/bodezLogoCrema.png";

const Login = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:flex lg:flex-col lg:gap-6 bg-red-950 items-center justify-center">
        <div>
          <img
            src={bodezLogo}
            alt="Bodez logo"
            className="size-44 items-center justify-center"
          />
        </div>
        <div>
          <h1 className="-tracking-[-0.55em] text-[#FFEFD1] font-extralight text-2xl jomolhari-regular items-center justify-center">
            BODEZ
          </h1>
        </div>
      </div>

      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form action="#" method="POST">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>

          <button
            type="submit"
            className="bg-red-900 hover:bg-red-950 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;