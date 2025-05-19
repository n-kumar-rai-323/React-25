import logo1 from "../../../assets/images/logo1.png";
import Welcome from "../../../components/ui/card/welcome";

const LoginPage = () => {
  return (
    // <div >
    //   {/* /* global css */ }
    //   <h1 className="title">Global CSS</h1>
    //   {/* modular css   */}
    //   <h1 className={style.title}>Module CSS</h1>
    // </div>
    <>
      <div className="flex h-screen w-full">
        <div className="w-1/3 bg-black rounded-l-lg  hidden lg:block">
          <div className="flex flex-col gap-5 w-full h-screen text-center justify-center items-center">
            <img src={logo1} className="w-40 rounded-full" />
            <h1 className="text-yellow-2000 ">Welcome to home</h1>
            <div className="text-yellow-2000">
            <Welcome></Welcome>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3  ">
          <div className="flex max-w-7xl mx-auto flex-col  gap-5 items-center mt-20 lg:mt-40">
            <div className="lg:hidden">
              <img src={logo1} className="w-40 rounded-full" />
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-teal-950 text-2xl font-semibold"> Sign In</h1>
              <form action="">
                <p className="text-xl font-semibold text animate-pulse">Form Comming Soon...</p>
                </form>
              <a
                href="/register"
                className="text-teal-700 hover:cursor-pointer underline italic hover:text-teal-950"
              >
                Register
              </a>
            </div>
          </div>
        <footer className="flex fixed bottom-0 h-10 w-full bg-stone-600 items-center justify-left px-10 rounded-r-lg  ">
          <ul className="flex gap-6">
            <li>
              <a href="/about" className="text-yellow-200 transition hover:text-stone-50/75">
                About
              </a>
            </li>
            <li>
              <a href="/careers" className="text-yellow-200 transition hover:text-stone-50/75">
                Careers
              </a>
            </li>
            <li>
              <a href="/history" className="text-yellow-200 transition hover:text-stone-50/75">
                History
              </a>
            </li>
            <li>
              <a href="/services" className="text-yellow-200  transition hover:text-stone-50/75">
                Services
              </a>
            </li>
            <li>
              <a href="/projects" className="text-yellow-200  transition hover:text-stone-50/75">
                Projects
              </a>
            </li>
            <li>
              <a href="/blog" className="text-yellow-200  transition hover:text-stone-50/75">
                Blog
              </a>
            </li>
          </ul>
        </footer>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
