import { Button, Divider, Flex, Typography, Tree } from 'antd'
import { FileAddOutlined, FolderAddOutlined } from '@ant-design/icons'

import type { GetProps, TreeDataNode } from 'antd'
import { useState } from 'react'
type DirectoryTreeProps = GetProps<typeof Tree.DirectoryTree>

const { DirectoryTree } = Tree

const treeData: TreeDataNode[] = [
  {
    title: 'parent 0',
    key: '0-0',
    children: [
      { title: 'leaf 0-0', key: '0-0-0', isLeaf: true },
      { title: 'leaf 0-1', key: '0-0-1', isLeaf: true }
    ]
  },
  {
    title: 'parent 1',
    key: '0-1',
    children: [
      { title: 'leaf 1-0', key: '0-1-0', isLeaf: true },
      { title: 'leaf 1-1', key: '0-1-1', isLeaf: true }
    ]
  }
]

const { Text } = Typography

const Sidebar = () => {
  const [selected, setSelected] = useState('')

  const onSelect: DirectoryTreeProps['onSelect'] = (keys) => {
    setSelected(keys[0].toString())
  }

  function createFile() {
    console.log(selected, 'file')
  }
  function createFolder() {
    console.log(selected, 'folder')
  }
  return (
    <Flex
      vertical
      style={{ backgroundColor: '#232328', width: 300, padding: 10, borderRight: '1px solid grey' }}
    >
      <Flex gap={10} align="center" justify="space-between">
        <Text style={{ color: 'white' }}>Selected Folder</Text>
        <Flex>
          <Button
            type="text"
            icon={<FileAddOutlined style={{ color: 'white' }} />}
            onClick={createFile}
          />
          <Button
            type="text"
            icon={<FolderAddOutlined style={{ color: 'white' }} />}
            onClick={createFolder}
          />
        </Flex>
      </Flex>
      <Divider style={{ margin: 0, backgroundColor: 'grey' }} />
      <DirectoryTree
        multiple
        onSelect={onSelect}
        treeData={treeData}
        style={{ color: 'white', backgroundColor: '#232328' }}
      />
    </Flex>
  )
}

export default Sidebar
