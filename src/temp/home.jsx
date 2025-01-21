import {
  BoxArrowUpRight,
  PeopleFill,
  InfoCircle,
  ArrowRight
} from 'react-bootstrap-icons'

function createData(number, name, quantity, status, total) {
  return { number, name, quantity, status, total }
}

export const homeTableRows = [
  createData(273712, 'Table', 32, 'Approved', '98612.30'),
  createData(453756, 'Laptop', 15, 'Approved', '47500.00'),
  createData(736261, 'Chair', 85, 'Pending', '103456.50'),
  createData(645745, 'Earphone', 7, 'Approved', '8200.99'),
  createData(687845, 'Mouse', 12, 'Rejected', '16400.00'),
  createData(742444, 'Desktop', 24, 'Pending', '21050.32'),
  createData(893909, 'Computer Accessories', 61, 'Pending', '34640.00')
]

export const summaryItems = [
  {
    title: 'Total Page Views',
    value: '208',
    percentageIncrease: '',
    increasedBy: '82,523'
  },
  {
    title: 'Total Users',
    value: '250',
    percentageIncrease: '',
    increasedBy: '49'
  },
  {
    title: 'Total Orders',
    value: '800',
    percentageIncrease: '',
    increasedBy: '62'
  },
  {
    title: 'Total Sales',
    value: '078',
    percentageIncrease: '',
    increasedBy: '703'
  }
]

export const homeShortcutItems = [
  {
    title: 'Help Center',
    cardIcon: <InfoCircle style={{ width: '1.1rem', height: '1.1rem' }} />,
    subtitle: 'Need help figuring things out?',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonTitle: 'Help Center',
    buttonIcon: (
      <BoxArrowUpRight
        style={{
          width: '1.3rem',
          height: '1rem',
          paddingLeft: '.3rem'
        }}
      />
    )
  },
  {
    title: 'Contacts',
    cardIcon: <PeopleFill style={{ width: '1.1rem', height: '1.1rem' }} />,
    subtitle: 'Contacts allow you to manage your company contracts',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonTitle: 'My Contacts',
    buttonIcon: (
      <ArrowRight
        style={{
          width: '1.3rem',
          height: '1rem',
          paddingLeft: '.3rem'
        }}
      />
    )
  }
]
