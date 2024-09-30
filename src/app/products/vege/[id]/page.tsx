import Link from "next/link"

interface Params {
  params:{
    id:string
  }
}
const page = ({params}:Params) => {
  return (
    <div>
      <h1>Item is {params.id}</h1>
      <Link href="/products/vege">Back to Vege</Link>
      </div>
  )
}

export default page