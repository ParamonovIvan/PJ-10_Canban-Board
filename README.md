# Проект: «Канбан-доска на React.js»

### Основные задачи проекта:

+ Развернуть React-приложение с использованием create-react-app.

+ Следуя правилам компонентного подхода, разбить Канбан-доску на смысловые блоки, сверстать интерфейс.

+ Реализовать функционал, описанный ниже.

### Функциональные требования:

#### Исходное состояние

Исходная Канбан-доска должна иметь 4 блока с задачами:

+ Backlog (задачи, которые требуют уточнения перед тем, как брать их в работу);

+ Ready (задачи, которые могут быть взяты в работу);

+ In progress (задачи, которые уже в работе);

+ Finished (законченные задачи).

#### Реализация функционала

1. Добавление новой задачи

Первоначально каждая задача всегда размещается в бэклоге — для анализа. При клике на кнопку + Add card в карточке Backlog должно появляться поле ввода в конце списка, между последней задачей и кнопкой. При этом кнопка + Add card должна меняться на Submit. 

Алгоритм добавления задачи:
Нажали кнопку + Add card → появилось поле для редактирования → ввели название → нажали кнопку Submit — задача появилась в бэклоге (при условии, что название введено).

Нельзя добавить в список задачу с отсутствующим названием. Если при нажатии Submit поле с названием пустое, в список ничего не добавляется.

![fr_kanban_1](https://github.com/ParamonovIvan/PJ-10_Canban-Board/assets/131868856/11eea8ea-c41d-438f-93b4-4e506230a9c1)


2. Перемещение задач между списками

Задачи для списка Ready берутся из Backlog. При клике на + Add card в карточке Ready, в конце списка появляется дропдаун с задачами из списка Backlog. После клика на задачу из дропдауна она должна появиться в списке Ready последней, при этом эта задача должна быть удалена из Backlog.

Если Backlog пустой (в списке нет задач), то кнопка + Add card в списке Ready должна быть неактивна, то есть при клике на неё ничего не происходит. Неактивной кнопке нужно назначить атрибут disabled. Активная и неактивная кнопки должны отличаться визуально: например, цветом и отсутствием cursor: pointer.

Остальные списки (In progress и Finished) работают по тому же принципу. Задачи для списка In progress берутся из Ready, а задачи для списка Finished — из In progress.

![fr_kanban_2](https://github.com/ParamonovIvan/PJ-10_Canban-Board/assets/131868856/462d60b6-7612-4c5d-97b5-cf8155bc7081)

3. Сохранение внесённых изменений
   
Любые изменения, внесенные в приложение (добавление новых задач, перемещение задач между списками, изменение описания задачи), должны сохраняться в localStorage.

При загрузке приложения должны отображаться задачи, записанные в localStorage (или пустые списки, если в localStorage ничего нет). Если внести изменения и обновить страницу, то изменения должны сохраниться.

4. Детальная страница задачи
   
Добавить возможность перехода на отдельную страницу какой-либо задачи в списке при клике на её заголовок.

![fr_kanban_3](https://github.com/ParamonovIvan/PJ-10_Canban-Board/assets/131868856/212ec2be-6166-4135-9d85-6cf952d4eeb9)

Страница с задачей должна иметь URL, отличный от того, который используется для главной страницы. URL должен содержать id задачи. Пример: localhost:3000/tasks/12345 откроет страницу задачи с id 12345.

На детальной странице задачи должны быть выведены название задачи и её описание. Если описания нет, вывести вместо него фразу "This task has no description".

Поле с описанием должно быть редактируемым. Реализовать эту функцию можно как угодно. Например, добавить возможность редактирования при клике на текст или сделать специальную кнопку, которая позволит отредактировать описание.

При клике на крестик в правом верхнем углу осуществляется переход обратно на главную страницу.

5. Вывод количества задач в футер
   
В футере должно быть выведено количество активных и завершенных задач.

![fr_kanban_4](https://github.com/ParamonovIvan/PJ-10_Canban-Board/assets/131868856/da839269-0a44-4118-b00b-6f13a8211453)

+ Active tasks — отображает количество задач в списке Backlog.

+ Finished tasks — отображает количество задач в списке Finished.

6. Выпадающее меню пользователя

Реализовать выпадающий список, который будет появляться при клике на блок в правом верхнем углу страницы — аватар пользователя со стрелкой.

![fr_kanban_5](https://github.com/ParamonovIvan/PJ-10_Canban-Board/assets/131868856/5ddc11f4-ad67-44be-993d-ce56f493e477)

Стрелочка рядом с аватаром должна смотреть вверх, когда меню открыто, и вниз, когда меню закрыто.

При клике на пункты меню ничего не происходит, но нужно добавить выделение пунктов при наведении курсора (например, поменять цвет текста или добавить подчеркивание).

### Требования к React

+ Интерфейс должен быть поделён на компоненты. Перед началом работы хорошенько обдумать, какие компоненты будут использовать. Деление на компоненты должно быть логичным и оправданным.

+ После определия с делением на компоненты, подумать о том, как верно организовать файловую структуру.

+ Следовать принципам модульности (используйте export, import).

+ Использовать Typescript для описания типов данных.

+ Использовать Synthetic events для работы с событиями.

+ Для вывода разного состояния элементов в зависимости от действий пользователя (пример: раскрытое/свернутое меню пользователя) использовать условный рендеринг.

+ Для реализации отдельных страниц для каждой задачи и перехода между страницами использовать библиотеку react-router.

+ Для ключевых React-компонентов необходимо добавить тесты.

+ При написании кода стараться следовать принципам KISS (Keep It Short and Simple — не усложняй) и DRY (Don’t Repeat Yourself — не повторяйся).

### Требования к верстке и CSS

+ Вёрстка должна соответствовать макету. Добиваться Pixel Perfect соответствия не обязательно, но основные моменты должны быть соблюдены: цветовая гамма, шрифты, размеры, отступы.

+ Приложение должно корректно отображаться и на мобильных устройствах.

+ Соблюдать семантическую вёрстку. В приложении должны присутствовать разделы ``` <header> ```, ``` <main> ``` и ``` <footer> ```. Кнопки должна быть реализованы элементом ``` <button> ```, элементы дропдауна — списком ``` <select> ``` и так далее.

+ При наведении курсора на любые кликабельные элементы должен появляться cursor: pointer.

+ Учитывать состояния кнопки + Add card — активная и неактивная.

+ Если кнопка активна, её внешний вид должен соответствовать макету. При наведении она должна подсвечиваться (менять цвет), а курсор должен меняться на pointer.

+ Если кнопка неактивна (назначен атрибут disabled), её цвет должен отличаться от активного состояния, кнопка не должна реагировать на наведение курсора (цвет остаётся таким же, не появляется курсор pointer).

+ Можно использовать любой вариант подключения стилей на усмотрение: общий файл стилей проекта, CSS-модули или специальные React-библиотеки для стилизации компонентов (например, Styled Components).

+ Использовать селекторы по тегу и id для задания стилей нельзя. Использовать классы.

### Иснтрукция для разработки и тестирования

+ npm

``` npm i
npm run build
npm run start
```
+ yarn

``` yarn
yarn run start
```

### Результат работы:
#### Страница канбан-доски

![Laptop](https://github.com/ParamonovIvan/PJ-10_Canban-Board/assets/131868856/52891e11-008f-439e-a29e-339d1efc5de6)

