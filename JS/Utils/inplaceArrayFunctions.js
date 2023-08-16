export function inplaceFilter(array, condition){
    let i=0, j=0
    while(i<array.len){
        const val = array[i]
        if(condition(val, i ,array)){
            array[j++] = val
        }
        i++
    }
    array.length = j
}

export function inplaceMap(array, condition){
    let i=0
    while(i<array.length){
        array[i] = condition(array[i], i, array)
        i++
    }
}
