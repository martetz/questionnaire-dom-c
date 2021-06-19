const express = require('express');
const app = express();
const cors=require('cors');
app.use(cors());
app.options('*', cors());


const quations = [
    {
        id: 1,
        type: 'boolean',
        difficulty: 'easy',
        quation: 'Доля Сбера в компании ДомКлик составляет 85%',
        correct: false,
        incorrect: true, 
        cost: 5,
    },

    {
        id: 2,
        type: 'boolean',
        difficulty: 'easy',
        quation: 'У сервиса ДомКлик есть приложения для IOS и Android',
        correct: true,
        incorrect: false,
        cost: 5,
    },

    {
        id: 3,
        type: 'boolean',
        difficulty: 'easy',
        quation: 'ДомКлик входит в топ-3 среди российских площадок недвижимости',
        correct: true,
        incorrect: false,
        cost: 5,
    },

    {
        id: 4,
        type: 'multiple',
        difficulty: 'middle',
        quation: 'В каком году был запущен сервис ДомКлик?',
        correct: '2016',
        incorrect: ['2019', '2013', '2015'],
        cost: 15,
    },

    {
        id: 5,
        type: 'multiple',
        difficulty: 'middle',
        quation: 'Сколько человек пользуется сервисом ДомКлик ежедневно?',
        correct: '> 750 000',
        incorrect: ['> 1 000 000', '> 500 000', '> 100 000'],
        cost: 15,
    },

    {
        id: 6,
        type: 'multiple',
        difficulty: 'middle',
        quation: 'Eжемесячная аудитория ДомКлик на период 2 квартала 2020 года составляла:',
        correct: '7.5 млн.',
        incorrect: ['1 млн.', '3.5 млн.', '6.8 млн.'],
        cost: 15
    },

    {
        id: 7,
        type: 'multiple',
        difficulty: 'hard',
        quation: 'С помощью ДомКлик можно осуществить:',
        correct: ['Поиск недвижимости', 'Покупку недвижимости', 'Аренду недвижимости', 'Оформление и сопровождение ипотеки Сбера'],
        incorrect: [],
        cost: 20,
    },

    {
        id: 8,
        type: 'multiple',
        difficulty: 'hard',
        quation: 'Сервис ДомКлик Pro доступен для:',
        correct: ['Агенств и агентов недвижимости', 'Застройщиков', 'Оценочных компаний'],
        incorrect: ['Нотариусов', 'Рекламных агенств'],
        cost: 20
    }
]

app.get('/api/quations', (req, res) => {
    res.status(200).json(quations);    
})


app.listen(3001, ()=> console.log('Сервер запущен'));