export interface Pigeon {
  id: string;
  name: string;
  scientificName: string;
  region: string;
  description: string;
  image: string;
  conservation: 'Least Concern' | 'Near Threatened' | 'Vulnerable' | 'Endangered' | 'Critically Endangered' | 'Extinct';
  size: string;
  habitat: string;
}

export const pigeons: Pigeon[] = [
  {
    id: 'rock-dove',
    name: 'Rock Dove',
    scientificName: 'Columba livia',
    region: 'Worldwide',
    description: 'The common city pigeon, ancestor of all domestic pigeons. Originally cliff-dwellers, they adapted brilliantly to urban environments.',
    image: 'https://images.unsplash.com/photo-1555169062-013468b47731?w=800&q=80',
    conservation: 'Least Concern',
    size: '29-37 cm',
    habitat: 'Cities, cliffs, farmland'
  },
  {
    id: 'victoria-crowned',
    name: 'Victoria Crowned Pigeon',
    scientificName: 'Goura victoria',
    region: 'New Guinea',
    description: 'The largest living pigeon species, known for its spectacular blue lace-like crest. Named after Queen Victoria.',
    image: 'https://images.unsplash.com/photo-1606567595334-d39972c85dfd?w=800&q=80',
    conservation: 'Near Threatened',
    size: '73-75 cm',
    habitat: 'Lowland rainforests'
  },
  {
    id: 'nicobar',
    name: 'Nicobar Pigeon',
    scientificName: 'Caloenas nicobarica',
    region: 'Southeast Asia',
    description: 'A stunning iridescent pigeon with metallic green, copper, and blue plumage. The closest living relative to the extinct Dodo.',
    image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=800&q=80',
    conservation: 'Near Threatened',
    size: '40 cm',
    habitat: 'Small islands, coastal regions'
  },
  {
    id: 'pink-pigeon',
    name: 'Pink Pigeon',
    scientificName: 'Nesoenas mayeri',
    region: 'Mauritius',
    description: 'A rare pigeon with beautiful pale pink plumage. Once down to just 10 birds, conservation efforts brought them back from the brink.',
    image: 'https://images.unsplash.com/photo-1518882605630-8eb7e3bbaf68?w=800&q=80',
    conservation: 'Vulnerable',
    size: '32-37 cm',
    habitat: 'Native forests'
  },
  {
    id: 'bleeding-heart',
    name: 'Luzon Bleeding-heart',
    scientificName: 'Gallicolumba luzonica',
    region: 'Philippines',
    description: 'Named for the vivid red patch on its white breast that resembles a bleeding wound. A ground-dwelling pigeon.',
    image: 'https://images.unsplash.com/photo-1544923408-75c5cef46f14?w=800&q=80',
    conservation: 'Near Threatened',
    size: '25-30 cm',
    habitat: 'Primary and secondary forests'
  },
  {
    id: 'wood-pigeon',
    name: 'Common Wood Pigeon',
    scientificName: 'Columba palumbus',
    region: 'Europe & Western Asia',
    description: 'The largest pigeon in Europe, recognizable by its white neck patch and cooing song. A common sight in parks and gardens.',
    image: 'https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=800&q=80',
    conservation: 'Least Concern',
    size: '40-42 cm',
    habitat: 'Woodlands, parks, gardens'
  },
  {
    id: 'spinifex',
    name: 'Spinifex Pigeon',
    scientificName: 'Geophaps plumifera',
    region: 'Australia',
    description: 'A striking rust-colored pigeon with a tall, pointed crest. Perfectly adapted to the arid Australian outback.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    conservation: 'Least Concern',
    size: '20-24 cm',
    habitat: 'Rocky outcrops, spinifex grasslands'
  },
  {
    id: 'fruit-dove',
    name: 'Superb Fruit-Dove',
    scientificName: 'Ptilinopus superbus',
    region: 'Australasia',
    description: 'A rainbow-colored dove with purple crown, orange nape, and green wings. Despite bright colors, surprisingly hard to spot in the canopy.',
    image: 'https://images.unsplash.com/photo-1591198936750-16d8e15edb9e?w=800&q=80',
    conservation: 'Least Concern',
    size: '22-24 cm',
    habitat: 'Rainforests, mangroves'
  },
  {
    id: 'jacobin',
    name: 'Jacobin Pigeon',
    scientificName: 'Columba livia domestica',
    region: 'Worldwide (Domestic)',
    description: 'A fancy domestic breed with an extraordinary feathered hood that covers its head. Named after Jacobin monks\' cowled habits.',
    image: 'https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?w=800&q=80',
    conservation: 'Least Concern',
    size: '25-30 cm',
    habitat: 'Domestic'
  },
  {
    id: 'fantail',
    name: 'Fantail Pigeon',
    scientificName: 'Columba livia domestica',
    region: 'Worldwide (Domestic)',
    description: 'One of the oldest fancy pigeon breeds, known for its fan-shaped tail with 30-40 feathers, compared to the normal 12-14.',
    image: 'https://images.unsplash.com/photo-1621631187374-df0bfac52c27?w=800&q=80',
    conservation: 'Least Concern',
    size: '25-30 cm',
    habitat: 'Domestic'
  },
  {
    id: 'passenger',
    name: 'Passenger Pigeon',
    scientificName: 'Ectopistes migratorius',
    region: 'North America (Historical)',
    description: 'Once the most abundant bird in North America with flocks of billions. Hunted to extinction by 1914. A tragic reminder of human impact.',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80',
    conservation: 'Extinct',
    size: '39-41 cm',
    habitat: 'Deciduous forests (extinct)'
  },
  {
    id: 'crowned-pigeon',
    name: 'Western Crowned Pigeon',
    scientificName: 'Goura cristata',
    region: 'New Guinea',
    description: 'A magnificent ground-dwelling pigeon with a striking blue-gray crown of lacy feathers. Makes deep booming calls.',
    image: 'https://images.unsplash.com/photo-1612024782955-49fae79e42bb?w=800&q=80',
    conservation: 'Vulnerable',
    size: '66-73 cm',
    habitat: 'Lowland rainforests'
  },
  {
    id: 'wonga',
    name: 'Wonga Pigeon',
    scientificName: 'Leucosarcia melanoleuca',
    region: 'Australia',
    description: 'A plump ground pigeon with distinctive V-shaped white markings on its gray breast. Known for its persistent "woop" call.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    conservation: 'Least Concern',
    size: '36-40 cm',
    habitat: 'Dense coastal forests'
  },
  {
    id: 'orange-breasted',
    name: 'Orange-breasted Green Pigeon',
    scientificName: 'Treron bicinctus',
    region: 'South & Southeast Asia',
    description: 'A beautiful green pigeon with an orange breast band. Feeds primarily on figs and other fruits high in the canopy.',
    image: 'https://images.unsplash.com/photo-1592839787495-f0b0bfc68fcd?w=800&q=80',
    conservation: 'Least Concern',
    size: '29 cm',
    habitat: 'Forests, wooded areas'
  },
  {
    id: 'jambu',
    name: 'Jambu Fruit Dove',
    scientificName: 'Ptilinopus jambu',
    region: 'Southeast Asia',
    description: 'A small, colorful dove. Males have a crimson face patch while females are mostly green. Named after the jambu fruit.',
    image: 'https://images.unsplash.com/photo-1517677129300-07b130802f46?w=800&q=80',
    conservation: 'Near Threatened',
    size: '23-27 cm',
    habitat: 'Mangroves, lowland rainforests'
  },
  {
    id: 'dodo',
    name: 'Dodo',
    scientificName: 'Raphus cucullatus',
    region: 'Mauritius (Historical)',
    description: 'The most famous extinct bird. A large, flightless pigeon that became extinct in the late 1600s. Symbol of human-caused extinction.',
    image: 'https://images.unsplash.com/photo-1557401620-67270b61ea82?w=800&q=80',
    conservation: 'Extinct',
    size: '100 cm',
    habitat: 'Forests (extinct)'
  },
  {
    id: 'racing-homer',
    name: 'Racing Homer',
    scientificName: 'Columba livia domestica',
    region: 'Worldwide (Domestic)',
    description: 'Bred for speed and homing ability, these athletic pigeons can fly over 700 miles and reach speeds of 90+ mph. Used for millennia to carry messages.',
    image: 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?w=800&q=80',
    conservation: 'Least Concern',
    size: '30-35 cm',
    habitat: 'Domestic'
  },
  {
    id: 'speckled',
    name: 'Speckled Pigeon',
    scientificName: 'Columba guinea',
    region: 'Sub-Saharan Africa',
    description: 'A handsome pigeon with wine-red back, speckled wings, and striking red eye-rings. Common in African cities and countryside.',
    image: 'https://images.unsplash.com/photo-1508533036157-3f447b3ab1de?w=800&q=80',
    conservation: 'Least Concern',
    size: '33-35 cm',
    habitat: 'Cliffs, cities, farms'
  },
  {
    id: 'topknot',
    name: 'Topknot Pigeon',
    scientificName: 'Lopholaimus antarcticus',
    region: 'Australia',
    description: 'A nomadic fruit-eating pigeon with a distinctive swept-back crest that gives it a punk-rock appearance.',
    image: 'https://images.unsplash.com/photo-1546550879-2c4d86e6d34f?w=800&q=80',
    conservation: 'Least Concern',
    size: '40-46 cm',
    habitat: 'Rainforests, eucalyptus forests'
  },
  {
    id: 'mauritius-blue',
    name: 'Mauritius Blue Pigeon',
    scientificName: 'Alectroenas nitidissimus',
    region: 'Mauritius (Historical)',
    description: 'A beautiful blue pigeon with red wattles that went extinct in the 1830s. Related to the Dodo, another victim of habitat loss.',
    image: 'https://images.unsplash.com/photo-1516526995003-435ccce2be97?w=800&q=80',
    conservation: 'Extinct',
    size: '30 cm',
    habitat: 'Forests (extinct)'
  }
];

export const conservationColors: Record<Pigeon['conservation'], string> = {
  'Least Concern': 'bg-green-100 text-green-800',
  'Near Threatened': 'bg-yellow-100 text-yellow-800',
  'Vulnerable': 'bg-orange-100 text-orange-800',
  'Endangered': 'bg-red-100 text-red-800',
  'Critically Endangered': 'bg-red-200 text-red-900',
  'Extinct': 'bg-gray-200 text-gray-800'
};
