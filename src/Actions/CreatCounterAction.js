export const CREATECOUNTER = 'CREATECOUNTER';
export function createCounterAction() {
    return {
        type: CREATECOUNTER,
        preload: "create counter by value"
    }
}
