dataSetVersion = "2023-09-01"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
      key: "game",
      tooltip: "Check this to restrict to certain games",
      checked: false,
      sub: [
        { name: "Phoenix Wright: Ace Attorney", key: "aa1" },
        { name: "The Great Ace Attorney 2: Resolve", key: "dgs2" }
      ]
    },
    {
      name: "Filter by Profession",
      key: "prof",
      tooltip: "Check this to restrict to characters to a certain profession",
      checked: false,
      sub: [ { name: "Defense attorneys", key: "atto" }, 
             { name: "Prosecutors", key: "pros" }, 
             { name: "Assistants", key: "assi" }, 
             { name: "Detectives", key: "det" }, 
             { name: "Judges", key: "jud"}
      ]
    },
    {
      name: "Filter by Role",
      key: "role",
      tooltip: "Check this to restrict to characters to a role in the story. BEWARE OF SPOILERS!",
      checked: false,
      sub: [ { name: "Culprits", key: "cul" }, 
             { name: "Victims", key: "vic" }, 
             { name: "Defendants", key: "def" }
      ]
    },
    {
      name: "Remove animals",
      key: "ani",
      tooltip: "Check this if you don't want animals to be listed",
      checked: false
    }
  ];
  
  dataSet[dataSetVersion].characterData = [
    {
      name: "Hetzl Garr",
      img: "hetzlav.png",
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
