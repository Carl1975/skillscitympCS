import Link from "next/link";
import { useState } from "react";
export default function AlbumItem({ album }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    let newLikes = likes + 1;
    setLikes(newLikes);
  }

  return (
    <div className="border rounded-lg p-4">
      <Link href={`/single-album/${album.id}`}>
      <img src={album.img_url} className="rounded-lg"/>
      </Link>
      <p className="text-xl medium-font">{album.title}</p>
      <p className="text-gray-700">{album.artist}</p>
      <button
            onClick={handleLike}
            type="button"
            className="bg-blue-500 px-2 py-1 rounded text-white">
              Like ({likes} likes)
      </button>
    </div>
  )
}