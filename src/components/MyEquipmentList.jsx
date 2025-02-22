import React from 'react';

const MyEquipmentList = () => {

    const deleteProduct=(id)=>{
      fetch(``,{
        method:"DELETE",
      })
      .then(res=> res.json())
      ,then(data=>{
        console.log(data)
      })
    }

    return (
        <div>
            
        </div>
    );
};

export default MyEquipmentList;