/* import AlbumsGrid from "@/components/albums/albums-grid/album-item"; */
import AlbumsGrid from "@/components/albums/albums-grid";
import Link from "next/link";

export default function AlbumPollPage() {
  return (
    <div className="w-full py-10 bg-red-100">
      Album Poll

      <AlbumsGrid />

      <Link href="/">
        Home
      </Link>
    </div>
  )
}