

interface Params{
  params:{
    reviewid:string,
    id:string,
  }
}

const page = ({params}:Params) => {
  return (
    <div>Item code is {params.id} Review count is {params.reviewid}</div>
  )
}

export default page