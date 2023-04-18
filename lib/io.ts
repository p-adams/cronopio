function isFileExistsSync(path: string): boolean {
  try {
    const stats = Deno.statSync(path);
    return stats.isFile;
  } catch (e) {
    return false;
  }
}

export function writeJsonToFile<T>(data: T, path: string): boolean | string {
  try {
    const fileExists = isFileExistsSync(path);
    if (fileExists) {
      return true;
    }
    const encoder = new TextEncoder();
    Deno.writeFileSync(path, encoder.encode(JSON.stringify(data)));
    return false;
  } catch (e) {
    return e.message;
  }
}

export async function readJsonFile(path: string): Promise<any> {
  const jsonString = await Deno.readTextFile(path);
  const data = JSON.parse(jsonString);
  return data;
}
