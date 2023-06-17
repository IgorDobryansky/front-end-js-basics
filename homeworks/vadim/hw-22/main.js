// Завдання
// Створити таблицю, при натисканні на клітинки якої вони змінюватимуть колір. 

// Технічні вимоги:
// Створити поле 30*30 з білих клітинок за допомогою елемента `````.
// При натисканні на білу клітинку вона повинна змінювати колір на чорний. 
// При натисканні на чорну клітинку вона повинна змінювати колір назад на білий.
// Сама таблиця повинна бути не вставлена у вихідний HTML-код, 
// а згенерована і додана в DOM сторінки за допомогою Javascript.
// Обработчик события click нужно повесить на всю таблицу. 
// События всплывают от элемента вверх по DOM дереву, 
// их все можно ловить с помощью одного обработчика событий на таблице, и в нем определять, 
// на какую из ячеек нажал пользователь.
// При клике на любое место документа вне таблицы, 
// все цвета клеточек должны поменяться на противоположные (подсказка: нужно поставить Event Listener на <body>).
// Чтобы поменять цвета всех клеточек сразу, не нужно обходить их в цикле. 
// Если помечать нажатые клетки определенным классом, 
// то перекрасить их все одновременно можно одним действием - поменяв класс на самой таблице.