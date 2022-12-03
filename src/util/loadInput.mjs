import fs from 'fs/promises';

const loadInput = async (path) => {
    let ret = await fs.readFile(path, 'utf-8');
    return ret;
}

export default loadInput;