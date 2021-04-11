export const randomNum = (max: number = 100, min: number = 1): number => (
    Math.floor(min + Math.random() * (max + 1 - min))
);

export const randomArray = (length: number, max: number): number[] => (
    [...new Array(length)].map(() => randomNum(max))
);

export async function delay(ms: number = 100) {
    return await new Promise(resolve => setTimeout(resolve, ms));
}