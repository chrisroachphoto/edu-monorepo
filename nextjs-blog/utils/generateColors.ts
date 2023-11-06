export function generateColorArray (colors: number) {
const output = []

for (let i = 0; i < colors; i++){
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    output.push({color});
}

return output;

}