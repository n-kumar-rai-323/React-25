import React, { useEffect, useState } from "react";
import style from "./index.module.css";




const Welcome =()=>{
  const [data , setData] = useState<String>(` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              vero ipsam veniam enim pariatur eos, quaerat, voluptas voluptate
              itaque quod molestiae soluta neque? Vel libero assumenda
              voluptates sint, nam error.`)
  const [loading, setLoading] =useState<Boolean>(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
      // console.log("Application Running...")
    },3000)
  },[])
  return(
    <>
    {loading ? "Application Running..": data}
    </>
  )
}
export default Welcome