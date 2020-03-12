export const strings = {
  loginPageTitle: () => `Login`,
  homePageTitle: () => `Home`,
}

export const userRoles = {
  GUEST: 'guest',
  USER: 'user',
  ADMIN: 'admin'
}

export const routes = {
  HOME: '/home',
  LOGIN: '/'
}

export const inputTypes = {
  CHECKBOX: 'checkbox',
  RADIO: 'radio',
  SELECT: 'select',
}

export const filterCriteria = [
  {
    name: 'Brand',
    values: ['Toyota', 'Honda'],
    type: inputTypes.CHECKBOX,
  },
  {
    name: 'Year',
    values: ['All', '2020', '2019'],
    type: inputTypes.RADIO,
  },
  {
    name: 'Color',
    values: ['All', 'White', 'Red', 'Black', 'Gray'
    ],
    type: inputTypes.SELECT,
  },
]