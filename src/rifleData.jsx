export const rifles = [
  {
    id: 'hy',
    name: 'The Hybrid',
    switchBarrel: true,
    paintUpgrades: ['hybrid', 'tundra', 'forest', 'dusky'],

    caliber: ['30.0mm','placeholder','placeholder1']

    barrelType: [
        {type: 'Carbon Fibre Wrapped Barrel'}
    ]

    barrelOptions: [
      { type: 'long', isDefault: true, length: '24 inches' },
      { type: 'short', isDefault: false, length: '20 inches' }
    ],
    handOptions: [
      { type: 'right', isDefault: true},
      { type: 'left', isDefault: false}
    ],

    cheekriserOptions: [
        {type: 'Cheek Riser', isDefault: true, addedCost: true, available: true},
        {type: 'No Cheek Riser', isDefault: false, addedCost: true, available: true}
    ],

    barrelOptions: [
        {type: 'Muzzle Brake', isDefault: true, addedCost: false, available: true},
        {type: 'Suppressor', isDefault: false, addedCost: true, available: true}

    ]
  }
]