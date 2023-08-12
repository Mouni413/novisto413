import {Component} from 'react'

import './index.css'

import AutomationItem from '../AutomationItem'

const automationDetails = [
  {
    id: 0,
    dataExpertHeading: 'Streamlined Disclosure',
    dataExpertDescription:
      'Lean on dependable automated workflows to fast-track all of your ESG reporting campaigns to scale.',
    dataExpertImage:
      'https://novisto.com/wp-content/uploads/2022/08/Home_investment_grade_data.webp',
  },
  {
    id: 1,
    dataExpertHeading: 'Truly Audit-Ready',
    dataExpertDescription:
      'Limit organizational risks and fortify your compliance with a secure and centralized system of record for your audit-ready data.',
    dataExpertImage:
      'https://novisto.com/wp-content/uploads/2022/08/Home_efficient_disclosure.webp',
  },
  {
    id: 2,
    dataExpertHeading: 'Smarter by Design',
    dataExpertDescription:
      'Propel your ESG journey by refining your data quality, benchmarking key ESG metrics using AI-powered technology, and keeping your short- and long-term targets in check.',
    dataExpertImage:
      'https://novisto.com/wp-content/uploads/2022/08/Home_ai_driven_insights.webp',
  },
]

class Automation extends Component {
  state = {
    activeAutomationId: 0,
    activeImageUrl: automationDetails[0].dataExpertImage,
  }

  onChangeActiveId = id => {
    this.setState({
      activeAutomationId: id,
      activeImageUrl: automationDetails[id].dataExpertImage,
    })
  }

  render() {
    const {activeAutomationId, activeImageUrl} = this.state

    return (
      <div className="automation-container">
        <h1 className="automation-heading">
          Leaverage the power of automation
        </h1>
        <p className="automation-description">
          Use data Driven Insights for better decision making
        </p>
        <button className="automation-button" type="button">
          Talk to an Expert
        </button>
        <div className="details-container">
          <ul className="automation-details">
            {automationDetails.map(eachItem => (
              <AutomationItem
                key={eachItem.id}
                eachItem={eachItem}
                isActive={activeAutomationId === eachItem.id}
                onChangeActiveId={this.onChangeActiveId}
              />
            ))}
          </ul>
          <img src={activeImageUrl} alt="img" className="automation-image" />
        </div>
      </div>
    )
  }
}

export default Automation
