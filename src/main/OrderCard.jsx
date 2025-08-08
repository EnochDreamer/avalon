import React from 'react'
import MiniMenu from './MiniMenu'

function OrderCard({orders,cent}) {
  return (
    <MiniMenu
    text1={"Today's orders"}
    text2={orders}
    cent={cent}
    />
  )
}

export default OrderCard