export const INCREASE = 'INCREASE';
export const REDUCE = 'REDUCE';
export function increaseAction() {
    return {
        type: INCREASE,
    }
}
export function reduceAction() {  
    return{
        type:REDUCE,
    }
}
