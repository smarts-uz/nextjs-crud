import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async (req, res) => {
    
    if(req.method === "POST")
    {
        
        const {firstName, lastName, email, password, photo}  = req.body;
    
        const createMany = await prisma.user.createMany({
            data: [
              { firstName, lastName, email, password, photo}
            ],
            skipDuplicates: true, 
          })
          res.json(createMany);
    }
  }
  