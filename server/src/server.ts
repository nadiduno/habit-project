import Fastify from 'fastify';
import cors from '@fastify/cors';
import {PrismaClient} from '@prisma/client';

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors) 

app.get('/habits', async () => {
  const habits = await prisma.habit.findMany()
  //HÁBITOS QUE INICIEN CON ESTUDAR 
  // const habits = await prisma.habit.findMany({
  //   where:{
  //     title:{
  //       startsWith: 'Estudar'
  //     }
  //   }
  // })
  return habits;
})

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP server running!')
})