import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faDollarSign, faChartPie, faSignOutAlt } from '@fortawesome/fontawesome-free-solid'

export const menuItems = [
    {
        id: 1,
        title: 'Home',
        icon: faHome,
        link:'/home'
    },
    {
        id: 2,
        title: 'Transactions',
        icon: faDollarSign,
        link:'/transactions'
    },
    {
        id: 3,
        title: 'Expenses',
        icon: faChartPie,
        link:'/expenses'
    },
    {
        id: 4,
        title: 'Log Out',
        icon: faSignOutAlt,
        link:'/logout'
    },
]