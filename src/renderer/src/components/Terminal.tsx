import { theme } from 'antd'
import { ReactTerminal } from 'react-terminal'

const Terminal = () => {
  const commands = {
    whoami: 'jackharper',
    cd: (directory) => `changed path to ${directory}`
  }
  return (
    <div style={{ height: 300, backgroundColor:"#282B2E",borderTop:"1px solid grey"}}>
      <ReactTerminal
        showControlBar={false}
        themes={{
            "my-custom-theme": {
              themeBGColor: "#282B2E",
              themeToolbarColor: "#DBDBDB",
              themeColor: "#FFFEFC",
              themePromptColor: "#a917a8",
            }
          }}
          theme="my-custom-theme"
        commands={commands}
      />
    </div>
  )
}

export default Terminal
