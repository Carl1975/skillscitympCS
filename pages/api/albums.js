export default function handler(req, res) {
    const albums = [ 
    {
        title: "Hunky Dory",
        artist: "David Bowie"
    },
    {
        title: "Technique",
        artist: "New Order"
    },
    {
        title: "Stone Roses",
        artist: "The Stone Roses"
    },
    {
        title: "Legend",
        artist: "Bob Marley"
    },
    {
        title: "Abbey Road",
        artist: "The Beatles"
    }
];
    res.json(albums);

}