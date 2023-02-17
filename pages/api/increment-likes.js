import sql from "@/utils/postgres";

export default async function handler(req, res) {
    const id = +req.query.id;
    const likes = +req.query.likes;

    
    if (id === null || id === undefined) {
        res.status(400).json({message: "album id is required"});
        return;
     }

      
    if (likes === null || likes === undefined) {
        res.status(400).json({message: "Likes is required"});
        return;
     }






    const albums =  await sql`
    update albums
    set likes = ${likes}
    where id = ${id}
    `;
    
   

res.json({message: "number of album likes updated"});

}




  


