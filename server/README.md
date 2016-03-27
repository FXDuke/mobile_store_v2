#Install server
- Установка монго с официального сайта в С:\MongoDb
- Создвть папку C:\MongoDb\data\db
- Запуск монго сервера:
    - Перейти в папку  С:\MongoDb\Server\3.2\bin открываем консоль CMD
    - Из консоли запускаем mongod --dbpath C:\MongoDb\data\db - команда запуска выполняется
    каждый раз перед стартом приложения.
    !!! Консоль не закрываем
- делаем npm i в папку server
- Переходим в server/database
- Выполняем команду node export.script.js
- Для проверки на маке\линукс mongo mobilestorev2-dev
    >db.phones.find().pretty()
     выведется огромный json