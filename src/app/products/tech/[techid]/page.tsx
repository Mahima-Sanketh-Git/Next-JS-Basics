
interface Params{
  params:{
    techid:string,
  }
}

const page = ({params}:Params) => {
  return (
    <div>Tech code is {params.techid}</div>
  )
}

export default page