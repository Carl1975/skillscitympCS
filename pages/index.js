import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/albums");
  }

  return (
    <div className="w-full py-10 bg-red-100">Home

      <button className="bg-blue-500 px-2 py-1 rounded"
      onClick={handleClick}>
        Albums Poll
      </button>
    </div>
  )
}