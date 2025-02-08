# Chat Message API (NestJS Demo)  

## 📌 Description  

This is a **demo API** built with [NestJS](https://nestjs.com/) to demonstrate how easily we can structure and develop a backend application using this framework.  

The API focuses on the **chat-message** domain, implementing all necessary endpoints and functionalities. The **chat** and **user** domains exist only as placeholders (**dummy data**) to support the chat-message feature.  

## 🚀 Features  

- 📩 **CRUD operations** for chat messages (create, get, update, delete).  
- 🏗️ **Modular architecture** using NestJS controllers, services, DTOs, and TypeORM.  
- 🛠️ **Dependency injection** and **repository pattern** for a clean and scalable codebase.  
- ✅ **Unit tests** for service and controller using Jest.  

## 🎯 Purpose  

This project is **not a full-fledged chat application** but a demonstration of how simple it is to build a well-structured API with NestJS.  

---  

## Installation

```bash
$ npm install
```
## Before running localy

```bash
# .env config
$ create .env file based on .env.sample and setup variables

# start database (docker required)
$ npm run start:dev:deps

# build aplication
$ npm run build

# run migrations
$ npm run migration:run
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
