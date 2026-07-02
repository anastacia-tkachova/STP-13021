# Запуск проєкту локально

## 1. Клонувати репозиторій
## 2. Встановити залежності

```bash
npm install
```

## 3. Запустити проєкт

```bash
npm run dev
```

---

## Рекомендований процес:

1. Оновити develop
2. Створити власну feature-гілку
3. Виконати задачу
4. Створити Pull Request у main
5. Після рев'ю зробити merge

Приклад назв гілок:

* feature/header
* feature/hero
* feature/about
* feature/how-to-play
* feature/gallery
* feature/faq
* feature/end
* feature/footer

Перед оновленням потрібно зберегти поточні зміни

## Крок 1. Переходимо в головну гілку

```bash
git checkout main
```


## Крок 2. Завантажуємо найсвіжіший код з GitHub

```bash
git pull origin main
```

Тепер на комп'ютері в гілці main лежить найактуальніша версія проєкту.

## Крок 3. Повертаємося у свою робочу гілку

```bash
git checkout назва-твоєї-гілки
```

## Крок 4. Вливаємо зміни з мейна до себе

```bash
git merge main
```

Під свою задачу створюємо окрему гілку

Працюємо тільки у своїй гілці
Після змін:

```bash
git add .
git commit -m "add header markup and burger menu"
git push -u origin feature/header
```

---

## Коротко
1. Оновити main
2. Створити свою feature/... гілку
3. Зробити задачу
4. Запушити
5. Створити PR у main
