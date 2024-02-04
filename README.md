# Hackathon [Orange Juice](https://tech.orangejuice.com.br/orangejuice) | Orange Portifolio

Regulamento do [desafio](https://drive.google.com/file/d/1nU0Hve2W4tEQ2u1Xtc1tb0bVFTD1idIL/view)

O **Orange Portifolio** é uma plataforma onde o usuário pode adicionar projetos ao seu portifolio.

Esse projeto foi desenvolvido para um desafio proposto pela empresa [FCamara](https://www.fcamara.com.br/) como uma forma de preparação para o Programa de Formação de trainees que acontece periodicamente. Essa é a etapa final do programa oficial, que consiste em um _**hackathon**_ com duração de 15 dias.

### Tecnologias utilizadas

![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

### Features

```bash
Criar usuário.
Refresh Token.
Logar usuário.
Criar projetos.
Buscar projetos.
Atualizar projetos.
Deleter projetos.
```

### Instalação

```bash
$ git clone https://github.com/Luccasmarinho/orange-squad-23-back.git

$ npm install
```

### Rodando a aplicação

```bash
$ npx prisma migrate dev

$ npx prisma studio

$ npm run dev
```

### Rotas da API

| Method | Endpoint      | Responsibility          |
| ------ | ------------- | ----------------------- |
| POST   | /register     | Criar usuário           |
| POST   | /login        | Logar usuário           |
| GET    | /userData     | Buscar dados do usuário |
| POST   | /refreshToken | Refresh token           |
| POST   | /project      | Criar projeto           |
| GET    | /user/project | Buscar projeto          |
| PUT    | /project/:id  | Atualizar projeto       |
| DELETE | /project/:id  | Deletar projeto         |

### Enviroment

```bash
PORT=3000
DATABASE_URL=
SECRET_KEY=
```

---

#### English

# Hackathon [Orange Juice](https://tech.orangejuice.com.br/orangejuice) | Orange Portifolio

[Challenge Regulations](https://drive.google.com/file/d/1nU0Hve2W4tEQ2u1Xtc1tb0bVFTD1idIL/view)

The **Orange Portifolio** is a platform where users can add projects to their portfolio.

This project was developed for a challenge proposed by [FCamara](https://www.fcamara.com.br/) as a preparation for the Trainee Program that occurs periodically. This is the final stage of the official program, which consists of a hackathon lasting 15 days.

### Technologies Used

![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

### Features

```bash
Create user.
Refresh Token.
Log in user.
Create projects.
Search projects.
Update projects.
Delete projects.
```

### Install

```bash
$ git clone https://github.com/Luccasmarinho/orange-squad-23-back.git

$ npm install
```

### Running the App

```bash
$ npx prisma migrate dev

$ npx prisma studio

$ npm run dev
```

### API Endpoints

| Method | Endpoint      | Responsibility  |
| ------ | ------------- | --------------- |
| POST   | /register     | Create user     |
| POST   | /login        | Login user      |
| GET    | /userData     | Fetch user data |
| POST   | /refreshToken | Refresh token   |
| POST   | /project      | Create project  |
| GET    | /user/project | Fetch project   |
| PUT    | /project/:id  | Update project  |
| DELETE | /project/:id  | Delete project  |

### Enviroment

```bash
PORT=3000
DATABASE_URL=
SECRET_KEY=
```
