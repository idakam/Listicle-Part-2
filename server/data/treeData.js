const treeData = [
  {
    id: 1,
    name: "American Elm at Wave Hill",
    location: "At the top of the lawn just southeast of the Wave Hill House.",
    latinName: "Ulmus americana",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d93b3acee56.jpg",
    treeCode: "Bx12",
    height: "114.8",
    trunkDiameter: "53.6",
    canopySpread: "70.5",
    AFAPoints: "301",
    description:
      "The American elm at Wave Hill is located just down the path from the sugar maple and Japanese red pine. It completes the little group of unusual trees that together form one of the most pleasant picnic spots in the city.",
  },
  {
    id: 2,
    name: "American Sycamore at Corlear Avenue & West 231st Street",
    location: "East side of Corlear Avenue just south of West 231st Street",
    latinName: "Platanus occidentalis",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d93c4b3e04b.jpg",
    treeCode: "Bx01",
    height: "98.4",
    trunkDiameter: "53",
    canopySpread: "58",
    AFAPoints: "279",
    description:
      "The American sycamore on the east side of Corlear Avenue, just south of West 231st Street, stands near the site of the old King's Bridge that was built by Frederick Philipse in 1693 to convey mail carriers across Spuyten Duyvil Creek at the start of their 250-mile journey to Boston on the first Post Road. George Washington and his troops retreated across this bridge after their defeat at Fort Washington on November 16, 1776.",
  },
  {
    id: 3,
    name: "Three Common Horsechestnuts at the Van Cortlandt Mansion",
    location: "On the east lawn of Van Cortlandt Mansion.",
    latinName: "Aesculus hippocastanum",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d93dcf36fe9.jpg",
    treeCode: "Bx16",
    height: "87.74",
    trunkDiameter: "41.5",
    canopySpread: "45",
    AFAPoints: "229",
    description:
      "The common horsechestnuts on the east lawn of the Van Cortlandt mansion are said to stand like sentries at the gate of history. Built in 1748, the Van Cortlandt Mansion is the oldest building in the Bronx, and it provided a roof for George Washington: twice in defeat and once in triumph.",
  },
  {
    id: 4,
    name: "European Cutleaf Beech at Woodlawn Cemetery",
    location:
      "Northeast of the Jerome Ave entrance to Woodlawn Cemetery in the Woodbine Plot",
    latinName: "Fagus sylvatica 'Laciniata'",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d93f12627c2.jpg",
    treeCode: "Bx19",
    height: "91.02",
    trunkDiameter: "61.4",
    canopySpread: "50.5",
    AFAPoints: "297",
    description:
      "A European cutleaf beech can be found at Woodlawn Cemetery northeast of the Jerome Avenue entrance in the Woodbine Plot. It has a similar bark to the weeping beech at Woodlawn, but without the drooping form.",
  },
  {
    id: 5,
    name: "Japanese Red Pine",
    location: "By Glyndor Terrace",
    latinName: "Pinus densiflora 'Umbraculifera'",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d94011a52be.jpg",
    treeCode: "Bx10",
    height: "11.48",
    trunkDiameter: "N/A",
    canopySpread: "8.5",
    AFAPoints: "N/A",
    description:
      "The Japanese red pine, found near the sugar maple at Wave Hill, is a replacement of the previous Japanese red pine. It is an unusual species not native to North America.",
  },
  {
    id: 6,
    name: "Lacebark Pine at Wave Hill",
    location: "At the top of the lawn just southeast of the Wave Hill House.",
    latinName: "Pinus bungeana",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d940ff10c97.jpg",
    treeCode: "Bx13",
    height: "52.48",
    trunkDiameter: "17",
    canopySpread: "36.5",
    AFAPoints: "115",
    description:
      "The lacebark pine at Wave Hill forms part of the group of unusual trees that include the American elm, sugar maple, and Japanese red pine. The lacebark pine is native to China and is noted for its mottled greenish bark.",
  },
  {
    id: 7,
    name: "Littleleaf Linden at the Pelham Bay Park War Memorial",
    location: "At the War Memorial",
    latinName: "Tilia cordata",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d94224884a5.jpg",
    treeCode: "Bx29",
    height: "58.22",
    trunkDiameter: "30.3",
    canopySpread: "42",
    AFAPoints: "164",
    description:
      "There were once 588 maple and linden trees in the Norway Maple and Littleleaf Linden Grove at the Pelham Bay Park War Memorial. While only a couple of littleleaf lindens remain, the grove still serves as a memorial to all those who have fought in a war.",
  },
  {
    id: 8,
    name: "Slippery Elm",
    location: "710 West 246th Street",
    latinName: "Ulmus rubra",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d9459b71ad6.jpg",
    treeCode: "Bx07",
    height: "98.4",
    trunkDiameter: "69",
    canopySpread: "42",
    AFAPoints: "326",
    description:
      "The slippery elm at 710 West 246th Street is one of the best-tended trees in the city and has grown to the unusual height of 100 feet. The species is generally smaller than American elms and known for their sticky resinous inner bark which was chewed like gum by children and made into patent medicines by their profit-minded elders.",
  },
  {
    id: 9,
    name: "Sugar Maple at Wave Hill",
    location: "At the top of the lawn just southeast of the Wave Hill House.",
    latinName: "Acer saccharum",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d9460ff0a1a.jpg",
    treeCode: "Bx11",
    height: "88.56",
    trunkDiameter: "45.8",
    canopySpread: "56",
    AFAPoints: "246",
    description:
      "The sugar maple at Wave Hill is located at the top of the lawn just southeast of the main house. This tree is the only sugar maple in New York City to be designated a Great Tree.",
  },
  {
    id: 10,
    name: "Sweetgum at 2151 Newbold Avenue",
    location: "2151 Newbold Avenue, Post of the Veterans of Foreign Wars",
    latinName: "Liquidambar styraciflua",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d946cc13310.jpg",
    treeCode: "Bx28",
    height: "158.26",
    trunkDiameter: "53",
    canopySpread: "72.5",
    AFAPoints: "343",
    description:
      "The sweetgum at 2151 Newbold Avenue is nearly a century old and is found in the yard of the Veterans of Foreign Wars. Sweetgums are a southern species that have made a place for themselves as far north as Connecticut. By 1996, there were nearly 10,000 sweetgums on the streets of New York City. They are easy to distinguish by their glossy star-shaped leaves and globular seed balls, which stubbornly cling to the tree well into the winter.",
  },
  {
    id: 11,
    name: "Umbrella Pine at Woodlawn Cemetery",
    location:
      "Woodlawn Cemetery - corner of Parkview and Chestnut Avenues, northeast of the Joseph Paterno mausoleum",
    latinName: "Sciadopitys verticillata",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d947c28c0c2.jpg",
    treeCode: "Bx22",
    height: "47.56",
    trunkDiameter: "38",
    canopySpread: "22.5",
    AFAPoints: "173",
    description:
      "The umbrella pine, found at the corner of Parkview and Chestnut Avenues, northeast of the Joseph Paterno mausoleum at Woodlawn Cemetery, is a unique conifer that is native to Japan.",
  },
  {
    id: 12,
    name: "Weeping Beech at Woodlawn Cemetery",
    location:
      "Woodlawn Cemetery - Jay Gould plot, north of the intersection of Observatory and Central Avenues",
    latinName: "Facus sylvatica 'Pendula'",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d948d982eb4.jpg",
    treeCode: "Bx18",
    height: "53.3",
    trunkDiameter: "66",
    canopySpread: "63.5",
    AFAPoints: "277",
    description:
      "The weeping beech, found on the Jay Gould plot at Woodlawn Cemetery is a hallmark of New York City cemeteries. It is known for its twisting branches and smooth, leathery trunk.",
  },
  {
    id: 13,
    name: "White Ash at Van Cortlandt Park",
    location: "East side of the entrance to the cross country trail",
    latinName: "Fraxinus americana",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d94a32e3be1.jpg",
    treeCode: "Bx17",
    height: "82.82",
    trunkDiameter: "56.6",
    canopySpread: "60.5",
    AFAPoints: "276",
    description:
      "The white ash on the east side of the entrance to the cross country trail, not far from Van Cortlandt Mansion, stands tall and strong as it towers over the thousands of runners that pass below it each year.",
  },
  {
    id: 14,
    name: "White Oak in Raoul Wallenberg Forest",
    location: "Along the Palisades Avenue hiking trail",
    latinName: "Quercus Alba",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d94b411748c.jpg",
    treeCode: "Bx04",
    height: "87.74",
    trunkDiameter: "54.5",
    canopySpread: "63.5",
    AFAPoints: "275",
    description:
      "To find the white oak in Raoul Wallenberg Forest, take the trail that leaves Palisades Avenue 1/10 mile north of West 232nd Street. Hike 500 feet up to the dead trunk of the copper beech, then turn and walk 200 feet southeast. This white oak is associated with General U Thant, the Burmese diplomat who lived in Riverdale during his tenure as Secretary General of the United Nations from 1961 to 1971.",
  },
  {
    id: 15,
    name: "White Oak at Woodlawn Cemetery",
    location: "Woodlawn Cemetery",
    latinName: "Quercus Alba",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d94c1b4a5a1.jpg",
    treeCode: "Bx30",
    height: "90.2",
    trunkDiameter: "64.2",
    canopySpread: "82",
    AFAPoints: "312",
    description:
      "This massive white oak is the oldest tree at Woodlawn Cemetery and is located at North Border Ave and Rutgers Ave overlooking East 233rd Street.",
  },
  {
    id: 16,
    name: "White Pine at Woodlawn Cemetery",
    location: "Near the Jerome Avenue entrance of Woodlawn Cemetery",
    latinName: "Pinus strobus",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d94c89dfb0d.jpg",
    treeCode: "Bx21",
    height: "83.64",
    trunkDiameter: "43.5",
    canopySpread: "48",
    AFAPoints: "232",
    description:
      "The white pine near the Jerome Avenue entrance to Woodlawn Cemetery is the only white pine designated a Great Tree of New York City. It shows the scraggly twisted shape these American conifers develop as they age.",
  },
  {
    id: 17,
    name: "American Elm at 72nd Street and Ridge Boulevard",
    location: "72nd Street and Ridge Boulevard (near Owl's Head Park)",
    latinName: "Ulmus Americana",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54da84333bd98.jpg",
    treeCode: "Bk22",
    height: "77.9",
    trunkDiameter: "45",
    canopySpread: "46",
    AFAPoints: "231",
    description:
      "The American elm near Owls's Head Park at 72nd Street and Ridge Boulevard has escaped the scourge of Elm Disease, and was selected by the community for its size.",
  },
  {
    id: 18,
    name: "American Hornbeam in Prospect Park",
    location: "Across from the camperdown elm where three trails intersect.",
    latinName: "Carpinus caroliniana",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54da8559435bb.jpg",
    treeCode: "Bk15",
    height: "84.46",
    trunkDiameter: "115",
    canopySpread: "72.5",
    AFAPoints: "464",
    description:
      "The American hornbeam is located across from the camperdown elm in Prospect Park. It is a native species, known for its distinctive blue-grey limbs, wich are sinewy and smooth and twist and swell like muscular arms.",
  },
  {
    id: 19,
    name: "Camperdown Elm near Prospect Park Boathouse",
    location: "South of the Boathouse and east of the Lullwater bridge",
    latinName: "Ulmus glabra 'Camperdownii'",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54da852ae86b0.jpg",
    treeCode: "Bk14",
    height: "20.5",
    trunkDiameter: "47",
    canopySpread: "30.5",
    AFAPoints: "176",
    description:
      "The camperdown elm at Prospect Park was a gift from Mr. A. Burgess in 1872 and was one of the first camperdown elms propagated in the United States. It is celebrated in a poem by the great Brooklyn poet Marianne Moore. The camperdown elm originated on the state of the Earl of Camperdown, near Dundee, Scotland and was introduced to the market in 1850.",
  },
  {
    id: 20,
    name: "Camperdown Elm at Greenwood Cemetery",
    location:
      "Greenwood Cemetery at the intersection of Garden Path and Pink Avenue",
    latinName: "Ulmus glabra 'Camperdownii'",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54da86507b7a0.jpg",
    treeCode: "Bk20",
    height: "19.68",
    trunkDiameter: "28.8",
    canopySpread: "12",
    AFAPoints: "113",
    description:
      "The Camperdown Elm at Greenwood Cemetery is tied to the site's historical importance. Founded in 1838, and a designated National Historic Landmark, the popularity of Greenwood Cemetery as a green space convinced officials for the need for a larger recreation area in Manhattan. This area would later become Central Park. You can obtain a map at the gatehouse.",
  },
  {
    id: 21,
    name: "Caucasian Wing Nut at Brooklyn Botanic Garden",
    location:
      "On the Flatbush Avenue side of the Brooklyn Botanic Garden just north of the Rock Garden",
    latinName: "Pterocarya fraxinola",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54da869dc76b9.jpg",
    treeCode: "Bk09",
    height: "45.1",
    trunkDiameter: "120",
    canopySpread: "61.5",
    AFAPoints: "437",
    description:
      "The Caucasian wing nut was first received from Rome in 1922. Native from the Caucasus to Iran, this specimen is known for its large low limbs and for the dense mass of exposed roots growing outwards in vivid patterns from the central trunk.",
  },
  {
    id: 22,
    name: "Chinese Parasol Tree at Brooklyn Botanic Garden",
    location: "Brooklyn Botanical Garden - South of the Rock Garden",
    latinName: "Firmiana simplex",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54da87444cc1a.jpg",
    treeCode: "Bk10",
    height: "39.36",
    trunkDiameter: "12.25",
    canopySpread: "25",
    AFAPoints: "84",
    description:
      "Located south of the Rock Garden, the Chinese parasol tree was sent to the Brooklyn Botanic Garden by the Yokohama Nursery in Japan in 1925.",
  },
  {
    id: 23,
    name: "Common Pawpaw at Brooklyn Botanic Garden",
    location: "Brooklyn Botanical Garden",
    latinName: "Asima triloba",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54da87b0352e0.jpg",
    treeCode: "Bk03",
    height: "32.8",
    trunkDiameter: "Multiple <10''",
    canopySpread: "23.5",
    AFAPoints: "#VALUE!",
    description:
      "Known for its edible banana-like fruit and large, umbrella-like leaves, the Common Pawpaw belongs to the custard apple family and was planted in 1932.",
  },
  {
    id: 24,
    name: "Dawn Redwood at 151 Willow Street",
    location: "151 Willow Street",
    latinName: "Metasequoia glyptostroboides",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54da88143ba22.jpg",
    treeCode: "Bk01",
    height: "100.04",
    trunkDiameter: "35",
    canopySpread: "57.5",
    AFAPoints: "224",
    description:
      "The massive dawn redwood located at 151 Willow Street in Brooklyn Heights is an exotic species originally from China. Known only from fossils until 1941, dawn redwoods are an ancient relative of the giant sequoia and redwood trees of California.",
  },
  {
    id: 25,
    name: "English Elm at Prospect Park Garfield Entrance",
    location: "Along the west drive, north of the Garfield entrance",
    latinName: "Ulmus procera",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54da888c78ded.jpg",
    treeCode: "Bk19",
    height: "95.94",
    trunkDiameter: "70.9",
    canopySpread: "66",
    AFAPoints: "335",
    description:
      "The English elm located along the west drive of Prospect Park, north of the Garfield entrance, has multiple trunks, and its notable form shows just how the imported species differs in shape from the more vase-shaped American elm.",
  },
  {
    id: 26,
    name: "Japanese Pagodatree in Prospect Park",
    location: "Beside the camperdown elm south of the Boathouse",
    latinName: "Styphnolobium japonicum",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54da8acf2fd29.jpg",
    treeCode: "Bk16",
    height: "86.1",
    trunkDiameter: "54.1",
    canopySpread: "62",
    AFAPoints: "272",
    description:
      "Native to Eastern Asia, this tree was once planted at the graves of Japanese scholars. It is a successful street tree in cities because of its tolerance of soil compaction and temperature extremes. It has a delicate, feathery foliage with attractive clusters of white flowers that bloom early in the fall.",
  },
  {
    id: 27,
    name: "Kansas Hawthorn at Brooklyn Botanic Garden",
    location: "Across from the Lily Pond",
    latinName: "Crataegus coccinioides",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54da8b8ac89bb.jpg",
    treeCode: "Bk13",
    height: "35.26",
    trunkDiameter: "20",
    canopySpread: "28",
    AFAPoints: "105",
    description:
      "The Kansas hawthorn located just across from the Lily Pond is a national and New York State Champion Tree. It was donated by the Parks Department of Rochester, New York in 1912 and is known for the flaming red foliage it produces in October and its abundance of dark crimson berry-like fruit.",
  },
  {
    id: 28,
    name: "Mountain Winterberry at Brooklyn Botanic Garden",
    location: "South side of the Rock Garden",
    latinName: "Ilex ambigua Var. Monticola",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54da8be854045.jpg",
    treeCode: "Bk12",
    height: "38.54",
    trunkDiameter: "27.5",
    canopySpread: "28",
    AFAPoints: "132",
    description:
      "The mountain winterberry, located on the south side of the Rock Garden, is among the 12,000 plants that were advertised when the Brooklyn Botanic Garden was founded in 1910.",
  },
  {
    id: 29,
    name: "Southern Magnolia at Magnolia Tree Earth Center",
    location: "Magnolia Tree Earth Center, 677 Lafayette Avenue",
    latinName: "Magnolia grandiflora",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54da8c4776564.jpg",
    treeCode: "Bk02",
    height: "56.58",
    trunkDiameter: "22",
    canopySpread: "22.5",
    AFAPoints: "131",
    description:
      "Planted in about 1885, the southern magnolia at 677 Lafayette Avenue is the sole remaining designated landmark tree in New York City. It was designated at the behest of local activist Hattie Carthan, who also created an education center when demolition threatened the magnolia and three adjacent brownstones.",
  },
  {
    id: 30,
    name: "American Elm at Central Park Mall Rock Outcrops (1)",
    location: "Growing at rock outcrops just east of the mall",
    latinName: "Ulmus americana",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54da8d5bdc29a.jpg",
    treeCode: "Mn06",
    height: "55.76",
    trunkDiameter: "31",
    canopySpread: "30",
    AFAPoints: "161",
    description:
      "The two individual American Elms growing at the rock outcrops just east of the mall have gnarled trunks that like something out of a fairy tale illustration, with the roots of one scuttling across the rock like hands.",
  },
  {
    id: 31,
    name: "American Elm at Central Park Mall Rock Outcrops (2)",
    location: "growing at rock outcrops just east of the mall",
    latinName: "Ulmus americana",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54de69c442c5f.jpg",
    treeCode: "Mn07",
    height: "78.72",
    trunkDiameter: "41.5",
    canopySpread: "36",
    AFAPoints: "218",
    description:
      "The two individual American Elms growing at the rock outcrops just east of the mall have gnarled trunks that seem like something out of a fairy tale illustration, with the roots of one scuttling across the rock like hands.",
  },
  {
    id: 32,
    name: "American Elm at Central Park West and West 77th Street",
    location:
      "Grows by the retaining wall at the northeast corner of the intersection of Central Park West and West 77th street",
    latinName: "Ulmus americana",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54da8dbd71519.jpg",
    treeCode: "Mn16",
    height: "50.84",
    trunkDiameter: "41.3",
    canopySpread: "55",
    AFAPoints: "194",
    description:
      "The American elm at the northeast corner of the intersection of the Central Park West and West 77th Street, towers by the retaining wall and is beloved by nearby residents.",
  },
  {
    id: 33,
    name: "American Elm at Central Park E. 97th Street Entrance",
    location:
      "East 97th Street entrance to Central Park, aproximately 500 feet west of 5th Avenue",
    latinName: "Ulmus americana",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54da8e1fc1b9a.jpg",
    treeCode: "Mn17",
    height: "94.3",
    trunkDiameter: "63",
    canopySpread: "80",
    AFAPoints: "312",
    description:
      "The American elm located at the East 97th Street entrance to the park is a classic example of the species that had once been planted widely in cities across the United States before they were decimated by Dutch elm disease.",
  },
  {
    id: 34,
    name: "Grove of American Elms on Central Park Mall",
    location:
      "The Mall (located just north of the intersection of the east and north drives, at about 66th street)",
    latinName: "Ulmus americana",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54dd2bb1da8ab.jpg",
    treeCode: "Mn05",
    height: "90.2",
    trunkDiameter: "35.5",
    canopySpread: "42.5",
    AFAPoints: "212",
    description:
      "The grove of American elms on Central Park Mall, located just north of the intersection of the east and north drives, at about 66th street, is likely one of the largest groves of its kind. They are noted for their regularly-spaced trunks, which resemble the columns in a cathedral, and for their twisting branches.",
  },
  {
    id: 35,
    name: "Black Tupelo (Sourgum) in Central Park Ramble",
    location: "Near the center of the Ramble",
    latinName: "Nyssa sylvatica",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54dd2b34242b5.jpg",
    treeCode: "Mn10",
    height: "81.18",
    trunkDiameter: "49.5",
    canopySpread: "56",
    AFAPoints: "251",
    description:
      "The black tupelo is located near the center of the Ramble. Its three main trunks push upward to form a woody candelabra in one of the most alluring parts of Central Park.",
  },
  {
    id: 36,
    name: "English Elm at St. Nicholas Ave. and 163rd St.",
    location:
      "Apartment complex on east side of St. Nicholas Ave at 163rd Street",
    latinName: "Ulmus procera",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54dd29dfb53c9.jpg",
    treeCode: "Mn03",
    height: "78.72",
    trunkDiameter: "60.7",
    canopySpread: "57.5",
    AFAPoints: "284",
    description:
      "The English elm growing beside an apartment complex on the east side of St. Nicholas Avenue at 163rd Street was probably planted on the estate of the nearby Morris Jumel Mansion. George Washington stood here on the night of September 21, 1776 to watch the fire set by American rebels that destroyed much of New York City.",
  },
  {
    id: 37,
    name: "English Elm at Stuyvesant Square Park",
    location: "Western gate",
    latinName: "Ulmus procera",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54dd2a39155b4.jpg",
    treeCode: "Mn02",
    height: "108.24",
    trunkDiameter: "57.6",
    canopySpread: "46",
    AFAPoints: "301",
    description:
      "The English elm growing by the western gate of Stuyvesant Square Park is thought to have been growing here since before Peter Gerard Stuyvesant gave the land to the city for use as a park in 1836.",
  },
  {
    id: 38,
    name: "Hangman's Elm of Washington Square Park",
    location: "Northwest corner",
    latinName: "Ulmus procera",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54dd2ac955026.jpg",
    treeCode: "Mn01",
    height: "131.2",
    trunkDiameter: "67.2",
    canopySpread: "42.5",
    AFAPoints: "353",
    description:
      'The English elm at the northwest corner of Washington Square, also known as "Hangman\'s Elm," is one of the oldest trees on Manhattan Island. According to legend, traitors were hung from the branches of the tree during the American Revolution. Historical records suggest that it is more than 300 years old.',
  },
  {
    id: 39,
    name: "Evodia at Heckscher Playground",
    location: "By the Heckscher Playground near Columbus Circle",
    latinName: "Tetradium daniellii",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54dd2948e647c.jpg",
    treeCode: "Mn14",
    height: "77.9",
    trunkDiameter: "30",
    canopySpread: "37.5",
    AFAPoints: "182",
    description:
      "The Evodia by the Heckscher Playground near Columbus Circle is a native of China and Korea.",
  },
  {
    id: 40,
    name: "Ginkgo at Isham Park",
    location: "Southeast corner at Broadway and West 211th Street",
    latinName: "Ginkgo biloba",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54dd28f8b298b.jpg",
    treeCode: "Mn04",
    height: "71.34",
    trunkDiameter: "58.8",
    canopySpread: "62",
    AFAPoints: "272",
    description:
      "The ginkgo at the southeast corner of Isham Park is one of the most well-known trees in the neighborhood. While it is a non-native species, ginkgos are a popular choice for street trees because they are hardy and long-lived.",
  },
  {
    id: 41,
    name: "London Plane at Central Park Bridle Path Near East 96th Street",
    location: "Northeast corner of reservoir",
    latinName: "Platanus x acerifolia",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54dd289740c70.jpg",
    treeCode: "Mn12",
    height: "95.94",
    trunkDiameter: "62",
    canopySpread: "54",
    AFAPoints: "304",
    description:
      "The multi-trunked London plane growing along the bridle path near the East 96th Street entrance at the northeast corner of the Reservoir, is according to New York writer Dennis Burton, one of the oldest in the park.",
  },
  {
    id: 42,
    name: "Pine Trees of the Arthur Ross Pinetum",
    location: "Arthur Ross Pinetum at the north end of the Great Lawn",
    latinName: "Various",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54dd2742b6fcc.jpg",
    treeCode: "Mn09",
    height: "Various",
    trunkDiameter: "Various",
    canopySpread: "Various",
    AFAPoints: "Various",
    description:
      "The Arthur Ross Pinetum at the north end of the Great Lawn has over 600 pine trees representing 17 different species from around the world, which were planted between 1971 and 1980.",
  },
  {
    id: 43,
    name: "Yoshino Cherries At Central Park Reservoir",
    location: "East side of reservoir",
    latinName: "Prunus x yedoensis",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54dd259814f5f.jpg",
    treeCode: "Mn11",
    height: "28.7",
    trunkDiameter: "18",
    canopySpread: "27.5",
    AFAPoints: "92",
    description:
      "The 35 yoshino cherries located on the east side of the Central Park Reservoir were originally part of a gift from the Japanese government in 1912, which also included cherries for the Tidal Basin in Washington, D.C. The yoshino sherries are now a landmark for the many thousands who make their daily or weekly progress around the 1.6 mile Reservoir track.",
  },
  {
    id: 44,
    name: "American Beech at Maple Grove Cemetery",
    location: "Maple Grove Cemetery, by the grave of Elizabeth Riis",
    latinName: "Fagus grandifolia",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54de598166ae7.jpg",
    treeCode: "Qu19",
    height: "61.5",
    trunkDiameter: "19.02",
    canopySpread: "25.5",
    AFAPoints: "128",
    description:
      "The twin beeches at Maple Grove Cemetery by the grave of Elizabeth Riis were planted by her husband, Jacob Riis, the renowned social reformer and journalist-photographer, in 1905.",
  },
  {
    id: 45,
    name: "American Beech at Maple Grove Cemetery",
    location: "Maple Grove Cemetery, by the grave of Elizabeth Riis",
    latinName: "Fagus grandifolia",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54de588f17ec6.jpg",
    treeCode: "Qu19",
    height: "60.68",
    trunkDiameter: "26.4",
    canopySpread: "31.5",
    AFAPoints: "151",
    description:
      "The twin beeches at Maple Grove Cemetery, by the grave of Elizabeth Riis, were planted by her husband Jacob Riis, the renowned social reformer and journalist-photographer, in 1905.",
  },
  {
    id: 46,
    name: "Bald Cypress at 143-66 Sanford Avenue",
    location: "143-66 Sanford Avenue at Parsons Boulevard, Queens",
    latinName: "Taxodium distichum",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54de563edfbf2.jpg",
    treeCode: "Qu11",
    height: "72.16",
    trunkDiameter: "38.7",
    canopySpread: "30.5",
    AFAPoints: "201",
    description:
      "The Baldcypress at 143-66 Sanford Avenue is associated with the historic Samuel B. Parsons nursery in Flushing.",
  },
  {
    id: 47,
    name: "Bald Cypress at Flushing High School",
    location:
      "138-10 Northern Boulevard, Queens (in front of Flushing High School)",
    latinName: "Taxodium distichum",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54de5743762ce.jpg",
    treeCode: "Qu06",
    height: "57.4",
    trunkDiameter: "29.6",
    canopySpread: "24",
    AFAPoints: "156",
    description:
      "The six bald cypress trees in front of Flushing High School grow on what was once the grounds of the house of Samuel Bowne Parsons, whose vast nursery in Flushing supplied the trees and shrubs for Prospect and Central Park.",
  },
  {
    id: 48,
    name: "Cedar of Lebanon at Weeping Beech Park",
    location: "Near the public restroom",
    latinName: "Cedrus libani",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54de550dc070f.jpg",
    treeCode: "Qu05",
    height: "41.82",
    trunkDiameter: "34.4",
    canopySpread: "53.5",
    AFAPoints: "163",
    description:
      "Once surrounded by a grassy field, the Cedar of Lebanon at Weeping Beech Park began life in the nursery of Samuel B. Parsons, whose grounds once extended throughout the area.",
  },
  {
    id: 49,
    name: "Ginkgo at Crocheron Park",
    location: "Behind the baseball fields, near the public restroom",
    latinName: "Ginkgo biloba",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54de6ffd759c3.jpg",
    treeCode: "Qu13",
    height: "82",
    trunkDiameter: "36",
    canopySpread: "33",
    AFAPoints: "203",
    description:
      'The ginkgo at Crocheron Park has long been associated with William M. Tweed, the notorious Tammany Hall "Boss", who hid at the house of the Crocheron family after escaping from the Ludlow Street Jail. The property was subsequently acquired by New York City.',
  },
  {
    id: 50,
    name: "Katsura at 15 Shore Road",
    location: "15 Shore Road, Queens",
    latinName: "Cercidiphyllum japonicum",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54de520a5cf81.jpg",
    treeCode: "Qu16",
    height: "64.78",
    trunkDiameter: "45",
    canopySpread: "48",
    AFAPoints: "218",
    description:
      "The Katsura trees at 15 Shore Road are located in the Douglaston Hill Historic District, and were planted when the land still belonged to William B. Douglas, after whom the area is named.",
  },
  {
    id: 51,
    name: "Manchurian Linden at Kissena Park",
    location:
      "Immediately adjacent to the tennis courts - 75 feet north of the public restroom",
    latinName: "Tilia mandshurica",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54de7fe41e897.jpg",
    treeCode: "Qu08",
    height: "78.72",
    trunkDiameter: "60",
    canopySpread: "41",
    AFAPoints: "277",
    description:
      "The sizable Manchurian linden located immediately adjacent to the tennis courts is a rare and exotic species that typifies the work undertaken by the Parsons nursery in importing exotic species to the United States.",
  },
  {
    id: 52,
    name: "Persian Parrotia at Kissena Park",
    location: "Thirty feet south of the public restroom",
    latinName: "Parrotia persica",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54de80309469a.jpg",
    treeCode: "Qu07",
    height: "56.58",
    trunkDiameter: "16.46666667",
    canopySpread: "44",
    AFAPoints: "119",
    description:
      "Native to Iran, the Persian parrotia is a rare species known for its brown flaky bark and spreading branches. It is a living testament to the many exotic species that were imported to the United States by Samuel B. Parsons.",
  },
  {
    id: 53,
    name: "American Sycamore at Conference House Park",
    location: "Behind the Conference House",
    latinName: "Platanus occidentalis",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54de466551321.jpg",
    treeCode: "St18",
    height: "89.38",
    trunkDiameter: "63",
    canopySpread: "55",
    AFAPoints: "301",
    description:
      "The American sycamore, located behind Conference House, is a grand shade tree that can grow to a larger trunk diameter greater than any other native species. The largest sycamore known had a girth of nearly 15 feet.",
  },
  {
    id: 54,
    name: "American Sycamore at Alice Austen Park",
    location: "In the meadow south of the Alice Austen House",
    latinName: "Platanus occidentalis",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54de48d8cb2f3.jpg",
    treeCode: "St02",
    height: "61.5",
    trunkDiameter: "63.2",
    canopySpread: "59.5",
    AFAPoints: "275",
    description:
      "Located in the meadow south of Alice Austen House, the American Sycamore is believed to have been growing around 1840 when John Austen, Alice Austen's grandfather, purchased and expanded the house. Despite being scarred by lightning, the tree lives on.",
  },
  {
    id: 55,
    name: "Cedar of Lebanon at Olmsted-Beil House Park",
    location:
      "4515 Hylan Boulevard - 35 feet off the left corner of the house (three feet off the driveway)",
    latinName: "Cedrus libani",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54de45b390f6a.jpg",
    treeCode: "St11",
    height: "82",
    trunkDiameter: "40",
    canopySpread: "40.5",
    AFAPoints: "218",
    description:
      "The Cedar of Lebanon in Olmsted-Beil House Park is one of the trees remaining on the property that was once on the farm of Frederick Law Olmsted, who began his career as an experimental wheat farmer. The tree is located 35 feet off the left front corner of the house, three feet off the driveway.",
  },
  {
    id: 56,
    name: "Common Horse Chestnuts at Tappen Park",
    location: "Near Canal Street",
    latinName: "Aesculus hippocastanum",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54de4429ae376.jpg",
    treeCode: "St03",
    height: "65.6",
    trunkDiameter: "48.6",
    canopySpread: "43.5",
    AFAPoints: "229",
    description:
      "Located at Tappen Park near Canal Street, the common horse chestnut is a hardy non-native species with beautiful white blossoms and sour little nuts that are commonly planted as a street tree in Europe.",
  },
  {
    id: 57,
    name: "Eastern Cottonwood at 184 Sprague Avenue",
    location: "184 Sprague Avenue, Staten Island",
    latinName: "Populus deltoides",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54de4289b11d5.jpg",
    treeCode: "St17",
    height: "94.3",
    trunkDiameter: "73",
    canopySpread: "88.5",
    AFAPoints: "346",
    description:
      "The Eastern Cottonwood at 184 Sprague Street is close to 200 years old and a remarkable specimen for a species that typically achieves a height of no more than 100 feet.",
  },
  {
    id: 58,
    name: "Osage Orange Grove Along Seguine Avenue",
    location:
      "Multiple trees along Seguine Avenue from Hylan Boulevard across from the  Staten Island University Hospital",
    latinName: "Maclura pomifera",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54de3cde2651b.jpg",
    treeCode: "St12",
    height: "40.18",
    trunkDiameter: "44",
    canopySpread: "36",
    AFAPoints: "187",
    description:
      "The Osage oranges growing along the length of Seguine Avenue from Hylan Boulevard, stand on the property of Staten Island University Hospital. They are considered the finest collection of Osage oranges in the city. Osage oranges are a northern vestige of plantation-style landscaping, reminiscent of the deep south.",
  },
  {
    id: 59,
    name: "Royal Paulownia at Snug Harbor",
    location:
      "914 Richmond Terrace (on the west side of the Veterans Memorial Hall Playhouse, off Chapel Road)",
    latinName: "Paulownia tomentosa",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54de3afa1b911.jpg",
    treeCode: "St06",
    height: "65.6",
    trunkDiameter: "57.8",
    canopySpread: "34",
    AFAPoints: "256",
    description:
      "The royal paulownia can be found at Snug Harbor on the west side of the Veterans Memorial Hall Playhouse. The heart-shaped leaves of the species can grow strikingly large, sometimes reaching a diameter of one foot. Its glamorous, trumpet-shaped purple flowers bloom in the spring.",
  },
  {
    id: 60,
    name: "Tulip Tree at Clove Lakes Park",
    location: "Near the corner of Clove Road and Forest Avenue",
    latinName: "Liriodendron Tulipifera",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54de37f5cb5f7.jpg",
    treeCode: "St08",
    height: "110.7",
    trunkDiameter: "86",
    canopySpread: "63",
    AFAPoints: "397",
    description:
      "The tulip tree at the corner of Clove Road and Forest Avenue in Clove Lakes Park is possibly the largest single-trunked great tree in the city. The species is part of the magnolia family, and have two-inch tulip-shaped flowers with petals that are a pale greenish yellow with an orange base. Tulip trees are some of the tallest hardwoods in North America and can grow to more than 200 feet.",
  },
  {
    id: 61,
    name: "Willow Oaks at Clove Lakes Park",
    location:
      "On the shore of Clove Lake, 150 feet north of Victory Boulevard, near the basketball courts.",
    latinName: "Quercus phellos",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54de36b03c465.jpg",
    treeCode: "St09",
    height: "84.46",
    trunkDiameter: "41.2",
    canopySpread: "43",
    AFAPoints: "225",
    description:
      "The pair of willow oaks at Clove Lakes Park, can be found on the shore of Clove Lake. The two specimens showcase the size of the beautiful trees. Their leaves resemble those of willows.",
  },
];
export default treeData;
