import React from "react"
import Quadrado from "@/components/Quadrado"
import Linha from "@/components/Linha"

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen w-screen bg-[#444]">
      <div className="flex flex-col ">
        <Linha/>
        <Linha isWhite={true}/>
        <Linha/>
        <Linha isWhite={true}/>
        <Linha/>
        <Linha isWhite={true}/>
        <Linha/>
        <Linha isWhite={true}/>
      </div>
    </main>
  )


  // return (
  //   <div className=" bg-gray-300 h-screen w-screen">
  //     <Quadrado isWhite={false} />
  //     <Quadrado />
  //     <Quadrado isWhite={false} />
  //     <Quadrado />
  //     <Quadrado isWhite={false} />
  //     <Quadrado />
  //     <Quadrado isWhite={false} />
  //     <Quadrado />
  //   </div>
  // )

}
