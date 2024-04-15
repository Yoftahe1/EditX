import { ensureDir, readFile as readSingleFile, readdir, stat } from 'fs-extra'
import { homedir } from 'os'

export async function getFiles() {
  const folderPath = `${homedir()}\\EditX`

  await ensureDir(folderPath)

  const files = await readdir(folderPath)

  return Promise.all(files.map((filename) => getFileInfo(filename, folderPath)))
}

export async function getNestedFiles(key: string) {
  await ensureDir(key)

  const files = await readdir(key)

  return Promise.all(files.map((filename) => getFileInfo(filename, key)))
}

async function getFileInfo(filename: string, folderPath: string) {
  const path = `${folderPath}\\${filename}`
  const response = await stat(path)

  if (response.isDirectory()) return { title: filename, key: path }
  else return { title: filename, key: path, isLeaf: true }
}

export async function createFile(name: string) {
  const path = `${homedir()}\\EditX\\${name}`

  // await writeFile(path, '')
}

export async function readFile(key: string) {
  const value = await readSingleFile(key)

  return value.toString()
}
