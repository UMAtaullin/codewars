## Структура коммитов

Каждый коммит должен быть информативным и описывать изменения, которые вы внесли. Вот несколько примеров, как можно оформить коммиты для разных подходов к решению вашей задачи.

### 1. Первый коммит: Начальная версия решения

```plaintext
feat: Initial implementation of findSmallestInt function

- Implemented a function to find the smallest integer in an array.
- The function iterates through the array and compares each element.
```

### 2. Второй коммит: Исправление ошибки в цикле

```plaintext
fix: Corrected loop condition in findSmallestInt function

- Changed loop condition from `i <= arr.length` to `i < arr.length` to prevent accessing an undefined element.
```

### 3. Третий коммит: Оптимизация решения

```plaintext
refactor: Optimize findSmallestInt using Math.min

- Refactored the function to use Math.min for a more concise solution.
- This reduces the complexity and improves readability.
```

### 4. Четвертый коммит: Добавление тестов

```plaintext
test: Add unit tests for findSmallestInt function

- Added unit tests to verify the correctness of the findSmallestInt function.
- Included various test cases with positive, negative, and mixed integers.
```

### 5. Пятый коммит: Документация

```plaintext
docs: Update README with usage examples for findSmallestInt

- Added example usage and expected output for the findSmallestInt function in the README file.
```

## Рекомендации по написанию коммитов

1. **Четкость и краткость**: Каждый коммит должен быть понятным и лаконичным. Используйте активные глаголы и избегайте избыточных слов.
2. **Структурированность**: Начинайте с типа изменения (например, `feat`, `fix`, `refactor`, `test`, `docs`), чтобы быстро понять суть коммита.
3. **Содержимое**: В описании коммита укажите, что было сделано, почему это было сделано и, если необходимо, как это было сделано.

