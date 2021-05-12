# leaflet
Try to make map leaflet with node js

### Technologies:
- Express
- ORM Sequelize
- JSON Web Token
- EJS

### Sequelize Initialize Database
npx sequelize-cli db:create

### Sequelize Create Table
npx sequelize-cli db:migrate

### Sequelize Create Column
npx sequelize-cli db:seed:all

### Start Server
node app.js

### POST /login

Request:
- data:
```json
{
  "email": "email@gmail.com",
  "password": "123456"
}

----- SUCCESS -----

Response:
- status: 200
- body:
  
```json
{
    "id": "email@gmail.com",
    "email": "123456",
    "access_token": "jwt string"
}
```
----- FAILED ------
Response:
- status: 400
- body:
- message: "invalid email or password"


