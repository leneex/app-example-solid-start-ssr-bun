# SolidStart на Bun

Пример приложения [SolidStart](https://start.solidjs.com/) на [Bun](https://bun.sh/) с серверным рендерингом (SSR).

## Параметры деплоя

Выберите рантайм **Bun**, фреймворк **SolidStart** и тип приложения **backend**. Приложение запускается как сервер.

| Параметр | Значение |
| --- | --- |
| Фреймворк | SolidStart |
| Версия Bun | 1.2 |
| Тип приложения | `backend` |
| Команда сборки | `bun run build` |
| Команда запуска | `bun run start` |

SolidStart доступен на Bun. В каталоге API нет SolidStart для Deno.

## <a name="dev"></a>Локальный запуск проекта

```bash
# установка зависимостей
bun install

# запуск в режиме разработки
bun run dev

# сборка для продакшн
bun run build

# запуск собранного серверного приложения
bun run start
```
