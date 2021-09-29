export function getFlagFunction(width: number, height: number) {
    return (u: number, v: number, target: any) => {
        const x = (u - 0.5) * width;
        const y = (v - 0.5) * height;
    
        target.set(x, y, 0);
    };
}
