import sql from "@/utils/postgres";

export default async function handler(req, res) {

    const albums = await sql `
    select * from albums
    `;
    res.json(albums);
}




  /*   const albums = [
        {
            id: "1",
            title: "Hunky Dory",
            artist: "David Bowie",
            imgUrl: "/assets/Hunky_Dory_.jpg"
        },
        {
            id: "2",
            title: "Technique",
            artist: "New Order",
            imgUrl: "/assets/Technique.jpg"
        },
        {
            id: "3",
            title: "Stone Roses",
            artist: "The Stone Roses",
            imgUrl: "/assets/Stone_Roses_.jpg"
        },
        {
            id: "4",
            title: "Legend",
            artist: "Bob Marley",
            imgUrl: "/assets/Legend_.jpg"
        },
        {
            id: "5",
            title: "Abbey Road",
            artist: "The Beatles",
            imgUrl: "/assets/Abbey_Road_.jpg"
        }
    ];
    res.json(albums);

} */