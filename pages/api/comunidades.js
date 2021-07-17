import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response){
    if(request.method === 'POST') {
    const TOKEN = "e549e2aa94c8132d5d5c19b8f79cbb"
    const client = new SiteClient(TOKEN);

    const registroCriado = await client.items.create({
        itemType: "972023", //id do model de "Communies" criado pelo Dato
        ...request.body,
        // title: "Comunidade de teste",
        // imageUrl: "https://github.com/omariosouto.png",
        // creatorSlug: "vcRaquel",
    })

    console.log(registroCriado);
    
    response.json({
        dados: 'Algum dado qualquer',
        registroCriado: registroCriado,
    })
    return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    }) 
    
}
