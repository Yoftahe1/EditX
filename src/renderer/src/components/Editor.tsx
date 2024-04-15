import { useState } from 'react'

import { Flex } from 'antd'
import CodeMirror from '@uiw/react-codemirror'
import { androidstudio} from "@uiw/codemirror-theme-androidstudio"

const Editor = () => {
  const [code,setCode]=useState("")

  return (
    <Flex flex={1} style={{overflowY:"auto",backgroundColor:"#282B2E"}}>
      <CodeMirror theme={androidstudio} style={{flex:1}} value={code} onChange={(value)=>setCode(value)}/>
    </Flex>
  )
}

export default Editor
