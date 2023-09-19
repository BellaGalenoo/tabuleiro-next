import Quadrado from "./Quadrado";

export default function Linha({ isWhite }) {

  let color
  if (isWhite) {
    return (
      <div className="flex bg-gray-300 ">
        <Quadrado />
        <Quadrado isWhite={false} />
        <Quadrado />
        <Quadrado isWhite={false} />
        <Quadrado />
        <Quadrado isWhite={false} />
        <Quadrado />
        <Quadrado isWhite={false} />
      </div>
    )

  } else {
    return (
      <div className="flex bg-gray-300 ">
        <Quadrado isWhite={false} />
        <Quadrado />
        <Quadrado isWhite={false} />
        <Quadrado />
        <Quadrado isWhite={false} />
        <Quadrado />
        <Quadrado isWhite={false} />
        <Quadrado />
      </div>
    )
  }

  //   return(

  //     <div>
  //     <Linha isWhaite={false}/>
  //     <Linha/>
  //     </div>

  //   )
}