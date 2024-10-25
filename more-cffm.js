const presidency = [ {class:12,sub:'cse',tution:354634},
    {class:12,sub:'cse',tution:50545},
    {class:12,sub:'eee',tution:40050},
    {class:12,sub:'civil',tution:45857},
]



const presi = presidency.map(num => num.sub*2)

const filters = presidency.filter(num => num.tution<50000)

const find = presidency.find(num => num.sub = 'eee')

const reduce2 = presidency.reduce((x,y) => x + y.tution,0)
console.log(reduce2)



