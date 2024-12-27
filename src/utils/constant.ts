import { Place } from './types';

// we are assuming that this data will certainly come from backend, in order to use that in redux will have to use redux middleware. Fot time being we are using hard coded data
export const dummyPlaces: Place[] = [
  {
    id: 1,
    name: 'A Famosa',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/A_Famosa_Fortress.JPG/250px-A_Famosa_Fortress.JPG',
    description: 'A Famosa is a Portuguese fortress located in Malacca.',
    overview:
      "A Famosa is a historic Portuguese fortress established in 1511, making it one of the oldest European structures in Asia. Located in the heart of Malacca, this fortress is a testament to the city's colonial past. Visitors can explore the remains of the fort for free, with opening hours from 8:30 AM to 5:30 PM daily. One of its most intriguing facts is that it was built by the Portuguese in the early 16th century and stands as a remarkable piece of European architectural heritage in Asia.",
    visited: false,
    location: 'Malacca, Malaysia',
    established: '1511',
    interestingFact:
      'This fortress was built by the Portuguese in the early 16th century and is one of the oldest European architectural remains in Asia.',
    entryFee: 'Free',
    timing: '8:30 AM - 5:30 PM',
    closingDay: 'Open Daily',
  },
  {
    id: 2,
    name: 'Batu Caves',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Batu_Caves_stairs_2022-05.jpg/220px-Batu_Caves_stairs_2022-05.jpg',
    description:
      'Batu Caves is a limestone hill that has a series of caves and cave temples.',
    overview:
      'Situated in Selangor, Batu Caves is a stunning limestone hill housing a series of caves and Hindu temples. Established in the late 19th century, it holds religious significance for Tamil Hindus, especially during the Thaipusam festival, which attracts millions of visitors. The site remains open daily, from 7:00 AM to 9:00 PM, with free entry. The towering statue of Lord Murugan at the entrance is one of the highlights, making this a must-visit for both spiritual seekers and tourists alike.',
    visited: false,
    location: 'Selangor, Malaysia',
    established: 'Late 19th Century',
    interestingFact:
      'The site is a sacred place for Tamil Hindus and hosts the annual Thaipusam festival, attracting millions of devotees.',
    entryFee: 'Free',
    timing: '7:00 AM - 9:00 PM',
    closingDay: 'Open Daily',
  },
  {
    id: 3,
    name: 'Penang Hill',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Penang_Hil%2C_George_Town%2C_Penang_2023.jpg/272px-Penang_Hil%2C_George_Town%2C_Penang_2023.jpg',
    description:
      'Penang Hill is a hill resort with panoramic views of George Town.',
    overview:
      'Known for its breathtaking panoramic views of George Town, Penang Hill is a hill resort with a rich history dating back to the early 1800s. The funicular railway that takes visitors up the hill is one of Asia’s oldest, built during British colonial rule. The hill is open daily from 6:30 AM to 11:00 PM, with an entry fee of RM12 for adults and RM6 for children. A visit here promises cool temperatures and a stunning view of the island.',
    visited: false,
    location: 'Penang, Malaysia',
    established: 'Early 1800s',
    interestingFact:
      'Penang Hill has one of the oldest funicular systems in Asia, built during British colonial rule.',
    entryFee: 'Adults: RM12, Children: RM6',
    timing: '6:30 AM - 11:00 PM',
    closingDay: 'Open Daily',
  },
  {
    id: 4,
    name: 'Kuala Lumpur Railway Station',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Railway_station_KL_2007_010_pano.jpg/250px-Railway_station_KL_2007_010_pano.jpg',
    description: 'An iconic railway station featuring Moorish architecture.',
    overview:
      'The Kuala Lumpur Railway Station, established in 1910, is a symbol of Moorish architecture in Malaysia. Designed by British architect Arthur Benison Hubback, the station combines Islamic and Indian architectural influences. Visitors can admire its grandeur daily from 6:00 AM to 11:00 PM, free of charge, and enjoy the intricate details of its design.',
    visited: false,
    location: 'Kuala Lumpur, Malaysia',
    established: '1910',
    interestingFact:
      'The station was designed by British architect Arthur Benison Hubback, who was inspired by North Indian Mughal architecture.',
    entryFee: 'Free',
    timing: '6:00 AM - 11:00 PM',
    closingDay: 'Open Daily',
  },
  {
    id: 5,
    name: 'Sultan Abdul Samad Building',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/2016_Kuala_Lumpur%2C_Budynek_Su%C5%82tana_Abdula_Samada_%2803%29.jpg/250px-2016_Kuala_Lumpur%2C_Budynek_Su%C5%82tana_Abdula_Samada_%2803%29.jpg',
    description: 'A late 19th-century building located in Kuala Lumpur.',
    overview:
      "This architectural gem from 1897, located in the heart of Kuala Lumpur, once housed the British colonial government offices. Today, it stands as a symbol of Malaysia's rich history. Although it’s not open to the public, visitors can view the building from the outside at any time. It is now home to the Ministry of Information, Communications, and Culture.",
    visited: false,
    location: 'Kuala Lumpur, Malaysia',
    established: '1897',
    interestingFact:
      'The building was initially used as the British colonial government offices and now houses the Ministry of Information, Communications, and Culture.',
    entryFee: 'Not Open to Public',
    timing: 'Viewable from Outside Anytime',
    closingDay: 'N/A',
  },
  {
    id: 6,
    name: 'Christ Church',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Melaka-Dutch-Square-2201.jpg/220px-Melaka-Dutch-Square-2201.jpg',
    description: 'A historical Protestant church in Malacca.',
    overview:
      "Built in 1753 by the Dutch, Christ Church is the oldest Protestant church in Malaysia. Located in Malacca, it offers a quiet place for reflection amidst the bustling town. It remains open daily from 9:00 AM to 5:00 PM, except on Sundays. The church’s historical significance makes it a fascinating site for anyone interested in Malaysia's colonial past.",
    visited: false,
    location: 'Malacca, Malaysia',
    established: '1753',
    interestingFact:
      'Christ Church is the oldest functioning Protestant church in Malaysia, built by the Dutch during their colonization of Malacca.',
    entryFee: 'Free',
    timing: '9:00 AM - 5:00 PM',
    closingDay: 'Sunday Closed',
  },
  {
    id: 7,
    name: 'Petronas Towers',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Petronas_Twin_Towers_in_Kuala_Lumpur_%282%29_%2810498382174%29.jpg/1024px-Petronas_Twin_Towers_in_Kuala_Lumpur_%282%29_%2810498382174%29.jpg',
    description: 'The iconic twin skyscrapers of Kuala Lumpur.',
    overview:
      "The Petronas Towers, standing tall since 1998, are Kuala Lumpur's most iconic skyscrapers. Once the tallest buildings in the world, they still hold the title of the tallest twin towers globally. The towers are open for visits from 9:00 AM to 9:00 PM, with an entry fee of RM30 for adults and RM15 for children. A visit here provides stunning views of the city’s skyline and beyond.",
    visited: false,
    location: 'Kuala Lumpur, Malaysia',
    established: '1998',
    interestingFact:
      'The towers were the tallest buildings in the world from 1998 to 2004 and remain the tallest twin towers globally.',

    entryFee: 'Adults: RM30, Children: RM15',
    timing: '9:00 AM - 9:00 PM',
    closingDay: 'Monday Closed',
  },
  {
    id: 8,
    name: "St. Paul's Hill",
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/St._Paul%27s_Hill.JPG/220px-St._Paul%27s_Hill.JPG',
    description: 'A hill in Malacca with historical ruins and panoramic views.',
    overview:
      'This hill offers stunning views of Malacca and is home to the ruins of St. Paul’s Church, which was built by the Portuguese in 1521. The church was later used as a burial ground by the Dutch, adding to the site’s historical importance. Visitors can enjoy the hill and its panoramic views for free, with opening hours from 8:00 AM to 6:00 PM daily.',
    visited: false,
    location: 'Malacca, Malaysia',
    established: '1521',
    interestingFact:
      "St. Paul's Hill is home to the ruins of St. Paul's Church, which was built by the Portuguese and later used as a burial ground by the Dutch.",

    entryFee: 'Free',
    timing: '8:00 AM - 6:00 PM',
    closingDay: 'Open Daily',
  },
  {
    id: 9,
    name: 'Istana Budaya',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Istana_Budaya_from_lake_view.jpg/240px-Istana_Budaya_from_lake_view.jpg',
    description: "Malaysia's main venue for theatre and the performing arts.",
    overview:
      "Malaysia's premier venue for theatre and the performing arts, Istana Budaya, was established in 1999. Known for its sophisticated design, inspired by traditional Malay house architecture, this venue is one of the top ten most advanced theatres in the world. Visitors can enjoy various performances, with entry fees varying depending on the event. The theatre is open from 10:00 AM to 10:00 PM, except on Mondays when it’s closed.",
    visited: false,
    location: 'Kuala Lumpur, Malaysia',
    established: '1999',
    interestingFact:
      'Istana Budaya is one of the top ten most sophisticated theatres in the world, with a design inspired by traditional Malay house architecture.',
    entryFee: 'Varies by Performance',
    timing: '10:00 AM - 10:00 PM',
    closingDay: 'Monday Closed',
  },
  {
    id: 10,
    name: 'Merdeka Square',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Dataran_Merdeka_2.jpg/280px-Dataran_Merdeka_2.jpg',
    description: 'A historic square where Malaysia declared independence.',
    overview:
      'Merdeka Square, established in 1957, holds immense historical significance as the location where Malaysia declared its independence. It is home to one of the tallest flagpoles in the world. Open 24/7, visitors can explore this historic site free of charge, which remains a central symbol of Malaysia’s independence.',
    visited: false,
    location: 'Kuala Lumpur, Malaysia',
    established: '1957',
    interestingFact:
      'The square features one of the tallest flagpoles in the world, marking the spot where the Malayan flag was first raised.',
    entryFee: 'Free',
    timing: '24/7',
    closingDay: 'Open Daily',
  },
];

export enum NUMBER {
  BACK = -1,
}

export enum ROUTE {
  DEFAULT = '/',
  DETAIL = '/detail/:id',
  NOT_FOUND = '*',
}
