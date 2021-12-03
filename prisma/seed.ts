import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  await prisma.user.deleteMany({});
  await prisma.post.deleteMany({});

  const user = await prisma.user.create({
    data: {
      email: 'lucas@teste.com',
      name: 'Lucas',
      age: 27,
    },
  });

  const post = await prisma.post.create({
    data: {
      title: 'Post de teste criado via seed',
      body: 'Esse é um post de teste .....',
      authorId: user.id,
    },
  });
};

main();
