import {
  BoxArrowUpRight,
  PeopleFill,
  InfoCircle,
  ArrowRight
} from 'react-bootstrap-icons'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

export const homeTableRows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9)
]

export const summaryItems = [
  {
    title: 'Total Page Views',
    value: '2,519,208',
    percentageIncrease: '',
    increasedBy: '17,523'
  },
  {
    title: 'Total Users',
    value: '78,250',
    percentageIncrease: '',
    increasedBy: '419'
  },
  {
    title: 'Total Orders',
    value: '18,800',
    percentageIncrease: '',
    increasedBy: '62'
  },
  {
    title: 'Total Sales',
    value: '$35,078',
    percentageIncrease: '',
    increasedBy: '$4,703'
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
