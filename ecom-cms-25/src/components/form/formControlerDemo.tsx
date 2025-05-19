// import { Input, SizeType } from "antd"; // Import SizeType from antd
// import React, { Fragment } from "react"; // Import Fragment
// export enum InputType {
//   TEXT = "text",
//   EMAIL = "email",
//   URL = "url",
//   DATE = "date",
// }
// export interface ITextInputProps {
//   name: string;
//   type?: InputType;
//   placeholder?: string;
//   size?: SizeType; // Use Ant Design's SizeType
//   setValue: Function;
//   value:any
// }
// export interface IInputLabelProps{
//     htmlFor?: string,
//     label: string
// }
// export const TextInput = ({
//   name,
//   type = InputType.TEXT,
//   size,
//   placeholder = "Enter your value",
//   setValue,
//   value={}
// }: ITextInputProps) => {
//   return (
//     <Fragment> {/* Use the explicit Fragment component */}
//       <Input
//         name={name}
//         type={type}
//         id={name}
//         placeholder={placeholder}
//         size={size}
//         onChange={(e:React.BaseSyntheticEvent)=>{
//             setValue({
//                 ...value,
//                 [name]: e.target.value
//             })
//         }}
//       />
//     </Fragment>
//   );
// };

// export const PasswordInput=({name, size, placeholder="Enter your value...", setValue,value={}}: ITextInputProps)=>{
//     return (
//         <>
//         <Input.Password 
//         name={name}
//         id={name}
//         placeholder={placeholder}
//         onChange={(e:React.BaseSyntheticEvent)=>{
//             setValue({
//                 ...value,
//                 [name]: e.target.value
//             })
//         }}
//          size={size}
//         />
//         </>
//     )
// }

// export const InputLabel=({htmlFor='', label}:IInputLabelProps)=>{
//     return(
//         <>
//         <label htmlFor={htmlFor}>{label}:</label>
//         </>
//     )
// }