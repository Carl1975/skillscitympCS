export default function handler(req, res) {
    const locations = [
        {
            id: "london",
            title: "London",
            visitedDate: "February 2023",
            imgUrl: "/assets/london.jpg"
        },
        {
            id: "manchester",
            title: "Manchester",
            visitedDate: "Today",
            imgUrl: "/assets/manchester.jpg"
        },
        {
            id: "florida",
            title: "Florida",
            visitedDate: "July 1990",
            imgUrl: "/assets/florida.jpg"
        }

    ];
    res.json(locations);

}