import { useState } from "react";
import { useRouter } from "next/router"
import { useEffect } from "react";
import Hero from "@/components/home/hero";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import Content from "@/components/shared/content";

export default function SingleAlbum() {
    const router = useRouter();
    const [album, setAblum] = useState(null);
    const { albumId } = router.query;

    useEffect(() => {
        if (!albumId) return;

        getAlbum(albumId);
    }, [albumId]);

    const getAlbum = async (id) => {
        const response = await fetch(`/api/album-by-id?id=${id}`);
        const data = await response.json();
        const {album} = data;
        setAblum(album);
    }

    if (!album) {
        return (
            <div>Loading.......</div>
        )
    }

    return (
        <div className="w-full">
            <Header name={album.title} />

            <Hero 
            imgUrl={album.imgUrl}
            title={album.title}
            subtitle={album.artist} />

            <Content>
                <div className="w-full flex flex-col"/>

                <a href={album.linkToPurchase} target="_blank">
                    Buy on Amazon
                </a>
            </Content>

            <Footer
                title = "Next album"
                href={`/single-album/${+album.id+1}`}
            />
        </div>
    )
}