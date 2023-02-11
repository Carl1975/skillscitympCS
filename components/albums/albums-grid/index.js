import AlbumItem from "./album-item";
import albums from "./albums";

export default function AlbumsGrid() {
  return (
    <div className="w-full grid grid-cols-5 gap-4">
      {albums.map((album) => (
        <AlbumItem album={album} />

      ))}
    </div>
  )
} 