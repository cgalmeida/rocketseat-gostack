const express = require('express');

const app= express();

app.get('/projects', (request, response) =>{

        const{title, owner} = request.query;
        console.log(title);
        console.log(owner);

        return response.json([
            'Projeto 1',
            'Projeto 2',
        ]);
});


app.post('/projects', (request, response) =>{

    return response.json([
        'Projeto 1'
    ]);
});

app.put('/projects/:id', (request, response) =>{

    const{id} = request.params;
    console.log(id);

    return response.json([
        'Projeto 1',
        'Projeto 3',
        'Projeto 4',
    ]);
});

app.delete('/projects/:id', (request, response) =>{

    return response.json([
        'Projeto 1',
        'Projeto 2',
    ]);
});


app.listen(3333, () => {
    console.log('✨ Backend started ')
});
