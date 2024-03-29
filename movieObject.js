// Simulates Movie API

const moviesList = {
  1: {
    movieName: "Aqua Man 2",
    movieId: "1",
    genre: "Science Fiction",
    year: "2023",
    rating: "67%",
    runtime: "1hr55min",
  },
  2: {
    movieName: "The Old Guard",
    movieId: "2",
    genre: "Action",
    year: "2020",
    rating: "80%",
    runtime: "2hr5min",
  },
  3: {
    movieName: "Persuation",
    movieId: "3",
    genre: "Romance",
    year: "2022",
    rating: "58%",
    runtime: "1hr49min",
  },
  4: {
    movieName: "The Burial",
    movieId: "4",
    genre: "Drama",
    year: "2023",
    rating: "92%",
    runtime: "2hr6min",
  },
  5: {
    movieName: "Ted",
    movieId: "5",
    genre: "Comedy",
    year: "2012",
    rating: "69%",
    runtime: "1hr46min",
  },
  6: {
    movieName: "Lift",
    movieId: "6",
    genre: "Comedy",
    year: "2024",
    rating: "50%",
    runtime: "1hr44min",
  },
  7: {
    movieName: "Extraction 2",
    movieId: "7",
    genre: "Action",
    year: "2023",
    rating: "79%",
    runtime: "2hr3min",
    info: "Back from the brink of death, commando Tyler Rake embarks on a dangerous mission to save a ruthless gangster's imprisoned family.",
  },
  8: {
    movieName: "Fast Five",
    movieId: "8",
    genre: "Action",
    year: "2011",
    rating: "78%",
    runtime: "2hr10",
    info: "Dominic Toretto and his crew of street racers are on the run, with a dangerous federal agent on their trail. In order to buy their freedom, they decide to steal millions of dollars from a drug lord",
  },
  9: {
    movieName: "21 jump street",
    movieId: "9",
    genre: "Comedy",
    year: "2012",
    rating: "85%",
    runtime: "1hr49min",
    info: "A pair of underachieving cops are sent back to a local high school to blend in and bring down a synthetic drug ring.",
  },
  10: {
    movieName: "The Matrix",
    movieId: "10",
    genre: "Science Fiction",
    year: "1999",
    rating: "87%",
    runtime: "2hr16min",
    info: "Neo, a computer programmer and hacker, has always questioned the reality of the world around him. His suspicions are confirmed when Morpheus, a rebel leader, contacts him and reveals the truth to him.",
  },
  11: {
    movieName: "Love at first slight",
    movieId: "11",
    genre: "Romance",
    year: "2023",
    rating: "73%",
    runtime: "1hr31min",
    info: "On their flight from New York to London, Hadley and Oliver fall in love with each other. However, they lose each other at customs and the possibility of ever meeting each other again seems improbable, but destiny may have a way of changing the odds.",
  },
  12: {
    movieName: "Beyond the light",
    movieId: "12",
    genre: "Romance",
    year: "2014",
    rating: "84%",
    runtime: "1hr56min ",
    info: "Noni Jean is rescued by Kaz Nicol, a cop, after a failed suicide attempt. She comes to terms with her failures under his guidance and pursues her ambitions, unaware that he loves her",
  },
  13: {
    movieName: "Edge of tomorrow",
    movieId: "13",
    genre: "Science Fiction",
    year: "2014",
    rating: "91%",
    runtime: "1hr 53min",
    info: "After the alien forces launch an attack on Earth and threaten to wipe out the human race, Captain Cage, who is trapped in a time loop, teams up with a warrior to save the planet",
  },
  14: {
    movieName: "Outside the wire",
    movieId: "14",
    genre: "Action",
    year: "2021",
    rating: "45%",
    runtime: "1hr55min",
    info: "In the near future, a drone pilot sent into a war zone finds himself paired up with a top-secret android officer on a mission to stop a nuclear attack.",
  },
  15: {
    movieName: "6 underground",
    movieId: "15",
    genre: "Action",
    year: "2019",
    rating: "61%",
    runtime: "2hr8min",
    info: "Six individuals from all around the globe, each the very best at what they do, have been chosen not only for their skill, but for a unique desire to delete their pasts to change the future.",
  },
  16: {
    movieName: "Rush hour",
    movieId: "16",
    genre: "Comedy",
    year: "1998",
    rating: "70%",
    runtime: "1hr38min",
    info: "Two cops from different cultures, who cannot stand each other, team up to save the kidnapped 11-year-old daughter of a diplomat. With time running out, they must nab the criminals and save the girl.",
  },
  17: {
    movieName: "Iron Man",
    movieId: "17",
    genre: "Science Fiction",
    year: "2008",
    rating: "94%",
    runtime: "2hr6min",
    info: "When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.",
  },

  18: {
    movieName: "Photograph",
    movieId: "18",
    genre: "Romance",
    year: "2020",
    rating: "75%",
    runtime: "1hr46min",
    info: "Michael, a reporter, meets Mae, a curator, in New York and the two of them begin to fall in love. However, when one of them gets a job in London, their relationship begins to deteriorate.",
  },

  19: {
    movieName: "Interstellar",
    movieId: "19",
    genre: "Science Fiction",
    year: "2014",
    rating: "87%",
    runtime: "2hr49min",
    info: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
  },

  20: {
    movieName: "The perfect date",
    movieId: "20",
    genre: "Romance",
    year: "2019",
    rating: "68%",
    runtime: "1hr30min",
    info: "A high school student creates an app to offer his services as a fake date to earn money for college, but his plan gets complicated when he develops feelings for someone.",
  },

  21: {
    movieName: "Catch me if you can",
    movieId: "21",
    genre: "Comedy",
    year: "2002",
    rating: "96%",
    runtime: "2hr21min",
    info: "Frank Abagnale Jr, a con man, poses as a pilot, doctor and a lawyer and cashes forged cheques worth millions before his 21st birthday, despite being constantly chased by FBI agent Carl Hanratty.",
  },
  22: {
    movieName: "Fair Play",
    movieId: "22",
    genre: "Drama",
    year: "2023",
    rating: "73%",
    runtime: "1hr53min",
    info: "An unexpected promotion at a cutthroat hedge fund pushes a newly engaged couple's relationship to the brink.",
  },
  23: {
    movieName: "Catch me if you can",
    movieId: "23",
    genre: "Drama",
    year: "2002",
    rating: "96%",
    runtime: "2hr21min",
    info: "Frank Abagnale Jr, a con man, poses as a pilot, doctor and a lawyer and cashes forged cheques worth millions before his 21st birthday, despite being constantly chased by FBI agent Carl Hanratty.",
  },
  24: {
    movieName: "The Pursuit of Happyness",
    movieId: "24",
    genre: "Drama",
    year: "2006",
    rating: "67%",
    runtime: "1hr57min",
    info: "Chris Gardner takes up an unpaid internship in a brokerage firm after he loses his life's earnings selling a product he invested in. His wife leaves him and he is left with the custody of his son.",
  },
  25: {
    movieName: "The Shawshank Redemption",
    movieId: "25",
    genre: "Drama",
    year: "1994",
    rating: "96%",
    runtime: "2hr22min",
    info: "Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.",
  },
}

let movieCards = []

let objectLength = Object.keys(moviesList).length
for (let i = 0; i < objectLength + 1; i++) {
  if (moviesList[i] !== undefined) {
    movieCards.push(moviesList[i])
  }
}

export default movieCards
