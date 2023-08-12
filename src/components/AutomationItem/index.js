import './index.css'

const AutomationItem = props => {
  const {eachItem, isActive, onChangeActiveId} = props
  const automationClassName = isActive
    ? 'active-automation'
    : 'in-active-automation'
  const onChangeActiveElement = () => {
    onChangeActiveId(eachItem.id)
  }

  return (
    <li className={automationClassName} onClick={onChangeActiveElement}>
      <h1 className="automation-heading">{eachItem.dataExpertHeading}</h1>
      <p className="automation-description">{eachItem.dataExpertDescription}</p>
    </li>
  )
}

export default AutomationItem
