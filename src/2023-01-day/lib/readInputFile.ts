import fs from "fs"

function readInputFile(filename: string): string[] {
    let data: string[] = []

    try {
        data = fs.readFileSync(filename, 'utf8').split('\n');        
    } catch (err) {
        console.error(err);
    }

    return data
}

export default readInputFile