/* import AlbumsGrid from "@/components/albums/albums-grid/album-item";  */
import LocationsGrid from "@/components/locations/locations-grid";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";


export default function LocationsPage() {
  return (
    <div className="w-full max-w-6xl mx-auto mt-8">
      <Header name="Locations Page" />

      <Content>
        <div className="w-full max-w-6xl mx-auto mt-8">
          <LocationsGrid />
        </div>
      </Content>



      <div className="w-full max-w-6xl mx-auto mt-8">
        <Footer href="/" title="Home" />
      </div>
    </div>
  )
}