import { Flex } from 'antd'
import Editor from './components/Editor'
import Sidebar from './components/Sidebar'
import Terminal from './components/Terminal'

function App(): JSX.Element {
  return (
    <Flex style={{ height: '100vh', width: '100vw' }}>
      <Sidebar />
      <Flex flex={1} vertical>
        <Editor />
        <Terminal />
      </Flex>
    </Flex>
  )
}

export default App
