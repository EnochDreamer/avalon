import React from 'react'
import MiniMenu from './MiniMenu'

function AvgOrderCard({amount,cent}) {
  return (
    <MiniMenu
    text1={'Avg. order value'}
    text2={`$${amount}`}
    cent={cent}
    />
  )
}

export default AvgOrderCard