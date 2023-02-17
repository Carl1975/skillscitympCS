import sql from "@/utils/postgres";

export default async function handler(req, res) {
    const id = req.query.id;

    const albums = await sql`
        select * from albums
        where id = ${id}
    `;
    if (albums.length < 1) {
        res.status(404).json ({message: "album not found"});
        return;
    }
    const foundAlbum = albums[0];

    res.json({album: foundAlbum})

   }

    