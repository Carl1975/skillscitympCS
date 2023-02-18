import Link from "next/link";
import { useState } from "react";
export default function AlbumItem({ album }) {
  const [likes, setLikes] = useState(+album.likes);

  const handleLike = async () => {
    let newLikes = likes + 1;
    setLikes(newLikes);

    const id = +album.id;
    const response = await fetch(`/api/increment-likes?id=${id}&likes=${newLikes}`);
    const data = await response.json;
    
  }

  return (
    <div className="border rounded-lg p-4">
      <img src={album.img_url} classNam="rounded-lg" />
      <Link href={`/single-album/${album.id}`} className="text-xl medium-font">
        {album.title}
      </Link>
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