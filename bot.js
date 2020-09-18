const Telegraf = require('telegraf');

const bot = new Telegraf('');

require('https').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
    res.end('')
  });

//const PORT = process.env.PORT || 8080;

const StartText =`
Я - Гитара Бот, и я 

— Помогу Вам научиться играть на гитаре
— Дам Вам все необходимые инструменты для практики гитарной техники
— Научу Вас играть несколько хороших песен

и всё это - только малая часть моих возможностей!

Чтобы начать обучение, выберите интересующую Вас тему в нижнем меню.
 
Или воспользуйтесь кнопкой "Помощь" или введите в чате команду /help, чтобы узнать больше о моих возможностях и полезных функциях.
`;

bot.use((ctx, next) => {
    if (ctx.updateSubTypes[0] == "text") {
        console.log(ctx.from.username + " написал: " + ctx.message.text);
    } else {
        console.log(ctx.from.username + " отправил: " + ctx.updateSubTypes[0]);
    }
    next();
})

bot.start((ctx) => {
console.log(ctx.from);
    bot.telegram.sendMessage(ctx.chat.id, ctx.from.first_name + ", Добро пожаловать!", {
        reply_markup: {  
            keyboard: [
                [
                    { text: "Аккорды" },
                    { text: "Бои и переборы" }
                ],
                [
                    { text: "Разбор песен" },
                    { text: "Помощь" }
                ],
                [
                    { text: "К началу" },
                    { text: "Написать нам" }
                ]
            ],
            resize_keyboard: true,
        }
    })
    ctx.reply(StartText);
})

const AllAboutAccords =`
Раздел "Аккорды" позволяет Вам найти любой основной гитарный аккорд.
После нажатия на кнопку "Аккорды" либо после вызова в чате бота команды /accord, перед Вами появится меню с 7-ю видами аккордов.
• После нажатия на один из семи типов аккордов, Вы увидите доступный список команд для каждого отдельного аккорда и его полное название.
• Если вы хотите узнать больше об аккорде, нажмите на соответствующее название, либо напишите в чате соответствующую ему комманду (например, /A).
После нажатия перед Вами окажется изображение с выбранным Вами аккордом (название аккорда расположено вверху изображения).
— Каждая горизонтальная линия обозначает номер струны на гитаре от 1 до 6 (соответсвующие цифры расположены справа на изображении), от нижней (самой тонкой) до верхней басовой (самой толстой).
— Вертикальные линии разделяют гитарные лады. Цифры внизу изображения обозначают номер лада (1 - первый лад, 2 - второй лад и т.д.).
— Зеленые круги обозначают какие струны необходимо зажать пальцами, чтобы воспроизвести данный аккорд.
Чтобы вернуться назад к разделу выбора аккордов нажмите на кнопку "Назад к аккордам".
`;

const AllAboutBoi =`
Раздел "Бои и переборы" позволяет Вам найти и изучить основные гитарные бои и переборы.
После нажатия на кнопку "Бои и переборы" или после вызова в чате комманды /boi, перед Вами появится меню, из которого вы сможете перейти к интересующему вас разделу ("Бои" или "Переборы").
• При нажатии на кнопку "Бои" перед вами появится меню с 8-ю основными гитарными боями. Нажмите на название интересующего Вас боя, чтобы более подробно ознакомиться с ним.
После нажатия на один из 8-ми аккордов перед Вами появится изображение, показывающее как играть данный бой (название боя расположено вверху изображения).
— Стрелка "вниз" обозначает удар по струнам сверху-вниз одним пальцем.
— Стрелка "вверх" обозначает удар по струнам снизу-вверх одним пальцем.
— Стрелка со звездочкой (*) обозначает удар по струнам всеми пальцами с их последующим заглушением ладонью.
— "Маленькая" стрелка обозначает, что нужно сыграть только определенные струны (номера струн расположены справа на изображении от от 1 до 6, от нижней (самой тонкой) до верхней басовой (самой толстой)).
— Надпись "Бас" обозначает, что необходимо сыграть только одну определенную струну.
— Буква "Р" рядом со стрелкой обозначает "расгеадо", т.е. необходимо не просто ударить по струнам, а ударить по струнам "веером" - всеми пальцами руки быстро по очереди.
Для того чтобы вернуться назад в раздел "Бои и переборы" нажмите на кнопку "Назад".
• При нажатии на кнопку "Переборы" перед вами появится меню с 4-мя основными гитарными переборами.
Нажмите на название интересующего вас перебора, чтобы больше узнать о том, как он играется.
После нажатия на один из переборов перед Вами появится изображения с информацией о том, как играется данный перебор (название перебора расположено вверху изображения).
— Каждая горизонтальная линия обозначает номер струны на гитаре от 1 до 6 (соответсвующие цифры расположены справа на изображении), от нижней (самой тонкой) до верхней басовой (самой толстой).
— Каждый кружок обозначает какие струны необходимо сыграть (слева-направо) чтобы воспроизвести данный перебор.
— Красный кружок обозначает струну, которую небоходимо играть большим пальцем.
— Полупрозрачный кружок обозначает, что данную струну можно как играть, так и не играть.
— Если кружки находятся на одной вертикальной линии - это значит, что соответствующие струны необходимо дернуть одновременно.
Для того чтобы вернуться назад в раздел "Бои и переборы" нажмите на кнопку "Назад".
`;

const AllAboutSongs =`
Раздел "Разбор песен" позволяет Вам найти и изучить разбор известных и популярных песен.
После нажатия на кпоку "Разбор песен" или после выполнения в чате команды /razbor перед Вами появится меню из которого вы сможете перейти:
• либо к списку разобранных песен с их описанием (удобно, чтобы найти песню соответствующую Вашему текущему уровню игры на гитаре), 
• либо к краткому списку всех песен (рекомендуется, если Вы просто хотите быстро найти интересующую вас песню).
После нажатие на кнопку "Список песен с описанием" вы попадаете на первую страницу со списком разобранных песен.
Каждая песня содержит следующую информацию:
— Название (Группа (исполнитель) - Название песни).
— Аккорды, которые потребуется во время игры.
— Бой или перебор, с помощью которого играется сама музыка для песни.
Чтобы перейти к песне нажмите на команду (или напишите ее в чате бота) /songНОМЕР_ПЕСНИ, находящуюся под интересующей вас песней.
Чтобы перейти к следующем странице, нажмите на соответствующий номер в конце списка. Текущая страница обозначается знаками ">" и "<".
После нажатие на кнопку "Краткий список всех песен" вы попадаете на страницу со всеми разобранными песнями.
Если вы хотите быстро найти какую-то песню, тогда, находясь в данном разделе, нажмите на 3 точки в верхней части экрана (рядом с названием бота), нажмите "Поиск" и введите интересующее вас название.
Чтобы перейти к песне нажмите на команду (или напишите ее в чате бота) /songНОМЕР_ПЕСНИ, находящуюся рядом с интересующей вас песней.
После нажатия на одну из песен, Вы попадаете на страницу с ее разбором.
— Аккорды над словами обозначают, когда необходимо данный аккорд сыграть обозначенным боем.
— Если вы забыли как играется тот или иной аккорд или бой - просто нажмите на его название. Перед вами появится изображение-напоминание.
— Чтобы вернуться назад на страницу со списком песен - нажмите на кнопку "Назад к списку песен".
`;

const ContactMenu =`
Если у Вас есть какие-нибудь вопросы, пожелания или предложениями, Вы всегда можете связаться с разработчиком данного бота.
Адресс для связи: @artyomsyomin
`;

const MainMenuMessage =`
Добро пожаловать в раздел "Помощь".
Здесь Вы можете найти справку по всем основным разделам и более подробно ознакомиться со всеми основными функциями и возможностями данного бота. 
(Если Вы не видите меню с основными разделами, нажмите на квадратик с 4-мя маленькими квадратиками внизу в окне для ввода текста, рядом с иконкой "скрепка").
О чем вы хотите узнать больше?
`;

function HelpMenu(ctx) {
    bot.telegram.sendMessage(ctx.chat.id, MainMenuMessage,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Об "Аккордах"', callback_data: 'aboutAccords' },
                    { text: 'О "Боях и переборах"', callback_data: 'aboutBoi' }  
                ],
                [
                    { text: 'О "Разборе песен"', callback_data: 'aboutSongs' }
                ],
                [
                    { text: 'Доступные команды', callback_data: 'ShowAllCommands' },
                ]
            ]
        }
    })
}

bot.action('aboutAccords', ctx => {
    ctx.deleteMessage();
    ctx.answerCbQuery('Справка о разделе "Аккорды"');
    bot.telegram.sendMessage(ctx.chat.id, AllAboutAccords,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к разделу "Помощь"', callback_data: 'BackToHelpMenu' }
                ]
            ]
        }
    })
})

bot.action('aboutBoi', ctx => {
    ctx.deleteMessage();
    ctx.answerCbQuery('Справка о разделе "Бои и переборы"');
    bot.telegram.sendMessage(ctx.chat.id, AllAboutBoi,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к разделу "Помощь"', callback_data: 'BackToHelpMenu' }
                ]
            ]
        }
    })
})

bot.action('aboutSongs', ctx => {
    ctx.deleteMessage();
    ctx.answerCbQuery('Справка о разделе "Разбор песен"');
    bot.telegram.sendMessage(ctx.chat.id, AllAboutSongs,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к разделу "Помощь"', callback_data: 'BackToHelpMenu' }
                ]
            ]
        }
    })
})

bot.action('ShowAllCommands', ctx => {
    ctx.deleteMessage();
    ctx.answerCbQuery('Список освновных комманд');
    bot.telegram.sendMessage(ctx.chat.id, helpMessageCommands,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к разделу "Помощь"', callback_data: 'BackToHelpMenu' }
                ]
            ]
        }
    })
})

bot.action('BackToHelpMenu', ctx => {
    ctx.deleteMessage();
    HelpMenu(ctx);
})

bot.hears('Аккорды', ctx => {
    AccordsMenu(ctx);
})

bot.hears('Бои и переборы', ctx => {
    BoiPereborMenu(ctx);
})

bot.hears('Разбор песен', ctx => {
    SongsMenu(ctx);
})

bot.hears('Помощь', ctx => {
    HelpMenu(ctx);
})

bot.hears('К началу', ctx => {
    ctx.reply(StartText);
})

bot.hears('Написать нам', ctx => {
    ctx.reply(ContactMenu);
})

const helpMessageCommands =`
Доступные команды для доступа к основным разделам бота:

/start - запустить бот 
/help - описание функций и возможностей бота 
/accord - список аккордов
/boi - список боев и переборов
/razbor - разбор песен
/contact - связь с разработчиком
`;

bot.command(["help"], ctx => {
    HelpMenu(ctx);
})

bot.command(["accord"], ctx => {
    AccordsMenu(ctx);
})

bot.command(["boi"], ctx => {
    BoiPereborMenu(ctx);
})

bot.command(["razbor"], ctx => {
    SongsMenu(ctx);
})

bot.command(["contact"], ctx => {
    ctx.reply(ContactMenu);
})

bot.help((ctx) => {
    ctx.reply(helpMessageComands);
})

bot.command(["A", "a"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBLl6TJXYZWlG6FQ98iGIE3x6wfBAOAAKtrjEbH4CYSNGXvsm6kPXuFg1xkS4AAwEAAwIAA20AA-sGAgABGAQ");
})

bot.command(["Am", "am", "AM"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBRF6TJ2c7zCGh3y6VyPhCkN4JL_HdAAKxrjEbH4CYSEfphxr8074pyMd-kS4AAwEAAwIAA3gAA7QJAgABGAQ");
})

bot.command(["Amaj", "amaj", "AMAJ"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBRV6TJ5L7cW15rhtQAb6Iig7yj5NEAAKyrjEbH4CYSE52nKKL8mepnCq8ki4AAwEAAwIAA3gAA-zGAAIYBA");
})    

bot.command(["Asharp", "asharp", "ASHARP"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBRl6TJ6r6dhBS25OZOexXeqnajj9dAAKzrjEbH4CYSF-dzrefkdsMjZFykS4AAwEAAwIAA3gAA70GAgABGAQ");
})    

bot.command(["Amaj7", "amaj7", "AMAJ7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBR16TJ7wcE-6dU-j3XVKTOu56Ozu5AAK0rjEbH4CYSG2ZSZHP8ZwZk7vAki4AAwEAAwIAA3gAA43GAAIYBA");
})  

bot.command(["Asus4", "asus4", "ASUS4"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBSF6TJ9o7YCfhcztiYuqs0YfBdsdrAAK1rjEbH4CYSGpT7hk_tcgPewHBDgAEAQADAgADeAAD7xAFAAEYBA");
})  

bot.command(["A6", "a6"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBSV6TJ_Loo4I8ktY7EEHpSShLRlBkAAK2rjEbH4CYSJ3i3grZUYrg-vLADgAEAQADAgADeAADNAoFAAEYBA");
})  

bot.command(["Am6", "am6", "AM6"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBSl6TKAK5MEy3ZUhSryQUyUsHakm4AAK3rjEbH4CYSGJky5MLzyBOlQ_okS4AAwEAAwIAA3gAA2KxAAIYBA");
})  

bot.command(["A7", "a7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBS16TKA5V0_OYAAGmA7qpFwxwBZtnwAACuK4xGx-AmEiW5-FZ8LOI4kq_wg8ABAEAAwIAA3gAA5zEBQABGAQ");
})  

bot.command(["Am7", "am7", "AM7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBTF6TKBo-4NxioZACOb2qSpMsAUCzAAK5rjEbH4CYSO5cLyEL6ZJSTfjADgAEAQADAgADeAADdw8FAAEYBA");
})  

bot.command(["Asharp7", "asharp7", "ASHARP7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBTV6TKCakUNFWQiAT5WrVl7SNUnX_AAK6rjEbH4CYSHYD3Ye0pXPqiyV3kS4AAwEAAwIAA3gAA60LAgABGAQ");
})  

bot.command(["Adim7", "adim7", "ADIM7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBTl6TKDSgGbK0V7ccDZ-6eV5bJxhCAAK7rjEbH4CYSA0QWL7UAAF-w03_wA4ABAEAAwIAA3gAAwwDBQABGAQ");
})  

bot.command(["A7sus4", "a7sus4", "A7SUS4"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBT16TKEJXZAfznUHoNTwOVyBgQ3vLAAK8rjEbH4CYSHFIho2n3HCaqyrukS4AAwEAAwIAA3gAA-C0AAIYBA");
})  

bot.command(["A76", "a76"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBUF6TKFC35MMfQoAt92pd5tmIFJmEAAK9rjEbH4CYSGOYCuaFhzECtrWDki4AAwEAAwIAA3gAA2QsAAIYBA");
})  

bot.command(["A9", "a9"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBUV6TKFyOetZHMW4AAbpbQIiQMNTOWgACvq4xGx-AmEiiNRfU_LsKDlsPBZIuAAMBAAMCAAN4AAOwLQACGAQ");
})  

bot.command(["Am9", "am9", "AM9"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBUl6TKGqKB432j3ICYZhlgxBNIDNlAAK_rjEbH4CYSPtvMPLUyDl9pHbBDwAEAQADAgADeAADy58GAAEYBA");
})  

bot.command(["C", "c"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBU16TKIN05Rmx0pjtc8CireLQKH6iAALArjEbH4CYSBvXY5ZkJNlOtWfoki4AAwEAAwIAA3gAAw8tAAIYBA");
})  

bot.command(["Cm", "cm", "CM"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBVF6TKJgH6lDkp5mFB4u8Jb91dlN6AALBrjEbH4CYSCFY-QfUmuj7qsHCDwAEAQADAgADeAADCcUFAAEYBA");
})  

bot.command(["Cmaj", "cmaj", "CMAJ"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBVV6TKKVf57wEjU7mD3DGwZSO2SK5AALCrjEbH4CYSL6vONLDLAJjr5JykS4AAwEAAwIAA3gAA0QGAgABGAQ");
})  

bot.command(["Csharp", "csharp", "CSHARP"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBVl6TKLNkVntMu9U6L0tcXDsZY5JsAALDrjEbH4CYSITPmw1I801eIznxkS4AAwEAAwIAA3gAA8ezAAIYBA");
})  

bot.command(["Csharpm", "csharpm", "CSHARPM"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBV16TKMQbB8MmFaGEsNitrULCGi5wAALErjEbH4CYSGoZxUKOkGRk6nTrki4AAwEAAwIAA3gAA9wrAAIYBA");
}) 

bot.command(["Csharpmaj", "csharpmaj", "CSHARPMAJ"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBWF6TKNe0pI2kfPZdXVwelT4H_3cwAALFrjEbH4CYSHup-oEM1mHZjaTCDwAEAQADAgADeAAD06AGAAEYBA");
}) 

bot.command(["Cmaj7", "cmaj7", "CMAJ7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBWV6TKOIw_Qx5UvESqCJUU41MOjEbAALGrjEbH4CYSEmbqTWVb0x7QOdKkS4AAwEAAwIAA3gAA31FAgABGAQ");
}) 

bot.command(["Csharpmaj7", "csharpmaj7", "CSHARPMAJ7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBWl6TKPHL2qu8KqtvP0C0K0w9qBFbAALHrjEbH4CYSKXGC0Iqf0kYnNjGki4AAwEAAwIAA3gAA8TFAAIYBA");
}) 

bot.command(["Csus4", "csus4", "CSUS4"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBW16TKPwEdDkell2BJNgvdx0ulT4CAALIrjEbH4CYSIp8bALweS2vaP7ADgAEAQADAgADeAADIwkFAAEYBA");
}) 

bot.command(["Csharpsus4", "csharpsus4", "CSHARPSUS4"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBXF6TKQcFk_90PP6qEeJ3QeIzwAiTAALJrjEbH4CYSAABejO4NmAUQYcp7pEuAAMBAAMCAAN4AAM_tAACGAQ");
}) 

bot.command(["C6", "c6"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBXV6TKRhuejWfHEdrvpz1dUkiMjXzAALKrjEbH4CYSHfx2F3iNF1EUbHCDwAEAQADAgADeAADB74FAAEYBA");
}) 

bot.command(["Cm6", "cm6", "CM6"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBXl6TKSKrHTYsEZh_P1OdVfLmUBrvAALLrjEbH4CYSDiodEIz-diCUOLmki4AAwEAAwIAA3gAAyEsAAIYBA");
}) 

bot.command(["Csharp6", "csharp6", "CSHARP6"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBX16TKTUMUNxY6RnOFDoe7dIpubv-AALMrjEbH4CYSDLCPeuGPpRohPjADgAEAQADAgADeAADEQ0FAAEYBA");
}) 

bot.command(["Csharpm6", "csharpm6", "CSHARPM6"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBYF6TKT_u4vd95KIMOz7w_-WJhN3IAALNrjEbH4CYSK2W9wgkxvfUDAXlkS4AAwEAAwIAA3gAA_-2AAIYBA");
}) 

bot.command(["C7", "c7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBYV6TKUrbAw2EiarI87MHFMDgyLXjAALOrjEbH4CYSP-K41bfUOGaBiTBDgAEAQADAgADeAADggYFAAEYBA");
}) 

bot.command(["Cm7", "cm7", "CM7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBYl6TKVL9420S70NzovBysSkKZI4EAALPrjEbH4CYSCD7GsnVZbJvTFXLDgAEAQADAgADeAADPWMEAAEYBA");
}) 

bot.command(["Csharp7", "csharp7", "CSHARP7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBY16TKV0cM4JAXqUWSl6t873W9tWTAALQrjEbH4CYSPrlJMrXZBERd77CDwAEAQADAgADeAAD0MUFAAEYBA");
}) 

bot.command(["Csharpm7", "csharpm7", "CSHARPM7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBZF6TKWg0G70KroXiiw4gSxjQXw6AAALRrjEbH4CYSK4U4OiykGHwnl9JkS4AAwEAAwIAA3gAA7RKAgABGAQ");
}) 

bot.command(["Cdim7", "cdim7", "CDIM7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBZV6TKXT7kLkTT_OcCYvyuMPTeOblAALSrjEbH4CYSHM1VxXC9qMPG_NNkS4AAwEAAwIAA3gAA5RJAgABGAQ");
}) 

bot.command(["Csharpdim7", "csharpdim7", "CSHARPDIM7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBZl6TKYBC7WgSsjusVjpUH7iM9C6kAALTrjEbH4CYSD4Di1PTLljGRgABwQ4ABAEAAwIAA3gAAzIQBQABGAQ");
}) 

bot.command(["C7sus4", "c7sus4", "C7SUS4"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBZ16TKZBkBwLshE7GgIKjbHk8mBRpAALUrjEbH4CYSE1ATLYH5ZH4asnCDwAEAQADAgADeAADt78FAAEYBA");
}) 

bot.command(["Csharp7sus4", "csharp7sus4", "CSHARP7SUS4"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBaF6TKZkIog_s5fxPqW_MSXwNiW8fAALVrjEbH4CYSOEZlmXS24wjx2bLDgAEAQADAgADeAADrGkEAAEYBA");
}) 

bot.command(["C76", "c76"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBaV6TKaxrcPSW1bDKwhm2HNb6lD0kAALWrjEbH4CYSOfeSHiRBXBPUBwIki4AAwEAAwIAA3gAAyUtAAIYBA");
}) 

bot.command(["Csharp76", "csharp76", "CSHARP76"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBal6TKbaMUtOzHb_j-OF2cGtV1r-kAALXrjEbH4CYSAjps46s1lNaR2voki4AAwEAAwIAA3gAA8QsAAIYBA");
}) 

bot.command(["C9", "c9"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBa16TKcQEvFx1x7L6TLQ9V4fni8-qAALYrjEbH4CYSPFYez7mj0B1OPP-kS4AAwEAAwIAA3gAAzMsAAIYBA");
}) 

bot.command(["Cm9", "cm9", "CM9"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBbF6TKc3k_i1zTSA9xkMkUA_x_CK-AALZrjEbH4CYSDGFJpflsgtWtKXCDwAEAQADAgADeAADJZwGAAEYBA");
}) 

bot.command(["Csharp9", "csharp9", "CSHARP9"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBbV6TKds0zOEhP2i1Wz4WPcmMVX7XAALarjEbH4CYSOlAl-4kzekCi0PCki4AAwEAAwIAA3gAA_bGAAIYBA");
}) 

bot.command(["Csharpm9", "csharpm9", "CSHARPM9"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBbl6TKeS-jvU6yVgGLvb5hbE3738xAALbrjEbH4CYSAHs4DtuyDhtEh7rkS4AAwEAAwIAA3gAAxq0AAIYBA");
}) 

bot.command(["D", "d"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBb16TKfzSdZJUUsjZ6a0jVvS1x77XAALcrjEbH4CYSKC14eSBv7on4gnBDgAEAQADAgADeAADhwwFAAEYBA");
})  

bot.command(["Dm", "dm", "DM"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBcF6TKgvl-a_26OQVTD12ZQ5u9K_-AALdrjEbH4CYSKc70vsG1xauFXzjkS4AAwEAAwIAA3gAA7OyAAIYBA");
})  

bot.command(["Dmaj", "dmaj", "DMAJ"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBcV6TKhYNdGddVbWuqi4MEcXCz_pOAALerjEbH4CYSIOFFf_RGWviNx9_ki4AAwEAAwIAA3gAA8ErAAIYBA");
})  

bot.command(["Dsharp", "dsharp", "DSHARP"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBcl6TKif2g-fo6FN9KOEeaNEECwIFAALfrjEbH4CYSCpRWRmaAs5VRW3BDwAEAQADAgADeAAD9ZwGAAEYBA");
})  

bot.command(["Dsharpm", "dsharpm", "DSHARPM"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBc16TKjag-MYPvLqSNDKn1YMbUIN3AALgrjEbH4CYSP1Bw7P_7EBa8cnDki4AAwEAAwIAA3gAA7TIAAIYBA");
}) 

bot.command(["Dsharpmaj", "dsharpmaj", "DSHARPMAJ"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBdF6TKkPGkaYEUS2irXTxE_2xiD-sAALhrjEbH4CYSG56vAmlyWqrorzAki4AAwEAAwIAA3gAAwvFAAIYBA");
}) 

bot.command(["Dmaj7", "dmaj7", "DMAJ7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBdV6TKk3Ty6bF0uhWTZB1pOOMlUB3AALirjEbH4CYSBQ4jKH9tk-3Rxu5ki4AAwEAAwIAA3gAA8bHAAIYBA");
}) 

bot.command(["Dsharpmaj7", "dsharpmaj7", "DSHARPMAJ7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBdl6TKlZCv0zO1pUSLqqvyfoc6g1mAALjrjEbH4CYSFzxkCN3Au8sD_fhkS4AAwEAAwIAA3gAA360AAIYBA");
}) 

bot.command(["Ddim", "ddim", "DDIM"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBd16TKmMqOsHMNz_bR0M-su9s5A-yAALkrjEbH4CYSLPr3IF9UmPoKw_BDgAEAQADAgADeAADzQ4FAAEYBA");
}) 

bot.command(["Dsharpdim", "dsharpdim", "DSHARPDIM"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBeF6TKm1Uxhq6UMPxuJbSA-TFEgyJAALlrjEbH4CYSBDIt2Og37J-nVqDkS4AAwEAAwIAA3gAAzMIAgABGAQ");
}) 

bot.command(["Dsus4", "dsus4", "DSUS4"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBeV6TKnk_cIpV1GHmAAEdP-BHeCzHZgAC5q4xGx-AmEiVuudfsCNwKW6TcpEuAAMBAAMCAAN4AAN-BQIAARgE");
}) 

bot.command(["Dsharpsus4", "dsharpsus4", "DSHARPSUS4"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBel6TKoVWJR7Y39AncqhGUbZZohykAALnrjEbH4CYSK5HM-5LK7AK55MGki4AAwEAAwIAA3gAAyQtAAIYBA");
}) 

bot.command(["D6", "d6"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBe16TKpdcT4g63E6Y4IBt70gq8mvjAALorjEbH4CYSEO3DBefycHmB_RNkS4AAwEAAwIAA3gAA9NKAgABGAQ");
}) 

bot.command(["Dm6", "dm6", "DM6"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBfF6TKqVVq6R-2HuOz-eVbZl66xMoAALprjEbH4CYSJQ-D4djMBxGEGnLDgAEAQADAgADeAAD8WQEAAEYBA");
}) 

bot.command(["Dsharp6", "dsharp6", "DSHARP6"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBfV6TKq-HQOceV2KVH-c-yfctw1leAALqrjEbH4CYSBm-FkWWbB6i66fCDwAEAQADAgADeAADWp0GAAEYBA");
}) 

bot.command(["Dsharpm6", "dsharpm6", "DSHARPM6"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBfl6TKrh795MFNeZYqA4MUpzDkRTeAALrrjEbH4CYSMVqwnMJzPKV4nfBDwAEAQADAgADeAAD8p8GAAEYBA");
}) 

bot.command(["D7", "d7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBf16TKsRCbZiPgLRE3u6KFUKP2YxTAALsrjEbH4CYSHSS5HzV9JP8dQHBDgAEAQADAgADeAADIAwFAAEYBA");
}) 

bot.command(["Dm7", "dm7", "DM7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBgF6TKsyfQusKkWC1NvxbOneTkMbnAALtrjEbH4CYSKMW8t8F7nnAgVbLDgAEAQADAgADeAADKmYEAAEYBA");
}) 

bot.command(["Dsharp7", "dsharp7", "DSHARP7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBgV6TKtd2l8FDT5VWGTTIgXToGYveAALurjEbH4CYSP1q2S_0W9oxoqWAki4AAwEAAwIAA3gAAzYsAAIYBA");
}) 

bot.command(["Dsharpm7", "dsharpm7", "DSHARPM7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBgl6TKt8nk8lt5XK_e7Cl5R3stNU4AALvrjEbH4CYSHc4IbZyyi8xhKiAki4AAwEAAwIAA3gAA0wtAAIYBA");
}) 

bot.command(["Ddim7", "ddim7", "DDIM7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBg16TKuyQ-_c1rn00KVro8Lg2XvdBAALwrjEbH4CYSK6CGx36UlOTvInmkS4AAwEAAwIAA3gABLQAAhgE");
}) 

bot.command(["Dsharpdim7", "dsharpdim7", "DSHARPDIM7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBhF6TKvinItzz5U-k2tVmfRZbNsJdAALxrjEbH4CYSI6W53aWz5LDrDJ6kS4AAwEAAwIAA3gAA-AAAQIAARgE");
}) 

bot.command(["D7sus4", "d7sus4", "D7SUS4"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBhV6TKwFAAukoTG8tEbiy_LagDJ01AALyrjEbH4CYSLyyg4-qxO_mE3nBDwAEAQADAgADeAADMaMGAAEYBA");
}) 

bot.command(["Dsharp7sus4", "dsharp7sus4", "DSHARP7SUS4"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBhl6TKwoTsm3cg5Utnyk63Zb87j9VAALzrjEbH4CYSI-uAwYule6yFiB_ki4AAwEAAwIAA3gAA-wrAAIYBA");
}) 

bot.command(["D76", "d76"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBh16TKxPnnlkihzEdZJNKFyacdOtQAAL1rjEbH4CYSNqKacuGyRGrcyvBDgAEAQADAgADeAADAgUFAAEYBA");
}) 

bot.command(["Dsharp76", "dsharp76", "DSHARP76"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBiF6TKx95B812tHGRYAc8cqwCWoQjAAL2rjEbH4CYSJJxPxiFh707ZonmkS4AAwEAAwIAA3gAA8-xAAIYBA");
}) 

bot.command(["D9", "d9"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBiV6TKycCUTHJR7yx5WUDBrGgaPYSAAL3rjEbH4CYSL73_VK_-dY9YMnCDwAEAQADAgADeAAD2sgFAAEYBA");
}) 

bot.command(["Dm9", "dm9", "DM9"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBil6TKzAfrfqnmDJNgivgOMwbPZQlAAL4rjEbH4CYSIEJvvP6YUecjGnLDgAEAQADAgADeAADi2cEAAEYBA");
}) 

bot.command(["Dsharp9", "dsharp9", "DSHARP9"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBi16TKzmxvKYOKQTbQxfREUvncNPPAAL5rjEbH4CYSE0MlPBneFhpDSDBDgAEAQADAgADeAADbggFAAEYBA");
}) 

bot.command(["Dsharpm9", "dsharpm9", "DSHARPM9"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBjF6TK0UejO1fs3oSLLE1zmGAcOcnAAL7rjEbH4CYSJle_gABHJ3Js6plwQ8ABAEAAwIAA3gAA-KYBgABGAQ");
}) 

bot.command(["E", "e"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBjV6TK1SiQu7wn-omzs1DId4RX1AIAAL8rjEbH4CYSEgP5qQl-F5UnGnoki4AAwEAAwIAA3gAAyQtAAIYBA");
})

bot.command(["Em", "em", "EM"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBjl6TK15pKzoAAY4GHZg6eB1tZylzAQAC_a4xGx-AmEg6YIi9Z7ZEYa52wQ8ABAEAAwIAA3gAAyioBgABGAQ");
})

bot.command(["Emaj", "emaj", "EMAJ"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBj16TK2YBNf4Ib7ZsdC712lTRltYzAAL-rjEbH4CYSFAm4YY0qdq7cSTBDgAEAQADAgADeAAD-gYFAAEYBA");
})    

bot.command(["Emaj7", "emaj7", "EMAJ7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBkF6TK27BfFWylyC3q9ZkjFw3isH0AAL_rjEbH4CYSPKJk-E7tCOuMje_ki4AAwEAAwIAA3gAA0vIAAIYBA");
})  

bot.command(["Edim", "edim", "EDIM"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBkV6TK3tIrqLcnWtGSF_IZ1_AM_yCAAIBrzEbH4CYSGR51pJwu_XU0VyDkS4AAwEAAwIAA3gAA4kHAgABGAQ");
})  

bot.command(["Esus4", "esus4", "ESUS4"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBkl6TK4PB8gKO0EGGbaDpr6ZQWTndAAICrzEbH4CYSJrOBo7jb8ikwRbBDgAEAQADAgADeAADHwIFAAEYBA");
})  

bot.command(["E6", "e6"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBk16TK4v52Qp4uJhREyouSiUTkAHuAAIDrzEbH4CYSCJk-IBuXZw7GoHBDwAEAQADAgADeAAD2KQGAAEYBA");
})  

bot.command(["Em6", "em6", "EM6"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBlF6TK5JBaWivJqUf5v0TmAABMuScAAMErzEbH4CYSJQoBFB27zlS_Cd3kS4AAwEAAwIAA3gAA5cJAgABGAQ");
})  

bot.command(["E7", "e7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBlV6TK6I00v26S9ciJILJOJzsmWsVAAIFrzEbH4CYSMFBui_f12bPnrDCDwAEAQADAgADeAAD1s0FAAEYBA");
})  

bot.command(["Em7", "em7", "EM7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBll6TK6-8i5Qe8NJDr8o0RYRp6HgFAAIGrzEbH4CYSI63iTGwrguW9RvBDgAEAQADAgADeAADNgMFAAEYBA");
})  

bot.command(["Edim7", "edim7", "EDIM7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBl16TK7rPWqtGDVfYxKn7_Lty5d9xAAIHrzEbH4CYSDIRHA4Hl0vGmVHLDgAEAQADAgADeAADnWkEAAEYBA");
})  

bot.command(["E7sus4", "e7sus4", "E7SUS4"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBmF6TK8GT2b2Iru8MbapBXk8CV8hTAAIIrzEbH4CYSMaxDPFnMdnliG7BDwAEAQADAgADeAADqasGAAEYBA");
})  

bot.command(["E76", "e76"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBmV6TK8j6ZGVDInCBiBO_5CKr7iiJAAIJrzEbH4CYSKVyLd8hdAR3KlbLDgAEAQADAgADeAADVWwEAAEYBA");
})  

bot.command(["E9", "e9"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBml6TK880254h6vjyk-C3vLcYwkMaAAIKrzEbH4CYSIxGHmYToS_xdSm8ki4AAwEAAwIAA3gAA9rDAAIYBA");
})  

bot.command(["Em9", "em9", "EM9"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBm16TK9kD4ChhVY616-DrBI7IKN3TAAILrzEbH4CYSI2A7SWQwqj-uyzBDgAEAQADAgADeAADFQkFAAEYBA");
})  

bot.command(["F", "f"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBnF6TK-3Z1fkzDwjInQZ-YK9chHinAAIMrzEbH4CYSAPPqdgIWnyq0QPlkS4AAwEAAwIAA3gAAw22AAIYBA");
})  

bot.command(["Fm", "fm", "FM"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBnV6TK_jtyXbGh5SREOz46ZEtWiwPAAINrzEbH4CYSCsTJHH5DGQtc8vDki4AAwEAAwIAA3gAA9PFAAIYBA");
})  

bot.command(["Fmaj", "fmaj", "FMAJ"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBnl6TLAABjmrFaAdbXObEm_UyJZorSwACDq8xGx-AmEhYMYspvathKU0EwQ4ABAEAAwIAA3gAAwoLBQABGAQ");
})  

bot.command(["Fsharp", "fsharp", "FSHARP"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBn16TLAieZQrvWtrsOm8FEfjL68FsAAIPrzEbH4CYSMzrZObGhq0Yg3tPkS4AAwEAAwIAA3gAAzFIAgABGAQ");
})  

bot.command(["Fsharpm", "fsharpm", "FSHARPM"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBoF6TLBfHrwGuxJwfa1-a5bQsuhvHAAIQrzEbH4CYSBZprM3Q4prKrmxMkS4AAwEAAwIAA3gAA8xGAgABGAQ");
}) 

bot.command(["Fsharpmaj", "fsharpmaj", "FSHARPMAJ"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBoV6TLB7FPXfwo_iVCeDTxXs_KWMtAAIRrzEbH4CYSOisPWEVfs9ealDLDgAEAQADAgADeAADOmQEAAEYBA");
}) 

bot.command(["Fmaj7", "fmaj7", "FMAJ7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBol6TLCc_xX2Y6cEfv1X7PKEm6I0vAAISrzEbH4CYSEhgHHBQPPSfjPPADgAEAQADAgADeAADbw4FAAEYBA");
}) 

bot.command(["Fsharpmaj7", "fsharpmaj7", "FSHARPMAJ7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBo16TLC6Pwp4gdRxWL7u9T-mOHSPfAAITrzEbH4CYSDJUaGwt-q162aTskS4AAwEAAwIAA3gAAwKyAAIYBA");
}) 

bot.command(["Fdim", "fdim", "FDIM"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBpF6TLDZxpMFgVjFDXIu_rV-sjDHJAAIVrzEbH4CYSBNJUG1GGK4kJntPkS4AAwEAAwIAA3gAA4JJAgABGAQ");
}) 

bot.command(["Fsharpdim", "fsharpdim", "FSHARPDIM"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBpV6TLD6Eqvpur2oM7fm0kJwAATjVIAACF68xGx-AmEiDoSCwYxBCbVdag5EuAAMBAAMCAAN4AANvBAIAARgE");
}) 

bot.command(["Fsus4", "fsus4", "FSUS4"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBpl6TLEXt6U5eq19LyIXmJOU1UH8jAAIYrzEbH4CYSMmBWODcGMSLhx7rkS4AAwEAAwIAA3gAA161AAIYBA");
}) 

bot.command(["Fsharpsus4", "fsharpsus4", "FSHARPSUS4"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBp16TLFBR0VcfUoVb2K5rwtxrW0KoAAIZrzEbH4CYSD69xTxO7SECm3XBDwAEAQADAgADeAADMqsGAAEYBA");
}) 

bot.command(["F6", "f6"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBqF6TLFw_WdhBBP7NvyL3gFMPWKZNAAIarzEbH4CYSEeTXFySDYCb1pLCDwAEAQADAgADeAADoJ8GAAEYBA");
}) 

bot.command(["Fm6", "fm6", "FM6"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBqV6TLGYrG4OVQtsD_8QvAd5QwEJaAAIbrzEbH4CYSMAa3lSsOxk7l3LBDwAEAQADAgADeAADuacGAAEYBA");
}) 

bot.command(["Fsharp6", "fsharp6", "FSHARP6"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBql6TLG8k7R0Rpwejwy4XbBIEz1gZAAIcrzEbH4CYSIH4aKynsF1AgQzBDgAEAQADAgADeAAD2A0FAAEYBA");
}) 

bot.command(["Fsharpm6", "fsharpm6", "FSHARPM6"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBq16TLHasaAQfpZW0cFGOrfoaYWcrAAIdrzEbH4CYSN_K4p6nW7Yoq0PLDgAEAQADAgADeAADrWcEAAEYBA");
}) 

bot.command(["F7", "f7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBrF6TLIATll5kUUsI-N7fuv_DaNeMAAIerzEbH4CYSEAntZOCunVDG7SDki4AAwEAAwIAA3gAA7YqAAIYBA");
}) 

bot.command(["Fm7", "fm7", "FM7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBrV6TLItj4rQ6dfuTQEph-AtoVvUbAAIfrzEbH4CYSBed41fv-Be-5NbGki4AAwEAAwIAA3gAA7zIAAIYBA");
}) 

bot.command(["Fsharp7", "fsharp7", "FSHARP7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBrl6TLJOmEPET9M1rD0rcy-3l2q99AAIgrzEbH4CYSNUYh8FRASBV4bODki4AAwEAAwIAA3gAA88rAAIYBA");
}) 

bot.command(["Fsharpm7", "fsharpm7", "FSHARPM7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBr16TLJ5C_Q6lpTBwsRRz6MtgSri0AAIhrzEbH4CYSMb3v-gDdhGHRybBDgAEAQADAgADeAADsQQFAAEYBA");
}) 

bot.command(["Fdim7", "fdim7", "FDIM7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBsF6TLKVgyCQvffndS3keq_zqSdxZAAIirzEbH4CYSEdyqH_Fz-jc7QICki4AAwEAAwIAA3gAA0ktAAIYBA");
}) 

bot.command(["Fsharpdim7", "fsharpdim7", "FSHARPDIM7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBsV6TLK26Bb7P_vcBeuFcRvLn2q7bAAIjrzEbH4CYSE0Z5GhHMrDvjWHLDgAEAQADAgADeAADMmkEAAEYBA");
}) 

bot.command(["F7sus4", "f7sus4", "F7SUS4"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBsl6TLLRFgiKyAAH8arE6gqKeuTQg8QACJK8xGx-AmEgFOh8tInIQYpIcCJIuAAMBAAMCAAN4AAMlLQACGAQ");
}) 

bot.command(["Fsharp7sus4", "fsharp7sus4", "FSHARP7SUS4"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBs16TLLx1VjYUST9sazaQXcDS7N_wAAIlrzEbH4CYSPFIFkj_a243onTBDwAEAQADAgADeAADV6gGAAEYBA");
}) 

bot.command(["F76", "f76"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBtF6TLMdalxScpcYmfvilo_gsUYQ7AAImrzEbH4CYSB43txL7-s9UU3sAAZIuAAMBAAMCAAN4AAMbLQACGAQ");
}) 

bot.command(["Fsharp76", "fsharp76", "FSHARP76"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBtV6TLNGJc2NEyLC6wFx7e-SsjynkAAInrzEbH4CYSCa7_ScIeo-DgqS6ki4AAwEAAwIAA3gAA-rGAAIYBA");
}) 

bot.command(["F9", "f9"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBtl6TLNhyP7oCbkJqzwESt4z7NyFQAAIorzEbH4CYSGNShs1FJMYw_jF6kS4AAwEAAwIAA3gAAxAGAgABGAQ");
}) 

bot.command(["Fm9", "fm9", "FM9"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBt16TLOP4x3-N8Zn7KX2S2qcdd9hkAAIprzEbH4CYSDOijZ0KmVcEEiZ3kS4AAwEAAwIAA3gAA2kGAgABGAQ");
}) 

bot.command(["Fsharp9", "fsharp9", "FSHARP9"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBuF6TLOoh9hlFhP6Dh7MBtOtW8-32AAIqrzEbH4CYSCC9fm4b6MO3QSvBDgAEAQADAgADeAADAg8FAAEYBA");
}) 

bot.command(["Fsharpm9", "fsharpm9", "FSHARPM9"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBuV6TLPLjGa8Uz7cgb0gjReEJmMnEAAIsrzEbH4CYSIRas7pB8EwAARF945EuAAMBAAMCAAN4AAMVtgACGAQ");
}) 

bot.command(["G", "g"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBu16TLWS14sys8kbejw7h0irvrg9CAAItrzEbH4CYSIbB5Yg63ffDyjjxkS4AAwEAAwIAA3gAA76yAAIYBA");
})  

bot.command(["Gm", "gm", "GM"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBvF6TLW6uPXHCdoCxKmtEOo4RkpcyAAIxrzEbH4CYSBrTQcgibCofzCV3kS4AAwEAAwIAA3gAA8MCAgABGAQ");
})  

bot.command(["Gmaj", "gmaj", "GMAJ"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBvV6TLXjOi3jwBbq2DpqLy77zYfjTAAIyrzEbH4CYSEbEdmEbv-yYpfP-kS4AAwEAAwIAA3gAAwgtAAIYBA");
})  

bot.command(["Gsharp", "gsharp", "GSHARP"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBvl6TLYB6sf9ePcEo6j5I3UUlBPzmAAIzrzEbH4CYSP1bsK-twxEPr_3ADgAEAQADAgADeAADTAsFAAEYBA");
})  

bot.command(["Gsharpm", "gsharpm", "GSHARPM"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBv16TLYpHIyO4baJEDBszmXAO-SMBAAI0rzEbH4CYSLRvbh49D2bqFcrCDwAEAQADAgADeAADxskFAAEYBA");
}) 

bot.command(["Gsharpmaj", "gsharpmaj", "GSHARPMAJ"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBwF6TLZWnLgVzqCnnBdh9yPCwdDaiAAI1rzEbH4CYSKsCxOIUsIF6tKXskS4AAwEAAwIAA3gAA1SyAAIYBA");
}) 

bot.command(["Gmaj7", "gmaj7", "GMAJ7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBwV6TLZyfM-016ILTtvHzRkUnR9jtAAI2rzEbH4CYSMDvlWk02VSU2oHBDwAEAQADAgADeAADNpkGAAEYBA");
}) 

bot.command(["Gsharpmaj7", "gsharpmaj7", "GSHARPMAJ7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBwl6TLaTXwLFUuOur3vUaWJWiKVE-AAI3rzEbH4CYSPPi53AaD1-bj2xMkS4AAwEAAwIAA3gAA2NKAgABGAQ");
}) 

bot.command(["Gdim", "gdim", "GDIM"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBw16TLbEPrAPsv3xfHeKq0xcmCd49AAI4rzEbH4CYSJJcBT4y1AWq0RDokS4AAwEAAwIAA3gAA1ayAAIYBA");
}) 

bot.command(["Gsharpdim", "gsharpdim", "GSHARPDIM"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBxF6TLbgSfA_L2F-vGEjyfw1D1BR_AAI5rzEbH4CYSKy1am13bwhELE_LDgAEAQADAgADeAADO2gEAAEYBA");
}) 

bot.command(["Gsus4", "gsus4", "GSUS4"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBxV6TLb9lL2yfccSVazCuDRHDxjbtAAI6rzEbH4CYSGhSvshkXCik8vxtkS4AAwEAAwIAA3gAA0QEAgABGAQ");
}) 

bot.command(["Gsharpsus4", "gsharpsus4", "GSHARPSUS4"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBxl6TLcdppvFX7VvXDhBJKL7UK3zcAAI8rzEbH4CYSOwB3lEpY5tLGZQGki4AAwEAAwIAA3gAA2AsAAIYBA");
}) 

bot.command(["G6", "g6"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBx16TLdCjNuTsRLBSLgpSmaOiWRj7AAI9rzEbH4CYSMeQrKByFQAByuscuZIuAAMBAAMCAAN4AAPvxgACGAQ");
}) 

bot.command(["Gm6", "gm6", "GM6"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIByF6TLd6UjcfnkaSKKjsyq0wI-FR8AAI-rzEbH4CYSGl7zC6QATKXa4vmkS4AAwEAAwIAA3gAA2KzAAIYBA");
}) 

bot.command(["Gsharp6", "gsharp6", "GSHARP6"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIByV6TLeZaaov_gKqKrEWgHwQcR0ZLAAI_rzEbH4CYSDiKQRqKMGoawQLlkS4AAwEAAwIAA3gAA32yAAIYBA");
}) 

bot.command(["Gsharpm6", "gsharpm6", "GSHARPM6"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIByl6TLe3LIZouTdfFr__6Y0MJx3j9AAJArzEbH4CYSBNrFMRNQTduPk3LDgAEAQADAgADeAADIWoEAAEYBA");
}) 

bot.command(["G7", "g7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBy16TLfT2NfQUXkZRI5RuM3cTz8jwAAJBrzEbH4CYSITi-hHhc_0pmHbBDwAEAQADAgADeAADK6EGAAEYBA");
}) 

bot.command(["Gm7", "gm7", "GM7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBzF6TLfudUnql5e0tyJEAAYqFfeFL4QACQq8xGx-AmEiLhFmGxiCTtjXIfpEuAAMBAAMCAAN4AAMLBQIAARgE");
}) 

bot.command(["Gsharp7", "gsharp7", "GSHARP7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBzV6TLgeW0_jMVryZGBatbC8k9ZfgAAJDrzEbH4CYSMjNT5dGvpz69gABUZEuAAMBAAMCAAN4AAOwTQIAARgE");
}) 

bot.command(["Gsharpm7", "gsharpm7", "GSHARPM7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBzl6TLg9SjWRyVbCRBS7kCzV6hwmjAAJErzEbH4CYSIC6Ew6o5P3tbQzBDgAEAQADAgADeAADbRAFAAEYBA");
}) 

bot.command(["Gdim7", "gdim7", "GDIM7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIBz16TLhlMz-B8MReoN69O2WPxTlNMAAJFrzEbH4CYSLRKpWn-cJkfxCi8ki4AAwEAAwIAA3gAA4rJAAIYBA");
}) 

bot.command(["Gsharpdim7", "gsharpdim7", "GSHARPDIM7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB0F6TLiAyCCCAo6JV045qLTeM72Y2AAJGrzEbH4CYSEQT4EXnIE9eF73CDwAEAQADAgADeAADqckFAAEYBA");
}) 

bot.command(["G7sus4", "g7sus4", "G7SUS4"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB0V6TLiocWqmjnRuouSRZULJ13tqOAAJHrzEbH4CYSMYgs123Lfn8bkXCki4AAwEAAwIAA3gAA4_GAAIYBA");
}) 

bot.command(["Gsharp7sus4", "gsharp7sus4", "GSHARP7SUS4"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB0l6TLjGUdRu4ggInTGZl0c4EiAngAAJIrzEbH4CYSNrfbYYxorOOv8TCDwAEAQADAgADeAAD-cMFAAEYBA");
}) 

bot.command(["G76", "g76"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB016TLji7sFaXv1dRWBb6hIFv8n3xAAJJrzEbH4CYSF2Cf7-W43fWGVnLDgAEAQADAgADeAADDGcEAAEYBA");
}) 

bot.command(["Gsharp76", "gsharp76", "GSHARP76"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB1F6TLj6cQKSCWGLb0nE3Ul0mPhsiAAJKrzEbH4CYSDQeimV-KVzprch-kS4AAwEAAwIAA3gAA1QGAgABGAQ");
}) 

bot.command(["G9", "g9"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB1V6TLkbGTa3sa-vSx12vOk4lbClmAAJLrzEbH4CYSJCkuP60PtSLQEJ9kS4AAwEAAwIAA3gAA9YCAgABGAQ");
}) 

bot.command(["Gm9", "gm9", "GM9"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB1l6TLlGbEZaHqjBj0G6TuAbNiDzbAAJMrzEbH4CYSDejrm-QTKlIxX3jkS4AAwEAAwIAA3gAA-uvAAIYBA");
}) 

bot.command(["Gsharp9", "gsharp9", "GSHARP9"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB116TLlclLk_lFcGPJtAAAWA4PeyPtgACTa8xGx-AmEieljT1ol0sgZskwQ4ABAEAAwIAA3gAA9MQBQABGAQ");
}) 

bot.command(["Gsharpm9", "gsharpm9", "GSHARPM9"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB2F6TLl0TD6qjbJyyO6I00wjdFwHHAAJOrzEbH4CYSChXyKkGK4s7lyLBDgAEAQADAgADeAADUgoFAAEYBA");
}) 

bot.command(["H", "h"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB2V6TLnEVOmspZenNGxo-yaosS4gWAAJPrzEbH4CYSHzpobsek4OKwg_okS4AAwEAAwIAA3gAA4q0AAIYBA");
})  

bot.command(["Hm", "hm", "HM"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB2l6TLnn8sit327ygj4hNIGx9yE7rAAJQrzEbH4CYSFfbcB5KKEOsT1TLDgAEAQADAgADeAADwWkEAAEYBA");
})  

bot.command(["Hmaj", "hmaj", "HMAJ"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB216TLoGJ2uTLXFkSwicmHrbq7xMnAAJRrzEbH4CYSHj3F-rHtdGIxvP-kS4AAwEAAwIAA3gAA4MsAAIYBA");
})  

bot.command(["Hb", "hb", "HB"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB3F6TLojIdi8GzE3kHSkD6SOugAbLAAJSrzEbH4CYSIGwQHvgiobTR7zCDwAEAQADAgADeAADUcsFAAEYBA");
})  

bot.command(["Hbm", "hbm", "HBM"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB3V6TLpZRBPQdl22SRPrIsbgBkXrJAAJTrzEbH4CYSLuGOvqW3WBPbCPBDgAEAQADAgADeAADVwUFAAEYBA");
}) 

bot.command(["Hbmaj", "hbmaj", "HBMAJ"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB3l6TLp_2rpGyEL0IOpzVsYiGLNJdAAJUrzEbH4CYSDYx2-JOhXY-3x5_ki4AAwEAAwIAA3gAA64rAAIYBA");
}) 

bot.command(["Hmaj7", "hmaj7", "HMAJ7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB316TLqbJm328h68TNoZLCQP0enifAAJVrzEbH4CYSHumFbq4epGW2FXLDgAEAQADAgADeAAD7V8EAAEYBA");
}) 

bot.command(["Hbmaj7", "hbmaj7", "HBMAJ7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB4F6TLq1W3aCM4KIKEn7t9S7TY5pHAAJWrzEbH4CYSN04DQEk-8UZD2fBDwAEAQADAgADeAADwJkGAAEYBA");
}) 

bot.command(["Hdim", "hdim", "HDIM"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB4V6TLrgpv_ERezm7WgI5s955KQwbAAJXrzEbH4CYSF3TbBfMBcPr_mjBDwAEAQADAgADeAADVaQGAAEYBA");
}) 

bot.command(["Hbdim", "hbdim", "HBDIM"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB4l6TLr_rxBr_nj2xzV5ERiuX-F5fAAJYrzEbH4CYSEqq9-_DZcAfX_PADgAEAQADAgADeAAD5RUFAAEYBA");
}) 

bot.command(["Hsus4", "hsus4", "HSUS4"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB416TLsasFCgSEpq6N-4Jel9mSdkbAAJZrzEbH4CYSJ5vGBTSfFoXB7DCDwAEAQADAgADeAADLcgFAAEYBA");
}) 

bot.command(["Hbsus4", "hbsus4", "HBSUS4"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB5F6TLs26pNRsV0hWAAEap4Od6anhuwACWq8xGx-AmEir_yNyhBvgBsX87JIuAAMBAAMCAAN4AAPILAACGAQ");
}) 

bot.command(["H6", "h6"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB5V6TLtVVokXnaK7BjQOHycp0YRFQAAJbrzEbH4CYSCC7oC_MZN3LCwrBDgAEAQADAgADeAADUAsFAAEYBA");
}) 

bot.command(["Hm6", "hm6", "HM6"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB5l6TLtuXOEeftq9qVWqXiatL26d9AAJcrzEbH4CYSP_OX8Aoqh86esvDki4AAwEAAwIAA3gAA6_CAAIYBA");
}) 

bot.command(["Hb6", "hb6", "HB6"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB516TLuIr4Yb-yKizwNgiWuQdHtpXAAJdrzEbH4CYSAG6sgccTWbGqCyCki4AAwEAAwIAA3gAA0osAAIYBA");
}) 

bot.command(["Hbm6", "hbm6", "HBM6"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB6F6TLukEt1ceYEgHxP0XslqRy64pAAJerzEbH4CYSH2pZ2zuH03rNXbBDwAEAQADAgADeAADnZ0GAAEYBA");
}) 

bot.command(["H7", "h7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB6V6TLvNo2evMZN01BGM67VuHjvfaAAJfrzEbH4CYSKGAC61_SH4dEUPCki4AAwEAAwIAA3gAA7bKAAIYBA");
}) 

bot.command(["Hm7", "hm7", "HM7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB6l6TLv1E73gPbSOm0Zc6s2HkvwzjAAJgrzEbH4CYSIBflKY0ghpLAAGZwg8ABAEAAwIAA3gAA-mfBgABGAQ");
}) 

bot.command(["Hb7", "hb7", "HB7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB616TLw6jM6G3cGK0N2wMDiQOJkGJAAJhrzEbH4CYSDvbGwW11Zp-OgPBDgAEAQADAgADeAADPwcFAAEYBA");
}) 

bot.command(["Hbm7", "hbm7", "HBM7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB7F6TLxZQuAGWsn7czCi--54iBvW4AAJirzEbH4CYSPLP_n82mNF5GZDCDwAEAQADAgADeAADgKQGAAEYBA");
}) 

bot.command(["Hdim7", "hdim7", "HDIM7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB7V6TLx516YBqCSEdDdpGDYyrnAo1AAJkrzEbH4CYSG0fmViriFJLgcLCDwAEAQADAgADeAADccgFAAEYBA");
}) 

bot.command(["Hbdim7", "hbdim7", "HBDIM7"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB7l6TLyowmp8V2Uw6EERq6WcqrsGbAAJlrzEbH4CYSDi0yuI5y7I3AAF-45EuAAMBAAMCAAN4AAM-tQACGAQ");
}) 

bot.command(["H7sus4", "h7sus4", "H7SUS4"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB716TLzMLof0msM5K5ur_SoY1ejuoAAJmrzEbH4CYSF5j7wy2MRiaUv9tkS4AAwEAAwIAA3gAAxoJAgABGAQ");
}) 

bot.command(["Hb7sus4", "hb7sus4", "HB7SUS4"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB8F6TLzqUV-NnYN90awFYvpS16768AAJnrzEbH4CYSKbZWrgeoII7bgLBDgAEAQADAgADeAADfgkFAAEYBA");
}) 

bot.command(["H76", "h76"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB8V6TL0NzglnmKmCUEkobO4D2t5udAAJorzEbH4CYSBkdS7AyYNuymQXBDgAEAQADAgADeAADdA4FAAEYBA");
}) 

bot.command(["Hb76", "hb76", "HB76"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB8l6TL01em6f70OSJ76RY-V7nRT43AAJprzEbH4CYSIGi0x07ssjmRMd-kS4AAwEAAwIAA3gAA9gCAgABGAQ");
}) 

bot.command(["H9", "h9"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB816TL1QJnDDab1CPe20TS05cu4upAAJqrzEbH4CYSNWInCibeTiNWYTuki4AAwEAAwIAA3gAAyksAAIYBA");
}) 

bot.command(["Hm9", "hm9", "HM9"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB9F6TL12BVQGeJc-zWc-Hb4z7IwYSAAJrrzEbH4CYSCTPsVUAAT_Lc1VNyw4ABAEAAwIAA3gAAwFYBAABGAQ");
}) 

bot.command(["Hb9", "hb9", "HBP9"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB9V6TL2WosSNSst54UIscg6IxFBBlAAJsrzEbH4CYSHI1Syg2WFKxDZLCDwAEAQADAgADeAADkqIGAAEYBA");
}) 

bot.command(["Hbm9", "hbm9", "HBM9"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIB9l6TL2wOkFFW-96fZZekghpIkJItAAJtrzEbH4CYSKleGXJpybVT8ATBDgAEAQADAgADeAADvAUFAAEYBA");
}) 

bot.command('accord', ctx => {
AccordsMenu(ctx);
})

const Aaccords =`
А (Ля) аккорды:

/A - Ля мажор 
/Am - Ля минор
/Amaj - Ля мажор увеличенный
/Asharp - Ля-диез мажор
/Amaj7 - Большой мажорный септаккорд от ноты Ля
/Asus4 - Ля мажор с квартой вместо терции
/A6 - Мажорный секстаккорд от ноты Ля
/Am6 - Минорный секстаккорд от ноты Ля
/A7 - Доминантсептаккорд (мажорный септаккорд) от ноты Ля
/Am7 - Минорный септаккорд от ноты Ля
/Asharp7 - Доминантсептаккорд (мажорный септаккорд) от ноты Ля-диез
/Adim7 - Уменьшенный септаккорд от ноты Ля
/A7sus4 - Мажорный септаккорд с квартой от ноты Ля
/A76 - Мажорный септаккорд с секстой от ноты Ля
/A9 - Мажорный нонаккорд от ноты Ля
/Am9 - Минорный нонаккорд от ноты Ля
`;

const Caccords =`
C (До) аккорды:

/C - До мажор 
/Cm - До минор
/Cmaj - До мажор увеличенный
/Csharp - До-диез мажор
/Csharpm - До-диез минор
/Csharpmaj - До-диез мажор увеличенный
/Cmaj7 - Большой мажорный септаккорд от ноты До
/Csharpmaj7 - Большой мажорный септаккорд от ноты До-диез
/Csus4 - До мажор с квартой вместо терции
/Csharpsus4 - До-диез мажор с квартой вместо терции
/C6 - Мажорный секстаккорд от ноты До
/Cm6 - Минорный секстаккорд от ноты До
/Csharp6 - Мажорный секстаккорд от ноты До-диез
/Csharpm6 - Минорный секстаккорд от ноты До-диез
/C7 - Мажорный септаккорд (доминантсептаккорд) от ноты До
/Cm7 - Минорный септаккорд от ноты До
/Csharp7 - Мажорный септаккорд (доминантсептаккорд) от ноты До-диез
/Csharpm7 - Минорный септаккорд от ноты До-диез
/Cdim7 - Уменьшенный септаккорд от ноты До
/Csharpdim7 - Уменьшенный септаккорд от ноты До-диез
/C7sus4 - Мажорный септаккорд с квартой от ноты До
/Csharp7sus4 - Мажорный септаккорд с квартой от ноты До-диез
/C76 - Мажорный септаккорд с секстой от ноты До
/Csharp76 - Мажорный септаккорд с секстой от ноты До-диез
/C9 - Мажорный нонаккорд от ноты До
/Cm9 - Минорный нонаккорд от ноты До
/Csharp9 - Мажорный нонаккорд от ноты До-диез
/Csharpm9 - Минорный нонаккорд от ноты До-диез
`;

const Daccords =`
D (Ре) аккорды:

/D - Ре мажор 
/Dm - Ре минор
/Dmaj - Ре мажор увеличенный
/Dsharp - Ре-диез мажор
/Dsharpm - Ре-диез минор
/Dsharpmaj - Ре-диез мажор увеличенный
/Dmaj7 - Большой мажорный септаккорд от ноты Ре
/Dsharpmaj7 - Большой мажорный септаккорд от ноты Ре-диез
/Ddim - Уменьшенный аккорд от ноты Ре
/Dsharpdim - Уменьшенный аккорд от ноты Ре-диез
/Dsus4 - Ре мажор с квартой вместо терции
/Dsharpsus4 - Ре-диез мажор с квартой вместо терции
/D6 - Мажорный секстаккорд от ноты Ре
/Dm6 - Минорный секстаккорд от ноты Ре
/Dsharp6 - Мажорный секстаккорд от ноты Ре-диез
/Dsharpm6 - Минорный секстаккорд от ноты Ре-диез
/D7 - Мажорный септаккорд (Доминантсептаккорд) от ноты Ре
/Dm7 - Минорный септаккорд от ноты Ре
/Dsharp7 - Мажорный септаккорд (Доминантсептаккорд) от ноты Ре-диез
/Dsharpm7 - Минорный септаккорд от ноты Ре-диез
/Ddim7 - Уменьшенный септаккорд от ноты Ре
/Dsharpdim7 - Уменьшенный септаккорд от ноты Ре-диез
/D7sus4 - Мажорный септаккорд с квартой от ноты Ре
/Dsharp7sus4 - Мажорный септаккорд с квартой от ноты Ре-диез
/D76 - Мажорный септаккорд с секстой от ноты Ре
/Dsharp76 - Мажорный септаккорд с секстой от ноты Ре-диез
/D9 - Мажорный нонаккорд от ноты Ре
/Dm9 - Минорный нонаккорд от ноты Ре
/Dsharp9 - Мажорный нонаккорд от ноты Ре-диез
/Dsharpm9 - Минорный нонаккорд от ноты Ре-диез
`;

const Eaccords =`
E (Ми) аккорды:

/E - Ми мажор 
/Em - Ми минор
/Emaj - Ми мажор увеличенный
/Emaj7 - Большой мажорный септаккорд от ноты Ми
/Edim - Уменьшенный аккорд от ноты Ми
/Esus4 - Ми мажор с квартой вместо терции
/E6 - Мажорный секстаккорд от ноты Ми
/Em6 - Минорный секстаккорд от ноты Ми
/E7 - Мажорный септаккорд (Доминантсептаккорд) от ноты Ми
/Em7 - Минорный септаккорд от ноты Ми
/Edim7 - Уменьшенный септаккорд от ноты Ми
/E7sus4 - Мажорный септаккорд с квартой от ноты Ми
/E76 - Мажорный септаккорд с секстой от ноты Ми
/E9 - Мажорный нонаккорд от ноты Ми
/Em9 - Минорный нонаккорд от ноты Ми
`;

const Faccords =`
F (Фа) аккорды:

/F - Фа мажор 
/Fm - Фа минор
/Fmaj - Фа мажор увеличенный
/Fsharp - Фа-диез мажор
/Fsharpm - Фа-диез минор
/Fsharpmaj - Фа-диез мажор увеличенный
/Fmaj7 - Большой мажорный септаккорд от ноты Фа
/Fsharpmaj7 - Большой мажорный септаккорд от ноты Фа-диез
/Fdim - Уменьшенный аккорд от ноты Фа
/Fsharpdim - Уменьшенный аккорд от ноты Фа-диез
/Fsus4 - Фа мажор с квартой вместо терции
/Fsharpsus4 - Фа-диез мажор с квартой вместо терции
/F6 - Мажорный секстаккорд от ноты Фа
/Fm6 - Минорный секстаккорд от ноты Фа
/Fsharp6 - Мажорный секстаккорд от ноты Фа-диез
/Fsharpm6 - Минорный секстаккорд от ноты Фа-диез
/F7 - Мажорный септаккорд (Доминантсептаккорд) от ноты Фа
/Fm7 - Минорный септаккорд от ноты Фа
/Fsharp7 - Мажорный септаккорд (Доминантсептаккорд) от ноты Фа-диез
/Fsharpm7 - Минорный септаккорд от ноты Фа-диез
/Fdim7 - Уменьшенный септаккорд от ноты Фа
/Fsharpdim7 - Уменьшенный септаккорд от ноты Фа-диез
/F7sus4 - Мажорный септаккорд с квартой от ноты Фа
/Fsharp7sus4 - Мажорный септаккорд с квартой от ноты Фа-диез
/F76 - Мажорный септаккорд с секстой от ноты Фа
/Fsharp76 - Мажорный септаккорд с секстой от ноты Фа-диез
/F9 - Мажорный нонаккорд от ноты Фа
/Fm9 - Минорный нонаккорд от ноты Фа
/Fsharp9 - Мажорный нонаккорд от ноты Фа-диез
/Fsharpm9 - Минорный нонаккорд от ноты Фа-диез
`;

const Gaccords =`
G (Соль) аккорды:

/G - Соль мажор 
/Gm - Соль минор
/Gmaj - Соль мажор увеличенный
/Gsharp - Соль-диез мажор
/Gsharpm - Соль-диез минор
/Gsharpmaj - Соль-диез мажор увеличенный
/Gmaj7 - Большой мажорный септаккорд от ноты Соль
/Gsharpmaj7 - Большой мажорный септаккорд от ноты Соль-диез
/Gdim - Уменьшенный аккорд от ноты Соль
/Gsharpdim - Уменьшенный аккорд от ноты Соль-диез
/Gsus4 - Соль мажор с квартой вместо терции
/Gsharpsus4 - Соль-диез мажор с квартой вместо терции
/G6 - Мажорный секстаккорд от ноты Соль
/Gm6 - Минорный секстаккорд от ноты Соль
/Gsharp6 - Мажорный секстаккорд от ноты Соль-диез
/Gsharpm6 - Минорный секстаккорд от ноты Соль-диез
/G7 - Мажорный септаккорд (Доминантсептаккорд) от ноты Соль
/Gm7 - Минорный септаккорд от ноты Соль
/Gsharp7 - Мажорный септаккорд (Доминантсептаккорд) от ноты Соль-диез
/Gsharpm7 - Минорный септаккорд от ноты Соль-диез
/Gdim7 - Уменьшенный септаккорд от ноты Соль
/Gsharpdim7 - Уменьшенный септаккорд от ноты Соль-диез
/G7sus4 - Мажорный септаккорд с квартой от ноты Соль
/Gsharp7sus4 - Мажорный септаккорд с квартой от ноты Соль-диез
/G76 - Мажорный септаккорд с секстой от ноты Соль
/Gsharp76 - Мажорный септаккорд с секстой от ноты Соль-диез
/G9 - Мажорный нонаккорд от ноты Соль
/Gm9 - Минорный нонаккорд от ноты Соль
/Gsharp9 - Мажорный нонаккорд от ноты Соль-диез
/Gsharpm9 - Минорный нонаккорд от ноты Соль-диез
`;

const Haccords =`
H/B (Си) аккорды:

/H - Си мажор 
/Hm - Си минор
/Hmaj - Си мажор увеличенный
/Hb - Си-бемоль мажор
/Hbm - Си-бемоль минор
/Hbmaj - Си-бемоль мажор увеличенный
/Hmaj7 - Большой мажорный септаккорд от ноты Си
/Hbmaj7 - Большой мажорный септаккорд от ноты Си-бемоль
/Hdim - Уменьшенный аккорд от ноты Си
/Hbdim - Уменьшенный аккорд от ноты Си-бемоль
/Hsus4 - Си мажор с квартой вместо терции
/Hbsus4 - Си-бемоль мажор с квартой вместо терции
/H6 - Мажорный секстаккорд от ноты Си
/Hm6 - Минорный секстаккорд от ноты Си
/Hb6 - Мажорный секстаккорд от ноты Си-бемоль
/Hbm6 - Минорный секстаккорд от ноты Си-бемоль
/H7 - Доминантсептаккорд (мажорный септаккорд) от ноты Си
/Hm7 - Минорный септаккорд от ноты Си
/Hb7 - Доминантсептаккорд от ноты Си-бемоль
/Hbm7 - Минорный септаккорд от ноты Си-бемоль
/Hdim7 - Уменьшенный септаккорд от ноты Си
/Hbdim7 - Уменьшенный септаккорд от ноты Си-бемоль
/H7sus4 - Мажорный септаккорд с квартой от ноты Си
/Hb7sus4 - Мажорный септаккорд с квартой от ноты Си-бемоль
/H76 - Мажорный септаккорд с секстой от ноты Си
/Hb76 - Мажорный септаккорд с секстой от ноты Си-бемоль
/H9 - Мажорный нонаккорд от ноты Си
/Hm9 - Минорный нонаккорд от ноты Си
/Hb9 - Мажорный нонаккорд от ноты Си-бемоль
/Hbm9 - Минорный нонаккорд от ноты Си-бемоль
`;

function AccordsMenu(ctx) {
    bot.telegram.sendMessage(ctx.chat.id, 'Какой аккорд Вы ищите?',
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'A (Ля)', callback_data: 'A' },
                    { text: 'C (До)', callback_data: 'С' },
                    { text: 'D (Ре)', callback_data: 'D' }
                ],
                [
                    { text: 'E (Ми)', callback_data: 'E' },
                    { text: 'F (Фа)', callback_data: 'F' },
                    { text: 'G (Соль)', callback_data: 'G' },
                    { text: 'H/B (Си)', callback_data: 'H' }
                ]
            ]
        }
    })
}

bot.action('A', ctx => {
    ctx.deleteMessage();
    ctx.answerCbQuery('Аккорды А (Ля)');
    bot.telegram.sendMessage(ctx.chat.id, Aaccords,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к аккордам', callback_data: 'menu' }
                ]
            ]
        }
    })
})

bot.action('С', ctx => {
    ctx.deleteMessage();
    ctx.answerCbQuery('Аккорды С (До)');
    bot.telegram.sendMessage(ctx.chat.id, Caccords,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к аккордам', callback_data: 'menu' }
                ]
            ]
        }
    })
})

bot.action('D', ctx => {
    ctx.deleteMessage();
    ctx.answerCbQuery('Аккорды D (Ре)');
    bot.telegram.sendMessage(ctx.chat.id, Daccords,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к аккордам', callback_data: 'menu' }
                ]
            ]
        }
    })
})

bot.action('E', ctx => {
    ctx.deleteMessage();
    ctx.answerCbQuery('Аккорды E (Ми)');
    bot.telegram.sendMessage(ctx.chat.id, Eaccords,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к аккордам', callback_data: 'menu' }
                ]
            ]
        }
    })
})

bot.action('F', ctx => {
    ctx.deleteMessage();
    ctx.answerCbQuery('Аккорды F (Фа)');
    bot.telegram.sendMessage(ctx.chat.id, Faccords,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к аккордам', callback_data: 'menu' }
                ]
            ]
        }
    })
})

bot.action('G', ctx => {
    ctx.deleteMessage();
    ctx.answerCbQuery('Аккорды G (Соль)');
    bot.telegram.sendMessage(ctx.chat.id, Gaccords,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к аккордам', callback_data: 'menu' }
                ]
            ]
        }
    })
})

bot.action('H', ctx => {
    ctx.deleteMessage();
    ctx.answerCbQuery('Аккорды H (Си)');
    bot.telegram.sendMessage(ctx.chat.id, Haccords,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к аккордам', callback_data: 'menu' }
                ]
            ]
        }
    })
})

bot.action('menu', ctx => {
    ctx.deleteMessage();
    AccordsMenu(ctx);
})

const Boi =`
Базовые бои:

/Четверка 
/Шестерка
/Восьмерка
/Блатной
/Высоцкий
/Испанский
/Кантри
`;

const Perebor =`
Базовые бои:

/Четверка 
/Шестерка
/Восьмерка
/Вальсовый
`;

const SuccessMessage =`
Вот то, что Вы искали!
`;

function BoiPereborMenu(ctx) {
    bot.telegram.sendMessage(ctx.chat.id, 'Что Вас интересует?',
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Бои', callback_data: 'ShowBoi' },
                    { text: 'Переборы', callback_data: 'ShowPerebor' },
                ],
            ]
        }
    })
}

bot.action('ShowBoi', ctx => {
    ctx.deleteMessage();
    ctx.answerCbQuery('Гитарные бои');
    bot.telegram.sendMessage(ctx.chat.id, 'Какой бой Вам нужен?',
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Четверка ', callback_data: 'BoyCherverka' },
                    { text: '4+', callback_data: 'BoyShetPlus' },
                    { text: 'Шестерка', callback_data: 'BoyShesterka' },
                    { text: 'Восьмерка', callback_data: 'BoyVosmerka' }
                ],
                [
                    { text: 'Блатной', callback_data: 'BoyBlatnoy' },
                    { text: 'Высоцкий', callback_data: 'BoyVisotsky' },
                    { text: 'Испанский', callback_data: 'BoyIspansky' },
                    { text: 'Кантри', callback_data: 'BoyCantri' }
                ],
                [
                    { text: 'Назад', callback_data: 'backtoboi' }
                ]
            ]
        }
    })
})

bot.action('BoyCherverka', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAICN16UKmOrNei5eSj7CZ7ZoYeh1PGHAALWrTEbkFOhSDf9MD00mQ_QR8Z-kS4AAwEAAwIAA3gAAwwNAgABGAQ");
    ctx.deleteMessage();
    ctx.answerCbQuery('Бой "Четверка"'); 
    bot.telegram.sendMessage(ctx.chat.id, SuccessMessage,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '4+', callback_data: 'BoyShetPlus' },
                    { text: 'Шестерка', callback_data: 'BoyShesterka' },
                    { text: 'Восьмерка', callback_data: 'BoyVosmerka' },                   
                ],
                [
                    { text: 'Блатной', callback_data: 'BoyBlatnoy' },
                    { text: 'Высоцкий', callback_data: 'BoyVisotsky' },
                    { text: 'Испанский', callback_data: 'BoyIspansky' },
                    { text: 'Кантри', callback_data: 'BoyCantri' }
                ],
                [
                    { text: 'Назад', callback_data: 'backtoboi' }
                ]
            ]
        }
    })
})

bot.action('BoyShesterka', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAICOF6UKmyQNZJrvimq9RwHVVYSKehwAALXrTEbkFOhSBsrhrGbZMBjbGXLDgAEAQADAgADeAADtGoEAAEYBA");
    ctx.deleteMessage();
    ctx.answerCbQuery('Бой "Шестерка"'); 
    bot.telegram.sendMessage(ctx.chat.id, SuccessMessage,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Четверка ', callback_data: 'BoyCherverka' },
                    { text: '4+', callback_data: 'BoyShetPlus' },
                    { text: 'Восьмерка', callback_data: 'BoyVosmerka' },
                ],
                [
                    { text: 'Блатной', callback_data: 'BoyBlatnoy' },
                    { text: 'Высоцкий', callback_data: 'BoyVisotsky' },
                    { text: 'Испанский', callback_data: 'BoyIspansky' },
                    { text: 'Кантри', callback_data: 'BoyCantri' }
                ],
                [
                    { text: 'Назад', callback_data: 'backtoboi' }
                ]
            ]
        }
    })
})

bot.action('BoyVosmerka', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAICOV6UKnZT0LwfrbsYlHbXmJ0c3IJhAALYrTEbkFOhSCiX_Xq_aLziY7C9ki4AAwEAAwIAA3gAA47MAAIYBA");
    ctx.deleteMessage();
    ctx.answerCbQuery('Бой "BoyVosmerka"');
    bot.telegram.sendMessage(ctx.chat.id, SuccessMessage,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Четверка ', callback_data: 'BoyCherverka' },
                    { text: '4+', callback_data: 'BoyShetPlus' },
                    { text: 'Шестерка', callback_data: 'BoyShesterka' },
                ],
                [
                    { text: 'Блатной', callback_data: 'BoyBlatnoy' },
                    { text: 'Высоцкий', callback_data: 'BoyVisotsky' },
                    { text: 'Испанский', callback_data: 'BoyIspansky' },
                    { text: 'Кантри', callback_data: 'BoyCantri' }
                ],
                [
                    { text: 'Назад', callback_data: 'backtoboi' }
                ]
            ]
        }
    })
})

bot.action('BoyBlatnoy', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAICO16UKo4F4SNjH_xXUWVf0InKDLjbAALZrTEbkFOhSHGNLCcegFfXVk_Fki4AAwEAAwIAA3gAA47MAAIYBA");
    ctx.deleteMessage();
    ctx.answerCbQuery('Бой "Блатной"');
    bot.telegram.sendMessage(ctx.chat.id, SuccessMessage,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Четверка ', callback_data: 'BoyCherverka' },
                    { text: '4+', callback_data: 'BoyShetPlus' },
                    { text: 'Шестерка', callback_data: 'BoyShesterka' },
                    { text: 'Восьмерка', callback_data: 'BoyVosmerka' }
                ],
                [
                    { text: 'Высоцкий', callback_data: 'BoyVisotsky' },
                    { text: 'Испанский', callback_data: 'BoyIspansky' },
                    { text: 'Кантри', callback_data: 'BoyCantri' }
                ],
                [
                    { text: 'Назад', callback_data: 'backtoboi' }
                ]
            ]
        }
    })
})

bot.action('BoyVisotsky', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAICPF6UKpZz6sqspEaFl4SYxdqivwnRAALarTEbkFOhSEzp_sxiB5eVF591kS4AAwEAAwIAA3gABA4CAAEYBA");
    ctx.deleteMessage();
    ctx.answerCbQuery('Бой "Высоцкого"');
    bot.telegram.sendMessage(ctx.chat.id, SuccessMessage,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Четверка ', callback_data: 'BoyCherverka' },
                    { text: '4+', callback_data: 'BoyShetPlus' },
                    { text: 'Шестерка', callback_data: 'BoyShesterka' },
                    { text: 'Восьмерка', callback_data: 'BoyVosmerka' }
                ],
                [
                    { text: 'Блатной', callback_data: 'BoyBlatnoy' },
                    { text: 'Испанский', callback_data: 'BoyIspansky' },
                    { text: 'Кантри', callback_data: 'BoyCantri' }
                ],
                [
                    { text: 'Назад', callback_data: 'backtoboi' }
                ]
            ]
        }
    })
})

bot.action('BoyIspansky', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAICPV6UKqGBdsA1AAHaB7Ou9hZXOchdTAAC260xG5BToUg6Dw9J8pgkgppn6JIuAAMBAAMCAAN4AAPVMQACGAQ");
    ctx.deleteMessage();
    ctx.answerCbQuery('Бой "Испанский"');
    bot.telegram.sendMessage(ctx.chat.id, SuccessMessage,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Четверка ', callback_data: 'BoyCherverka' },
                    { text: '4+', callback_data: 'BoyShetPlus' },
                    { text: 'Шестерка', callback_data: 'BoyShesterka' },
                    { text: 'Восьмерка', callback_data: 'BoyVosmerka' }
                ],
                [
                    { text: 'Блатной', callback_data: 'BoyBlatnoy' },
                    { text: 'Высоцкий', callback_data: 'BoyVisotsky' },
                    { text: 'Кантри', callback_data: 'BoyCantri' }
                ],
                [
                    { text: 'Назад', callback_data: 'backtoboi' }
                ]
            ]
        }
    })
})

bot.action('BoyCantri', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAICPl6UKqkT4NQSkDE5qqD1dAh8xUr6AALcrTEbkFOhSNfNpKfcX479pp3CDwAEAQADAgADeAAD_acGAAEYBA");
    ctx.deleteMessage();
    ctx.answerCbQuery('Бой "Кантри"');
    bot.telegram.sendMessage(ctx.chat.id, SuccessMessage,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Четверка ', callback_data: 'BoyCherverka' },
                    { text: '4+', callback_data: 'BoyShetPlus' },
                    { text: 'Шестерка', callback_data: 'BoyShesterka' },
                    { text: 'Восьмерка', callback_data: 'BoyVosmerka' }
                ],
                [
                    { text: 'Блатной', callback_data: 'BoyBlatnoy' },
                    { text: 'Высоцкий', callback_data: 'BoyVisotsky' },
                    { text: 'Испанский', callback_data: 'BoyIspansky' },
                ],
                [
                    { text: 'Назад', callback_data: 'backtoboi' }
                ]
            ]
        }
    })
})

bot.action('BoyShetPlus', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIEDl6UgTZp_19REu4c_szbE6h81owLAAJwrTEbkFOpSMlc1UKcISZa9iZ3kS4AAwEAAwIAA3gAA1kOAgABGAQ");
    ctx.deleteMessage();
    ctx.answerCbQuery('Бой "4+"');
    bot.telegram.sendMessage(ctx.chat.id, SuccessMessage,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Четверка ', callback_data: 'BoyCherverka' },
                    { text: 'Шестерка', callback_data: 'BoyShesterka' },
                    { text: 'Восьмерка', callback_data: 'BoyVosmerka' }
                ],
                [
                    { text: 'Блатной', callback_data: 'BoyBlatnoy' },
                    { text: 'Высоцкий', callback_data: 'BoyVisotsky' },
                    { text: 'Испанский', callback_data: 'BoyIspansky' },
                    { text: 'Кантри', callback_data: 'BoyCantri' }
                ],
                [
                    { text: 'Назад', callback_data: 'backtoboi' }
                ]
            ]
        }
    })
})

bot.action('ShowPerebor', ctx => {
    ctx.deleteMessage();
    ctx.answerCbQuery('Гитарные перебои');
    bot.telegram.sendMessage(ctx.chat.id, 'Какой перебор Вам нужен?',
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Схема "Четверка"', callback_data: 'forChetverka' },
                    { text: 'Схема "Шестерка"', callback_data: 'forShesterka' },
                ],
                [
                    { text: 'Схема "Восьмерка"', callback_data: 'forVosmerka' },
                    { text: 'Вальсовый перебор', callback_data: 'forVals' }
                ],
                [
                    { text: 'Назад', callback_data: 'backtoboi' }
                ]
            ]
        }
    })
})

bot.action('forChetverka', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAICP16UKufKlnp_CxsfgxK03UrcKS-aAALdrTEbkFOhSN_jcq7m0z7rexrBDgAEAQADAgADeAADTRAFAAEYBA");
    ctx.deleteMessage();
    ctx.answerCbQuery('Схема "Четверка"');
    bot.telegram.sendMessage(ctx.chat.id, SuccessMessage,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Схема "Шестерка"', callback_data: 'forShesterka' },
                ],
                [
                    { text: 'Схема "Восьмерка"', callback_data: 'forVosmerka' },
                    { text: 'Вальсовый перебор', callback_data: 'forVals' }
                ],
                [
                    { text: 'Назад', callback_data: 'backtoboi' }
                ]
            ]
        }
    })
})

bot.action('forShesterka', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAICQF6UKvDuTr6jMz5Qkj4-dgeqVnlmAALerTEbkFOhSHAjO-pZufN2q3XBDwAEAQADAgADeAADlqgGAAEYBA");
    ctx.deleteMessage();
    ctx.answerCbQuery('Схема "Шестерка"');
    bot.telegram.sendMessage(ctx.chat.id, SuccessMessage,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Схема "Четверка"', callback_data: 'forChetverka' },
                ],
                [
                    { text: 'Схема "Восьмерка"', callback_data: 'forVosmerka' },
                    { text: 'Вальсовый перебор', callback_data: 'forVals' }
                ],
                [
                    { text: 'Назад', callback_data: 'backtoboi' }
                ]
            ]
        }
    })
})

bot.action('forVosmerka', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAICQV6UKvgIomwOZo0u5zRzhV5xNZNpAALfrTEbkFOhSAVJSTvf1_0aVdWBkS4AAwEAAwIAA3gAA4UKAgABGAQ");
    ctx.deleteMessage();
    ctx.answerCbQuery('Схема "Восьмерка"');
    bot.telegram.sendMessage(ctx.chat.id, SuccessMessage,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Схема "Четверка"', callback_data: 'forChetverka' },
                    { text: 'Схема "Шестерка"', callback_data: 'forShesterka' },
                ],
                [
                    { text: 'Вальсовый перебор', callback_data: 'forVals' }
                ],
                [
                    { text: 'Назад', callback_data: 'backtoboi' }
                ]
            ]
        }
    })
})

bot.action('forVals', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAICQl6UKwABjBqt4XzafwZDFoKH1t7OOQAC4K0xG5BToUgcpOUhLhN_zE4YdJEuAAMBAAMCAAN4AAOaDwIAARgE");
    ctx.answerCbQuery('Вальсовый перебор');
     bot.telegram.sendMessage(ctx.chat.id, SuccessMessage,
     {
         reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Схема "Четверка"', callback_data: 'forChetverka' },
                    { text: 'Схема "Шестерка"', callback_data: 'forShesterka' },
                ],
                [
                    { text: 'Схема "Восьмерка"', callback_data: 'forVosmerka' },
                ],
                [
                    { text: 'Назад', callback_data: 'backtoboi' }
                ]
            ]
        }
    })
})

bot.action('backtoboi', ctx => {
    ctx.deleteMessage();
    BoiPereborMenu(ctx);
})

const SongNum1 =`
Кино - Звезда по имени Солнце
Аккорды: /Am | /C | /Dm | /G 
Бой: Четверка (см. /b4)


/Am
Белый снег, серый лёд
        /C
На растрескавшейся земле.
  /Dm
Одеялом лоскутным на ней
 /G
Город в дорожной петле.
       /Am
А над городом плывут облака,
      /C
Закрывая небесный свет.
       /Dm
А над городом - жёлтый дым.
 /G
Городу две тысячи лет,
  /Dm
Прожитых под светом звезды
          /Am
По имени Солнце.

И 2000 лет война,
Война без особых причин.
Война - дело молодых.
Лекарство против морщин.
Красная-красная кровь -
Через час уже просто земля,
Через два на ней цветы и трава,
Через три она снова жива.
И согрета лучами звезды
По имени Солнце.

И мы знаем, что так было всегда:
Что судьбою больше любим,
Кто живёт по законам другим
И кому умирать молодым.
Он не помнит слова да и слова нет
Он не помнит ни чинов, ни имён.
И способен дотянуться до звёзд,
Не считая, что это сон.
И упасть, опалённым звездой
По имени Солнце.
`;

const SongNum2 =`
Баста - Сансара
Аккорды: /Am | /Am7 | /C | /D | /Em | /G 
Бой: Восьмерка (см. /b8)


/C                           /Am
Делай вопреки, делай от руки,
                            /Em /D
Мир переверни, небо опрокинь.
/C
В каждом наброске, в каждом черновике,
/Am                                  /Em /D
Учитель продолжается в своём ученике.
/C
Всю мою жизнь я иду ко дну,
        /Am                                    /Em
Всю мою жизнь я искал любовь, чтобы любить одну.
       /C                                       /Am
Они сказали: нас поздно спасать и поздно лечить.
                                         /Em
Плевать, ведь наши дети будут лучше, чем мы,
                          /Am7
Лучше, чем мы, лучше, чем мы…

Припев:
  /Am7                /C                      /G
     Когда меня не станет, я буду петь голосами
       /D                   /Am7
     Моих детей и голосами их детей.
                           /C
     Нас просто меняют местами –
                    /Em            /D
     Таков закон сансары, круговорот людей. Ой, мама…

  /Am7                /C                     /G
     Когда меня не станет, я буду петь голосами
       D                   /C
     Моих детей и голосами их детей.
                         /Am7
     Нас просто меняют местами –
                    /Em            /D
     Таков закон сансары, круговорот людей. Ой, мама…

Нас не стереть, мы живём назло,
Пусть не везёт, но мы своё возьмём.
Это небо вместо сцены, здесь всё вверх ногами.
И эти звёзды в темноте – тобой зажжённый фонарь. Эй.
Тысяча меня до меня и после меня будет,
Тысяча меня, и в тысячах не меня тысяча меня.
И мы снова вдребезги, и нас не починить.
Плевать, ведь наши дети будут лучше, чем мы,
Лучше, чем мы, лучше, чем мы…

Припев - 2 раза

  /Am7                /C                      /G
     Когда меня не станет, я буду петь голосами
       D                   /C
     Моих детей и голосами их детей.
                         /Am7
     Нас просто меняют местами –
                    /Em            /D
     Таков закон сансары, круговорот людей. Ой, мама…
`;

const SongNum3 =`
Сектор Газа - Лирика
Аккорды: /A | /E | /Hm | /Fsharpm 
Бой: Перебор "Восьмерка"/ 4+ (см. /p8 | /b4p)


/Fsharpm                /E
Сигарета мелькает во тьме,
       /Hm                    /Fsharpm
Ветер пепел в лицо швырнул мне,
                        /E                    /Hm   /Fsharpm
И обугленный фильтр на пальцах мне оставил ожог.
                             /E
Скрипнув сталью, открылася дверь -
     /Hm             /Fsharpm
Ты идёшь, ты моя теперь,
                     /E               /Hm
Я приятную дрожь ощущаю с головы до ног…

  Припев:
             /A               /E
     Ты со мною забудь обо всём,
          /Hm                  /Fsharpm
     Эта ночь нам покажется сном,
            /A             /E             /A     /E
     Я возьму тебя и прижму как родную дочь!
           /A              /E
     Нас окутает дым сигарет.
           /Hm                     /Fsharpm
     Ты уйдёшь, как настанет рассвет,
           /A               /E                     /Fsharpm
     И следы на постели напомнят про счастливую ночь.

Эротичный лунный свет
Запретит сказать тебе "нет",
И опустится плавно на пол всё твоё бельё.
Шум деревьев и ветер ночной
Стон заглушат твой и мой,
И биение сердца, пылающего адским огнём…

  Припев

  Проигрыш: /A /E /Hm  /Fsharpm  
          /A /E /Hm  /Fsharpm 
          /A /E /Hm  /Fsharpm 
          /A /E /Fsharpm /Fsharpm

Твои бёдра - сиянье луны,
Так прекрасны, и мне так нужны.
Кровь тяжёлым напором ударит прямо в сердце мне.
Груди плавно качнутся в ночи,
Слышишь, как моё сердце стучит.
Два пылающих тела сольются в ночной тишине…

  Припев
`;

const SongNum4 =`
Сплин - Выхода нет
Аккорды: /C | /G | /D | /Em 
Бой: Шестерка (см. /b6)


/C                /G         /D                 /Em
Сколько лет прошло, все о том же гудят провода,
             /C        /G      /D 
Все того же ждут самолеты.
/C            /G       /D                /Em
Девочка с глазами из самого синего льда
           /C       /G
Тает под огнем пулемета.
/C            /G           /D 
Должен же растаять хоть кто-то...

Припев:
               /Em
     Скоро рассвет,
            /C
     Выхода нет,
              /G         /D
     Ключ поверни и полетели
              /Em
     Нужно вписать
                 /C
     В чью-то тетрадь
                    /G       /D
     Кровью, как в метрополитене:
              /C       /D
     "Выхода нет".
            /Em
     Выхода нет!

Где-то мы расстались, не помню, в каких городах,
Словно это было в похмелье.
Через мои песни идут, идут поезда,
Исчезая в темном тоннеле.
Лишь бы мы проснулись в одной постели...

Припев

Сколько лет пройдет, все о том же гудеть проводам,
Все того же ждать самолетам.
Девочка с глазами из самого синего льда
Тает под огнем пулемета.
Лишь бы мы проснулись с тобой в одной постели...

Припев
`;

const SongNum5 =`
Жуки - Батарейка
Аккорды: /A | /Fsharp | /G | /Hm 
Бой: 4+ (см. /b4p)


/Hm       /A             /G      /Fsharp
Холодный ветер с дождём усилился стократно.
/Hm      /A        /G              /Fsharp
Всё говорит об одном: что нет пути обратно,
/Hm        /A       /G           /Fsharp
Что ты не мой лопушок, а я не твой Андрейка,
/Hm       /A          /G    /Fsharp
Что у любви у нашей села батарейка.

Припев:
   /Hm  /A          /G  /Fsharp
     О-уо-ри-я-ри-ё, батарейка,
   /Hm  /A          /G  /Fsharp
     О-уо-ри-я-ри-ё, батарейка.

Я тосковал по тебе в минуты расставанья,
Ты возвращалась ко мне сквозь сны и расстоянья,
Но несмотря ни на что пришла судьба-злодейка,
И у любви у нашей села батарейка.

Припев:
     О-уо-ри-я-ри-ё, батарейка,
     О-уо-ри-я-ри-ё, батарейка.

Проигрыш: /Hm /A /G /Fsharp - 2 раза

И вроде всё как всегда, всё те же чашки-ложки,
Всё та же в кране вода, всё тот же стул без ножки.
И всё о том же с утра щебечет канарейка,
Лишь у любви у нашей села батарейка.

Припев:
     О-уо-ри-я-ри-ё, батарейка,
     О-уо-ри-я-ри-ё, батарейка.

     О-уо-ри-я-ри-ё, батарейка,
     О-уо-ри-я-ри-ё, батарейка.

Проигрыш: /Hm /A /G /Fsharp - 4 раза

     О-уо-ри-я-ри-ё, батарейка,
     О-уо-ри-я-ри-ё, батарейка.

     О-уо-ри-я-ри-ё, батарейка,
     О-уо-ри-я-ри-ё, батарейка…
`;

const SongNum6 =`
Нервы - Самый дорогой человек
Аккорды: /D | /C | /Em | /G 
Бой: Восьмерка (см. /b8)


/Em
И пропадает в миллионах на век, когда-то
 /C
Самый дорогой человек, правда
  /G
Слишком глубокая рана
     /D
Забывать друг друга пора нам
     /Em
Пропадает в миллионах на век, когда-то
 /C
Самый дорогой человек, правда
  /G
Слишком глубокая рана
     /D
Забывают друг друга...

/Em                  /C
Задержи дыхание на миг
                  /G
Ощути какая глубина,
                       /D
В моей голове идет война

Я не принимаю ничего
Из того что чувствую сейчас
проводив тебя в последний раз

Припев:
И пропадает в миллионах на век, когда-то
Самый дорогой человек, правда
Слишком глубокая рана
Забывать друг друга пора нам
Пропадает в миллионах на век, когда-то
Самый дорогой человек, правда
Слишком глубокая рана
Забывать друг друга пора нам

Я слышу твое сердце по ночам
Тобой пропитан каждый сантиметр
Я нахожу тебя во всех вещах

Я тебя никем не заменю
Внутри меня как будто гаснет свет
Срываюсь и опять тебе звоню

      /Em
Ты молчишь
   /C
Я больше тебе никто
    /G                        /D
Ты больше мне ничего не простишь

Припев - 2 раза

Проигрыш: /Em /C /G /D - 2 раза

     /Em
Пропадает в миллионах на век, когда-то
 /C
Самый дорогой человек, правда
  /G
Слишком глубокая рана
     /D
Забывать друг друга...
`;

const SongNum7 =`
ДДТ - Это всё
Аккорды: /G | /C | /Em | /D |  
Бой: Шестерка (см. /b6)


/G
Побледневшие листья окна
      /D
Зарастают прозрачной водой.
     /Em
У воды нет ни смерти, ни дна.
      /C    /D
Я прощаюсь с тобой.
           /G
Горсть тепла после долгой зимы
     /D
Донесем. Пять минут до утра
      /Em
Доживем. Наше море вины
      /C    /D
Поглощает время-дыра.

Припев:
       /G   /D    /Em   /C
     Это все, что останется после меня,
   /G   /D  /C   /D
     Это все, что возьму я с собой.

С нами память сидит у стола,
А в руке ее пламя свечи.
Ты такою хорошей была.
Посмотри на меня, не молчи.
Крики чайки на белой стене
Окольцованы черной луной.
Нарисуй что-нибудь на окне
И шепни на прощанье рекой.

Припев

Две мечты да печали стакан
Мы, воскреснув, допили до дна.
Я не знаю, зачем тебе дан.
Правит мною дорога-луна.
Ты не плачь, если можешь, прости.
Жизнь - не сахар, а смерть нам - не чай.
Мне свою дорогу нести.
До свидания, друг, и прощай.

Припев
`;

const SongNum8 =`
Кис-кис - Молчи 
Аккорды: /A | /Csharpm | /Gsharpm | /H
Бой: "Восьмерка" (см. /b8)


Припев:
    /A                 /Gsharpm                 /Csharpm
Молчи, когда бухой сосед на свою телку кричит
                   /H                     /A
Когда в подъезде снова кто то мрачно торчит
                     /Gsharpm              /Csharpm
Когда в квартиру напротив приезжают врачи
              /H                 /A
Эта песня звучит, моя песня звучит

/A                   /Gsharpm
Я пишу тебе это из комнаты
                    /Csharpm
Собираю слова по вокзалам
                  /H
Мои мысли горечи полные
                   /A
На листке и под одеялом
                    /Gsharpm
Моя юность кажется вечностью
                          /Csharpm
Через призму стеклянных бутылок
                   /H
Вид на улицы бесконечные
                      /A
И фасады панельных могилок
                    /Gsharpm
Все друзья мои по парадным
                    /Csharpm
Коротают беспечную молодость
                           /H
Лишь бушующий, скверный характер
                    /A
Да наивная детская похоть
                           /Gsharpm
Дома проще должно быть, казалось
                       /Csharpm
Быт съедает всё самое лучшее
                      /H
Не смотри, опусти глаза вниз
Не слушай!

Припев

Иногда мне становится страшно,
Что со мной никогда не случится,
Убежать и в кого-то однажды
До беспамятства просто влюбиться,

Мое счастье в том, чтобы вырасти
И уехать подальше отсюда,
Нету повода больше для грусти,
Здесь я точно счастливой не буду.

Здесь меня никто не удержит,
Не заставит с собою быть рядом,
Тут покоится чья-то надежда,
Мне такого исхода не надо,
А пока наплевать на жалость,
Задыхаясь вновь от удушья,
Не смотри, опусти глаза вниз, не слушай.

Припев - 2 раза

/A           /H       /Csharpm
Если стану тише (молчи)
               /Gsharpm        /A
Значит все в порядке (молчи)
              /H       /Csharpm
Завтра будет легче (молчи)
Навряд ли

Припев
`;

const SongNum9 =`
Гречка - Люби меня
Аккорды: /Asharpm | /Csharp | /Dsharpm | /Fsharp | /Gsharp 
Бой: Восьмерка (см. /b8)


/Asharpm /Csharp      /Gsharp    /Fsharp
Непокорная моя любовь
/Asharpm    /Csharp       /Gsharp   /Fsharp
Любит не меня уже который год
/Asharpm     /Csharp       /Gsharp         /Fsharp      /Asharpm
Те же стены и цветы, те же люди и стихи
       /Csharp        /Gsharp
Те же мысли и слова
/Fsharp
Вслух

Припев:
/Fsharp          /Asharpm
Люби меня, люби
         /Csharp
Жарким огнём
         /Gsharp
Ночью и днём
          /Dsharpm
Сердце сжигая

/Fsharp            /Asharpm
Люби меня, люби
       /Csharp
Не улетай
       /Gsharp
Не исчезай
     /Dsharpm
Я умоляю

/Fsharp            /Asharpm /Csharp
Люби меня, люби
              /Gsharp /Dsharpm
Люби меня, люби

Непокорная моя любовь
Любит не меня уже который год
Те же стены и цветы, те же люди и стихи
Те же мысли и слова
Вслух

Припев - 3 раза
`;

const SongNum10 =`
Сектор Газа - 30 лет
Аккорды: /Am | /C | /Dm | /E | /F | /G 
Бой: Шестерка (см. /b6)


/Am
Солнце осветило горизонт,
/F
Утро оборвало мой сладкий сон.
/Dm
Я проснулся, я был поражён:
/G
Ощутил годам урон.

Словно в первый раз я увидел свет,
Словно в первый раз я был им согрет,
Годы ощутил, хоть я и не дед -
Мне сегодня 30 лет!

  Припев:
       /Am                  /Dm
     В этот день родили меня на свет,
       /G                    /C
     В этот день с иголочки я одет,
       /Am                     /F
     В этот день теплом вашим я согрет -
     /Dm          /E
     Мне сегодня 30 лет!

     В этот день скажу юности: "Привет!"
     В этот день я в зрелость возьму билет,
     В этот день и водка не во вред -
     Мне сегодня 30 лет!

Солнце, наливаясь, вошло в зенит,
Музыка в моих ушах звенит,
Не грусти и даже не делай вид,
Каждая нота мне говорит.

Я рукой нащупал свой карман,
Он мне намекнул, что я буду пьян,
Говорит мне день: "Держись, братан!
Лучше протирай стакан!"

  Припев:
     В этот день родили меня на свет,
     В этот день с иголочки я одет,
     В этот день теплом вашим я согрет -
     Мне сегодня 30 лет!

     В этот день скажу юности: "Привет!"
     В этот день я в зрелость возьму билет,
     В этот день и водка не во вред -
     Мне сегодня 30 лет!

  Проигрыш: /Am /Am /F /F /Dm /Dm /G /G

Солнце опустилось за горизонт,
Дома у меня стаканов звон:
Собрались друзья со всех сторон.
Друг, врубай магнитофон!

Я имею право сегодня пить,
Я имею право сегодня жить,
Я имею право про всё забыть,
Да, чего там говорить!

  Припев:
     В этот день родили меня на свет,
     В этот день с иголочки я одет,
     В этот день теплом вашим я согрет -
     Мне сегодня 30 лет!

     В этот день скажу юности: "Привет!"
     В этот день я в зрелость возьму билет,
     В этот день и водка не во вред -
     Мне сегодня 30 лет!

     В этот день родили меня на свет,
     В этот день с иголочки я одет,
     В этот день теплом вашим я согрет -
     Мне сегодня 30 лет!

     В этот день скажу юности: "Привет!"
     В этот день я в зрелость возьму билет,
     В этот день и водка не во вред -
     Мне сегодня 30 лет!
`;

const SongNum11 =`
ДДТ - Что такое осень
Аккорды: /Am | /E | /A7 | /Dm | /F 
Бой: Шестерка (см. /b6)


/Am      /E            /Am
Что такое осень - это небо,
  /A7                 /Dm
Плачущее небо под ногами.
  /Dm          /E       /Am         /F
В лужах разлетаются птицы с облаками,
/Dm           /E          /Am       /A7
Осень, я давно с тобою не был.
  /Dm          /E       /Am         /F
В лужах разлетаются птицы с облаками,
/Dm           /E          /Am       /E
Осень, я давно с тобою не был.

  Припев:
     /Am        /F     /Dm       /E
     Осень, в небе жгут корабли.
     /Am       /F      /Dm         /E
     Осень, мне бы прочь от земли.
      /Dm         /E    /Am      /F
     Там, где в море тонет печаль,
     /Dm              /E
     Осень - тёмная даль.

Что такое осень - это камни,
Верность над чернеющей Невою.
Осень вновь напомнила душе о самом главном,
Осень, я опять лишён покоя.
Осень вновь напомнила душе о самом главном,
Осень, я опять лишён покоя.

  Припев

Что такое осень - это ветер
Вновь играет рваными цепями.
Осень, доползём ли, долетим ли до ответа:
Что же будет с родиной и с нами?
Осень, доползём ли, долетим ли до рассвета?
Осень, что же будет с завтра с нами?

  Припев

  Припев:
     Тает стаей город во мгле,
     Осень, что я знал о тебе?
     Сколько будет рваться листва?
     Осень вечно права!
`;

const SongNum12 =`
Сектор Газа - Туман
Аккорды: /A | /D | /Em | /G | /Hm | /Fsharp 
Бой: Четверка (2 раза на 1 аккорд) (см. /b4)


/Hm           /Em
Было хорошо, было так легко,
 /Fsharp                  /Hm
Но на шею бросили аркан.
                /Em
Солнечный огонь атмосферы бронь
  /Fsharp                      /Hm
Пробивал, но не пробил туман.

  Припев:
                /Em       /A         /D     /Hm
     И мёртвый месяц еле освещает путь,
               /Em            /A              /D     /Hm
     И звёзды давят нам на грудь, не продохнуть.
              /Em           /A
     И воздух ядовит как ртуть,
                 /D               /G
     Нельзя свернуть, нельзя шагнуть,
               /Em          /Fsharp             /Hm
     И не пройти нам этот путь в такой туман…

А куда шагнуть, Бог покажет путь,
Бог для нас всегда бесплотный вождь!
Нас бросает в дрожь, вдруг начался дождь,
Нас добьёт конкретный сильный дождь.

  Припев:
     И месяц провоцирует нас на обман,
     И испарение земли бьёт как дурман.
     И каждый пень нам, как капкан,
     И хлещет кровь из наших ран,
     И не пройти нам этот путь в такой туман…

  Проигрыш: /Hm /Em /Fsharp /Hm /Hm /Em /Fsharp /Hm

Всё пошло на сдвиг, наша жизнь как миг,
Коротка, как юбка у путан.
Нам всё нипочём, через левое плечо
Плюнем, и пойдём через туман.

  Припев:
     Пусть мёртвый месяц еле освещает путь,
     Пусть звёзды давят нам на грудь - не продохнуть.
     Пусть воздух ядовит как ртуть,
     И пусть не видно, где свернуть,
     Но мы пройдём опасный путь через туман!

     Пусть месяц провоцирует нас на обман,
     Пусть испарение земли бьёт как дурман.
     Пусть каждый пень нам, как капкан,
     Пусть хлещет кровь из наших ран,
     Но мы пройдём с тобою путь через туман,
                /Em          /Fsharp           /Hm
     Но мы пройдём с тобою путь через туман,
                /Em          /Fsharp           /Hm
     Но мы пройдём опасный путь через туман!
`;

const SongNum13 =`
Би-2 - Серебро
Аккорды: /Am | /Dm | /E | /F
Бой: 4+ (см. /b4p)


/Am    /F  /Dm
"Я не вернусь", -
         /E      /Am         /F    /Dm
Так говорил когда-то, и туман
         /E     /Am
Глотал мои слова
         /F        /Dm    /E
И превращал их в воду.
         /Am  /F  /Dm
Я все отдам
          /E       /Am
За продолжение пути,
         /F   /Dm
Оставлю позади
         /E         /Am    /F  /Dm  /E
Свою беспечную свободу.

  Припев:
  /Dm         /E              /Am
     Не потерять бы в серебре
           /F     /Dm   /E
     Ее одну, заветную...

Не по себе
От этой тихой и чужой зимы,
С которой я на ты,
Нам не стерпеть друг друга.
И до войны
Мне не добраться никогда,
Моя безумная звезда
Ведет меня по кругу.

  Припев

А в облаках
Застыл луны неверный свет, и в нем
Перемешались города,
И я зову ее несмело.

  Припев
`;

const SongNum14 =`
Танцы Минус - Половинка
Аккорды: /A | /Dm | /F | /Asharp 
Бой: 4+ (см. /b4p)


/Dm    /Asharp     /F         /A        /Dm
У ночного огня, под огромной луной
        /Asharp     /F         /A         /Dm
Темный лес укрывал нас зеленой листвой.
     /Asharp     /F        /A      /Dm
Я тебя целовал у ночного огня,
     /Asharp     /F   /A  /Dm  /Asharp  /F
Я тебе подарил
     /A       /Dm /Asharp /F /A
Половинку себя.

  Проигрыш: /Dm /Asharp /F /A

Свет далекой звезды, песни птиц до утра,
Ты смотрела в глаза мои, шептала слова.
Ты не верила мне, но любила меня.
Я оставил с тобой
Половинку себя.

То, что было, забыто, то, что было, прошло.
Ты махала мне в след бирюзовым платком.
Я тебя целовал у ночного огня.
Ты оставила мне
Половинку меня.
`;

const SongNum15 =`
Нервы - Батареи
Аккорды: /A | /Csharpm | /Gsharpm | /H
Бой: Шестерка (см. /b6)


/A                    /H
мой прокуренный голос. твои теплые губы. 
          /Gsharpm                        /Csharpm
нам так нравится мерзнуть. нам не нравятся клубы. 
но конечно уверенны. забери мое сердце. 
его хватит надолго. чтобы согреться. 
не довольны прохожие. что мы ярко одеты. 
я бы дал им по роже. но сейчас не до этого. 
я такой безнадежный. ты такая нарядная. 
идеальное ложе. пустое парадное. 

Припев:
  /A                  /H
Плакали плакали батареи и трубы 
    /Gsharpm             /Csharpm  
я целую целую твои нежные губы 
и мало ли мало ли.что подумают люди. 
я такую такую никогда не забуду. 
Плакали плакали батареи и трубы 
я целую целую твои нежные губы 
и мало ли мало ли.что подумают люди. 
я такую такую никогда не забуду. 

знаешь, думать и парится бесполезная тема. 
мы с тобой поднимаемся по лезвию в небо. 
и не хочется сдержанным быть и обыкновенным. 
когда ты это бешенство запускаешь по венам. 
запотевшее стекла и картины руками. 
эти белые стены стали для нас облаками. 
ты такая красивая. словно мне это снится. 
это только сейчас. это не повторится.
`;

const SongNum16 =`
Ария - Потерянный рай
Аккорды: /Am | /C | /D | /E | /F | /G | /Hm | /Dm | /Em
Бой: Восьмерка (см. /b8)


/Am               /D      
От края до края небо в огне сгорает,
/F                       /C          /G
И в нём исчезают все надежды и мечты,
/Am                 /D 
Но ты засыпаешь, и ангел к тебе слетает.
/F                          /C           /G
Смахнёт твои слёзы, и во сне смеёшься ты.
  Припев:
        /F        /G               /Am 
   Засыпай на руках у меня, засыпай.
        /F      /G             /Am
   Засыпай    под пенье дождя.
        /F             /G               /Am  /G   /C    /Dm
   Далеко - там, где неба кончается край
                    /G        /Am
   Ты найдёшь    потерянный рай. 

Во сне хитрый демон может пройти сквозь стены,
Дыханье у спящих он умеет похищать.
Бояться не надо, душа моя будет рядом
Твои сновиденья до рассвета охранять.

  Припев

  Проигрыш:  /Am /D /F /C /G

 /Hm                    /E
Подставлю ладони - их болью своей наполни,
/G                         /D           /A
Наполни печалью, страхом гулкой темноты.
 /Hm                   /E
И ты не узнаешь, как небо в огне сгорает, 
/G                        /D        /A
И жизнь разбивает все надежды и мечты.
  Припев:
        /G        /A               /Hm
   Засыпай на руках у меня, засыпай.
        /G      /A           /Hm
   Засыпай    под пенье дождя.
        /G             /A             /Hm    /A   /D   /Em
   Далеко - там, где неба кончается край
                  /A         /Hm
   Ты найдёшь    потерянный рай. 
`;

const SongNum17 =`
Ария - Беспечный ангел
Аккорды: /Em | /C | /G | /D | /Am | /H7 
Бой: Восьмерка (см. /b8)


/Em
Этот парень был из тех,
      /C           /G
Кто просто любит жизнь,
                   /Em
Любит праздники и громкий смех,
/C             /D
Пыль дорог и ветра свист.
          /Am        /G
Он был везде и всегда своим -
            /D        /Am
Влюблял в себя целый свет
/D                   /Em
И гнал свой Байк, а не лимузин.
/C                   /D
Таких друзей больше нет...

И в гостиной при свечах
Он танцевал, как Бог,
Но зато менялся на глазах,
Только вспомнит шум дорог.
Все что имел - тут же тратил,
И, за порог сделав шаг, 
Мой друг давал команду братьям,
Вверх поднимая кулак...

Припев:          /Em      /C   /D
     Ты летящий вдаль, вдаль Ангел,
                 /C      /H7   /Em
     Ты летящий вдаль, вдаль Ангел.
          /C                         /D
     Ты один только друг - друг на все времена,
          /C               /D
     Немного таких среди нас.
                  /Am      /C     /G
     Ты летящий вдаль Беспечный Ангел.

Под гитарный жесткий рок,
Который так любил,
На "Харлее" он домчать нас мог
До небес и звезд любых,
Но он исчез, и никто не знал,
Куда теперь мчит его байк.
Один бродяга нам сказал,
Что он отправился в рай!

Припев:
     Ты летящий вдаль, вдаль Ангел,
     Ты летящий вдаль, вдаль Ангел.
     Но Ад стал союзником Рая в ту ночь,
     Против тебя одного...
     Ты летящий вдаль беспечный Ангел,

     Ты летящий вдаль, вдаль Ангел,
     Ты летящий вдаль, вдаль Ангел.
     Но Ад стал союзником Рая в ту ночь,
     Против тебя одного...
     Ты летящий вдаль беспечный Ангел.

     Ты летящий вдаль беспечный Ангел.
`;

const SongNum18 =`
Звери - Районы-кварталы
Аккорды: /Am | /Dm | /E | /F
Бой: Четверка (см. /b4)


/Am         /Dm
Больше нечего ловить -
  /E           /Am
Все что надо, я поймал.
           /Dm
Надо сразу уходить,
  /E             /Am
Чтоб никто не привыкал.

          /Dm
Ярко-желтые очки,
  /E           /Am
Два сердечка на брелке,
 /F       /Dm
Развеселые зрачки,
  /E
Твое имя на руке.

  Припев:
        /Am        /Dm      /E      /Am
     Районы, кварталы, жилые массивы.
     /F     /Dm     /E     /Am
     Я ухожу, ухожу красиво.

     Районы, кварталы, жилые массивы.
     Я ухожу, ухожу красиво.

У тебя все будет класс,
Будут ближе облака.
Я хочу, как в первый раз,
И поэтому - пока!

Ярко-желтые очки,
Два сердечка на брелке,
Развеселые зрачки,
Я шагаю налегке.

  Припев

Вот и все, никто не ждет,
И никто не в дураках.
Кто-то любит, кто-то врет
И летает в облаках.

Ярко-желтые очки,
Два сердечка на брелке,
Развеселые зрачки,
Я шагаю налегке.

  Припев
`;

const SongNum19 =`
Сплин - Романс
Аккорды: /A7 | /Dm | /F | /Gm
Бой: Четверка (см. /b4)


/A7           /Dm
И лампа не горит,
/A7            /Dm
И врут календари,
/Gm            /F                      /Gm    /A7
И если ты давно хотела что-то мне сказать,
        /Dm
То говори.

Любой обманчив звук,
Страшнее - тишина,
Когда в самый разгар веселья падает из рук
Бокал вина.

И черный кабинет,
И ждет в стволе патрон,
Так тихо, что я слышу, как идет на глубине
Вагон метро.

На площади полки,
Темно в конце строки,
И в телефонной трубке, эти много лет спустя,
Одни гудки.

И где-то хлопнет дверь,
И дрогнут провода.
"Привет! Мы будем счастливы теперь
И навсегда".

"Привет! Мы будем счастливы теперь
И навсегда".
`;

const SongNum20 =`
Любэ - Конь
Аккорды: /Am | /C | /Dm | /E | /F | /G
Бой: Перебор "Шестерка" (см. /p6)


/Am         /F        /E
Выйду ночью в поле с конём,
/Am              /C       /E
Ночкой тёмной тихо пойдём.
        /Dm      /G   /C           /F
Мы пойдём с конём по полю вдвоём,
         /Dm             /E       /Am
Мы пойдём с конём по полю вдвоём.    - 2 раза

Ночью в поле звёзд благодать,
В поле никого не видать...
Только мы с конём по полю идём,
Только мы с конём по полю идём.

Сяду я верхом на коня -
Ты неси по полю меня!
По бескрайнему полю моему,
По бескрайнему полю моему.

Дай-ка я разок посмотрю,
Где рождает поле зарю.
Ай, брусничный свет, алый да рассвет,
Али есть то место, али его нет?

Полюшко моё, родники,
Дальних деревень огоньки,
Золотая рожь да кудрявый лён -
Я влюблён в тебя, Россия, влюблён

Будет добрым год-хлебород.
Было всяко, всяко пройдёт
Пой, златая рожь, пой, кудрявый лён,
Пой, о том, как я в Россию влюблён!

Пой, златая рожь, пой, кудрявый лён
Мы идём с конём по полю вдвоём...
`;

const SongNum21 =`
ДДТ - Метель
Аккорды: /C | /D | /Em | /G
Бой: 4+ (см. /b4p)


/Em   /C        /G    /D /Em
Коронована луной,
       /C          /G /D /Em
Как начало - высока,
       /C             /G     /D /Em
Как победа - не со мной,
       /C             /G   /D /Em
Как надежда - не легка.
      /C            /G /D /Em
За окном стеной метель,
          /C          /G    /D /Em
Жизнь по горло занесло,
      /C            /G /D /Em
Сорвало финал с петель,
     /C           /G     /D /Em
Да поела все тепло...

  Припев:
      /Em         /C          /G
     Играй, как можешь, сыграй,
                /D       /Em
     Закрой глаза и вернись,
              /C         /G
     Не пропади, но растай
            /D       /Em
     Да колее поклонись,
            /C      /G
     Мое окно отогрей,
               /D       /Em
     Пусти по полю весной,
             /C         /G
     Не доживи, но созрей,
               /D         /Em
     И будешь вечно со мной,
               /C         /G
     И будешь вечно со мной,
               /D        /Em   /C /G /D
     И будешь вечно со мной,
         /Em   /C /G /D
     Со мной.

Ищут землю фонари,
К небу тянется свеча,
На снегу следы зари -
Крылья павшего луча.
Что же, вьюга, наливай,
Выпьем время натощак,
Я спою, ты в такт пролай
О затерянных вещах.

  Припев

Осторожно, не спеша,
С белым ветром на груди,
Где у вмерзшей в лед ладьи
Ждет озябшая душа...

  Припев
`;

const SongNum22 =`
Би-2 - Мой рок-н-ролл
Аккорды: /Am | /F7 | /F | /G
Бой: Перебор "Восьмерка" (см. /p8)


/F             /G         /Am       /G
И то, что было, набело откроется потом.
          /F7              /G                /Am    /G
Мой Rock n Roll - это не цель, и даже не средство
     
Не новое, а заново, один и об одном     
Дорога - мой дом, и для любви это не место.

    Припев:
       /F                   /G   
  Прольются все слова как дождь,
     /Am             
  И там, где ты меня не ждешь,
      /F              /G            /Am     /G
  Ночные ветры принесут тебе прохладу.
  На наших лицах без ответа 
  Лишь только отблески рассвета того,
  Где ты меня не ждешь

А дальше - это главное - похоже на тебя      
В долгом пути я заплету волосы лентой      
И не способный на покой я знак подам тебе рукой  
Прощаясь с тобой, как будто с легендой      

    Припев
`;

const SongNum23 =`
Би 2 - Компромисс
Аккорды: /Gm | /F | /Dsharp | /Cm | /Asharp
Бой: Шестерка (см. /b6)


/Gm               /Cm /F     /Asharp
Друг дорогой что ты сделал с собой
/Asharp    /F /Gm                /Cm /F  /Asharp  /Asharp /F
Был худой молодой ел сердца
Пил и курил зажигал и гасил
Думал будешь таким до конца

Припев:
/Dsharp             /Asharp
Оставлен за спиной
/Gm                 /F
Возраст Христа
Обратной стороной
Повернулась мечта
                      /Gm 
Лежит на струнах пыль
                   /Asharp
Ржавеет под окном
                    /F
Разбитый телевизор
Ты сгладил все углы
И жизнь твоя сплошной
Проклятый компромисс
Не вверх не вниз


Друг дорогой как ты ладишь с тоской
Выбираешь запой или спорт
Может рискнёшь стариною тряхнёшь
Напоследок возьмёшь свой аккорды

Припев.
`;

const SongNum24 =`
Нервы - Вороны
Аккорды: /A | /Asus4 | /Em | /Fsharp | /Fsharpm | /G | /Fsharp7 | /Hm
Бой: Восьмерка (см. /b8)


/Hm
Воля в кулаке, мысли в разные стороны,
                       /A      /G
По моей комнате гуляют чёрные вороны.
                            /Fsharp
На потолке чувства одинокие собраны,
               /Fsharp7                   /Hm
Они с грохотом падают мне на голову.

Не сошел с ума и вполне осознанно
Я вдыхаю этот яд вместе с воздухом.
Туман не уходит с возрастом,
Я ищу, я кричу охрипшим голосом.

Эти полосы чёрно-белые,
Я нашел любовь, но потерял в неё веру.
Она жива, и она ещё дышит,
И я чувствую, она меня тоже ищет.

Болит голова, но нет аспирина.
Так зачем же я пью эти таблетки от кашля?
Не нужны заменители этого мира -
Есть болезнь, от которой нет лекарства.

Припев:
     /Hm
     Мне нужен свежий воздух.
     И мне не страшно.
   /G
     Билет на поезд,
                /Em
     Куда не важно.
     Я не боюсь потерять всё,
       /G             /Asus4     /A     /Hm
     Начать заново оттуда, куда занесёт.

     Мне нужен свежий воздух.
     И мне не страшно.
     Билет на поезд,
     Куда не важно.
     Я не боюсь потерять всё,
     Начать заново оттуда, куда занесёт.

Секс расслабляет, но не даёт покоя.
Раньше я был хороший, теперь скажи, какой я?
И насколько аморален
В этом мире безупречном, чистом и правильном?

Ноль эмоций на лице, как из-под ареста
Я молча выхожу из её подъезда.
Всё честно, мы друг другу не обязаны,
Но я чувствую себя разбитым и грязным.

Мои руки связаны моими же руками,
Стоя на краю и я вспоминаю о маме.
Думаю, я бы её огорчил,
Если б покинул этот мир у неё не спросив.

Но воля в кулаке, воля в кулаке, воля в кулаке!
Видишь, я не сдамся этой тоске.
Мои мысли, идите на четыре стороны,
Но не трогайте, не трогайте меня, вороны.

Припев:
     Мне нужен свежий воздух.
     И мне не страшно.
     Билет на поезд,
     Куда не важно.
     Я не боюсь потерять всё,
     Начать заново оттуда, куда занесёт.

     Мне нужен свежий воздух.
     И мне не страшно.
     Билет на поезд,
     Куда не важно.
     Я не боюсь потерять всё,
     Начать заново оттуда, куда занесёт.

        /Hm                      /G           /Fsharpm
     Не страшно, не страшно, не страшно, не страшно,
        /Hm                      /G           /Fsharpm
     Не страшно, не страшно, не страшно, не ааа…

/Hm
Воля в кулаке, мысли в разные стороны,
По моей комнате гуляют чёрные вороны.
`;

const SongNum25 =`
Сплин - Мое сердце
Аккорды: /A | /D | /G | /Hm
Бой: Шестерка (см. /b6)


/D                 /G      /D    
Мы не знали друг друга до этого лета,
    /G          /D        /A      /Hm  
Болтались по свету, земле и воде.
И совершенно случайно мы взяли билеты
На соседние кресла на большой высоте.
 
  Припев:
            /D     /G      /D
     И мое сердце остановилось, 
                /A    /Hm
     Мое сердце замерло...

И ровно тысячу лет мы просыпаемся вместе,
Даже если уснули в разных местах.
Мы идем ставить кофе под Элвиса Пресли,
Кофе сбежал под Propeller heads, ах!

  Припев

И, может быть, ты не стала звездой в Голливуде,
Не выходишь на подиум в нижнем белье.
У тебя не берут автографы люди,
И поешь ты чуть тише, чем Монсеррат Кабалье.

Так и я, слава Богу, не Ricky, не Martin,
Не выдвигался на Оскар, французам не забивал.
Моим именем не назван город на карте,
Но задернуты шторы и разложен диван.

  Припев

Я наяву вижу то, что многим даже не снилось,
Не являлось под кайфом, не стучалось в стекло.
Мое сердце остановилось, отдышалось немного
И снова пошло.

  Припев
`;


bot.command(["song1"], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, SongNum1,
    
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к списку песен', callback_data: 'SongsWithStuff' },
                    
                ],
            ]
        }
    })
}) 

bot.command(["song2"], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, SongNum2,
    
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к списку песен', callback_data: 'SongsWithStuff' },
                    
                ],
            ]
        }
    })
}) 

bot.command(["song3"], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, SongNum3,
    
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к списку песен', callback_data: 'SongsWithStuff' },
                    
                ],
            ]
        }
    })
}) 

bot.command(["song4"], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, SongNum4,
    
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к списку песен', callback_data: 'SongsWithStuff' },
                    
                ],
            ]
        }
    })
}) 

bot.command(["song5"], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, SongNum5,
    
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к списку песен', callback_data: 'SongsWithStuff' },
                    
                ],
            ]
        }
    })
}) 

bot.command(["song6"], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, SongNum6,
    
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к списку песен', callback_data: 'List2' },
                    
                ],
            ]
        }
    })
}) 

bot.command(["song7"], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, SongNum7,
    
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к списку песен', callback_data: 'List2' },
                    
                ],
            ]
        }
    })
}) 

bot.command(["song8"], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, SongNum8,
    
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к списку песен', callback_data: 'List2' },
                    
                ],
            ]
        }
    })
}) 

bot.command(["song9"], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, SongNum9,
    
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к списку песен', callback_data: 'List2' },
                    
                ],
            ]
        }
    })
}) 

bot.command(["song10"], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, SongNum10,
    
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к списку песен', callback_data: 'List2' },
                    
                ],
            ]
        }
    })
}) 

bot.command(["song11"], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, SongNum11,
    
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к списку песен', callback_data: 'List3' },
                    
                ],
            ]
        }
    })
}) 

bot.command(["song12"], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, SongNum12,
    
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к списку песен', callback_data: 'List3' },
                    
                ],
            ]
        }
    })
}) 

bot.command(["song13"], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, SongNum13,
    
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к списку песен', callback_data: 'List3' },
                    
                ],
            ]
        }
    })
}) 

bot.command(["song14"], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, SongNum14,
    
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к списку песен', callback_data: 'List3' },
                    
                ],
            ]
        }
    })
}) 

bot.command(["song15"], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, SongNum15,
    
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к списку песен', callback_data: 'List3' },
                    
                ],
            ]
        }
    })
}) 

bot.command(["song16"], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, SongNum16,
    
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к списку песен', callback_data: 'List4' },
                    
                ],
            ]
        }
    })
}) 

bot.command(["song17"], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, SongNum17,
    
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к списку песен', callback_data: 'List4' },
                    
                ],
            ]
        }
    })
}) 

bot.command(["song18"], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, SongNum18,
    
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к списку песен', callback_data: 'List4' },
                    
                ],
            ]
        }
    })
}) 

bot.command(["song19"], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, SongNum19,
    
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к списку песен', callback_data: 'List4' },
                    
                ],
            ]
        }
    })
}) 

bot.command(["song20"], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, SongNum20,
    
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к списку песен', callback_data: 'List4' },
                    
                ],
            ]
        }
    })
}) 

bot.command(["song21"], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, SongNum21,
    
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к списку песен', callback_data: 'List5' },
                    
                ],
            ]
        }
    })
}) 

bot.command(["song22"], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, SongNum22,
    
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к списку песен', callback_data: 'List5' },
                    
                ],
            ]
        }
    })
}) 

bot.command(["song23"], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, SongNum23,
    
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к списку песен', callback_data: 'List5' },
                    
                ],
            ]
        }
    })
}) 

bot.command(["song24"], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, SongNum24,
    
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к списку песен', callback_data: 'List5' },
                    
                ],
            ]
        }
    })
}) 

bot.command(["song25"], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, SongNum25,
    
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Назад к списку песен', callback_data: 'List5' },
                    
                ],
            ]
        }
    })
}) 

const SongList1 =`
Список песен с описанием. Страница 1

Кино - Звезда по имени Солнце
Аккорды: /Am | /C | /Dm | /G 
Бой: Четверка (см. /b4)
Перейти к песне: /song1

Баста - Сансара
Аккорды: /Am | /Am7 | /C | /D | /Em | /G 
Бой: Восьмерка (см. /b8)
Перейти к песне: /song2

Сектор Газа - Лирика
Аккорды: /A | /E | /Hm | /Fsharpm 
Бой: Перебор "Восьмерка"/ 4+ (см. /p8 | /b4p)
Перейти к песне: /song3

Сплин - Выхода нет
Аккорды: /C | /G | /D | /Em 
Бой: Шестерка (см. /b6)
Перейти к песне: /song4

Жуки - Батарейка
Аккорды: /A | /Fsharp | /G | /Hm 
Бой: 4+ (см. /b4p)
Перейти к песне: /song5
`;

const SongList2 =`
Список песен с описанием. Страница 2

Нервы - Самый дорогой человек
Аккорды: /D | /C | /Em | /G 
Бой: Восьмерка (см. /b8)
Перейти к песне: /song6

ДДТ - Это всё
Аккорды: /G | /C | /Em | /D   
Бой: Шестерка (см. /b6)
Перейти к песне: /song7

Кис-кис - Молчи
Аккорды: /A | /Csharpm | /Gsharpm | /H
Бой: "Восьмерка" (см. /b8)
Перейти к песне: /song8

Гречка - Люби меня
Аккорды: /Asharpm | /Csharp | /Dsharpm | /Fsharp | /Gsharp 
Бой: Восьмерка (см. /b8)
Перейти к песне: /song9

Сектор Газа - 30 лет
Аккорды: /Am | /C | /Dm | /E | /F | /G 
Бой: Шестерка (см. /b6)
Перейти к песне: /song10
`;

const SongList3 =`
Список песен с описанием. Страница 3

ДДТ - Что такое осень
Аккорды: /Am | /E | /A7 | /Dm | /F 
Бой: Шестерка (см. /b6)
Перейти к песне: /song11

Сектор Газа - Туман
Аккорды: /A | /D | /Em | /G | /Hm | /Fsharp 
Бой: Четверка (2 раза на 1 аккорд) (см. /b4)
Перейти к песне: /song12

Би-2 - Серебро
Аккорды: /Am | /Dm | /E | /F
Бой: 4+ (см. /b4p)
Перейти к песне: /song13

Танцы Минус - Половинка
Аккорды: /A | /Dm | /F | /Asharp 
Бой: 4+ (см. /b4p)
Перейти к песне: /song14

Нервы - Батареи
Аккорды: /A | /Csharpm | /Gsharpm | /H
Бой: Шестерка (см. /b6)
Перейти к песне: /song15
`;

const SongList4 =`
Список песен с описанием. Страница 4

Ария - Потерянный рай
Аккорды: /Am | /C | /D | /E | /F | /G | /Hm | /Dm | /Em
Бой: Восьмерка (см. /b8)
Перейти к песне: /song16

Ария - Беспечный ангел
Аккорды: /Em | /C | /G | /D | /Am | /H7 
Бой: Восьмерка (см. /b8)
Перейти к песне: /song17

Звери - Районы-кварталы
Аккорды: /Am | /Dm | /E | /F
Бой: Четверка (см. /b4)
Перейти к песне: /song18

Сплин - Романс
Аккорды: /A7 | /Dm | /F | /Gm
Бой: Четверка (см. /b4)
Перейти к песне: /song19

Любэ - Конь
Аккорды: /Am | /C | /Dm | /E | /F | /G
Бой: Перебор "Шестерка" (см. /p6)
Перейти к песне: /song20
`;

const SongList5 =`
Список песен с описанием. Страница 5

ДДТ - Метель
Аккорды: /C | /D | /Em | /G
Бой: 4+ (см. /b4p)
Перейти к песне: /song21

Би-2 - Мой рок-н-ролл
Аккорды: /Am | /F7 | /F | /G
Бой: Перебор "Восьмерка" (см. /p8)
Перейти к песне: /song22

Би 2 - Компромисс
Аккорды: /Gm | /F | /Dsharp | /Cm | /Asharp
Бой: Шестерка (см. /b6)
Перейти к песне: /song23

Нервы - Вороны
Аккорды: /A | /Asus4 | /Em | /Fsharp | /Fsharpm | /G | /Fsharp7 | /Hm
Бой: Восьмерка (см. /b8)
Перейти к песне: /song24

Сплин - Мое сердце
Аккорды: /A | /D | /G | /Hm
Бой: Шестерка (см. /b6)
Перейти к песне: /song25
`;

const ShowAllSongs =`
Список всех разобранных песен.

/song1 - Кино - Звезда по имени Солнце
/song2 - Баста - Сансара
/song3 - Сектор Газа - Лирика
/song4 - Сплин - Выхода нет
/song5 - Жуки - Батарейка
/song6 - Нервы - Самый дорогой человек
/song7 - ДДТ - Это всё
/song8 - Кис-кис - Молчи
/song9 - Гречка - Люби меня
/song10 - Сектор Газа - 30 лет
/song11 - ДДТ - Что такое осень
/song12 - Сектор Газа - Туман
/song13 - Би-2 - Серебро
/song14 - Танцы Минус - Половинка
/song15 - Нервы - Батареи
/song16 - Ария - Потерянный рай
/song17 - Ария - Беспечный ангел
/song18 - Звери - Районы-кварталы
/song19 - Сплин - Романс
/song20 - Любэ - Конь
/song21 - ДДТ - Метель
/song22 - Би-2 - Мой рок-н-ролл
/song23 - Би 2 - Компромисс
/song24 - Нервы - Вороны
/song25 - Сплин - Мое сердце
`;

function SongsMenu(ctx) {
    bot.telegram.sendMessage(ctx.chat.id, 'Что Вас интересует?',
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Список песен с описанием', callback_data: 'SongsWithStuff' },
                    
                ],
                [
                    { text: 'Краткий список всех песен', callback_data: 'AllSongs' }
                ]
            ]
        }
    })
}

bot.action('SongsWithStuff', ctx => {
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, SongList1,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '>1<', callback_data: 'List1' },
                    { text: '2', callback_data: 'List2' },
                    { text: '3', callback_data: 'List3' },
                    { text: '4', callback_data: 'List4' },
                    { text: '5', callback_data: 'List5' },
                ],
                [
                    { text: 'Краткий список всех песен', callback_data: 'AllSongs' }
                ],
            ]
        }
    })
})

bot.action('List1', ctx => {
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, SongList1,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '>1<', callback_data: 'List1' },
                    { text: '2', callback_data: 'List2' },
                    { text: '3', callback_data: 'List3' },
                    { text: '4', callback_data: 'List4' },
                    { text: '5', callback_data: 'List5' },
                ],
                [
                    { text: 'Краткий список всех песен', callback_data: 'AllSongs' }
                ],
            ]
        }
    })
})

bot.action('List2', ctx => {
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, SongList2,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '1', callback_data: 'List1' },
                    { text: '>2<', callback_data: 'List2' },
                    { text: '3', callback_data: 'List3' },
                    { text: '4', callback_data: 'List4' },
                    { text: '5', callback_data: 'List5' },
                ],
                [
                    { text: 'Краткий список всех песен', callback_data: 'AllSongs' }
                ],
            ]
        }
    })
})

bot.action('List3', ctx => {
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, SongList3,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '1', callback_data: 'List1' },
                    { text: '2', callback_data: 'List2' },
                    { text: '>3<', callback_data: 'List3' },
                    { text: '4', callback_data: 'List4' },
                    { text: '5', callback_data: 'List5' },
                ],
                [
                    { text: 'Краткий список всех песен', callback_data: 'AllSongs' }
                ],
            ]
        }
    })
})

bot.action('List4', ctx => {
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, SongList4,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '1', callback_data: 'List1' },
                    { text: '2', callback_data: 'List2' },
                    { text: '3', callback_data: 'List3' },
                    { text: '>4<', callback_data: 'List4' },
                    { text: '5', callback_data: 'List5' },
                ],
                [
                    { text: 'Краткий список всех песен', callback_data: 'AllSongs' }
                ],
            ]
        }
    })
})

bot.action('List5', ctx => {
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, SongList5,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '1', callback_data: 'List1' },
                    { text: '2', callback_data: 'List2' },
                    { text: '3', callback_data: 'List3' },
                    { text: '4', callback_data: 'List4' },
                    { text: '>5<', callback_data: 'List5' },
                ],
                [
                    { text: 'Краткий список всех песен', callback_data: 'AllSongs' }
                ],
            ]
        }
    })
})

bot.action('AllSongs', ctx => {
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, ShowAllSongs,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Список песен с описанием', callback_data: 'SongsWithStuff' }
                ],
            ]
        }
    })
})

bot.command(["b4", "B4"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAICN16UKmOrNei5eSj7CZ7ZoYeh1PGHAALWrTEbkFOhSDf9MD00mQ_QR8Z-kS4AAwEAAwIAA3gAAwwNAgABGAQ");
}) 

bot.command(["b6", "B6"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAICOF6UKmyQNZJrvimq9RwHVVYSKehwAALXrTEbkFOhSBsrhrGbZMBjbGXLDgAEAQADAgADeAADtGoEAAEYBA");
}) 

bot.command(["b8", "B8"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAICOV6UKnZT0LwfrbsYlHbXmJ0c3IJhAALYrTEbkFOhSCiX_Xq_aLziY7C9ki4AAwEAAwIAA3gAA47MAAIYBA");
}) 

bot.command(["bblat", "Bblat", "BBLAT"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAICO16UKo4F4SNjH_xXUWVf0InKDLjbAALZrTEbkFOhSHGNLCcegFfXVk_Fki4AAwEAAwIAA3gAA47MAAIYBA");
}) 

bot.command(["bvis", "Bvis", "BVIS"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAICPF6UKpZz6sqspEaFl4SYxdqivwnRAALarTEbkFOhSEzp_sxiB5eVF591kS4AAwEAAwIAA3gABA4CAAEYBA");
}) 

bot.command(["bspain", "Bspain", "BSPAIN"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAICPV6UKqGBdsA1AAHaB7Ou9hZXOchdTAAC260xG5BToUg6Dw9J8pgkgppn6JIuAAMBAAMCAAN4AAPVMQACGAQ");
}) 

bot.command(["bcantri", "Bcantri", "BCANTRI"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAICPl6UKqkT4NQSkDE5qqD1dAh8xUr6AALcrTEbkFOhSNfNpKfcX479pp3CDwAEAQADAgADeAAD_acGAAEYBA");
}) 

bot.command(["b4p", "B4p", "B4P"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAIEDl6UgTZp_19REu4c_szbE6h81owLAAJwrTEbkFOpSMlc1UKcISZa9iZ3kS4AAwEAAwIAA3gAA1kOAgABGAQ");
}) 

bot.command(["p4","P4"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAICP16UKufKlnp_CxsfgxK03UrcKS-aAALdrTEbkFOhSN_jcq7m0z7rexrBDgAEAQADAgADeAADTRAFAAEYBA");
}) 

bot.command(["p6","P6"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAICQF6UKvDuTr6jMz5Qkj4-dgeqVnlmAALerTEbkFOhSHAjO-pZufN2q3XBDwAEAQADAgADeAADlqgGAAEYBA");
}) 

bot.command(["p8","P8"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAICQV6UKvgIomwOZo0u5zRzhV5xNZNpAALfrTEbkFOhSAVJSTvf1_0aVdWBkS4AAwEAAwIAA3gAA4UKAgABGAQ");
}) 

bot.command(["pvals", "Pvals", "PVALS"], ctx => {
    bot.telegram.sendPhoto(ctx.chat.id,
        "AgACAgIAAxkBAAICQl6UKwABjBqt4XzafwZDFoKH1t7OOQAC4K0xG5BToUgcpOUhLhN_zE4YdJEuAAMBAAMCAAN4AAOaDwIAARgE");
}) 

bot.launch();

///////////////////////////START////////////////














// Reply Keybord
/*bot.command('info', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, "Bot info", {
        reply_markup: {
            keyboard: [
                [
                    { text: "Аккорды" },
                    { text: "Бои" }
                ],
                [
                    { text: "Разбор песен" },
                    { text: "Помощь" }
                ],
                [
                    { text: "К началу" },
                    { text: "Написать нам" }
                ]
            ],
            resize_keyboard: true, // уменьшить размер кнопок
            one_time_keyboard: true // скрывать меню после нажатие на любую кнопку
        }
    })*/

/*
bot.settings((ctx) => {
    ctx.reply("Welcome to the Settings menu!");
})*/

// метод command - выполняет команду на определенное действие, 
//в нашем случае на /test будет ответ Hello World
/*bot.command(["test", "Test", "TEST"], (ctx) => {
    ctx.reply("Hello World");
})*/

// метод hears - выполняет команду на определенное действие, 
//в нашем случае на hello (без слеша) будет ответ Hello my friend
/*bot.hears(["hello"], (ctx) => {
    ctx.reply("Hello my Friend");
})*/

// метод on - выполняет команду, если в боту будет отправленно текстовое сообщение. 
//в нашем случае на любой текст (например "Ало") будет ответ This is a text message.
// можно с аудио, стикерами и многим другим.
/*bot.on(["text"], (ctx) => {
    ctx.reply("This is a text message");
})*/

// метод mention - выполняет команду reply, если в боту будет отправленно сообщение
// c упоминанием бота или пользователя (например у нас @botfather). Если убрать определенное
//название, то будет срабатывать при любом упоминании, любого профиля.
/*bot.mention(["botfather"], (ctx) => {
    ctx.reply("Mention method have just worked");
})*/

// метод hashtag - выполняет команду reply, если в боту будет отправленно сообщение
// c упоминанием бота или пользователя (например у нас #hash)
/*bot.hashtag(["hash"], (ctx) => {
    ctx.reply("hashtag method have just worked");
})*/

// метод use - выполняет команду reply, каждый раз, когда будет произведенно
//взаимодействие с ботом (например, отправлено сообщение, стикер и т.д.)
/*bot.use((ctx) => {
    ctx.reply("You used bot");
})*/

// функция next - запускает следующую по порядку в программе middleware (метод).
//Пример ниже: выполнит use и потом сразу же start на сообщение в чате /start
/* bot.use((ctx, next) => {
    ctx.reply("You used bot");
    next(ctx);  // вызов следующего метода
})

bot.start((ctx) => {
    ctx.reply("Start command");
})*/

// state - объявленние переменных и их использование
/* bot.use((ctx, next) => {
    ctx.state.apple = 5; // объявление переменной apple равное 5
    console.log(ctx); // вывод в консоле информации, что apple = 5
    ctx.reply("You used bot");
    next(ctx);  // вызов следующего метода, можно и пустые скобки, но лучше не надо :)
})

bot.start((ctx) => {
    //ctx.reply("Start command");
    ctx.reply(ctx.state.apple); // выведет значение переменной apple (т.е. 5 в сообщении от бота)
})*/



