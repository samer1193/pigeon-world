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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Rock_dove_cropped.jpg/800px-Rock_dove_cropped.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Goura_victoria_-Jurong_Bird_Park-8a.jpg/800px-Goura_victoria_-Jurong_Bird_Park-8a.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Caloenas_nicobarica_-Jurong_Bird_Park%2C_Singapore-8a.jpg/800px-Caloenas_nicobarica_-Jurong_Bird_Park%2C_Singapore-8a.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Nesoenas_mayeri.jpg/800px-Nesoenas_mayeri.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Bleeding_Heart_Pigeon_058.jpg/800px-Bleeding_Heart_Pigeon_058.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Wood_pigeon_%28Columba_palumbus%29.jpg/800px-Wood_pigeon_%28Columba_palumbus%29.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Spinifex_pigeon.jpg/800px-Spinifex_pigeon.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Superb_Fruit-Dove.jpg/800px-Superb_Fruit-Dove.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Jacobin_pigeon.jpg/800px-Jacobin_pigeon.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Pfautaube_2008.jpg/800px-Pfautaube_2008.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Ectopistes_migratoriusMCN2P28CA.jpg/800px-Ectopistes_migratoriusMCN2P28CA.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Stavenn_Goura_cristata_00.jpg/800px-Stavenn_Goura_cristata_00.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Wonga_Pigeon_RWD.jpg/800px-Wonga_Pigeon_RWD.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Orange-breasted_Green_Pigeon_%28Treron_bicinctus%29_on_Ficus_religiosa_W_IMG_8242.jpg/800px-Orange-breasted_Green_Pigeon_%28Treron_bicinctus%29_on_Ficus_religiosa_W_IMG_8242.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Jambu_Fruit_Dove_Ptilinopus_jambu_Male_2000px.jpg/800px-Jambu_Fruit_Dove_Ptilinopus_jambu_Male_2000px.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Dronte_dridge.jpg/800px-Dronte_dridge.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Paloma_mensajera_2017_Lleida.jpg/800px-Paloma_mensajera_2017_Lleida.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Speckled_pigeon_%28Columba_guinea%29_3.jpg/800px-Speckled_pigeon_%28Columba_guinea%29_3.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Lopholaimus_antarcticus_-Taronga_Zoo%2C_Sydney%2C_Australia-8a.jpg/800px-Lopholaimus_antarcticus_-Taronga_Zoo%2C_Sydney%2C_Australia-8a.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Alectroenas_nitidissima.jpg/800px-Alectroenas_nitidissima.jpg',
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
