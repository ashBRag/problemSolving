const deepCopyObj = obj => ({...obj})
const deepCopyArr = arr => ([...arr])

export default function deepCopy(obj){    
    if(obj && typeof obj === 'object'){
        if(Array.isArray(obj)){
            return deepCopyArr(obj)
        }
        else{
            let deepClone = deepCopyObj(obj)
            Object.keys(deepClone).forEach((key)=>{
                if(typeof deepClone[key] === 'object'){
                    deepClone[key] = deepCopy(deepClone[key])
                }
            })
            return deepClone
        }
    }
    else{
    	return obj
    }
}
