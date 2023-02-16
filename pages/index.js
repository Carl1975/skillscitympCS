import Topics from "@/components/home/topics";
import Hero from "@/components/home/hero";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

export default function HomePage() {
  return (
    <div className="w-full">
      <Header name="Home Page" />

      <Hero imgUrl="/assets/profilepicrev1.jpg"
        title="Carl Snaylam"
        subtitle="Aspiring Software Engineer"
      />

      <Content>
        <div className="w-full flex flex-col">
          <Topics />

        </div>

      </Content>
      <Footer href="/albums" title="Album" />
    </div>
  )
}



