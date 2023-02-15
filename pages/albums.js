/* import AlbumsGrid from "@/components/albums/albums-grid/album-item";  */
import AlbumsGrid from "@/components/albums/albums-grid";
import Content from "@/components/shared/content"; 
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

export default function AlbumPage() {
  return (
      <div className="w-full bg-red-100 max-w-6xl mx-auto mt-8">
        <Header name="Albums" />

        <Content>
          <div className="w-full max-w-6xl mx-auto mt-8">
        <AlbumsGrid />
          </div>
        </Content>
  
      

      <div className="w-full max-w-6xl mx-auto mt-8">
      <Footer href="/" title="Home"/>
      </div>
    </div>
  )
  }

      
