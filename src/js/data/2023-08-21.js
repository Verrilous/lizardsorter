dataSetVersion = "2023-09-01"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by blah blah ignore this I'm just keeping this here in case",
      key: "game",
      tooltip: "Check this to restrict to certain games",
      checked: false,
      sub: [
        { name: "Don't click", key: "beep" },
        { name: "You bitch", key: "boop" }
      ]
    }
  ];
  
  dataSet[dataSetVersion].characterData = [
    {
      name: "Hetzl Garr",
      img: "hetzav.png",
      opts: {
        game: [ "aa1", "aa2", "aa3", "aa4", "aa5", "aa6", "vs"],
        prof: ["atto"],
        role: ["def"]
      }
    },
    {
      name: "Lusai Dzanagh",
      img: "lusav.png",
      opts: {
        game: [ "aa1", "aa3", "aai1", "aai2", "aa6"],
        prof: [],
        role: ["def"]
      }
    },
    {
      name: "Fayn Krysolt",
      img: "faynav3.png",
      opts: {
        game: [ "aa1", "aa2", "aa3"],
        prof: ["atto", "assi"],
        role: ["vic"]
      }
    },
    {
      name: "Lutzyn Kresajh",
      img: "lutzav.png",
      opts: {
        game: [ "aa1", "aa2", "aa3", "aai1", "aa4", "aa5", "aa6"],
        prof: ["jud"],
        role: []
      }
    },
    {
      name: "Duemis",
      img: "dueav2.png",
      opts: {
        game: ["dgs2"],
        prof: [],
        role: []
      }
    },
    {
      name: "Skalhareth",
      img: "skalav.png",
      opts: {
        game: ["dgs2"],
        prof: [],
        role: []
      }
    },
    {
      name: "Bantzerash",
      img: "bantav2.png",
      opts: {
        game: ["dgs2"],
        prof: [],
        role: []
      }
    },
    {
      name: "Serakhruhn",
      img: "serav.png",
      opts: {
        game: ["dgs2"],
        prof: [],
        role: []
      }
    }
  ]
