export const sensors = [
  {
    "id": "unknown",
    "uniqueId": 0,
    "category": [
      "unknown"
    ],
    "name": "Unknown",
    "fullName": "Unknown Sensor",
    "unit": null,
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/unknown.svg",
    "ranges": [
      {
        "id": "range1",
        "name": "Unknown",
        "min": 1,
        "max": 100,
        "isMaxInfinity": true,
        "maxInfinityText": "100+",
        "color": "#000",
        "absoluteColors": [
          "#000"
        ],
        "rangeImageUrl": ""
      }
    ]
  },
  {
    "id": "aqi-in",
    "uniqueId": 1,
    "publicId": "aqi-in",
    "category": [
      "pollutant"
    ],
    "name": "AQI",
    "fullName": "Air Quality Index",
    "unit": null,
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/aqi.svg",
    "misc": {
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The AQI level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The AQI level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The AQI level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 50,
        "color": "#59b61f",
        "colorLight": "#DBFFC4",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 50,
        "max": 100,
        "color": "#EEC732",
        "colorLight": "#FFF2BE",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 100,
        "max": 200,
        "color": "#EA8C34",
        "colorLight": "#FFE3C8",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 200,
        "max": 300,
        "color": "#E95478",
        "colorLight": "#FFE1E8",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 300,
        "max": 400,
        "color": "#B33FBA",
        "colorLight": "#FDE1FF",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 400,
        "max": 500,
        "isMaxInfinity": true,
        "maxInfinityText": "500+",
        "color": "#C92033",
        "colorLight": "#FFCFD4",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "aqi-us",
    "uniqueId": 2,
    "publicId": "aqi",
    "category": [
      "pollutant"
    ],
    "name": "AQI-US",
    "fullName": "Air Quality Index (US)",
    "unit": "aqi-us",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/aqi.svg",
    "misc": {
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The AQI level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The AQI level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The AQI level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 50,
        "color": "#59b61f",
        "colorLight": "#DBFFC4",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 50,
        "max": 100,
        "color": "#EEC732",
        "colorLight": "#FFF2BE",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 100,
        "max": 150,
        "color": "#EA8C34",
        "colorLight": "#FFE3C8",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 150,
        "max": 200,
        "color": "#E95478",
        "colorLight": "#FFE1E8",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 200,
        "max": 300,
        "color": "#B33FBA",
        "colorLight": "#FDE1FF",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 301,
        "max": 301,
        "isMaxInfinity": true,
        "maxInfinityText": "301+",
        "color": "#C92033",
        "colorLight": "#FFCFD4",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "ch4",
    "uniqueId": 78,
    "category": [
      "gases"
    ],
    "name": "Methane",
    "fullName": "Methane",
    "unit": "%",
    "misc": {
      "about": "Methane is a flammable but odorless and colorless gas. It is used in vehicles and water heaters. With it, industries, energy production plants, manure production plants, landfills, etc. are the main sources of its production. It is a greenhouse gas and its high emissions lead to climate change. Methane causes poisoning because of excessive inhaling. It has various symptoms in the human body.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/ch4.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The CH4 level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The CH4 level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The CH4 level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/ch4.svg",
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 1,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 1,
        "max": 2.5,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 2.5,
        "max": 5,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 5,
        "max": 10,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 10,
        "max": 15,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 15,
        "max": 50,
        "isMaxInfinity": true,
        "maxInfinityText": "50+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "co",
    "uniqueId": 58,
    "publicId": "co",
    "category": [
      "gases"
    ],
    "name": "CO",
    "fullName": "Carbon Monoxide (CO)",
    "unit": "mg/m³",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/co.svg",
    "misc": {
      "about": "Carbon monoxide is a dangerous gas present in indoor and outdoor air. It is released from forest fires, volcanic eruptions, and gases released from coal mines. With it, CO also releases from man made sources. Such as industries, vehicles, electricity supply areas, etc. One of the major CO sources is basement parking lots or parking lots.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/co.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The CO level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The CO level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The CO level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 1,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 1,
        "max": 2,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 2,
        "max": 10,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 10,
        "max": 17,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 17,
        "max": 34,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 34,
        "max": 39.6,
        "isMaxInfinity": true,
        "maxInfinityText": "39.6+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "co(µg/m3)",
    "uniqueId": 34,
    "publicId": "co",
    "category": [
      "gases"
    ],
    "name": "CO",
    "fullName": "Carbon Monoxide (CO)",
    "unit": "µg/m³",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/co.svg",
    "misc": {
      "about": "Carbon monoxide is a dangerous gas present in indoor and outdoor air. It is released from forest fires, volcanic eruptions, and gases released from coal mines. With it, CO also releases from man made sources. Such as industries, vehicles, electricity supply areas, etc. One of the major CO sources is basement parking lots or parking lots.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/co.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The CO level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The CO level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The CO level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 9534,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 9534,
        "max": 19090,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 19090,
        "max": 28672,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 28672,
        "max": 38253,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 38253,
        "max": 47741,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 47741,
        "max": 57323,
        "isMaxInfinity": true,
        "maxInfinityText": "57323+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "co(ppb)",
    "uniqueId": 33,
    "publicId": "co",
    "category": [
      "gases"
    ],
    "name": "CO",
    "fullName": "Carbon Monoxide (CO)",
    "unit": "ppb",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/co.svg",
    "misc": {
      "about": "Carbon monoxide is a dangerous gas present in indoor and outdoor air. It is released from forest fires, volcanic eruptions, and gases released from coal mines. With it, CO also releases from man made sources. Such as industries, vehicles, electricity supply areas, etc. One of the major CO sources is basement parking lots or parking lots.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/co.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The CO level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The CO level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The CO level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 8330,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 8330,
        "max": 16670,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 16670,
        "max": 25000,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 25000,
        "max": 33330,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 33330,
        "max": 41670,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 41670,
        "max": 50000,
        "isMaxInfinity": true,
        "maxInfinityText": "50000+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "co(ppm)",
    "uniqueId": 20,
    "publicId": "co",
    "category": [
      "gases"
    ],
    "name": "CO",
    "fullName": "Carbon Monoxide (CO)",
    "unit": "ppm",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/co.svg",
    "misc": {
      "about": "Carbon monoxide is a dangerous gas present in indoor and outdoor air. It is released from forest fires, volcanic eruptions, and gases released from coal mines. With it, CO also releases from man made sources. Such as industries, vehicles, electricity supply areas, etc. One of the major CO sources is basement parking lots or parking lots.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/co.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The CO level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The CO level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The CO level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 8.33,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 8.33,
        "max": 16.67,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 16.67,
        "max": 25,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 25,
        "max": 33.33,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 33.33,
        "max": 41.67,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 41.67,
        "max": 50,
        "isMaxInfinity": true,
        "maxInfinityText": "50+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "co2(ppm)",
    "uniqueId": 21,
    "category": [
      "gases"
    ],
    "name": "CO2",
    "fullName": "Carbon Dioxide (CO2)",
    "unit": "ppm",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/co2.svg",
    "misc": {
      "about": "Carbon Dioxide is a chemical compound of carbon and oxygen. It is an important and natural component of air. As it acts as a greenhouse gas in the atmosphere. The gas is harmless in small quantities. But it can also severely affect the high quantity. CO2 is the major indoor air pollutant that impacts the performance of employees in offices and children in school.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/co2.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The CO2 level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The CO2 level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The CO2 level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 400,
        "max": 600,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 600,
        "max": 800,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 800,
        "max": 1000,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 1000,
        "max": 1200,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 1200,
        "max": 1600,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 1600,
        "max": 2000,
        "isMaxInfinity": true,
        "maxInfinityText": "2000+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "etoh",
    "uniqueId": 63,
    "category": [
      "gases"
    ],
    "name": "ETOH",
    "fullName": "Ethanol",
    "unit": "ppm",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/ethanol.svg",
    "misc": {
      "about": "Ethanol is a clear and colorless liquid that is used as fuel. It is also a volatile and flammable liquid. Hence, it evaporates in the air and is inhaled by the human being as a result. Ethanol is used in various terms. It is used as the engine fuel and can emit ETOH in the air.",
      "summary": [
        {
          "range": [
            "range1"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The ETOH level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The ETOH level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range3"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The ETOH level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "No Alcohol",
        "min": 0,
        "max": 25,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Alcohol",
        "min": 25,
        "max": 50,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "High Alcohol",
        "min": 50,
        "max": 200,
        "isMaxInfinity": true,
        "maxInfinityText": "200+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "gust",
    "uniqueId": 307,
    "category": [
      "met",
      "weather"
    ],
    "name": "Gust Speed",
    "fullName": "Gust Speed",
    "unit": "m/s",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/gust-speed.svg",
    "misc": {
      "about": "A sudden increase in wind speed is known as Gust. It causes instability in the atmosphere. Thunderstorms and frontal passages are examples of gusts. It can fluctuate the wind speed and can affect daily life. It is measured in speed units as miles per hour. With it, it can have intense impacts on the atmosphere as depends on the duration. As it can cause power outages, property damages or problems in flight operations."
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Calm",
        "min": 0,
        "max": 5.56,
        "color": "#E0E8FE",
        "absoluteColors": [
          "#ECF1FF",
          "#E6ECFF",
          "#E0E8FE",
          "#D9E3FE",
          "#D3DFFD",
          "#CDDAFD",
          "#C7D6FC",
          "#C1D1FC",
          "#BBCDFB",
          "#B4C8FB"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Light Breeze",
        "min": 5.56,
        "max": 11.11,
        "color": "#AEC3FB",
        "absoluteColors": [
          "#AEC3FB",
          "#A8BFFA",
          "#A2BAFA",
          "#9CB6F9",
          "#96B1F9",
          "#8FADF8",
          "#89A8F8",
          "#83A4F7",
          "#7D9FF7",
          "#779BF6"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Moderate Breeze",
        "min": 11.11,
        "max": 16.67,
        "color": "#4C7BF3",
        "absoluteColors": [
          "#7196F6",
          "#6A91F6",
          "#648DF5",
          "#5E88F5",
          "#5884F4",
          "#527FF4",
          "#4C7BF3",
          "#4576F3",
          "#3F72F2",
          "#396DF2"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Strong Breeze",
        "min": 16.67,
        "max": 22.22,
        "color": "#285AD7",
        "absoluteColors": [
          "#3368EE",
          "#3166EA",
          "#2F63E6",
          "#2E61E3",
          "#2C5FDF",
          "#2A5CDB",
          "#285AD7",
          "#2758D3",
          "#2555D0",
          "#2353CC"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Strong Gale",
        "min": 22.22,
        "max": 27.78,
        "color": "#1A47B9",
        "absoluteColors": [
          "#2151C8",
          "#204EC4",
          "#1E4CC0",
          "#1C4ABD",
          "#1A47B9",
          "#1945B5",
          "#1742B1",
          "#1540AE",
          "#133EAA",
          "#123BA6"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Violent Storm",
        "min": 27.78,
        "max": 33.33,
        "color": "#042988",
        "absoluteColors": [
          "#1039A2",
          "#0E379E",
          "#0C349B",
          "#0B3297",
          "#093093",
          "#072D8F",
          "#052B8B",
          "#042988",
          "#022684",
          "#002480"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range7",
        "name": "Hurricane",
        "min": 33.33,
        "max": 38.89,
        "isMaxInfinity": true,
        "maxInfinityText": "38.89+",
        "color": "#001C64",
        "absoluteColors": [
          "#002279",
          "#002174",
          "#001F6E",
          "#001E69",
          "#001C64",
          "#001B5E",
          "#001959",
          "#001854",
          "#00164E",
          "#001549"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      }
    ]
  },
  {
    "id": "hcho(ppb)",
    "uniqueId": 32,
    "category": [
      "gases"
    ],
    "name": "HCHO",
    "fullName": "Formaldehyde (HCHO)",
    "unit": "ppb",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/hcho.svg",
    "misc": {
      "about": "Formaldehyde is an organic compound that helps in chemical manufacturing processes. The main sources of HCHO are the burning of natural gases, gasoline, tobacco, etc. It can be present in your indoor atmosphere. As by tobacco smoking or burning. Also, its major sources are wooden furniture, freshly painted walls etc. Inhaling HCHO causes many extreme health problems. For this, monitoring and actions are necessary.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/hcho.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The HCHO level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The HCHO level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The HCHO level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 25,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 25,
        "max": 50,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 50,
        "max": 100,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 100,
        "max": 200,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 200,
        "max": 350,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 350,
        "max": 500,
        "isMaxInfinity": true,
        "maxInfinityText": "500+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "hcho(ppm)",
    "uniqueId": 19,
    "category": [
      "gases"
    ],
    "name": "HCHO",
    "fullName": "Formaldehyde (HCHO)",
    "unit": "ppb",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/hcho.svg",
    "misc": {
      "about": "Formaldehyde is an organic compound that helps in chemical manufacturing processes. The main sources of HCHO are the burning of natural gases, gasoline, tobacco, etc. It can be present in your indoor atmosphere. As by tobacco smoking or burning. Also, its major sources are wooden furniture, freshly painted walls etc. Inhaling HCHO causes many extreme health problems. For this, monitoring and actions are necessary.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/hcho.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The HCHO level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The HCHO level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The HCHO level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 0.025,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 0.025,
        "max": 0.05,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 0.05,
        "max": 0.1,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 0.1,
        "max": 0.2,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 0.2,
        "max": 0.35,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 0.35,
        "max": 0.5,
        "isMaxInfinity": true,
        "maxInfinityText": "0.5+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "h2s(ppb)",
    "uniqueId": 43,
    "category": [
      "gases"
    ],
    "name": "H2S",
    "fullName": "Hydrogen Sulphide (H2S)",
    "unit": "ppb",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/h2s.svg",
    "misc": {
      "about": "Hydrogen Sulfide is a toxic gas that is released from various sources. Generally, it is not a harmful gas in the atmosphere as it helps in plant growth. But it affects if the human being inhaled the gas. It is a hazardous gas for human beings. It can be detected by a sensor or monitor. High H2S level is the major reason for the bad odor. It also impacts home appliances such as air conditioning systems.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/h2s.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The H2S level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The H2S level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The H2S level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 10,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 10,
        "max": 100,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 100,
        "max": 200,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 200,
        "max": 300,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 300,
        "max": 500,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 500,
        "max": 1000,
        "isMaxInfinity": true,
        "maxInfinityText": "1000+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "h2s(ppm)",
    "uniqueId": 27,
    "category": [
      "gases"
    ],
    "name": "H2S",
    "fullName": "Hydrogen Sulphide (H2S)",
    "unit": "ppm",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/h2s.svg",
    "misc": {
      "about": "Hydrogen Sulfide is a toxic gas that is released from various sources. Generally, it is not a harmful gas in the atmosphere as it helps in plant growth. But it affects if the human being inhaled the gas. It is a hazardous gas for human beings. It can be detected by a sensor or monitor. High H2S level is the major reason for the bad odor. It also impacts home appliances such as air conditioning systems.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/h2s.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The H2S level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The H2S level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The H2S level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 0.01,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 0.01,
        "max": 0.1,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 0.1,
        "max": 0.2,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 0.2,
        "max": 0.3,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 0.3,
        "max": 0.5,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 0.5,
        "max": 1,
        "isMaxInfinity": true,
        "maxInfinityText": "1+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "h2s(µg/m3)",
    "uniqueId": 44,
    "category": [
      "gases"
    ],
    "name": "H2S",
    "fullName": "Hydrogen Sulphide (H2S)",
    "unit": "µg/m³",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/h2s.svg",
    "misc": {
      "about": "Hydrogen Sulfide is a toxic gas that is released from various sources. Generally, it is not a harmful gas in the atmosphere as it helps in plant growth. But it affects if the human being inhaled the gas. It is a hazardous gas for human beings. It can be detected by a sensor or monitor. High H2S level is the major reason for the bad odor. It also impacts home appliances such as air conditioning systems.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/h2s.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The H2S level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The H2S level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The H2S level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 1960,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 1960,
        "max": 3920,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 3920,
        "max": 19600,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 19600,
        "max": 58800,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 58800,
        "max": 196000,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 196000,
        "max": 207000,
        "isMaxInfinity": true,
        "maxInfinityText": "207000+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "hum",
    "uniqueId": 12,
    "publicId": "h",
    "multipleIds": [
      12,
      301
    ],
    "category": [
      "comfort",
      "weather"
    ],
    "name": "Humidity",
    "fullName": "Humidity",
    "unit": "%",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/humidity.svg",
    "misc": {
      "about": "The gaseous water in the air is known as humidity. As the water vapor in the atmosphere. It highly depends on the temperature. Cold temperatures cause an increase in humidity. Because cold air cannot hold the moisture. Humidity is 100% during rains because air cannot hold the water vapors. It affects the thermal comfort of your place.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/humidity.json",
      "summary": [
        {
          "range": [
            "range1"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/humidity-1.svg",
          "summary": "Low",
          "color": "#FFE6E2",
          "info": "The humidity level is lower than 30% in your room in the last 24 hours. Germs and viruses can easily travel freely. You can experience dry skin and dry hair. Low humidity levels can also decrease your performance."
        },
        {
          "range": [
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/humidity-2.svg",
          "summary": "Normal",
          "color": "#EAEFFF",
          "info": "The humidity level of your room is between 30% to 60% in the last 24 hours. It is ideal for your comfort and health. The normal level will maintain the thermal comfort of your room."
        },
        {
          "range": [
            "range3"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/humidity-3.svg",
          "summary": "High",
          "color": "#D6E2FF",
          "info": "The humidity level of your room is more than 60% in the last 24 hours. It means mold, virus, and bacteria growth chances are high. High humidity can also increase sweating and damage your belongings."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Too Dry",
        "min": 0,
        "max": 30,
        "color": "#FDB0A3",
        "absoluteColors": [
          "#FD7964",
          "#FD7D69",
          "#FD816D",
          "#FD8572",
          "#FD8976",
          "#FD9584",
          "#FD9988",
          "#FD9D8D",
          "#FDAC9F",
          "#FDB0A3"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/humidity-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Optimal",
        "min": 30,
        "max": 60,
        "color": "#C6D1F8",
        "absoluteColors": [
          "#F7C5C1",
          "#F0C7C9",
          "#E7C9D3",
          "#E3CAD7",
          "#E0CBDB",
          "#D6CDE6",
          "#D3CEE9",
          "#D0CEED",
          "#C6D1F8",
          "#C3D1FB"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/humidity-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Too Humid",
        "min": 60,
        "max": 90,
        "isMaxInfinity": true,
        "maxInfinityText": "90+",
        "color": "#7B9DF5",
        "absoluteColors": [
          "#B9CCFE",
          "#A3BCFB",
          "#9FB9FA",
          "#9CB6FA",
          "#98B3F9",
          "#94B1F9",
          "#91AEF8",
          "#82A3F6",
          "#7FA0F6",
          "#7B9DF5"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/humidity-range3.svg"
      }
    ]
  },
  {
    "id": "light",
    "uniqueId": 14,
    "category": [
      "comfort",
      "weather"
    ],
    "name": "Light",
    "fullName": "Light",
    "unit": "LuX",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/light.svg",
    "misc": {
      "about": "Light is electromagnetic radiation of any wavelength. It is perceived by the human eye. But artificial lights can cause air pollution. Excessive use of artificial lights affects the natural patterns. It increases the CO2 (Carbon Dioxide) that disrupts human sleep. It affects overall human health by causing obesity, depression, diabetes, or breast cancer.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/light.json",
      "summary": [
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/light-1.svg",
          "summary": "Bright",
          "color": "#FFFCEB",
          "info": "The illuminance level of the area is bright. It means the room has proper illuminance levels. Hence, it may not affect your productivity and emotional well-being."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/light-2.svg",
          "summary": "Dim",
          "color": "#FFFADD",
          "info": "The illuminance level of your room is Dim. Which means, it can slightly impact your environment and comfort. For instance, it can influence your emotions or neurological health."
        },
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/light-3.svg",
          "summary": "Dark",
          "color": "#FFFCE8",
          "info": "The illuminance level of your room is dark. Hence it is unhealthy to keep this level for any individual. Since, it can impact your sleep, and cognitive performance and increase other diseases chances."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Dark",
        "min": 0,
        "max": 2,
        "color": "#3C3509",
        "absoluteColors": [
          "#1D1900",
          "#231F02",
          "#292404",
          "#2F2A05",
          "#352F07",
          "#3C3509",
          "#423A0B",
          "#48400D",
          "#4E450E",
          "#544B10"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/light-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Dusky",
        "min": 2,
        "max": 50,
        "color": "#7F721D",
        "absoluteColors": [
          "#5A5112",
          "#605614",
          "#665C16",
          "#6C6117",
          "#726719",
          "#796C1B",
          "#7F721D",
          "#85771E",
          "#8B7D20",
          "#918222"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/light-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Dim",
        "min": 50,
        "max": 100,
        "color": "#BCA92F",
        "absoluteColors": [
          "#978824",
          "#9D8E26",
          "#A39327",
          "#A99929",
          "#AF9E2B",
          "#B6A42D",
          "#BCA92F",
          "#C2AF30",
          "#C8B432",
          "#CEBA34"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/light-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Good",
        "min": 100,
        "max": 400,
        "color": "#DECD62",
        "absoluteColors": [
          "#D3BF3A",
          "#D5C140",
          "#D6C346",
          "#D8C54B",
          "#D9C751",
          "#DBC957",
          "#DCCB5D",
          "#DECD62",
          "#DFD068",
          "#E1D26E"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/light-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Bright",
        "min": 400,
        "max": 600,
        "color": "#EADE90",
        "absoluteColors": [
          "#E2D474",
          "#E4D679",
          "#E5D87F",
          "#E7DA85",
          "#E8DC8B",
          "#EADE90",
          "#EBE096",
          "#EDE29C",
          "#EEE4A2",
          "#F0E6A7"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/light-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Glaring",
        "min": 600,
        "max": 610,
        "isMaxInfinity": true,
        "maxInfinityText": "610+",
        "color": "#FCF7D5",
        "absoluteColors": [
          "#F1E8AD",
          "#F3EAB3",
          "#F4EDB9",
          "#F6EFBE",
          "#F7F1C4",
          "#F9F3CA",
          "#FAF5D0",
          "#FCF7D5",
          "#FDF9DB",
          "#FFFBE1"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/light-range6.svg"
      }
    ]
  },
  {
    "id": "light-outdoor",
    "uniqueId": 309,
    "category": [
      "comfort",
      "weather"
    ],
    "name": "Light",
    "fullName": "Light",
    "unit": "LuX",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/light.svg",
    "misc": {
      "about": "Light is electromagnetic radiation of any wavelength. It is perceived by the human eye. But artificial lights can cause air pollution. Excessive use of artificial lights affects the natural patterns. It increases the CO2 (Carbon Dioxide) that disrupts human sleep. It affects overall human health by causing obesity, depression, diabetes, or breast cancer.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/light-outdoor.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/light-1.svg",
          "summary": "No Moon",
          "color": "#FFFCEB",
          "info": "Minimal natural illumination and the lack of moonlight maintained low light levels, resulting in dark conditions. No moon can irregulate the body's circadian rhythm and overall physical activity"
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/light-2.svg",
          "summary": "Twilight",
          "color": "#FFFADD",
          "info": "The outdoor light increases gradually and the sky transitions from dawn to early morning light. Early morning or twilight natural outdoor light helps in human health boosting and regulating."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/light-3.svg",
          "summary": "Daylight",
          "color": "#FFFCE8",
          "info": "TSun reaches its peak in midday and Outdoor light levels intensify. Providing ample illumination for outdoor activities and visibility. Prolonged daylight exposure in summer can be risky."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "No moon",
        "min": 0,
        "max": 0.01,
        "color": "#3C3509",
        "absoluteColors": [
          "#1D1900",
          "#231F02",
          "#292404",
          "#2F2A05",
          "#352F07",
          "#3C3509",
          "#423A0B",
          "#48400D",
          "#4E450E",
          "#544B10"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/light-outdoor-range2.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Full moon",
        "min": 0.01,
        "max": 1,
        "color": "#7F721D",
        "absoluteColors": [
          "#5A5112",
          "#605614",
          "#665C16",
          "#6C6117",
          "#726719",
          "#796C1B",
          "#7F721D",
          "#85771E",
          "#8B7D20",
          "#918222"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/light-outdoor-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Twilight",
        "min": 1,
        "max": 400,
        "color": "#BCA92F",
        "absoluteColors": [
          "#978824",
          "#9D8E26",
          "#A39327",
          "#A99929",
          "#AF9E2B",
          "#B6A42D",
          "#BCA92F",
          "#C2AF30",
          "#C8B432",
          "#CEBA34"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/light-outdoor-range2.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Overcast day",
        "min": 400,
        "max": 1000,
        "color": "#D2BF3F",
        "absoluteColors": [
          "#CFBB37",
          "#D0BC3A",
          "#D1BD3C",
          "#D2BF3F",
          "#D3C042",
          "#D3C145",
          "#D4C247",
          "#D5C34A",
          "#D6C44D",
          "#D7C550"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/light-outdoor-range1.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Daylight",
        "min": 1000,
        "max": 10000,
        "color": "#E1D26E",
        "absoluteColors": [
          "#D8C752",
          "#D9C855",
          "#DBCA5B",
          "#DCCB5D",
          "#DCCC60",
          "#DDCD63",
          "#DECF66",
          "#DFD068",
          "#E0D16B",
          "#E1D26E"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/light-outdoor-range1.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Sunlight",
        "min": 10000,
        "max": 100000,
        "isMaxInfinity": true,
        "maxInfinityText": "100000+",
        "color": "#EADE90",
        "absoluteColors": [
          "#E2D474",
          "#E4D679",
          "#E5D87F",
          "#E7DA85",
          "#E8DC8B",
          "#EADE90",
          "#EBE096",
          "#EDE29C",
          "#EEE4A2",
          "#F0E6A7"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/light-outdoor-range1.svg"
      }
    ]
  },
  {
    "id": "nh3(ppb)",
    "uniqueId": 41,
    "category": [
      "gases"
    ],
    "name": "NH3",
    "fullName": "Ammonia",
    "unit": "ppb",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/nh3.svg",
    "misc": {
      "about": "Ammonia is a compound gas of nitrogen and hydrogen. It is a toxic gas that is dangerous. A normal range of Ammonia levels is also present in the blood. It is used in fertilizers, refrigerators, toilets (because of human excrement), and cleaning products. The main sources of Ammonia are vehicle emissions, industries, and many household things for indoor pollution.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/nh3.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The NH3 level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The NH3 level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The NH3 level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 100,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 100,
        "max": 200,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 200,
        "max": 300,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 300,
        "max": 500,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 500,
        "max": 700,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 700,
        "max": 1000,
        "isMaxInfinity": true,
        "maxInfinityText": "1000+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "nh3(ppm)",
    "uniqueId": 26,
    "category": [
      "gases"
    ],
    "name": "NH3",
    "fullName": "Ammonia",
    "unit": "ppm",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/nh3.svg",
    "misc": {
      "about": "Ammonia is a compound gas of nitrogen and hydrogen. It is a toxic gas that is dangerous. A normal range of Ammonia levels is also present in the blood. It is used in fertilizers, refrigerators, toilets (because of human excrement), and cleaning products. The main sources of Ammonia are vehicle emissions, industries, and many household things for indoor pollution.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/nh3.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The NH3 level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The NH3 level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The NH3 level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 0.1,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 0.1,
        "max": 0.2,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 0.2,
        "max": 0.3,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 0.3,
        "max": 0.5,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 0.5,
        "max": 0.7,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 0.7,
        "max": 1,
        "isMaxInfinity": true,
        "maxInfinityText": "1+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "nh3(µg/m3)",
    "uniqueId": 42,
    "category": [
      "gases"
    ],
    "name": "NH3",
    "fullName": "Ammonia",
    "unit": "µg/m³",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/nh3.svg",
    "misc": {
      "about": "Ammonia is a compound gas of nitrogen and hydrogen. It is a toxic gas that is dangerous. A normal range of Ammonia levels is also present in the blood. It is used in fertilizers, refrigerators, toilets (because of human excrement), and cleaning products. The main sources of Ammonia are vehicle emissions, industries, and many household things for indoor pollution.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/nh3.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The NH3 level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The NH3 level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The NH3 level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 200,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 200,
        "max": 400,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 400,
        "max": 800,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 800,
        "max": 1200,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 1200,
        "max": 1800,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 1800,
        "max": 2400,
        "isMaxInfinity": true,
        "maxInfinityText": "2400+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "no",
    "uniqueId": 54,
    "category": [
      "gases"
    ],
    "name": "NO",
    "fullName": "Nitric Oxide",
    "unit": "ppm",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/no.svg",
    "misc": {
      "about": "Nitric oxide or Nitrogen monoxide is a colorless toxic gas. It forms with the oxidation of nitrogen. The gas is released indoors from gas stoves, heating appliances (Space heaters), and tobacco smoking. Inhaling high levels of NO can lead to throat tissue swelling, rapid burning, and spasms.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/no.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The NO level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The NO level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The NO level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 0.025,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 0.025,
        "max": 0.05,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 0.05,
        "max": 0.075,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 0.075,
        "max": 0.1,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 0.1,
        "max": 0.125,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 0.125,
        "max": 0.15,
        "isMaxInfinity": true,
        "maxInfinityText": "0.15+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "no(2)",
    "uniqueId": 55,
    "category": [
      "gases"
    ],
    "name": "NO",
    "fullName": "Nitric Oxide",
    "unit": "ppb",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/no.svg",
    "misc": {
      "about": "Nitric oxide or Nitrogen monoxide is a colorless toxic gas. It forms with the oxidation of nitrogen. The gas is released indoors from gas stoves, heating appliances (Space heaters), and tobacco smoking. Inhaling high levels of NO can lead to throat tissue swelling, rapid burning, and spasms.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/no.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The NO level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The NO level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The NO level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 25,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 25,
        "max": 50,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 50,
        "max": 75,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 75,
        "max": 100,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 100,
        "max": 125,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 125,
        "max": 150,
        "isMaxInfinity": true,
        "maxInfinityText": "150+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "no(3)",
    "uniqueId": 56,
    "category": [
      "gases"
    ],
    "name": "NO",
    "fullName": "Nitric Oxide",
    "unit": "µg/m³",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/no.svg",
    "misc": {
      "about": "Nitric oxide or Nitrogen monoxide is a colorless toxic gas. It forms with the oxidation of nitrogen. The gas is released indoors from gas stoves, heating appliances (Space heaters), and tobacco smoking. Inhaling high levels of NO can lead to throat tissue swelling, rapid burning, and spasms.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/no.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The NO level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The NO level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The NO level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 30.671,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 30.671,
        "max": 61.342,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 61.342,
        "max": 92.014,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 92.014,
        "max": 122.685,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 122.685,
        "max": 153.356,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 153.356,
        "max": 184.027,
        "isMaxInfinity": true,
        "maxInfinityText": "184.027+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "no2(µg/m3)",
    "uniqueId": 38,
    "publicId": "no2",
    "category": [
      "gases"
    ],
    "name": "NO2",
    "fullName": "Nitrogen Dioxide",
    "unit": "µg/m³",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/no2.svg",
    "misc": {
      "about": "Nitrogen Dioxide is a chemical compound that is present in the environment. As it releases from the fossil fuels burning. Hence, every vehicle releases gas during traffic. It is released from various sources as man-made or natural. The gas impacts are harmful to every living thing on the earth. It is also the main reason for conditions like asthma.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/no2.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The NO2 level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The NO2 level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The NO2 level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 40,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 40,
        "max": 80,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 80,
        "max": 180,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 180,
        "max": 190,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 190,
        "max": 400,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 400,
        "max": 500,
        "isMaxInfinity": true,
        "maxInfinityText": "500+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "no2(ppb)",
    "uniqueId": 37,
    "publicId": "no2",
    "category": [
      "gases"
    ],
    "name": "NO2",
    "fullName": "Nitrogen Dioxide",
    "unit": "ppb",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/no2.svg",
    "misc": {
      "about": "Nitrogen Dioxide is a chemical compound that is present in the environment. As it releases from the fossil fuels burning. Hence, every vehicle releases gas during traffic. It is released from various sources as man-made or natural. The gas impacts are harmful to every living thing on the earth. It is also the main reason for conditions like asthma.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/no2.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The NO2 level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The NO2 level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The NO2 level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 40,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 40,
        "max": 80,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 80,
        "max": 180,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 180,
        "max": 190,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 190,
        "max": 400,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 400,
        "max": 500,
        "isMaxInfinity": true,
        "maxInfinityText": "500+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "no2(ppm)",
    "uniqueId": 23,
    "publicId": "no2",
    "category": [
      "gases"
    ],
    "name": "NO2",
    "fullName": "Nitrogen Dioxide",
    "unit": "ppm",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/no2.svg",
    "misc": {
      "about": "Nitrogen Dioxide is a chemical compound that is present in the environment. As it releases from the fossil fuels burning. Hence, every vehicle releases gas during traffic. It is released from various sources as man-made or natural. The gas impacts are harmful to every living thing on the earth. It is also the main reason for conditions like asthma.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/no2.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The NO2 level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The NO2 level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The NO2 level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 0.04,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 0.04,
        "max": 0.08,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 0.08,
        "max": 0.18,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 0.18,
        "max": 0.28,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 0.28,
        "max": 0.4,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 0.4,
        "max": 0.5,
        "isMaxInfinity": true,
        "maxInfinityText": "0.5+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "nox",
    "uniqueId": 57,
    "category": [
      "gases"
    ],
    "name": "NOx",
    "fullName": "Nitrogen Oxides",
    "unit": "µg/m³",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/nox.svg",
    "misc": {
      "about": "Total Volatile Organic Compounds are the compounds that have high vapor pressure at room temperature. As these evaporate at room temperature and mix in the air. The main sources are the products used in a house. Such as paint, glue, soaps, fabrics, etc. These compounds vaporize with air contact. And it mixes within the air and causes several health effects. It can cause several health effects.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/nox.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The NOx level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The NOx level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The NOx level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 100,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 100,
        "max": 500,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 500,
        "max": 1000,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 1000,
        "max": 1500,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 1500,
        "max": 2000,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 2000,
        "max": 2500,
        "isMaxInfinity": true,
        "maxInfinityText": "2500+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "noise",
    "uniqueId": 13,
    "category": [
      "comfort",
      "weather"
    ],
    "name": "Noise",
    "fullName": "Noise",
    "unit": "dB",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/noise.svg",
    "misc": {
      "about": "Noise is loud, unwanted sounds that affect the hearing. It measures the frequency of a sound wave. Noise pollution impacts human health. A high level of noise can cause cardiovascular effects in humans. The main sources of noise pollution include loud music, transport, construction, etc. Monitor the noise pollution to control the pollution.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/noise.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/noise-1.svg",
          "summary": "Peaceful",
          "color": "#D0FFC2",
          "info": "The noise frequency of the last 24 hours in your room is good. It means you are free from unwanted sounds that will not affect your sleep and psychological well-being."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/noise-2.svg",
          "summary": "Normal",
          "color": "#FFEBF0",
          "info": "The noise frequency of your room in the last 24 hours remains normal. Which means the noise is on the normal decibels. However, it can affect individuals with sensitivity to hearing or other health issues."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/noise-3.svg",
          "summary": "Louder",
          "color": "#FFEBF0",
          "info": "In the last 24 hours, the noise frequency of your room is louder. It is advisable to take the required action to control. Because it can immediately harm your ears. Besides, it will impact your sleep and stress levels."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Peace",
        "min": 0,
        "max": 20,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/noise-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Silent",
        "min": 20,
        "max": 40,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/noise-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Normal",
        "min": 40,
        "max": 60,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/noise-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Bustling",
        "min": 60,
        "max": 80,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/noise-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Loud",
        "min": 80,
        "max": 100,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/noise-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Extremely Loud",
        "min": 100,
        "max": 120,
        "isMaxInfinity": true,
        "maxInfinityText": "120+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/noise-range6.svg"
      }
    ]
  },
  {
    "id": "o2(%)",
    "uniqueId": 24,
    "category": [
      "comfort"
    ],
    "name": "O2",
    "fullName": "Oxygen",
    "unit": "%",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/o2.svg",
    "misc": {
      "about": "Oxygen is present in almost 21% of Earth's atmosphere. It is the most crucial for every living being to survive. As it helps in their cellular respiration to carry nutrients in the bloodstream. A drop in oxygen level causes many problems. You can measure the oxygen level in the air to take the necessary steps to manage the required oxygen level.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/o2.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The O2 level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The O2 level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The O2 level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "max": 6.1,
        "min": 0,
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "max": 10.1,
        "min": 6.1,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "max": 12.1,
        "min": 10.1,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "max": 16.1,
        "min": 12.1,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "max": 19.5,
        "min": 16.1,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "max": 23.5,
        "min": 19.5,
        "isMaxInfinity": true,
        "maxInfinityText": "23.5",
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      }
    ]
  },
  {
    "id": "o3(µg/m3)",
    "uniqueId": 40,
    "publicId": "o3",
    "category": [
      "gases"
    ],
    "name": "O3",
    "fullName": "Ozone",
    "unit": "µg/m³",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/o3.svg",
    "misc": {
      "about": "Ozone (O3) forms by composing three oxygen atoms. It is present in nature that oxidizes things. With it, it is also preventing Earth from harmful UV rays. But Ozone near humans is harmful to them. It is released from photocopy machines, home appliances (that work with electricity), and UV lamps. Some indoor air purification systems release small amounts of O3.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/o3.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The O3 level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The O3 level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The O3 level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 50,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 50,
        "max": 100,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 100,
        "max": 168,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 168,
        "max": 208,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 208,
        "max": 748,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 748,
        "max": 1250,
        "isMaxInfinity": true,
        "maxInfinityText": "1250+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "o3(ppb)",
    "uniqueId": 39,
    "publicId": "o3",
    "category": [
      "gases"
    ],
    "name": "O3",
    "fullName": "Ozone",
    "unit": "ppb",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/o3.svg",
    "misc": {
      "about": "Ozone (O3) forms by composing three oxygen atoms. It is present in nature that oxidizes things. With it, it is also preventing Earth from harmful UV rays. But Ozone near humans is harmful to them. It is released from photocopy machines, home appliances (that work with electricity), and UV lamps. Some indoor air purification systems release small amounts of O3.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/o3.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The O3 level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The O3 level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The O3 level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 50,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 50,
        "max": 100,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 100,
        "max": 168,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 168,
        "max": 208,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 208,
        "max": 748,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 748,
        "max": 1250,
        "isMaxInfinity": true,
        "maxInfinityText": "1250+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "o3(ppm)",
    "uniqueId": 25,
    "publicId": "o3",
    "category": [
      "gases"
    ],
    "name": "O3",
    "fullName": "Ozone",
    "unit": "ppm",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/o3.svg",
    "misc": {
      "about": "Ozone (O3) forms by composing three oxygen atoms. It is present in nature that oxidizes things. With it, it is also preventing Earth from harmful UV rays. But Ozone near humans is harmful to them. It is released from photocopy machines, home appliances (that work with electricity), and UV lamps. Some indoor air purification systems release small amounts of O3.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/o3.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The O3 level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The O3 level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The O3 level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 0.05,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 0.05,
        "max": 0.1,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 0.1,
        "max": 0.168,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 0.168,
        "max": 0.208,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 0.208,
        "max": 0.748,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 0.748,
        "max": 1.25,
        "isMaxInfinity": true,
        "maxInfinityText": "1.250+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "particle count(0.3)",
    "uniqueId": 71,
    "category": [
      "pollutant"
    ],
    "name": "Particle Count 0.3",
    "fullName": "Particle Count 0.3",
    "unit": "µm",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/pc03.svg",
    "misc": {
      "about": "Particle count is the airborne particle concentration. It measures in various sizes as per the air volume. The particle levels depend on the particle size. It is categorized with various standards and classifications. Inhaling high levels of particle count leads to numerous health issues. As it can cause respiratory problems to conditions like cancer. Thus, monitoring is necessary to avoid the high concentration exposure. ",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The Particle Count 0.3 level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The Particle Count 0.3 level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The Particle Count 0.3 level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 10,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 10,
        "max": 20,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 20,
        "max": 40,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 40,
        "max": 60,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 60,
        "max": 90,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 90,
        "max": 116,
        "isMaxInfinity": true,
        "maxInfinityText": "116+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "particle count(0.5)",
    "uniqueId": 72,
    "category": [
      "pollutant"
    ],
    "name": "Particle Count 0.5",
    "fullName": "Particle Count 0.5",
    "unit": "µm",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/pc05.svg",
    "misc": {
      "about": "Particle count is the airborne particle concentration. It measures in various sizes as per the air volume. The particle levels depend on the particle size. It is categorized with various standards and classifications. Inhaling high levels of particle count leads to numerous health issues. As it can cause respiratory problems to conditions like cancer. Thus, monitoring is necessary to avoid the high concentration exposure. ",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The Particle Count 0.5 level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The Particle Count 0.5 level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The Particle Count 0.5 level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 10,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 10,
        "max": 20,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 20,
        "max": 40,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 40,
        "max": 60,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 60,
        "max": 90,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 90,
        "max": 116,
        "isMaxInfinity": true,
        "maxInfinityText": "116+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "particle count(1.0)",
    "uniqueId": 73,
    "category": [
      "pollutant"
    ],
    "name": "Particle Count 1.0",
    "fullName": "Particle Count 1.0",
    "unit": "µm",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/pc1.svg",
    "misc": {
      "about": "Particle count is the airborne particle concentration. It measures in various sizes as per the air volume. The particle levels depend on the particle size. It is categorized with various standards and classifications. Inhaling high levels of particle count leads to numerous health issues. As it can cause respiratory problems to conditions like cancer. Thus, monitoring is necessary to avoid the high concentration exposure. ",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The Particle Count 1.0 level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The Particle Count 1.0 level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The Particle Count 1.0 level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 10,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 10,
        "max": 20,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 20,
        "max": 40,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 40,
        "max": 60,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 60,
        "max": 90,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 90,
        "max": 116,
        "isMaxInfinity": true,
        "maxInfinityText": "116+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "particle count(3.0)",
    "uniqueId": 74,
    "category": [
      "pollutant"
    ],
    "name": "Particle Count 3.0",
    "fullName": "Particle Count 3.0",
    "unit": "µm",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/pc3.svg",
    "misc": {
      "about": "Particle count is the airborne particle concentration. It measures in various sizes as per the air volume. The particle levels depend on the particle size. It is categorized with various standards and classifications. Inhaling high levels of particle count leads to numerous health issues. As it can cause respiratory problems to conditions like cancer. Thus, monitoring is necessary to avoid the high concentration exposure. ",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The Particle Count 3.0 level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The Particle Count 3.0 level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The Particle Count 3.0 level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 10,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 10,
        "max": 20,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 20,
        "max": 40,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 40,
        "max": 60,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 60,
        "max": 90,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 90,
        "max": 116,
        "isMaxInfinity": true,
        "maxInfinityText": "116+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "particle count(5.0)",
    "uniqueId": 75,
    "category": [
      "pollutant"
    ],
    "name": "Particle Count 5.0",
    "fullName": "Particle Count 5.0",
    "unit": "µm",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/pc5.svg",
    "misc": {
      "about": "Particle count is the airborne particle concentration. It measures in various sizes as per the air volume. The particle levels depend on the particle size. It is categorized with various standards and classifications. Inhaling high levels of particle count leads to numerous health issues. As it can cause respiratory problems to conditions like cancer. Thus, monitoring is necessary to avoid the high concentration exposure. ",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The Particle Count 5.0 level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The Particle Count 5.0 level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The Particle Count 5.0 level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 10,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 10,
        "max": 20,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 20,
        "max": 40,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 40,
        "max": 60,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 60,
        "max": 90,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 90,
        "max": 116,
        "isMaxInfinity": true,
        "maxInfinityText": "116+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "particle count(10.0)",
    "uniqueId": 76,
    "category": [
      "pollutant"
    ],
    "name": "Particle Count 10.0",
    "fullName": "Particle Count 10.0",
    "unit": "µm",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/pc10.svg",
    "misc": {
      "about": "Particle count is the airborne particle concentration. It measures in various sizes as per the air volume. The particle levels depend on the particle size. It is categorized with various standards and classifications. Inhaling high levels of particle count leads to numerous health issues. As it can cause respiratory problems to conditions like cancer. Thus, monitoring is necessary to avoid the high concentration exposure. ",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The Particle Count 10.0 level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The Particle Count 10.0 level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The Particle Count 10.0 level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 10,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 10,
        "max": 20,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 20,
        "max": 40,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 40,
        "max": 60,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 60,
        "max": 90,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 90,
        "max": 116,
        "isMaxInfinity": true,
        "maxInfinityText": "116+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "pm1",
    "uniqueId": 5,
    "category": [
      "pollutant"
    ],
    "name": "PM1",
    "fullName": "Particular Matter 1",
    "unit": "µg/m³",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/pm1.svg",
    "misc": {
      "about": "Particulate Matter 1 is the smallest particle that is less than 1 micron in size. It is extremely small in dangerous size. Because these small particles can easily enter the lung tissues and get into the bloodstream. PM1 is much smaller in size and can easily take chemicals, VOCs, and metals into the bloodstream.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/pm25.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The PM1 level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The PM1 level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The PM1 level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 10,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 10,
        "max": 20,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 20,
        "max": 40,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 40,
        "max": 60,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 60,
        "max": 90,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 90,
        "max": 116,
        "isMaxInfinity": true,
        "maxInfinityText": "116+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "pm25",
    "uniqueId": 3,
    "publicId": "pm25",
    "category": [
      "pollutant"
    ],
    "name": "PM2.5",
    "fullName": "Particular Matter 2.5",
    "unit": "µg/m³",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/pm25.svg",
    "misc": {
      "about": "PM2.5 are fine particles that have a diameter of less than 2.5 micrometers. These can easily get into the lungs while inhaling and affect health. It reduces the visibility and causes respiratory problems. Cooking and heating releases PM2.5 in the indoor air. As per WHO guidelines, the PM2.5 level range should not exceed 5 µg/m3 as on annual average.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/pm25.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The PM2.5 level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The PM2.5 level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The PM2.5 level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 30,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 30,
        "max": 60,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 60,
        "max": 90,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 90,
        "max": 120,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 120,
        "max": 250,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 250,
        "max": 380,
        "isMaxInfinity": true,
        "maxInfinityText": "380+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "pm10",
    "uniqueId": 4,
    "publicId": "pm10",
    "category": [
      "pollutant"
    ],
    "name": "PM10",
    "fullName": "Particular Matter 10",
    "unit": "µg/m³",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/pm10.svg",
    "misc": {
      "about": "PM10 are the particles with a diameter of 10 micrometers or smaller. PM10 size is much more than PM1 or 2.5. Thus, PM10 acts as a carrier of PM1 and PM2.5. Smoke and dust carry these particles in the air and go inside while inhaling. The particles are big in size that filter in the nose and throat. It causes various allergies such as cough, runny nose and eye stings.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/pm25.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The PM10 level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The PM10 level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The PM10 level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 50,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 50,
        "max": 100,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 100,
        "max": 250,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 250,
        "max": 350,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 350,
        "max": 430,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 430,
        "max": 510,
        "isMaxInfinity": true,
        "maxInfinityText": "510+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "pressure b",
    "uniqueId": 62,
    "publicId": "p",
    "multipleIds": [
      15,
      62
    ],
    "category": [
      "met",
      "weather"
    ],
    "name": "Pressure",
    "fullName": "Pressure",
    "unit": "hPa",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/pressure.svg",
    "misc": {
      "about": "Atmospheric pressure is the weight the air has around you. As it presses against everything it touches. It is necessary to check the weather conditions. Since, air pressure indicates the weather as cloudiness, wind, and precipitation. The atmospheric pressure is measured with a barometer. And the ATM is a unit to measure the air pressure. Air pressure fluctuation affects the oxygen level available in the atmosphere. Its pressure is described by the mercury rises.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/pressure.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The Pressure level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The Pressure level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The Pressure level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Extremely Low",
        "min": 0,
        "max": 956,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Very Low",
        "min": 956,
        "max": 981,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Low",
        "min": 981,
        "max": 1005,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Moderate",
        "min": 1005,
        "max": 1013,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "High",
        "min": 1013,
        "max": 1030,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Very High",
        "min": 1030,
        "max": 1046,
        "isMaxInfinity": true,
        "maxInfinityText": "1046+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "radon",
    "uniqueId": 47,
    "category": [
      "met"
    ],
    "name": "Radon",
    "fullName": "Radon",
    "unit": "Bq/m3",
    "misc": {
      "about": "Radon is a radioactive noble gas without any color or odor. It is produced from the natural radioactive form of uranium. Radon is found in soils, water, and rocks. It gets into the air when it decays and produces radioactive particles. A person can face extreme health damage due to inhaling particles. Its high levels can cause lung cancer.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/radon.json",
      "summary": [
        {
          "range": [
            "range1"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The Radon level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The Radon level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range3"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The Radon level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/radon.svg",
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Unhealthy",
        "min": 0,
        "max": 100,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Severe",
        "min": 100,
        "max": 150,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Dangerous",
        "min": 150,
        "max": 200,
        "isMaxInfinity": true,
        "maxInfinityText": "200+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "rainfall(mm)",
    "uniqueId": 46,
    "multipleIds": [
      46,
      305
    ],
    "category": [
      "met",
      "weather"
    ],
    "name": "Rainfall",
    "fullName": "Rainfall",
    "unit": "mm",
    "misc": {
      "about": "Rainfall is to check the rain amount that falls in a place. These are the water droplets that fall under gravity. It is a crucial part of the water cycle and fresh water on the Earth. Rainfall monitoring and measuring are essential. Because, it contributes to flood or drought forecasting. Rainfall is a necessary water resource for agriculture and freshwater.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/rainfall.json",
      "summary": [
        {
          "range": [
            "range1"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/rainfall-1.svg",
          "summary": "No rain",
          "color": "#E0E8FE",
          "info": "Dry conditions persist with no precipitation in the last 24 hours, indicating clear skies and minimal moisture in the air, which maintains stable atmospheric conditions."
        },
        {
          "range": [
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/rainfall-1.svg",
          "summary": "Shower",
          "color": "#E0E8FE",
          "info": "There have been brief episodes of light to moderate rainfall in the last 24 hours, occurring for a short duration during the day. Light showers can provide relief by moisturizing plants."
        },
        {
          "range": [
            "range3"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/rainfall-2.svg",
          "summary": "Light rain",
          "color": "#C8D7F6",
          "info": "Gentle or steady precipitation in the last 24 hours. Rain falls at a slow rate with a soothing sound and dampens the ground, helping to maintain soil moisture."
        },
        {
          "range": [
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/rainfall-2.svg",
          "summary": "Moderate rain",
          "color": "#C8D7F6",
          "info": "Rain fell at moderate intensity in the last 24 hours, consistently affecting outdoor activities. As a result, surfaces can become slippery and wet."
        },
        {
          "range": [
            "range5"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/rainfall-3.svg",
          "summary": "Heavy rain",
          "color": "#A7BFFF",
          "info": "Heavy rainfall in the last 24 hours, resulting in continuous precipitation over a short period that could cause localized flooding. This increases risks to property and safety."
        },
        {
          "range": [
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/rainfall-3.svg",
          "summary": "Downpour",
          "color": "#A7BFFF",
          "info": "A very heavy rainstorm in the last 24 hours, increasing the likelihood of flash flooding and hazardous road conditions. Strong winds and reduced visibility can also impact the area."
        }
      ]
    },
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/rainfall.svg",
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "No rain",
        "min": 0,
        "max": 0.5,
        "color": "#E0E8FE",
        "absoluteColors": [
          "#ECF1FF",
          "#E6ECFF",
          "#E0E8FE",
          "#D9E3FE",
          "#D3DFFD",
          "#CDDAFD",
          "#C7D6FC",
          "#C1D1FC",
          "#BBCDFB",
          "#B4C8FB"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/rainfall-1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Shower",
        "min": 0.5,
        "max": 2,
        "color": "#AEC3FB",
        "absoluteColors": [
          "#AEC3FB",
          "#A8BFFA",
          "#A2BAFA",
          "#9CB6F9",
          "#96B1F9",
          "#8FADF8",
          "#89A8F8",
          "#83A4F7",
          "#7D9FF7",
          "#779BF6"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/rainfall-2.json",
        "name": "Light rain",
        "min": 2,
        "max": 6,
        "color": "#4C7BF3",
        "absoluteColors": [
          "#7196F6",
          "#6A91F6",
          "#648DF5",
          "#5E88F5",
          "#5884F4",
          "#527FF4",
          "#4C7BF3",
          "#4576F3",
          "#3F72F2",
          "#396DF2"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/rainfall-3.json",
        "name": "Moderate rain",
        "min": 6,
        "max": 10,
        "color": "#285AD7",
        "absoluteColors": [
          "#3368EE",
          "#3166EA",
          "#2F63E6",
          "#2E61E3",
          "#2C5FDF",
          "#2A5CDB",
          "#285AD7",
          "#2758D3",
          "#2555D0",
          "#2353CC"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/rainfall-4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Heavy rain",
        "min": 10,
        "max": 18,
        "color": "#1A47B9",
        "absoluteColors": [
          "#2151C8",
          "#204EC4",
          "#1E4CC0",
          "#1C4ABD",
          "#1A47B9",
          "#1945B5",
          "#1742B1",
          "#1540AE",
          "#133EAA",
          "#123BA6"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/rainfall-5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Downpour",
        "min": 18,
        "max": 30,
        "isMaxInfinity": true,
        "maxInfinityText": "30+",
        "color": "#001C64",
        "absoluteColors": [
          "#002279",
          "#002174",
          "#001F6E",
          "#001E69",
          "#001C64",
          "#001B5E",
          "#001959",
          "#001854",
          "#00164E",
          "#001549"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/rainfall-6.svg"
      }
    ]
  },
  {
    "id": "solar-irradiation",
    "uniqueId": 306,
    "multipleIds": [
      45,
      306
    ],
    "category": [
      "weather"
    ],
    "name": "Solar Irradiation",
    "fullName": "Solar Irradiation",
    "unit": "W/m2",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/solar-irradiance.svg",
    "misc": {
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/solar-radiation.json",
      "about": "Solar radiation is sunlight as electromagnetic radiation emitted by the sun. It uses energy form by converting it into heat and electricity. Solar radiation is essential for measuring climate change. It can also predict the temperature of the day. Solar radiation also confirms the atmospheric conditions.",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The Solar Radiation level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The Solar Radiation level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The Solar Radiation level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 200,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 200,
        "max": 400,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 400,
        "max": 600,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 600,
        "max": 700,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 700,
        "max": 800,
        "isMaxInfinity": true,
        "maxInfinityText": "800+",
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      }
    ]
  },
  {
    "id": "so2(ppb)",
    "uniqueId": 35,
    "publicId": "so2",
    "category": [
      "gases"
    ],
    "name": "SO2",
    "fullName": "Sulfur Dioxide",
    "unit": "ppb",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/so2.svg",
    "misc": {
      "about": "Sulfur Dioxide is a chemical compound of sulfur and oxygen. It is the air pollution that is released from the oil, diesel, and coal burning. High concentrations of SO2 in the atmosphere are very dangerous. Because it leads to various severe health problems. It also impacts the entire environment and other living beings. High levels of SO2 concentration is also a reason for acid rain.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/so2.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The SO2 level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The SO2 level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The SO2 level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 40,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 40,
        "max": 80,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 80,
        "max": 380,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 380,
        "max": 800,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 800,
        "max": 1600,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 1600,
        "max": 2600,
        "isMaxInfinity": true,
        "maxInfinityText": "2600+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "so2(ppm)",
    "uniqueId": 22,
    "publicId": "so2",
    "category": [
      "gases"
    ],
    "name": "SO2",
    "fullName": "Sulfur Dioxide",
    "unit": "ppm",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/so2.svg",
    "misc": {
      "about": "Sulfur Dioxide is a chemical compound of sulfur and oxygen. It is the air pollution that is released from the oil, diesel, and coal burning. High concentrations of SO2 in the atmosphere are very dangerous. Because it leads to various severe health problems. It also impacts the entire environment and other living beings. High levels of SO2 concentration is also a reason for acid rain.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/so2.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The SO2 level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The SO2 level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The SO2 level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 0.04,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 0.04,
        "max": 0.08,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 0.08,
        "max": 0.38,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 0.38,
        "max": 0.8,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 0.8,
        "max": 1.6,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 1.6,
        "max": 2.6,
        "isMaxInfinity": true,
        "maxInfinityText": "2.6+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "so2(µg/m3)",
    "uniqueId": 36,
    "publicId": "so2",
    "category": [
      "gases"
    ],
    "name": "SO2",
    "fullName": "Sulfur Dioxide",
    "unit": "µg/m³",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/so2.svg",
    "misc": {
      "about": "Sulfur Dioxide is a chemical compound of sulfur and oxygen. It is the air pollution that is released from the oil, diesel, and coal burning. High concentrations of SO2 in the atmosphere are very dangerous. Because it leads to various severe health problems. It also impacts the entire environment and other living beings. High levels of SO2 concentration is also a reason for acid rain.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/so2.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The SO2 level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The SO2 level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The SO2 level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 40,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 40,
        "max": 80,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 80,
        "max": 380,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 380,
        "max": 800,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 800,
        "max": 1600,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 1600,
        "max": 2600,
        "isMaxInfinity": true,
        "maxInfinityText": "2600+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "temp(fer)",
    "uniqueId": 30,
    "category": [
      "comfort",
      "weather"
    ],
    "name": "Temperature",
    "fullName": "Temperature",
    "unit": "°F",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/temperature.svg",
    "misc": {
      "about": "Temperature is crucial to determine the place's comfort based on cold and hot. It is displayed in Degrees Celsius, Fahrenheit, and Kelvin. The temperature is important to measure to know the air quality. Because hot and cold temperature affects the AQI level. Temperature also affects human health. You can check the temperature to know the indoor thermal comfort.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/temperature.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/temperature-1.svg",
          "summary": "Cold",
          "color": "#D6E2FF",
          "info": "In the last 24 hours, your room temperature has been colder than usual. It has a high chance of trapping pollutants indoors because of poor ventilation. Your thermal comfort can be affected by this. Try to maintain ventilation."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/temperature-2.svg",
          "summary": "Normal",
          "color": "#EAEFFF",
          "info": "The room temperature is normal in the last 24 hours. Which means you will have better comfort. It will provide you with good sleep, high concentration in studies, and office and overall better health."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/temperature-3.svg",
          "summary": "Hot",
          "color": "#FFE2DE",
          "info": "In the last 24 hours, the temperature of your room has been high. It increases the pollutant level in the air and causes air pollution. High temperature can affect your mental health, heart-related issues, and respiratory infections."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Freezing",
        "min": 0,
        "max": 32,
        "color": "#1741AC",
        "absoluteColors": [
          "#002278",
          "#062A85",
          "#0B3292",
          "#11399F",
          "#1741AC",
          "#1C49BA",
          "#2251C7",
          "#2858D4",
          "#2D60E1",
          "#3368EE"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/temp-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Chilly",
        "min": 32,
        "max": 50,
        "color": "#396DF2",
        "absoluteColors": [
          "#396DF2",
          "#3C70F2",
          "#4777F3",
          "#4A7AF3",
          "#4E7CF3",
          "#517FF3",
          "#5581F3",
          "#5C86F4",
          "#5F89F4",
          "#638BF4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/temp-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Cool",
        "min": 51,
        "max": 68,
        "color": "#789DF5",
        "absoluteColors": [
          "#7B9DF5",
          "#7FA0F6",
          "#82A3F6",
          "#91AEF8",
          "#94B1F9",
          "#98B3F9",
          "#9CB6FA",
          "#9FB9FA",
          "#A3BCFB",
          "#B9CCFE"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/temp-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Pleasant",
        "min": 68,
        "max": 87,
        "color": "#C3D1FB",
        "absoluteColors": [
          "#C3D1FB",
          "#C6D1F8",
          "#D0CEED",
          "#D3CEE9",
          "#D6CDE6",
          "#E0CBDB",
          "#E3CAD7",
          "#E7C9D3",
          "#F0C7C9",
          "#F7C5C1"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/temp-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Hot",
        "min": 87,
        "max": 105,
        "color": "#F2644E",
        "absoluteColors": [
          "#F2644E",
          "#F0614A",
          "#EE5D46",
          "#E64F37",
          "#E44C33",
          "#E24830",
          "#E1452C",
          "#DD3E24",
          "#DB3A21",
          "#D9371D"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/temp-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Burning",
        "min": 105,
        "max": 123,
        "isMaxInfinity": true,
        "maxInfinityText": "123+",
        "color": "#D2331A",
        "absoluteColors": [
          "#D2331A",
          "#CE3118",
          "#CB3017",
          "#C02A12",
          "#BC2811",
          "#B9260F",
          "#B5250E",
          "#A71D08",
          "#A31B06",
          "#991602"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/temp-range6.svg"
      }
    ]
  },
  {
    "id": "temp(cel)",
    "uniqueId": 11,
    "publicId": "t",
    "multipleIds": [
      11,
      300
    ],
    "category": [
      "comfort",
      "weather"
    ],
    "name": "Temperature",
    "fullName": "Temperature",
    "unit": "°C",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/temperature.svg",
    "misc": {
      "about": "Temperature is crucial to determine the place's comfort based on cold and hot. It is displayed in Degrees Celsius, Fahrenheit, and Kelvin. The temperature is important to measure to know the air quality. Because hot and cold temperature affects the AQI level. Temperature also affects human health. You can check the temperature to know the indoor thermal comfort.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/temperature.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/temperature-1.svg",
          "summary": "Cold",
          "color": "#D6E2FF",
          "info": "In the last 24 hours, your room temperature has been colder than usual. It has a high chance of trapping pollutants indoors because of poor ventilation. Your thermal comfort can be affected by this. Try to maintain ventilation."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/temperature-2.svg",
          "summary": "Normal",
          "color": "#EAEFFF",
          "info": "The room temperature is normal in the last 24 hours. Which means you will have better comfort. It will provide you with good sleep, high concentration in studies, and office and overall better health."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/temperature-3.svg",
          "summary": "Hot",
          "color": "#FFE2DE",
          "info": "In the last 24 hours, the temperature of your room has been high. It increases the pollutant level in the air and causes air pollution. High temperature can affect your mental health, heart-related issues, and respiratory infections."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Freezing",
        "min": 0,
        "max": 0.9,
        "color": "#1741AC",
        "absoluteColors": [
          "#002278",
          "#062A85",
          "#0B3292",
          "#11399F",
          "#1741AC",
          "#1C49BA",
          "#2251C7",
          "#2858D4",
          "#2D60E1",
          "#3368EE"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/temp-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Chilly",
        "min": 0.9,
        "max": 10.9,
        "color": "#396DF2",
        "absoluteColors": [
          "#396DF2",
          "#3C70F2",
          "#4777F3",
          "#4A7AF3",
          "#4E7CF3",
          "#517FF3",
          "#5581F3",
          "#5C86F4",
          "#5F89F4",
          "#638BF4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/temp-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Cool",
        "min": 10.9,
        "max": 20.9,
        "color": "#789DF5",
        "absoluteColors": [
          "#7B9DF5",
          "#7FA0F6",
          "#82A3F6",
          "#91AEF8",
          "#94B1F9",
          "#98B3F9",
          "#9CB6FA",
          "#9FB9FA",
          "#A3BCFB",
          "#B9CCFE"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/temp-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Pleasant",
        "min": 20.9,
        "max": 30.9,
        "color": "#D6CDE6",
        "absoluteColors": [
          "#C3D1FB",
          "#C6D1F8",
          "#D0CEED",
          "#D3CEE9",
          "#D6CDE6",
          "#E0CBDB",
          "#E3CAD7",
          "#E7C9D3",
          "#F0C7C9",
          "#F7C5C1"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/temp-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Hot",
        "min": 30.9,
        "max": 40.9,
        "color": "#F2644E",
        "absoluteColors": [
          "#F2644E",
          "#F0614A",
          "#EE5D46",
          "#E64F37",
          "#E44C33",
          "#E24830",
          "#E1452C",
          "#DD3E24",
          "#DB3A21",
          "#D9371D"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/temp-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Burning",
        "min": 40.9,
        "max": 51,
        "isMaxInfinity": true,
        "maxInfinityText": "51+",
        "color": "#D2331A",
        "absoluteColors": [
          "#D2331A",
          "#CE3118",
          "#CB3017",
          "#C02A12",
          "#BC2811",
          "#B9260F",
          "#B5250E",
          "#A71D08",
          "#A31B06",
          "#991602"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/temp-range6.svg"
      }
    ]
  },
  {
    "id": "tvoc(ppm)",
    "uniqueId": 18,
    "multipleIds": [
      18,
      77,
      "tvoc(ppm)",
      "tvoc(pid)"
    ],
    "category": [
      "pollutant"
    ],
    "name": "TVOC",
    "fullName": "Total Volatile Organic Compounds",
    "unit": "ppm",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/tvoc.svg",
    "misc": {
      "about": "Total Volatile Organic Compounds are the compounds that have high vapor pressure at room temperature. The main sources are the products used in a house. Such as paint, glue, soaps, fabrics, etc. These compounds vaporize with air contact. And it mixes within the air and causes several health effects. It can cause several health effects.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/tvoc.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The TVOC level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The TVOC level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The TVOC level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 0.07,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 0.07,
        "max": 0.22,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 0.22,
        "max": 0.66,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 0.66,
        "max": 1,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 1,
        "max": 2.2,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 2.2,
        "max": 3.4,
        "isMaxInfinity": true,
        "maxInfinityText": "3.4+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "tvoc(ppb)",
    "uniqueId": 31,
    "category": [
      "pollutant"
    ],
    "name": "TVOC",
    "fullName": "Total Volatile Organic Compounds",
    "unit": "ppb",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/tvoc.svg",
    "misc": {
      "about": "Total Volatile Organic Compounds are the compounds that have high vapor pressure at room temperature. The main sources are the products used in a house. Such as paint, glue, soaps, fabrics, etc. These compounds vaporize with air contact. And it mixes within the air and causes several health effects. It can cause several health effects.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/tvoc.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The TVOC level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The TVOC level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The TVOC level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Good",
        "min": 0,
        "max": 220,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 220,
        "max": 660,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Poor",
        "min": 660,
        "max": 1430,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Unhealthy",
        "min": 1430,
        "max": 2200,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Severe",
        "min": 2200,
        "max": 3300,
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Hazardous",
        "min": 3300,
        "max": 5500,
        "isMaxInfinity": true,
        "maxInfinityText": "5500+",
        "color": "#C92033",
        "absoluteColors": [
          "#E83549",
          "#E03044",
          "#D6273A",
          "#C92033",
          "#B01729",
          "#A91526",
          "#A31323",
          "#970E1E",
          "#8A0A19",
          "#7B0412"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range6.svg"
      }
    ]
  },
  {
    "id": "Odor",
    "uniqueId": 90,
    "category": [
      "met",
      "comfort"
    ],
    "name": "Odor",
    "fullName": "Odor Score",
    "unit": null,
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/unknown.svg",
    "misc": {
      "summary": [
        {
          "range": [
            "range1"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/odor-1.json",
          "summary": "Bad",
          "color": "#C22030"
        },
        {
          "range": [
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/odor-2.json",
          "summary": "Fair",
          "color": "#FBDC13"
        },
        {
          "range": [
            "range3"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/odor-3.json",
          "summary": "Good",
          "color": "#A7C73E"
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "name": "Bad",
        "min": 0,
        "max": 4,
        "color": "#C22030",
        "absoluteColors": [
          "#C22030"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/odor-range1.svg"
      },
      {
        "id": "range2",
        "name": "Fair",
        "min": 4,
        "max": 7,
        "color": "#FBDC13",
        "absoluteColors": [
          "#FBDC13"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/odor-range2.svg"
      },
      {
        "id": "range3",
        "name": "Good",
        "min": 7,
        "max": 10,
        "isMaxInfinity": true,
        "maxInfinityText": "10+",
        "color": "#A7C73E",
        "absoluteColors": [
          "#A7C73E"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/odor-range3.svg"
      }
    ]
  },
  {
    "id": "uv index",
    "uniqueId": 59,
    "multipleIds": [
      59,
      308
    ],
    "category": [
      "met",
      "weather"
    ],
    "name": "UV Index",
    "fullName": "Ultraviolet Index",
    "unit": null,
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/uv-index.svg",
    "misc": {
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/uv-index.json",
      "about": "The UVI (Ultraviolet Index) is used to measure the UV radiation level in the atmosphere. It ranges from zero and upwards. The higher level causes extreme health issues such as skin or eye damage. For it, UVI measures the UV rays and helps in guiding. Because UV rays can cause sunburn, skin cancer risk, aging, etc. Through UVI, you can make the best decision to save yourself from UV exposure",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The UV Index level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The UV Index level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The UV Index level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Low",
        "min": 0,
        "max": 2,
        "color": "#59b61f",
        "absoluteColors": [
          "#59b61f",
          "#76CA33",
          "#7FCC33",
          "#88CE33",
          "#92D033",
          "#9BD232",
          "#A5D432",
          "#AED632",
          "#B7D832",
          "#C1DA32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Moderate",
        "min": 2,
        "max": 5,
        "color": "#EEC732",
        "absoluteColors": [
          "#CADC32",
          "#D4DE31",
          "#DDE031",
          "#E7E231",
          "#F0E431",
          "#F0DD31",
          "#EFD531",
          "#EFCE32",
          "#EEC732",
          "#EEBF32"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "High",
        "min": 5,
        "max": 7,
        "color": "#EA8C34",
        "absoluteColors": [
          "#EDB832",
          "#EDB032",
          "#ECA933",
          "#ECA233",
          "#EB9A33",
          "#EB9333",
          "#EA8C34",
          "#EA8434",
          "#E97D34",
          "#E97534"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Very High",
        "min": 7,
        "max": 10,
        "color": "#E95478",
        "absoluteColors": [
          "#E85562",
          "#E85567",
          "#E9546D",
          "#E95472",
          "#E95478",
          "#E95383",
          "#E95289",
          "#EA528E",
          "#EA5294",
          "#EA519F"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Extreme",
        "min": 10,
        "max": 20,
        "isMaxInfinity": true,
        "maxInfinityText": "20+",
        "color": "#B33FBA",
        "absoluteColors": [
          "#D450B4",
          "#CF50B9",
          "#CB50BE",
          "#C850C0",
          "#BE4FCA",
          "#BC4FCC",
          "#BD4DC4",
          "#B33FBA",
          "#A72EAE",
          "#9D24A4"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range5.svg"
      }
    ]
  },
  {
    "id": "wspeed",
    "uniqueId": 28,
    "multipleIds": [
      28,
      303
    ],
    "category": [
      "met",
      "weather"
    ],
    "name": "Wind Speed",
    "fullName": "Wind Speed",
    "unit": "m/s",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/wind-speed.svg",
    "misc": {
      "about": "Wind speed checks to know air traveling in the atmosphere. As how fast air is moving at a certain point. It monitors to predict the changes in weather patterns or global climate. Wind speed can indicate the coming storm. It also confirms the air pressure of the area.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/wind-speed.json",
      "summary": [
        {
          "range": [
            "range1",
            "range2"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-1.svg",
          "summary": "Good",
          "color": "#D0FFC2",
          "info": "The Wind Speed level in the last 24 hours is at a comfortable level as per the WHO guidelines. It's fresh air to breathe and indicates a clean and healthy environment."
        },
        {
          "range": [
            "range3",
            "range4"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-2.svg",
          "summary": "Fair",
          "color": "#FFF6D3",
          "info": "The Wind Speed level in the last 24 hours is at a moderate level. It means the pollutant is slightly increased. And it can slightly affect individuals with high sensitivity to air pollution."
        },
        {
          "range": [
            "range5",
            "range6",
            "range7"
          ],
          "icon": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-summary/default-3.svg",
          "summary": "Bad",
          "color": "#FFE5E8",
          "info": "The Wind Speed level in the last 24 hours is at a poor level and can irritate healthy people. It can highly affect people with high sensitivity. Children, seniors, and people with respiratory diseases can face problems."
        }
      ]
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "Calm",
        "min": 0,
        "max": 0.7,
        "color": "#E0E8FE",
        "absoluteColors": [
          "#ECF1FF",
          "#E6ECFF",
          "#E0E8FE",
          "#D9E3FE",
          "#D3DFFD",
          "#CDDAFD",
          "#C7D6FC",
          "#C1D1FC",
          "#BBCDFB",
          "#B4C8FB"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range1.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "Light Breeze",
        "min": 0.7,
        "max": 5.75,
        "color": "#AEC3FB",
        "absoluteColors": [
          "#AEC3FB",
          "#A8BFFA",
          "#A2BAFA",
          "#9CB6F9",
          "#96B1F9",
          "#8FADF8",
          "#89A8F8",
          "#83A4F7",
          "#7D9FF7",
          "#779BF6"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range2.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "Moderate Breeze",
        "min": 5.75,
        "max": 28.6,
        "color": "#4C7BF3",
        "absoluteColors": [
          "#7196F6",
          "#6A91F6",
          "#648DF5",
          "#5E88F5",
          "#5884F4",
          "#527FF4",
          "#4C7BF3",
          "#4576F3",
          "#3F72F2",
          "#396DF2"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range3.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "Strong Breeze",
        "min": 28.6,
        "max": 33.08,
        "color": "#285AD7",
        "absoluteColors": [
          "#3368EE",
          "#3166EA",
          "#2F63E6",
          "#2E61E3",
          "#2C5FDF",
          "#2A5CDB",
          "#285AD7",
          "#2758D3",
          "#2555D0",
          "#2353CC"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "Strong Gale",
        "min": 33.08,
        "max": 54.87,
        "color": "#1A47B9",
        "absoluteColors": [
          "#2151C8",
          "#204EC4",
          "#1E4CC0",
          "#1C4ABD",
          "#1A47B9",
          "#1945B5",
          "#1742B1",
          "#1540AE",
          "#133EAA",
          "#123BA6"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "Violent Storm",
        "min": 54.87,
        "max": 84.87,
        "isMaxInfinity": true,
        "maxInfinityText": "84.87+",
        "color": "#042988",
        "absoluteColors": [
          "#1039A2",
          "#0E379E",
          "#0C349B",
          "#0B3297",
          "#093093",
          "#072D8F",
          "#052B8B",
          "#042988",
          "#022684",
          "#002480"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges/default-range4.svg"
      }
    ]
  },
  {
    "id": "wdirection",
    "uniqueId": 29,
    "multipleIds": [
      29,
      304
    ],
    "category": [
      "met",
      "weather"
    ],
    "name": "Wind Direction",
    "fullName": "Wind Direction",
    "unit": "°",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/wind-direction.svg",
    "misc": {
      "about": "The wind direction confirms the wind origin. As the wind blows from the north to south. It is reported in the degrees. Wind direction checks to know the weather changes. The bad weather conditions can be confirmed by the wind direction. It determines the wind direction and speed. The flood, storm, and thunderstorm status can be confirmed.",
      "lottieJSON": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-lotties/wind-direction.json"
    },
    "ranges": [
      {
        "id": "range1",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range1.json",
        "name": "°N",
        "min": 337.5,
        "max": 22.5,
        "color": "#A1C1FF",
        "absoluteColors": [
          "#A1C1FF"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/wind-direction.svg"
      },
      {
        "id": "range2",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range2.json",
        "name": "°NE",
        "min": 22.5,
        "max": 67.5,
        "color": "#A1C1FF",
        "absoluteColors": [
          "#A1C1FF"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/wind-direction.svg"
      },
      {
        "id": "range3",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range3.json",
        "name": "°E",
        "min": 67.5,
        "max": 112.5,
        "color": "#A1C1FF",
        "absoluteColors": [
          "#A1C1FF"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/wind-direction.svg"
      },
      {
        "id": "range4",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range4.json",
        "name": "°SE",
        "min": 112.5,
        "max": 157.5,
        "color": "#A1C1FF",
        "absoluteColors": [
          "#A1C1FF"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/wind-direction.svg"
      },
      {
        "id": "range5",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range5.json",
        "name": "°S",
        "min": 157.5,
        "max": 202.5,
        "color": "#A1C1FF",
        "absoluteColors": [
          "#A1C1FF"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/wind-direction.svg"
      },
      {
        "id": "range6",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "°SW",
        "min": 202.5,
        "max": 247.5,
        "color": "#A1C1FF",
        "absoluteColors": [
          "#A1C1FF"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/wind-direction.svg"
      },
      {
        "id": "range7",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "°W",
        "min": 247.5,
        "max": 292.5,
        "color": "#A1C1FF",
        "absoluteColors": [
          "#A1C1FF"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/wind-direction.svg"
      },
      {
        "id": "range8",
        "lottieUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-ranges-lotties/default-range6.json",
        "name": "°NW",
        "min": 292.5,
        "max": 337.5,
        "isMaxInfinity": true,
        "maxInfinityText": "337.5°",
        "color": "#A1C1FF",
        "absoluteColors": [
          "#A1C1FF"
        ],
        "rangeImageUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/wind-direction.svg"
      }
    ]
  },
  {
    "id": "Ethylene oxide",
    "uniqueId": 79,
    "category": [
      "gases"
    ],
    "name": "Ethylene Oxide",
    "fullName": "Ethylene Oxide",
    "unit": "ppb",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/unknown.svg",
    "ranges": []
  },
  {
    "id": "Chloroprene",
    "uniqueId": 500,
    "category": [
      "pollutant"
    ],
    "name": "Chloroprene",
    "fullName": "Chloroprene",
    "unit": "ppb",
    "sensorIconUrl": "https://airquality.aqi.in/public/sensors-meta-json-v2/sensor-icons/unknown.svg",
    "ranges": []
  }
];
    