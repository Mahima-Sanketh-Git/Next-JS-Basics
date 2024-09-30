import Link from "next/link";

const page = () => {
  interface VegFoodItem {
    id: number;
    name: string;
  }
  
  const vegFoodItems: VegFoodItem[] = [
    {
      id: 1,
      name: "VeganBowl",
    },
    {
      id: 2,
      name: "VegetarianPizza",
    },
    {
      id: 3,
      name: "GrilledVeggieWrap",
    },
    {
      id: 4,
      name: "VeganTofuStir-fry",
    },
    {
      id: 5,
      name: "VegetarianLasagna",
    }
  ];
  
  
  return (
    <div>
<ul>
  {
    vegFoodItems.map((item)=>{
      return(
      <li key={item.id}><Link href={`/products/vege/${item.name}`}>{item.name}</Link></li>
      );
    })
  }
</ul>
    </div>
  )
}

export default page