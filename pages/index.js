import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-full py-10 bg-red-100">Home
      <div>
        <Link href="/albums">
            Album Poll
        </Link>
      </div>
    </div>
  )
}