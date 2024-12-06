import Card from '@/components/Card';

export default function Props(){

    const dogs = [
        {
            id: 1,
            nome: 'Perigo',
            raca: 'Vira-Lata',
            peso: 1.5,
            cor: 'branca',
        },
        {
            id: 2,
            nome: 'Bob',
            raca: 'Pit-bull',
            peso: 30,
            cor: 'cinza',
        },
        {
            id: 3,
            nome: 'Zoe',
            raca: 'Salsicha',
            peso: 5,
            cor: 'marrom',
        },
    ]
    return(
        <div>
            <h1>Props</h1>
            <div> 
                {dogs.map((dog) => (
                    <Card 
                        key={dog.id} 
                        nome ={dog.nome} 
                        raca ={dog.raca} 
                        peso={dog.peso}
                        cor={dog.cor}/>
                ))}
            </div>
        </div>
        

    )
}