const ojt1 = {
    class:6,
    age:87,
    sub: "billogy",
    natiality:"banglsdeshi"
}

const ojt2 = {
    color:"RED",
    use: "vs code",
    year:2024
}

const sumon = {
    ...ojt1,
    ...ojt2,
}

// console.log(sumon)


const {age, sub, ...new1}  = ojt1


// console.log(sub)

const arrat = [83,92,56,23,78,28,84,93]


const [ab,cd,ef,gh,...orOthers] = arrat;

// console.log(ef)


