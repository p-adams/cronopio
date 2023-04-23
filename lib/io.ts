function isFileExistsSync(path: string): boolean {
  try {
    const stats = Deno.statSync(path);
    return stats.isFile;
  } catch (e) {
    return false;
  }
}

export function createJsonFile<T>(data: T, path: string): boolean | string {
  try {
    const fileExists = isFileExistsSync(path);
    if (fileExists) {
      return true;
    }
    writeJsonToFile(data, path);
    return false;
  } catch (e) {
    return e.message;
  }
}

export function writeJsonToFile<T>(data: T, path: string): boolean | string {
  try {
    const encoder = new TextEncoder();
    Deno.writeFileSync(path, encoder.encode(JSON.stringify(data)));
    return false;
  } catch (error) {
    return `Error writing JSON to file: ${error.message}`;
  }
}

export async function readJsonFile<T>(path: string): Promise<T> {
  try {
    const jsonString = await Deno.readTextFile(path);
    const data = JSON.parse(jsonString);
    return data;
  } catch (error) {
    throw new Error(`Error reading JSON file: ${error.message}`);
  }
}
