import { useRouter } from "next/router";

export default function AlbumPage() {
  const router = useRouter();

  const handleClick = () => {
     /* make API call example */
    router.push("/");
  }

  return (
    <div className="w-full py-10 bg-green-100">Albums Poll

      <button className="bg-blue-500 px-2 py-1 rounded"
      onClick={handleClick}>
        Home
      </button>
    </div>
  )
}