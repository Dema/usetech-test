# usetech-test

## Как запускать
Необходимо установить следующее:

- NodeJS
- Grunt ```npm install -g grunt grunt-cli```
- Bower ```npm install -g bower```
- Compass ```gem install compass```

Потом выполнить :
```shell
npm install & bower install
```
Это установит все необходимые зависимости.

Далее, если надо сразу запустить и посмотреть результат, то:
```shell
grunt serve
```

Если надо сгенерировать production вариант, то:
```shell
grunt
```

После этого приложение будет находиться в каталоге ```dist```
