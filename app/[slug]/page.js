import React from 'react'
import Tic from "@/components/tic"
import Bingo from "@/components/bingo"


const page = ({params}) => {
  console.log(params.slug)
  if(params.slug == "tic-tac-toe"){
    return(
        <>
            <Tic />
        </>
    )
  }
  else if(params.slug == "bingo"){
    return(
      <>
        <Bingo />
      </>
    )
  }
}

export default page
