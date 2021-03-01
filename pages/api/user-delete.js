import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default async (req, res) => {

    if(req.method === "POST"){
        req.body = JSON.parse(JSON.stringify(req.body))
        const user = await prisma.user.delete({
            where: { id: String(req.body.id) },
          })
        res.status(200).json({user})
    }
}