export default function AlbumItem({ album }) {
  return (
    <div className="bg-green-100">
      <p>{album.title}</p>
      <p>{album.artist}</p>
    </div>
  )
}