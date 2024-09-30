
interface Params {
  params:{
    id:string
  }
}
const page = ({params}:Params) => {
  return (
    <div>Item Code is {params.id}</div>
  )
}

export default page