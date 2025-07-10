@echo off

rem Переход в каталог с проектом
cd /d "C:\Users\user\source\repos\web-database\web-database-backend"

rem Запуск dotnet run, для фона атрибут -WindowStyle Hidden после powershell
start powershell -Command "dotnet run"

rem Переход в каталог с front-end
cd /d "C:\Users\user\source\repos\web-database\web-database-frontend"

rem Запуск npm start, для фона атрибут -WindowStyle Hidden после powershell
start powershell -Command "npm run dev"

rem Запуск проекта в Visual Studio Code. Для запуска в VS команда "start /B VectorX.sln"
start "" /min cmd /c "code ."
rem start /b powershell -WindowStyle Hidden -Command "Start-Process 'code' -ArgumentList '.'"

rem Переход в корневую директорию проекта
start /b powershell -WindowStyle Hidden -Command "Start-Process '..\web-database.sln'"

rem Немедленно закрываем родительское окно CMD
exit
