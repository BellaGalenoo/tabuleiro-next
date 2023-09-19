export default function Quadrado({ isWhite = true }) {
  let color
  if (isWhite) {
    color = "bg-white"
  } else {
    color = "bg-black"
  }

  return (
    <div
      className={`w-[80px] h-[80px] flex-shrink-0 ${color} border border-black`}
    />
  )

}