dataSetVersion = "2023-09-01"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter out characters",
      key: "erp",
      tooltip: "Check this to restrict stuff",
      checked: false,
      sub: [
        { name: "Interrobang", key: "anti" },
        { name: "NaNoWriMo", key: "nano" }
      ]
    }
  ];
  
  dataSet[dataSetVersion].characterData = [
    {
      name: "Hetzl Garr",
      img: "hetzav.png",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Lusai Dzanagh",
      img: "lusav.png",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Fayn Krysolt",
      img: "faynav3.png",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Lutzyn Kresajh",
      img: "lutzav.png",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Duemis",
      img: "dueav2.png",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Skalhareth",
      img: "skalav.png",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Bantzerash",
      img: "bantav2.png",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Erayl Vrynath",
      img: "fire.png",
      opts: {
        game: ["nano"]
      }
    },
    {
      name: "Satza Renak",
      img: "arm.jpeg",
      opts: {
        game: ["nano"]
      }
    },
    {
      name: "Coa Lastnamehere",
      img: "shark.jpeg",
      opts: {
        game: ["nano"]
      }
    },
    {
      name: "Serakhruhn",
      img: "serav.png",
      opts: {
        erp: [ "anti"]
      }
    }
  ]
