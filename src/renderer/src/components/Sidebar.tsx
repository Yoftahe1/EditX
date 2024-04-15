import { Button, Divider, Flex, Typography, Tree } from 'antd'
import { FileAddOutlined, FolderAddOutlined } from '@ant-design/icons'
import useFileStore from '../store'
import type { GetProps } from 'antd'
import { useEffect, useState } from 'react'
import CustomModal from './CustomModal'
type DirectoryTreeProps = GetProps<typeof Tree.DirectoryTree>

const { DirectoryTree } = Tree

interface DataNode {
  title: string
  key: string
  isLeaf?: boolean
  children?: DataNode[]
}

const { Text } = Typography

const updateTreeData = (list: DataNode[], key: React.Key, children: DataNode[]): DataNode[] =>
  list.map((node) => {
    if (node.key === key) {
      return {
        ...node,
        children
      }
    }
    if (node.children) {
      return {
        ...node,
        children: updateTreeData(node.children, key, children)
      }
    }
    return node
  })

const Sidebar = () => {
  const selectFile = useFileStore((state) => state.selectFile)
  const [files, setFiles] = useState<DataNode[]>([])

  useEffect(() => {
    getFiles()
  }, [])

  const onSelect: DirectoryTreeProps['onSelect'] = async (keys, info) => {
    // setSelected(keys[0].toString())
    if (info.node.isLeaf) {
      const value = await window.api.readFile(keys[0].toString())
      selectFile({ value, title: info.node.title })
    }
  }

  async function getFiles() {
    const response = await window.api.getFiles()
    setFiles(response)
  }

  async function getNestedFiles(key: string) {
    return await window.api.getNestedFiles(key)
  }

  async function createFile() {
    await window.api.createFile('hello')
  }

  function createFolder() {
    // console.log(selected, 'folder')
  }

  const onLoadData = async ({ key, children }: any) => {
    if (children) return
    const newFiles = await getNestedFiles(key)

    setFiles((origin) => updateTreeData(origin, key, newFiles))
  }

  return (
    <Flex
      vertical
      style={{ backgroundColor: '#232328', width: 300, padding: 10, borderRight: '1px solid grey' }}
    >
      <Flex gap={10} align="center" justify="space-between">
        <Text style={{ color: 'white' }}>Selected Folder</Text>
        <Flex>
          <CustomModal action={createFile} icon={<FileAddOutlined style={{ color: 'white' }} />} />
          <Button
            type="text"
            icon={<FolderAddOutlined style={{ color: 'white' }} />}
            onClick={createFolder}
          />
        </Flex>
      </Flex>
      <Divider style={{ margin: 0, backgroundColor: 'grey' }} />
      <DirectoryTree
        // onExpand={onExpand}
        loadData={onLoadData}
        onSelect={onSelect}
        treeData={files}
        style={{ color: 'white', backgroundColor: '#232328' }}
      />
    </Flex>
  )
}

export default Sidebar
