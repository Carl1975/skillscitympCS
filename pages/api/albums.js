export default function handler(req, res) {
    const albums = [
        {
            title: "Hunky Dory",
            artist: "David Bowie",
            imgUrl: "/assets/Hunky_Dory_.jpg"
        },
        {
            title: "Technique",
            artist: "New Order",
            imgUrl: "/assets/Technique.jpg"
        },
        {
            title: "Stone Roses",
            artist: "The Stone Roses",
            imgUrl: "/assets/Stone_Roses_.jpg"
        },
        {
            title: "Legend",
            artist: "Bob Marley",
            imgUrl: "/assets/Legend_.jpg"
        },
        {
            title: "Abbey Road",
            artist: "The Beatles",
            imgUrl: "/assets/Abbey_Road_.jpg"
        }
    ];
    res.json(albums);

}