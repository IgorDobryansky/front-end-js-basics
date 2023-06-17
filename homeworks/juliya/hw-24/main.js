// Завдання
// Написати реалізацію гри "Сапер" (http://minesweeper.odd.su/). 

// Технічні вимоги:
// Намалювати на екрані поле 8*8 (можна використовувати таблицю чи набір блоків).
// Згенерувати на полі випадковим чином 10 мін. Користувач не бачить, де вони знаходяться.
// Клік лівою кнопкою по осередку поля "відкриває" її вміст користувачеві.
// Якщо в цій клітинці знаходиться міна, гравець програв. У такому разі показати всі інші міни на полі. 
// Інші дії стають недоступними, можна лише розпочати нову гру.
// Якщо міни немає, показати цифру - скільки мін знаходиться поруч із цїєю клітинкою.
// Якщо клітинка порожня (поряд з нею немає жодної міни) - необхідно відкрити всі сусідні клітинки з цифрами.
// Клік правої кнопки миші встановлює або знімає із "закритої" клітинки прапорець міни.
// Після першого ходу над полем має з'являтися кнопка "Почати гру заново", 
// яка обнулюватиме попередній результат проходження та заново ініціалізуватиме поле.
// Над полем має показуватись кількість розставлених прапорців, та загальна кількість мін (наприклад 7 / 10).
// Необов'язкове завдання підвищеної складності
// При подвійному кліку на клітинку з цифрою - якщо навколо неї встановлено таку ж кількість прапорців, 
// що зазначено на цифрі цієї комірки, відкривати всі сусідні комірки.
// Додати користувачеві можливість самостійно вказувати розмір поля. 
// Кількість мін на полі можна вважати за формулою Кількість мін = кількість осередків / 6.