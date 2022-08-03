import {
  BoxArrowUpRight,
  PeopleFill,
  InfoCircle,
  ArrowRight
} from 'react-bootstrap-icons'
import avatar1 from '../assets/avatars/image-6.png'
import avatar2 from '../assets/avatars/image-10.png'
import avatar3 from '../assets/avatars/image-16.png'
import avatar4 from '../assets/avatars/image-25.png'
import avatar5 from '../assets/avatars/image-26.png'
import avatar6 from '../assets/avatars/image-28.png'
import avatar7 from '../assets/avatars/image-15.png'
import avatar8 from '../assets/avatars/image-3.png'

function createCustomerData(image, name, email, phoneNumber, status) {
  return {
    image,
    name,
    email,
    phoneNumber: phoneNumber ? '(+27) ' + phoneNumber : phoneNumber,
    status,
    orders: Math.floor(Math.random() * 300)
  }
}

export const customersRows = [
  createCustomerData(
    avatar1,
    'Anthony M. Yamamoto',
    'AnthonyMYamamoto@jourrapide.com',
    '82 397 2927',
    'Pending'
  ),
  createCustomerData(
    avatar2,
    'Sandra G. Snider',
    'SandraGSnider@dayrep.com',
    '83 207 6204',
    'Active'
  ),
  createCustomerData(
    avatar3,
    'Harry D. Scroggs',
    'HarryDScroggs@teleworm.us',
    '83 314 4093',
    'Active'
  ),
  createCustomerData(
    avatar4,
    'Wilbert K. Klein',
    'WilbertKKlein@jourrapide.com',
    '83 893 1696',
    'Cancelled'
  ),
  createCustomerData(
    avatar5,
    'Edward B. Dreiling',
    'EdwardBDreiling@jourrapide.com',
    '84 387 1936',
    'Pending'
  ),
  createCustomerData(
    avatar6,
    'Amy P. Dobson',
    'AmyPDobson@armyspy.com',
    '82 366 0690',
    'Active'
  ),
  createCustomerData(
    avatar7,
    'Pedro M. Kowalsky',
    'PedroMKowalsky@teleworm.us',
    '85 716 5964',
    'Active'
  ),
  createCustomerData(
    avatar8,
    'Marilyn T. Poole',
    'MarilynTPoole@armyspy.com',
    '84 525 5918',
    'Cancelled'
  )
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
    value: 'R35,078',
    percentageIncrease: '',
    increasedBy: 'R4,703'
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
