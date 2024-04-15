import { ElectronAPI } from '@electron-toolkit/preload'

interface DataNode {
  title: string
  key: string
  isLeaf?: boolean
  children?: DataNode[]
}

declare global {
  interface Window {
    // electron: ElectronAPI
    api: {
      getFiles: () => DataNode[]
      getNestedFiles: (key: string) => DataNode[]
      readFile: (key: string) => string
      createFile: (name: string) => void
    }
  }
}
