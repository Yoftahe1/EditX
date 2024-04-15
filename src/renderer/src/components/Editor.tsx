import { useState } from 'react'

import { Flex, Typography } from 'antd'
import CodeMirror from '@uiw/react-codemirror'
import { androidstudio } from '@uiw/codemirror-theme-androidstudio'
import useFileStore from '@renderer/store'

const { Text } = Typography
const Editor = () => {
  const file = useFileStore((state) => state.file)

  return (
    <Flex flex={1} vertical style={{ overflowY: 'auto', backgroundColor: '#282B2E' }}>
      <Flex align='center' justify='center' style={{border:"1px solid grey"}}>
        <Text style={{color:"white"}}>{file?.title}</Text>
      </Flex>
      <CodeMirror theme={androidstudio} style={{ flex: 1 }} value={file?.value} />
    </Flex>
  )
}

export default Editor
