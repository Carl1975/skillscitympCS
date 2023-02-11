import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-full py-10 bg-green-100">
      Home
      <Link href="/albums">
        Albums Poll
      </Link>
    </div>
  )
}