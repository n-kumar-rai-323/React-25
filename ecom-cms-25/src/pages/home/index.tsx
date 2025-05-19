import React, { Fragment } from "react";
import { CardComponent } from "../../components/ui/card";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-row gap-1">
        <CardComponent classname="h-30" data=""></CardComponent>
         <CardComponent data="2nd block"></CardComponent>
          <CardComponent data="3rd block"></CardComponent>
      
        
      </div>
    </>
  );
};

export default HomePage;
