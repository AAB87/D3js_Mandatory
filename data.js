var oscarsBoxOffice = [
  {
    "Year": 2010,
    "Picture": "The King's Speech",
    "Studio": "Wein.",
    "BoxOffice": 135453143,
    "Nominations": 12,
    "Wins": 4,
    "Release Date": "nov-26"
  },
  {
    "Year": 2011,
    "Picture": "The Artist",
    "Studio": "Wein.",
    "BoxOffice": 44671682,
    "Nominations": 10,
    "Wins": 5,
    "Release Date": "nov-25"
  },
  {
    "Year": 2012,
    "Picture": "Argo",
    "Studio": "WB",
    "BoxOffice": 136025503,
    "Nominations": 7,
    "Wins": 3,
    "Release Date": "10-dic"
  },
  {
    "Year": 2013,
    "Picture": "12 Years a Slave",
    "Studio": "FoxS",
    "BoxOffice": 56671993,
    "Nominations": 9,
    "Wins": 3,
    "Release Date": "oct-18"
  },
  {
    "Year": 2014,
    "Picture": "Birdman",
    "Studio": "FoxS",
    "BoxOffice": 42340598,
    "Nominations": 9,
    "Wins": 4,
    "Release Date": "oct-17"
  },
  {
    "Year": 2015,
    "Picture": "Spotlight",
    "Studio": "ORF",
    "BoxOffice": 45055776,
    "Nominations": 6,
    "Wins": 2,
    "Release Date": "11-jun"
  },
  {
    "Year": 2016,
    "Picture": "Moonlight",
    "Studio": "A24",
    "BoxOffice": 27854932,
    "Nominations": 8,
    "Wins": 3,
    "Release Date": "oct-21"
  },
  {
    "Year": 2017,
    "Picture": "The Shape of Water",
    "Studio": "FoxS",
    "BoxOffice": 61000138,
    "Nominations": 13,
    "Wins": 4,
    "Release Date": "12-ene"
  }
];

var boxOfficeMetaData = {
  xScaleField: 'Year',
  yScaleField: 'BoxOffice',
  xLabelText: 'Year',
  yAxisTickFormat: ".2s",
  yLabelText: "Box-Office",
  legendFieldName: "Picture",
  chartTitleText: "Oscars movies Box-Office from 2010",
  tooltip: [
    {
      fieldText: "",
      fieldValue: "Picture"
    },
    {
      fieldText: "Box-Office (M€): ",
      fieldValue: "BoxOffice"
    },
    {
      fieldText: "Studio: ",
      fieldValue: "Studio"
    },
    {
      fieldText: "Nominations: ",
      fieldValue: "Nominations"
    },
    {
      fieldText: "Wins: ",
      fieldValue: "Wins"
    }
  ]
};

var rankingProgrammingLanguages = [
  {
    "PosMar2018": "#1",
    "PosMar2017": "#1",
    "Change": "=",
    "ProgrammingLanguage": "Java",
    "Ratings": 0.14941,
    "Change": "-1.44%"
  },
  {
    "PosMar2018": "#2",
    "PosMar2017": "#2",
    "Change": "=",
    "ProgrammingLanguage": "C",
    "Ratings": 0.12760,
    "Change": "+5.02%"
  },
  {
    "PosMar2018": "#3",
    "PosMar2017": "#3",
    "Change": "=",
    "ProgrammingLanguage": "C++",
    "Ratings": 0.06452,
    "Change": "+1.27%"
  },
  {
    "PosMar2018": "#4",
    "PosMar2017": "#5",
    "Change": "+",
    "ProgrammingLanguage": "Python",
    "Ratings": 0.05869,
    "Change": "+1.95%"
  },
  {
    "PosMar2018": "#5",
    "PosMar2017": "#4",
    "Change": "-",
    "ProgrammingLanguage": "C#",
    "Ratings": 0.05067,
    "Change": "+0.66%"
  },
  {
    "PosMar2018": "#6",
    "PosMar2017": "#6",
    "Change": "=",
    "ProgrammingLanguage": "Visual Basic .NET",
    "Ratings": 0.04085,
    "Change": "+0.91%"
  },
  {
    "PosMar2018": "#7",
    "PosMar2017": "#7",
    "Change": "=",
    "ProgrammingLanguage": "PHP",
    "Ratings": 0.04010,
    "Change": "+1.00%"
  },
  {
    "PosMar2018": "#8",
    "PosMar2017": "#8",
    "Change": "=",
    "ProgrammingLanguage": "JavaScript",
    "Ratings": 0.03916,
    "Change": "+1.25%"
  },
  {
    "PosMar2018": "#9",
    "PosMar2017": "#12",
    "Change": "+",
    "ProgrammingLanguage": "Ruby",
    "Ratings": 0.02744,
    "Change": "+0.49%"
  },
  {
    "PosMar2018": "#10",
    "PosMar2017": "-",
    "Change": "++",
    "ProgrammingLanguage": "SQL",
    "Ratings": 0.02686,
    "Change": "+2.69%"
  },
];

var rankingProgrammingLanguagesMetaData = {
  xScaleField: 'PosMar2018',
  yScaleField: 'Ratings',
  xLabelText: 'Ranking position',
  yAxisTickFormat: ".0%",
  yLabelText: "Rating",
  legendFieldName: "ProgrammingLanguage",
  chartTitleText: "Top 10 programming languages (TIOBE index March 2018)",
  tooltip: [
    {
      fieldText: "",
      fieldValue: "ProgrammingLanguage"
    },
    {
      fieldText: "Rating: ",
      fieldValue: "Ratings"
    },      {
      fieldText: "Position March 2018: ",
      fieldValue: "PosMar2018"
    },
    {
      fieldText: "Position March 2017: ",
      fieldValue: "PosMar2017"
    },
    {
      fieldText: "Change: ",
      fieldValue: "Change"
    }
  ]    
};
