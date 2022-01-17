import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  targets: [{
    name: 'Slappy',
    health: 100,
    maxHealth: 100,
    hits: 0,
    imgUrl: 'https://i.ytimg.com/vi/vQ7F1Zj7KJE/maxresdefault.jpg',
    attacks: [
      { name: 'slap', value: 1 },
      { name: 'punch', value: 5 },
      { name: 'dropkick', value: 10 },
    ]
  }, {
    name: 'Cybals',
    health: 90,
    maxHealth: 90,
    hits: 0,
    imgUrl: 'https://cf.ltkcdn.net/antiques/images/std-xs/280704-340x227-monkey-playing-cymbals-vintage-toy.jpg',
    attacks: [
      { name: 'punch', value: 5 },
      { name: 'dropkick', value: 10 }
    ]
  }, {
    name: 'Charles',
    health: 110,
    maxHealth: 110,
    hits: 0,
    imgUrl: 'https://www.gamespot.com/a/uploads/original/1557/15576725/3818089-curse-of-chucky.jpeg',
    attacks: [
      { name: 'slap', value: 5 },
      { name: 'punch', value: 5 },
      { name: 'stab', value: 10 }
    ]
  }]
})
