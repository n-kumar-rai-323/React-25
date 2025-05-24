import React, { useEffect, useState } from "react";
import style from "./index.module.css";




const Welcome =()=>{
  const [data , setData] = useState<String>(` Your local platform for blood donation in Bharatpur, Bagmati Province. Connect, request, and donate easily.`)
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