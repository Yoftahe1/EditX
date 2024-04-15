import { create } from 'zustand'

interface IFile {
  title: string
  value: string
}

interface FileState {
  file: IFile | null
  selectFile: (value: IFile | null) => void
}

const useFileStore = create<FileState>()((set) => ({
  file: null,
  selectFile: (value) => set(() => ({ file: value }))
}))

export default useFileStore
