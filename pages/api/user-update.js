import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default async (req, res) => {

    if(req.method === "POST"){
        console.log("updated post");
        req.body = JSON.parse(JSON.stringify(req.body))
        console.log(req.body);
        const updateUser = await prisma.user.update({
            where: {
              id: req.body.id,
            },
            data: req.body,
          })
      
        res.status(200).json({updateUser})
    }
}