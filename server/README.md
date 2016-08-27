# Install server
- Установка монго с официального сайта в С:\MongoDb
- Создвть папку C:\MongoDb\data\db
- Запуск монго сервера:
    - Перейти в папку  С:\MongoDb\Server\3.2\bin открываем консоль CMD
    - Из консоли запускаем mongod --dbpath C:\MongoDb\data\db - команда запуска выполняется
    каждый раз перед стартом приложения.
    !!! Консоль не закрываем
- в консоле CMD заходим в папку "mobile_store_v2-wa_21_06\server" и выполняем команду "npm i"  
- в консоле CMD заходим в папку "mobile_store_v2-wa_21_06\client" и выполняем команду "npm i" и команду "bower install"  

- Переходим в server/database
- Выполняем команду node export.script.js, comments.export.js
- Для проверки на маке\линукс mongo mobilestorev2-dev
    >db.phones.find().pretty()
     выведется огромный json

   на windows заходим   С:\MongoDb\Server\3.2\bin выполняем команду mongo mobilestorev2-dev в консоли

# Запуск сервера
- открываем консоль CMD, заходим в папку "С:\MongoDb\Server\3.2\bin" и выполняем команду "mongod --dbpath C:\MongoDb\data\db" (Консоль не закрываем)  
- открываем вторую консоль CMD, заходим в папку "mobile_store_v2-wa_21_06\server" и выполняем команду "npm start" (Консоль не закрываем)  
- открываем третью консоль CMD, заходим в папку "mobile_store_v2-wa_21_06\client" и выполняем команду "gulp serve" (Консоль не закрываем)  

# Запросы к серверу
Получение каталога телефонов GET http://localhost:4001/api/v1/phones
Плучение деталей для телефона  GET http://localhost:4001/api/v1/phones/:id
Получение комментариев к телефону GET http://localhost:4001/api/v1/comments/:id
Добавление комментария к телефону POST http://localhost:4001/api/v1/comments/
body: {
          "item_id": "5706d89c40fe4998057b4fe9",
          "text": "comment for comment asdasdasdasdasdasdasd",
          "author": "test authordfsdfsdfdsf",
          "item_rating": 1
      }

# Шаблоны
https://wireframe.cc/PfAd8i - детали  
https://wireframe.cc/OCPbOo  - главная
