import React from 'react'
import Tic from "@/components/tic"
import Bingo from "@/components/bingo"

export async function generateStaticParams() {
  return [
    { params: { slug: "tic-tac-toe" } },
    { params: { slug: "bingo" } }
  ]
}

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
