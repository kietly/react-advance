function addToArrayPure(array, element) {
    return [...array, element]
}

let names = ['tim', 'charlie', 'sue']
let result = addToArrayPure(names,'bob')
console.log(result)
console.log(names)

function addToObjPure(obj, prop, value) {
    return Object.assign({}, obj, {
        [prop]: value
    })
}

function addToObjPure2(obj, prop, value) {
    return {
        ...obj,
        [prop]: value
    }
}

let person = {
    name: 'tim'
}

let results2 = addToObjPure(person, 'age', 20)
console.log(results2)

let results3 = addToObjPure2(person, 'age', 20)
console.log(results3)

