export const INCREASE = 'INCREASE';
export const REDUCE = 'REDUCE';
export const CREATECOUNTER='CREATECOUNTER'
export function increaseAction() {
    return {
        type: INCREASE,
        preload: "increase 1"
    }
}
export function reduceAction() {  
    return{
        type:REDUCE,
        preload:"reduce 1"
    }
}
export function creatCounterAction() {  
    return{
        type:CREATECOUNTER,
        preload:"create counter by input_value"
    }
}