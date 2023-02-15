import { useEffect, useState } from "react";
import AlbumItem from "./album-item";
/* API request used instead */
/* import albums from "./albums"; */

export default function AlbumsGrid() {
  const [albums, setAblums] = useState([]);

  useEffect(() => {
    getAlbums();
  }, []);

  const getAlbums = async () => {
    const response = await fetch(`/api/albums`);
    const data = await response.json();
    setAblums(data);
  }

  return (
    <div className="w-full grid grid-cols-5 gap-4">
      {albums.map((album, index) => (
        <AlbumItem Key={index} album={album} />

      ))}
    </div>
  )
} 