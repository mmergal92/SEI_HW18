import { useState } from "react"
import ReceiptsInfo from './Receipt'

function AllRec({value}){

return(
     <div className ="eachReceipt">
      <h2>{value.person}</h2>
      <h3>{value.order.main}</h3>
      <h3>{value.order.protein}</h3>
      <h3>{value.order.rice}</h3>
      <h3>{value.order.sauce}</h3>
      <h3>{value.order.drink}</h3>
      <h3>{value.order.toppings}</h3>
      <h3>{value.order.cost}</h3>
      {/* <h3>{value.paid}</h3> */}
     </div>
    )
  }

export default AllRec;
