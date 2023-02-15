export default function handler(req, res) {
    const id = req.query.id;
    const albums = [
        {
            id: "1",
            title: "Hunky Dory",
            artist: "David Bowie",
            imgUrl: "/assets/Hunky_Dory_.jpg",
            linkToPurchase: "https://www.amazon.co.uk/Hunky-Dory-Remastered-Version-VINYL/dp/B01AJZ8ELC/ref=sr_1_3?crid=2PIGWZAT3XMIO&keywords=hunky+dory+vinyl&qid=1676461875&sprefix=hunly%2Caps%2C95&sr=8-3"
        },
        {
            id: "2",
            title: "Technique",
            artist: "New Order",
            imgUrl: "/assets/Technique.jpg",
            /* linkToPurchase: "" */
        },
        {
            id: "3",
            title: "Stone Roses",
            artist: "The Stone Roses",
            imgUrl: "/assets/Stone_Roses_.jpg",
           /*  linkToPurchase: "" */
        },
        {
            id: "4",
            title: "Legend",
            artist: "Bob Marley",
            imgUrl: "/assets/Legend_.jpg",
  /*           linkToPurchase: "" */
        },
        {
            id: "5",
            title: "Abbey Road",
            artist: "The Beatles",
            imgUrl: "/assets/Abbey_Road_.jpg",
            /* linkToPurchase: "" */
        }
    ];
    const foundAlbum = albums.find((album) => {
        if (album.id === id) {
            return true;
        }
        else {
            return false;
        }

    })

    res.json({album: foundAlbum});

}
