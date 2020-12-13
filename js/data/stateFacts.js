"use strict";
class StateFacts {
  constructor(state) {
    this.stateFact = this.getStateFact(state);
  }
  getStateFact(state) {
    const stateFactFromState = {
      Alabama: 
        "George Washington Carver, who discovered more than 300 uses for peanuts",
      Alaska:
        "The longest coastline in the U.S., 6,640 miles, greater than that of all other states combined",
      Arizona: "The most telescopes in the world, in Tucson",
      Arkansas: "The only active diamond mine in the U.S.",
      California:
        "“General Sherman,” a 3,500-year-old tree, and a stand of bristlecone pines 4,000 years old are the world's oldest living things",
      Colorado:
        "The world's largest silver nugget (1,840 pounds) found in 1894 near Aspen",
      Connecticut:
        "The first American cookbook, published in Hartford in 1796: American Cookery by Amelia Simmons",
      Delaware:
        "The first log cabins in North America, built in 1683 by Swedish immigrants",
      Florida:
        "U.S. spacecraft launchings from Cape Canaveral, formerly Cape Kennedy",
      Georgia:
        "The Girl Scouts, founded in Savannah by Juliette Gordon Low in 1912",
      Hawaii: "The only royal palace in the U.S. (Iolani)",
      Idaho: "The longest main street in America, 33 miles, in Island Park",
      Illinois: "The tallest building in the U.S., Sears Tower, in Chicago",
      Indiana: "The famous car race: the Indy 500",
      Iowa:
        "The shortest and steepest railroad in the U.S., Dubuque: 60° incline, 296 feet",
      Kansas: "Helium was discovered in 1905 at the University of Kansas",
      Kentucky:
        "The largest underground cave in the world: 300 miles long, the Mammoth-Flint Cave system",
      Louisiana: "The most crayfish: 98% of the world's crayfish",
      Maine: "The most easterly point in the U.S., West Quoddy Head1",
      Maryland: "The first umbrella factory in the U.S., 1928, Baltimore",
      Massachusetts:
        "The first World Series, 1903: the Boston “Americans” (became the Red Sox in 1908) vs. the Pittsburg Pirates (Pittsburgh had no “h” between 1890–1911)",
      Michigan:
        "The Cereal Bowl of America, Battle Creek, produces most cereal in the U.S.",
      Minnesota:
        "The oldest rock in the world, 3.8 billion years old, found in Minnesota River valley",
      Mississippi: "Coca-Cola, first bottled in 1894 in Vicksburg",
      Missouri:
        "Mark Twain and some of his characters, such as Tom Sawyer and Huckleberry Finn",
      Montana:
        "Grasshopper Glacier, named for the grasshoppers that can still be seen frozen in ice",
      Nebraska: "The only roller skating museum in the world, in Lincoln",
      Nevada:
        "Rare fish such as the Devils Hole pup, found only in Devils Hole, and other rare fish from prehistoric lakes; also the driest state",
      "New Hampshire":
        "Artificial rain, first used near Concord in 1947 to fight a forest fire",
      "New Jersey":
        "The world's first drive-in movie theater, built in 1933 near Camden",
      "New Mexico":
        "“Smokey Bear,” a cub orphaned by fire in 1950, buried in Smokey Bear Historical State Park in 1976",
      "New York":
        "The first presidential inauguration: George Washington took the oath of office in New York City on April 30, 1789.",
      "North Carolina":
        "Virginia Dare, the first English child born in America, on Roanoake Island in 1587",
      "North Dakota":
        "The geographic center of North America, in Pierce County, near Balta",
      Ohio:
        "The first electric traffic lights, invented and installed in Cleveland in 1914",
      Oklahoma: "The first parking meter, installed in Oklahoma City in 1935",
      Oregon:
        "The world's smallest park, totaling 452 inches, created in Portland on St. Patrick's Day for leprechauns and snail races",
      Pennsylvania:
        "The first magazine in America: the American Magazine, published in Philadelphia for 3 months in 1741",
      "Rhode Island":
        "Rhode Island Red chickens, first bred in 1854; the start of poultry as a major American industry",
      "South Carolina":
        "The first tea farm in the U.S., created in 1890 near Summerville",
      "South Dakota":
        "The world's largest natural, indoor warmwater pool, Evans' Plunge in Hot Springs",
      Tennessee: "Graceland, the estate and gravesite of Elvis Presley",
      Texas:
        "NASA, in Houston, headquarters for all piloted U.S. space projects",
      Utah:
        "Rainbow Bridge, the largest natural stone bridge in the world, 290 feet high, 275 feet across",
      Vermont: "The largest production of maple syrup in the U.S.",
      Virginia:
        "The only full-length statue of George Washington, placed in capitol in 1796",
      Washington:
        "Lunar Rover, the vehicle used by astronauts on the moon; Boeing, in Seattle, makes aircraft and spacecraft",
      "West Virginia":
        "Marbles; most of the country's glass marbles made around Parkersburg",
      Wisconsin: "The typewriter, invented in Milwaukee in 1867",
      Wyoming:
        "The “Register of the Desert,” a huge granite boulder covering 27 acres with 5,000 early pioneer names carved on it",
    };
    var statFact = stateFactFromState[state];
    return statFact;
  }
}
