import Link from "next/link";
/* import { useRouter } from "next/router"; */

export default function HomePage() {
/*     const router = useRouter(); */
  
    /* const handleClick = () => {
       /* make API call example */
     /*  router.push("/albums"); */
   /*  }  */

  return (
    <div className="w-full py-10 bg-green-100">Albums Poll

      {/* <button className="bg-blue-500 px-2 py-1 rounded"
      onClick={handleClick}>
        Albums Poll
      </button> */} 

      <Link href="/">
        Home
      </Link>

    </div>
  )
}