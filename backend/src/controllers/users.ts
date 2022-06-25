import { PrismaClient } from "@prisma/client";



const userControllers = {

  readAll: async () => {
    try {
      const prisma = new PrismaClient()
      let users = await prisma.user.findMany();
      return users
    } catch {
      return false
    }
  },

  readById: async (id:number) =>  {
    try {
      const prisma = new PrismaClient();
      let user = await prisma.user.findUnique({
        where: {
          id: id
        }
      })
      return user
    } catch {
      return false
    }
  },

  create: async (user:any) => {
    const prisma = new PrismaClient()
    const newUser = await prisma.user.create({
      data: user
    })
  },

  update: async (id:any, changes:object) => {
    try {
      let prisma = new PrismaClient()
      let updatedUser = await prisma.user.update({
        where: {
          id: id
        },
        data: changes
        
      })
      return updatedUser
    } catch {
      return false
    }
  },

    delete: async (id:number) => {
      
      try {
        const prisma = new PrismaClient()
        const deletedUser = prisma.user.delete({
          where: {
            id: id
          } 
        })
        return deletedUser
      } catch {
        return false
      }
    }
  
} 

export {userControllers}