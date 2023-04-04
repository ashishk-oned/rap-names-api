const { request, response } = require('express');
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

// app.use(cors())

// let rappers = {
//     '21 savage': {
//         'age': 28,
//         'birthName': 'Shéyaa Bin Abraham-Joseph',
//         'birthdate': '22 October 1992', 
//         'birthLocation': 'London, England',
//         'origin': 'Atlanta, Georgia',
//         'genre': 'hip hop, trap, rap, horrorcore',
//         'occupation': 'rapper, songwriter, record producer',
//         'yearsActive': '2013-present',
//         'labels': 'Epic, Slaughter Gang',
//         'children': 3
//     },
//     'chance the rapper':{
//         'age': 28,
//         'birthName': 'Chancelor Jonathan Bennett',
//         'birthdate': 'April 16, 1993', 
//         'birthLocation': 'London, England',
//         'origin': 'Chicago, Illinois',
//         'genre': 'hip hop, alternative hip hop, r & b',
//         'occupation': 'rapper, singer, song writer, record producer, activist, actor, philanthropist',
//         'yearsActive': '2011-present',
//         'labels': 'none',
//         'children': 0
//     },
//     'unknown':{
//         'age': 'unknown',
//         'birthName': 'unknown',
//         'birthdate': 'unknown', 
//         'birthLocation': 'unknown',
//         'origin': 'unknown',
//         'genre': 'unknown',
//         'occupation': 'unknown',
//         'yearsActive': 'unknown',
//         'labels': 'unknown',
//         'children': 'unknown'
//     }
// }
const rappers ={
    '21 savage' : {
        'age':29,
        'birthName' : "Shéyaa Bin Abraham-Joseph",
        'birthLocation': 'London, England'
    },
    'chance the rapper' : {
        'age' :29,
        'birthName': 'Chancelor Jonathan Bennett',
        'birthLocation': 'London, England'
    },
    'dylan': {
        'age' : 21,
        'birthName': 'Dylan',
        'birthLocation':'Atlantis'
    }

};

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName',(request,response) => {
    // console.log (request.params.rapperName );
    // response.json(rappers);
    const rappersName = request.params.rapperName.toLowerCase() ;
    if (rappers[rappersName])
        response.json(rappers[rappersName]);
    else 
        response.json(rappers['dylan']);
})

app.listen( PORT, () => {
    console.log(`Server running on port ${PORT}! You better catch it!`)
})