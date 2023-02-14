
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

export default function HomePage() {
  return (
      <div className="w-full">
        <Header name="Home" />

      <div className="w-full max-w-6xl mx-auto mt-8">
      <Footer href="/albums" title="Albums"/>
      </div>
    </div>
  )
  }



