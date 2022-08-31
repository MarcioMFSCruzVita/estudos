//Criando tabela com MongoDB

db.createCollection("alunos");

//inserindo dados

db.alunos.insert({
    "nome": "Felipe",
    "data_nascimento": new Date (1994,02,06)
})

db.alunos.insert({
    "curso":{
       "nome": "Sistemas de Informação",
    },
    "notas":[10.0, 9.0, 4.5],
    "habilidade": [
        {
            "nome": "inglês",
            "nivel": "avançado"
        },
        {
            "nome": "taekwondo",
            "nivel": "basico"
        }
    ]
})

//removendo

db.alunos.remove({
    "_id": ObjectId("630d0a7bd67c0690e8347b5a")
})

db.alunos.find({
    "_id": ObjectId("630d0a7bd67c0690e8347b5a")
})

//inserindo julio
db.alunos.insert({
    "nome":"Julio",
    "data_nascimento": new Date(1972, 08, 30),
    "curso": {
        "nome": "Medicina"
    },
    "habilidade" : [
        {
            "nome":"inglês",
            "nivel":"avançado"
        }
    ]
})

//inserindo daniela

db.alunos.insert({
    "nome":"Daniela",
    "data_nascimento": new Date(1978, 9, 28),
    "curso": {
        "nome":"Moda"
    },
    "habilidades":{
        "nome" : "alemão",
        "nivel": "basico"
    }
}),

db.alunos.insert({
    "nome":"Paulo",
    "data_nascimento": new Date(31, 12 ,1979),
    "notas": [10, 9, 7],
    "curso": {
        "nome":"Ciências da computação"
    },
    "habilidades":[
    {
        "nome" : "Inglês",
        "nivel": "Avançado"
    },
    {
        "nome" : "Francês",
        "nivel": "Avançado"
    }
    ]
})


db.alunos.find({"nome": "Daniela"}); //busca especifica

db.alunos.find({"habilidades.nome" : "ingles"})

db.alunos.find({
    "curso.nome": "Sistemas da Informação",
    "nome": "Daniela"
})

db.alunos.find({
    $or:[
        {"curso.nome": "Sistemas da Informação"},
        {"curso.nome":"Engenharia Quimica"},
        {"curso.nome": "Moda"}
    ],
    "nome":"Daniela"
})

db.alunos.find({
    "curso.nome" : {$in : ["Sistemas da Informação", "Engenharia Quimica"]}
})

db.alunos.update(
    {"cursos.nome": "Sistemas de informação"},
    {
        $set : {
            "curso.nome" : "Sistemas da Informação"
        },
    },
        {
            //permite modificar varias linhas numa execução de query
            multi : true
        }
    )


db.alunos.update(
    {"_id" : ObjectId("630e47d6d67c0690e8347b5e")},
    {
        $push:{
            "notas": 8.5
        }
    }
)
  

db.alunos.update(
    {"_id" : ObjectId("630e47d6d67c0690e8347b5e")},
    {
        $push:{
            notas : {$each : [8.5, 3]}
        }
    }
)

db.alunos.update(
{"curso.nome": "Moda"},
    {$set : {
    "curso.nome": "curso desejado"
}},
{
    multi: true
})


db.alunos.update({"_id" : ObjectId("630e47d6d67c0690e8347b5e")},
{$push: {notas:{$each:[8.5]}}}
)

db.alunos.find({
    notas:{$gt : 5 }
})

//retorna um valor
db.alunos.findOne({
    notas:{$gt : 5 }
})

//ordernar
db.alunos.find().sort({"nome": 1})
db.alunos.find().sort({"nome": 1}).limit(3) //ordenando e limitando

db.alunos.update({"_id" : ObjectId("630e47d6d67c0690e8347b5e")},
{$set: {
    localizacao: {
        endereco: "Rua Vergueiro, 3185",
        cidade: "São Paulo",
        coordinates: [-23.588213, -46.632356],
        type: "Point"
    }
}

}
)

db.alunos.insert(
    [
{
	"nome" : "Guilherme",
	"localizacao" : { "type" : "Point", "coordinates" : [-23.5882133, -46.63235580000003]}
},
{
	"nome" : "Paulo",
	"localizacao" : { "type" : "Point", "coordinates" : [-23.5707855, -46.643499399999996]}
},
{
	"nome" : "Ana",
	"localizacao" : { "type" : "Point", "coordinates" : [-23.5829461, -46.6315126]}
},
{
	"nome" : "Carlos",
	"localizacao" : { "type" : "Point", "coordinates" : [-23.5834181, -46.6418552]}
},
{
	"nome" : "Lúcia",
	"localizacao" : { "type" : "Point", "coordinates" : [-23.5702415, -46.635375]}
},
{
	"nome" : "Stella",
	"localizacao" : { "type" : "Point", "coordinates" : [-23.5623743, -46.6478634]}
},
{
	"nome" : "Daniela",
	"localizacao" : { "type" : "Point", "coordinates" : [-23.5690615, -46.6592789]}
},
{
	"nome" : "Eduardo",
	"localizacao" : { "type" : "Point", "coordinates" : [-23.5552147, -46.6574764]}
},
{
	"nome" : "Felipe",
	"localizacao" : { "type" : "Point", "coordinates" : [-23.5606041, -46.6663599]}
},
{
	"nome" : "Marco",
	"localizacao" : { "type" : "Point", "coordinates" : [-23.5625317, -46.6686773]}
},
{
	"nome" : "Mariana",
	"localizacao" : { "type" : "Point", "coordinates" : [-23.5617056, -46.662454600000004]}
},
{
	"nome" : "Juliana",
	"localizacao" : { "type" : "Point", "coordinates" : [-23.5578111, -46.6656303]}
},
{
	"nome" : "Adriana",
	"localizacao" : { "type" : "Point", "coordinates" : [-23.5653639, -46.661725]}
},
{
	"nome" : "Roberto",
	"localizacao" : { "type" : "Point", "coordinates" : [-23.5549787, -46.6588497]}
},
{
	"nome" : "Marcelo",
	"localizacao" : { "type" : "Point", "coordinates" : [-23.5640265, -46.6527128]}
},
{
	"nome" : "Sofia",
	"localizacao" : { "type" : "Point", "coordinates" : [-23.5673307, -46.6529703]}
},
{
	"nome" : "Sheila",
	"localizacao" : { "type" : "Point", "coordinates" : [-23.5672914, -46.6462326]}
},
{
	"nome" : "William",
	"localizacao" : { "type" : "Point", "coordinates" : [-23.5803502, -46.6352892]}
},
{
	"nome" : "Manoela",
	"localizacao" : { "type" : "Point", "coordinates" : [-23.5831428, -46.6334867]}
}
    ]
)

db.alunos.aggregate([
    {
        $geoNear :{
            near:{
                coordinates: [-23.5640265, -46.6527128],
                type: "Point"
            },
            distanceField: "distancia.calculada",
            spherical: true
        }
    },
    {$skip: 1}
])

db.alunos.createIndex({
    localizacao:"2dsphere"
})