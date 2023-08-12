import {v4 as uuidv4} from 'uuid'

import './index.css'

const data = [
  {
    id: uuidv4(),
    resourceImg:
      'https://novisto.com/wp-content/uploads/2023/08/Blog-july-2-02-1-768x401.png',
    resourceTheme:
      'The Importance of Environmental, Social, and Governance Practices in Business – Part 2',
    resourceDate: 'August 4, 2023',
  },
  {
    id: uuidv4(),
    resourceImg:
      'https://novisto.com/wp-content/uploads/2023/07/All-speakers-768x402.png',
    resourceTheme:
      'Webinar – Seizing the Corporate Sustainability Reporting Directive (CSRD) opportunity​',
    resourceDate: 'August 1, 2023',
  },
  {
    id: uuidv4(),
    resourceImg:
      'https://novisto.com/wp-content/uploads/2023/07/blog-july-05-768x402.png',
    resourceTheme:
      'The Importance of Environmental, Social, and Governance Practices in Business – Part 1',
    resourceDate: 'July 28, 2023',
  },
  {
    id: uuidv4(),
    resourceImg:
      'https://novisto.com/wp-content/uploads/2023/07/blog-july-768x402.png',
    resourceTheme: 'ESG scores—what you need to know​',
    resourceDate: 'July 21, 2023',
  },
]

const Resources = () => {
  console.log(data)
  return (
    <div className="resource-item-container">
      <ul className="resource-every-item-container">
        {data.map(eachItem => (
          <li className="resource-item">
            <img
              src={eachItem.resourceImg}
              alt={eachItem.resourceDate}
              className="resource-image"
            />
            <h1 className="resource-heading">{eachItem.resourceTheme}</h1>
            <button className="read-more-button" type="button">
              Read More
            </button>
            <hr />
            <p className="resource-date">{eachItem.resourceDate}</p>
          </li>
        ))}
      </ul>
      <button type="button" className="load-more-button">
        Load More
      </button>
    </div>
  )
}

export default Resources
