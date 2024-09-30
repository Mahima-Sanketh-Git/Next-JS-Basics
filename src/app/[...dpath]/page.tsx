 interface Params {
  params:{
    dpath:string[],
  }
 }
const page = ({params}:Params) => {
  return (
    
    <div>
      <h1>Catch all Page</h1>
      <ul>
        {
          params.dpath.map((item)=>{
            return(
              <li key={item}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default page