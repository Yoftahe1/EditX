import { useState, ReactNode } from 'react'
import { Button, Modal } from 'antd'

interface ICustomModal {
  action: () => void
  icon: ReactNode
}

const CustomModal = ({ action, icon }: ICustomModal) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk =  () => {
    action()
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Button type="text" icon={icon} onClick={showModal} />
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

export default CustomModal
