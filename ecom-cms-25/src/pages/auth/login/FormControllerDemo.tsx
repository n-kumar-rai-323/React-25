// import { NavLink } from "react-router";
// import logo1 from "../../../assets/images/logo1.png";
// import Welcome from "../../../components/ui/card/welcome";
// import { Input } from "antd";
// import { InputLabel, InputType, PasswordInput, TextInput } from "../../../components/form/input.component";
// import { useState } from "react";

// const LoginPage = () => {
//   const [credentials, setCredentials] = useState<{email:string, password:string}>({
//     email:"",
//     password:""
//   })
//   console.log(credentials)
//   return (
//     // <div >
//     //   {/* /* global css */ }
//     //   <h1 className="title">Global CSS</h1>
//     //   {/* modular css   */}
//     //   <h1 className={style.title}>Module CSS</h1>
//     // </div>
//     <>
//       <div className="flex h-screen w-full">
//         <div className="w-1/3 bg-black rounded-l-lg  hidden lg:block">
//           <div className="flex flex-col gap-5 w-full h-screen text-center justify-center items-center">
//             <img src={logo1} className="w-40 rounded-full" />
//             <h1 className="text-yellow-200 ">Welcome to home</h1>
//             <div className="text-yellow-200">
//               <Welcome></Welcome>
//             </div>
//           </div>
//         </div>
//         <div className="w-full lg:w-2/3 h-screen flex flex-col bg-white">
//           <div className="flex mx-10 lg:mx-40 flex-col gap-5 lg:mt-40">
//             <div className="lg:hidden flex w-full justify-center">
//               <img src={logo1} className="w-40 rounded-full" />
//             </div>
//             <div className="flex flex-col gap-5">
//               <h1 className="text-teal-950 text-2xl font-semibold"> Sign In</h1>

//               <form action="" className="flex  flex-col gap-5">
//                 <div className="flex ">
//                   <div className="w-1/4">
//                 <InputLabel htmlFor="email" label="Username(email)"/>
//                   </div>

//                   <div className="w-3/4">
//                     <TextInput value={credentials} setValue = {setCredentials} name="email" placeholder="Enter your email...." type={InputType.EMAIL} size="large"/>
//                   </div>
//                 </div>
//                 <div className="flex ">
//                   <div className="w-1/4">
//                     <label htmlFor="pasword">Password:</label>
//                   </div>

//                   <div className="w-3/4">
//                  <PasswordInput value={credentials} setValue = {setCredentials} name="password" size="large" placeholder="Enter your password"/>
//                   </div>
//                 </div>
//                 <div className="flex justify-end">
//                   <NavLink
//                     to="/forget-password"
//                     className="text-teal-800 hover:cursor-pointer hover:text-teal-700 hover:underline"
//                   >
//                     Forget pasword
//                   </NavLink>
//                 </div>

//                 <div className="flex ">
//                   <div className="w-1/4"></div>

//                   <div className="w-3/4 flex gap-5">
//                     <button
//                       type="reset"
//                       className="bg-red-800 w-40 p-2 text-white rounded-md transition hover:cursor-pointer hover:scale-95 hover:bg-red-900"
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       type="reset"
//                       className="bg-green-800 w-40 p-2 text-white rounded-md transition hover:cursor-pointer hover:scale-95 hover:bg-green-900"
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </div>
//               </form>

              
//             </div>
//           </div>
//           <footer className="flex fixed bottom-0 h-10 w-full bg-stone-600 items-center justify-left px-10 rounded-r-lg  ">
//             <ul className="flex gap-6">
//               <li>
//                 <a
//                   href="/about"
//                   className="text-yellow-200 transition hover:text-stone-50/75"
//                 >
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/careers"
//                   className="text-yellow-200 transition hover:text-stone-50/75"
//                 >
//                   Careers
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/history"
//                   className="text-yellow-200 transition hover:text-stone-50/75"
//                 >
//                   History
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/services"
//                   className="text-yellow-200  transition hover:text-stone-50/75"
//                 >
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/projects"
//                   className="text-yellow-200  transition hover:text-stone-50/75"
//                 >
//                   Projects
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/blog"
//                   className="text-yellow-200  transition hover:text-stone-50/75"
//                 >
//                   Blog
//                 </a>
//               </li>
//             </ul>
//           </footer>
//         </div>
//       </div>
//     </>
//   );
// };
// export default LoginPage;
