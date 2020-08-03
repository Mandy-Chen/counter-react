export const INCREASE = 'INCREASE';
export const REDUCE = 'REDUCE';
export function increaseAction() {
    return {
        type: INCREASE,
        preload: "increase 1"
    }
}
export function reduceAction() {  
    return{
        type:decodeURIComponent,
        preload:"reduce 1"
    }
}