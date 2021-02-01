import NasaNeoAPI from "../NasaNeoAPI";

const mocks = {
  get: jest.fn(),
};
/*
class MockNasaNeoAPI extends NasaNeoAPI { 
  get: mocks.get
  fetch: jest.fn()
}
 */
const ds = new NasaNeoAPI();
// @ts-ignore
ds.get = mocks.get
describe("[NasaNeoAPI.getAsteroidClosestToEarthInRange]", () => {
  it("should look up closest miss from api", async () => {
    mocks.get.mockReturnValueOnce([mockNeoApiResponse]);
    const res = await ds.getAsteroidClosestToEarthInRange(
      "2015-09-07",
      "2015-09-08"
    );

    expect(res).toEqual({});
    expect(mocks.get).toBeCalledWith("launches", { flight_number: 1 });
  });
});

const mockNeoApiResponse = {
  links: {
    next:
      "http://www.neowsapp.com/rest/v1/feed?start_date=2015-09-08&end_date=2015-09-09&detailed=false&api_key=DEMO_KEY",
    prev:
      "http://www.neowsapp.com/rest/v1/feed?start_date=2015-09-06&end_date=2015-09-07&detailed=false&api_key=DEMO_KEY",
    self:
      "http://www.neowsapp.com/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&detailed=false&api_key=DEMO_KEY",
  },
  element_count: 23,
  near_earth_objects: {
    "2015-09-08": [
      {
        links: {
          self: "http://www.neowsapp.com/rest/v1/neo/2465633?api_key=DEMO_KEY",
        },
        id: "2465633",
        neo_reference_id: "2465633",
        name: "465633 (2009 JR5)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2465633",
        absolute_magnitude_h: 20.3,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.2315021222,
            estimated_diameter_max: 0.5176544822,
          },
          meters: {
            estimated_diameter_min: 231.5021222103,
            estimated_diameter_max: 517.6544821978,
          },
          miles: {
            estimated_diameter_min: 0.1438487052,
            estimated_diameter_max: 0.3216554833,
          },
          feet: {
            estimated_diameter_min: 759.5214226325,
            estimated_diameter_max: 1698.3415313737,
          },
        },
        is_potentially_hazardous_asteroid: true,
        close_approach_data: [
          {
            close_approach_date: "2015-09-08",
            close_approach_date_full: "2015-Sep-08 20:28",
            epoch_date_close_approach: 1441744080000,
            relative_velocity: {
              kilometers_per_second: "18.1279547379",
              kilometers_per_hour: "65260.6370563464",
              miles_per_hour: "40550.4219531504",
            },
            miss_distance: {
              astronomical: "0.3027478835",
              lunar: "117.7689266815",
              kilometers: "45290438.518608145",
              miles: "28142173.525536601",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: "http://www.neowsapp.com/rest/v1/neo/3426410?api_key=DEMO_KEY",
        },
        id: "3426410",
        neo_reference_id: "3426410",
        name: "(2008 QV11)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3426410",
        absolute_magnitude_h: 21.0,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.1677084622,
            estimated_diameter_max: 0.3750075218,
          },
          meters: {
            estimated_diameter_min: 167.7084621628,
            estimated_diameter_max: 375.0075217981,
          },
          miles: {
            estimated_diameter_min: 0.1042091748,
            estimated_diameter_max: 0.2330187988,
          },
          feet: {
            estimated_diameter_min: 550.2246310023,
            estimated_diameter_max: 1230.3396778159,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2015-09-08",
            close_approach_date_full: "2015-Sep-08 14:31",
            epoch_date_close_approach: 1441722660000,
            relative_velocity: {
              kilometers_per_second: "19.7498082025",
              kilometers_per_hour: "71099.3095291188",
              miles_per_hour: "44178.3459682461",
            },
            miss_distance: {
              astronomical: "0.2591243923",
              lunar: "100.7993886047",
              kilometers: "38764457.153124401",
              miles: "24087116.7405066938",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: "http://www.neowsapp.com/rest/v1/neo/3553060?api_key=DEMO_KEY",
        },
        id: "3553060",
        neo_reference_id: "3553060",
        name: "(2010 XT10)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3553060",
        absolute_magnitude_h: 26.5,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.0133215567,
            estimated_diameter_max: 0.0297879063,
          },
          meters: {
            estimated_diameter_min: 13.3215566698,
            estimated_diameter_max: 29.7879062798,
          },
          miles: {
            estimated_diameter_min: 0.008277629,
            estimated_diameter_max: 0.0185093411,
          },
          feet: {
            estimated_diameter_min: 43.7058959846,
            estimated_diameter_max: 97.7293544391,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2015-09-08",
            close_approach_date_full: "2015-Sep-08 12:04",
            epoch_date_close_approach: 1441713840000,
            relative_velocity: {
              kilometers_per_second: "19.1539799762",
              kilometers_per_hour: "68954.3279141803",
              miles_per_hour: "42845.537808675",
            },
            miss_distance: {
              astronomical: "0.4917758242",
              lunar: "191.3007956138",
              kilometers: "73568615.817814454",
              miles: "45713418.1098253052",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: "http://www.neowsapp.com/rest/v1/neo/3726710?api_key=DEMO_KEY",
        },
        id: "3726710",
        neo_reference_id: "3726710",
        name: "(2015 RC)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3726710",
        absolute_magnitude_h: 24.3,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.0366906138,
            estimated_diameter_max: 0.0820427065,
          },
          meters: {
            estimated_diameter_min: 36.6906137531,
            estimated_diameter_max: 82.0427064882,
          },
          miles: {
            estimated_diameter_min: 0.0227984834,
            estimated_diameter_max: 0.0509789586,
          },
          feet: {
            estimated_diameter_min: 120.3760332259,
            estimated_diameter_max: 269.1689931548,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2015-09-08",
            close_approach_date_full: "2015-Sep-08 09:45",
            epoch_date_close_approach: 1441705500000,
            relative_velocity: {
              kilometers_per_second: "19.4850295284",
              kilometers_per_hour: "70146.106302123",
              miles_per_hour: "43586.0625520053",
            },
            miss_distance: {
              astronomical: "0.0269230459",
              lunar: "10.4730648551",
              kilometers: "4027630.320552233",
              miles: "2502653.4316094954",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: "http://www.neowsapp.com/rest/v1/neo/3727181?api_key=DEMO_KEY",
        },
        id: "3727181",
        neo_reference_id: "3727181",
        name: "(2015 RO36)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3727181",
        absolute_magnitude_h: 22.9,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.0699125232,
            estimated_diameter_max: 0.1563291544,
          },
          meters: {
            estimated_diameter_min: 69.9125232246,
            estimated_diameter_max: 156.3291544087,
          },
          miles: {
            estimated_diameter_min: 0.0434416145,
            estimated_diameter_max: 0.097138403,
          },
          feet: {
            estimated_diameter_min: 229.3718026961,
            estimated_diameter_max: 512.8909429502,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2015-09-08",
            close_approach_date_full: "2015-Sep-08 14:36",
            epoch_date_close_approach: 1441722960000,
            relative_velocity: {
              kilometers_per_second: "15.8059552342",
              kilometers_per_hour: "56901.4388429936",
              miles_per_hour: "35356.3412633035",
            },
            miss_distance: {
              astronomical: "0.0540412844",
              lunar: "21.0220596316",
              kilometers: "8084461.038304228",
              miles: "5023451.1486772264",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: "http://www.neowsapp.com/rest/v1/neo/3727639?api_key=DEMO_KEY",
        },
        id: "3727639",
        neo_reference_id: "3727639",
        name: "(2015 RN83)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3727639",
        absolute_magnitude_h: 21.7,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.1214940408,
            estimated_diameter_max: 0.2716689341,
          },
          meters: {
            estimated_diameter_min: 121.4940407996,
            estimated_diameter_max: 271.6689340891,
          },
          miles: {
            estimated_diameter_min: 0.0754928736,
            estimated_diameter_max: 0.1688071972,
          },
          feet: {
            estimated_diameter_min: 398.6025088171,
            estimated_diameter_max: 891.3023057169,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2015-09-08",
            close_approach_date_full: "2015-Sep-08 15:42",
            epoch_date_close_approach: 1441726920000,
            relative_velocity: {
              kilometers_per_second: "12.0812027852",
              kilometers_per_hour: "43492.3300266876",
              miles_per_hour: "27024.4425101937",
            },
            miss_distance: {
              astronomical: "0.1684206501",
              lunar: "65.5156328889",
              kilometers: "25195370.518975287",
              miles: "15655677.2770894806",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: "http://www.neowsapp.com/rest/v1/neo/3730577?api_key=DEMO_KEY",
        },
        id: "3730577",
        neo_reference_id: "3730577",
        name: "(2015 TX237)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3730577",
        absolute_magnitude_h: 23.3,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.058150704,
            estimated_diameter_max: 0.130028927,
          },
          meters: {
            estimated_diameter_min: 58.1507039646,
            estimated_diameter_max: 130.0289270043,
          },
          miles: {
            estimated_diameter_min: 0.0361331611,
            estimated_diameter_max: 0.0807962044,
          },
          feet: {
            estimated_diameter_min: 190.7831555951,
            estimated_diameter_max: 426.6041048727,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2015-09-08",
            close_approach_date_full: "2015-Sep-08 14:18",
            epoch_date_close_approach: 1441721880000,
            relative_velocity: {
              kilometers_per_second: "6.574609389",
              kilometers_per_hour: "23668.5938004025",
              miles_per_hour: "14706.7437422557",
            },
            miss_distance: {
              astronomical: "0.0795459797",
              lunar: "30.9433861033",
              kilometers: "11899909.130183239",
              miles: "7394260.6570731382",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: "http://www.neowsapp.com/rest/v1/neo/3731587?api_key=DEMO_KEY",
        },
        id: "3731587",
        neo_reference_id: "3731587",
        name: "(2015 UG)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3731587",
        absolute_magnitude_h: 22.7,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.0766575574,
            estimated_diameter_max: 0.1714115092,
          },
          meters: {
            estimated_diameter_min: 76.6575573531,
            estimated_diameter_max: 171.4115092306,
          },
          miles: {
            estimated_diameter_min: 0.0476327831,
            estimated_diameter_max: 0.1065101409,
          },
          feet: {
            estimated_diameter_min: 251.5011804664,
            estimated_diameter_max: 562.3737359442,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2015-09-08",
            close_approach_date_full: "2015-Sep-08 18:52",
            epoch_date_close_approach: 1441738320000,
            relative_velocity: {
              kilometers_per_second: "11.9560254267",
              kilometers_per_hour: "43041.6915361182",
              miles_per_hour: "26744.4332769841",
            },
            miss_distance: {
              astronomical: "0.1132371269",
              lunar: "44.0492423641",
              kilometers: "16940032.989159703",
              miles: "10526048.4001137814",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: "http://www.neowsapp.com/rest/v1/neo/3747356?api_key=DEMO_KEY",
        },
        id: "3747356",
        neo_reference_id: "3747356",
        name: "(2016 EK158)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3747356",
        absolute_magnitude_h: 20.5,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.2111324448,
            estimated_diameter_max: 0.4721064988,
          },
          meters: {
            estimated_diameter_min: 211.1324447897,
            estimated_diameter_max: 472.1064988055,
          },
          miles: {
            estimated_diameter_min: 0.1311915784,
            estimated_diameter_max: 0.2933532873,
          },
          feet: {
            estimated_diameter_min: 692.6917701639,
            estimated_diameter_max: 1548.9058855411,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2015-09-08",
            close_approach_date_full: "2015-Sep-08 10:32",
            epoch_date_close_approach: 1441708320000,
            relative_velocity: {
              kilometers_per_second: "16.9598286663",
              kilometers_per_hour: "61055.3831985749",
              miles_per_hour: "37937.4407435812",
            },
            miss_distance: {
              astronomical: "0.2804924519",
              lunar: "109.1115637891",
              kilometers: "41961073.355317453",
              miles: "26073401.9432807314",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: "http://www.neowsapp.com/rest/v1/neo/3758838?api_key=DEMO_KEY",
        },
        id: "3758838",
        neo_reference_id: "3758838",
        name: "(2016 RT)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3758838",
        absolute_magnitude_h: 24.4,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.0350392641,
            estimated_diameter_max: 0.0783501764,
          },
          meters: {
            estimated_diameter_min: 35.0392641108,
            estimated_diameter_max: 78.3501764334,
          },
          miles: {
            estimated_diameter_min: 0.0217723826,
            estimated_diameter_max: 0.0486845275,
          },
          feet: {
            estimated_diameter_min: 114.9582192654,
            estimated_diameter_max: 257.0543928497,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2015-09-08",
            close_approach_date_full: "2015-Sep-08 00:57",
            epoch_date_close_approach: 1441673820000,
            relative_velocity: {
              kilometers_per_second: "19.0983018326",
              kilometers_per_hour: "68753.8865972527",
              miles_per_hour: "42720.9913692763",
            },
            miss_distance: {
              astronomical: "0.170371936",
              lunar: "66.274683104",
              kilometers: "25487278.73337632",
              miles: "15837060.630660416",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
    ],
    "2015-09-07": [
      {
        links: {
          self: "http://www.neowsapp.com/rest/v1/neo/2440012?api_key=DEMO_KEY",
        },
        id: "2440012",
        neo_reference_id: "2440012",
        name: "440012 (2002 LE27)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2440012",
        absolute_magnitude_h: 19.3,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.3669061375,
            estimated_diameter_max: 0.8204270649,
          },
          meters: {
            estimated_diameter_min: 366.9061375314,
            estimated_diameter_max: 820.4270648822,
          },
          miles: {
            estimated_diameter_min: 0.2279848336,
            estimated_diameter_max: 0.5097895857,
          },
          feet: {
            estimated_diameter_min: 1203.7603322587,
            estimated_diameter_max: 2691.6899315481,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2015-09-07",
            close_approach_date_full: "2015-Sep-07 07:32",
            epoch_date_close_approach: 1441611120000,
            relative_velocity: {
              kilometers_per_second: "1.1630787733",
              kilometers_per_hour: "4187.0835837756",
              miles_per_hour: "2601.6909079299",
            },
            miss_distance: {
              astronomical: "0.4981692661",
              lunar: "193.7878445129",
              kilometers: "74525061.108023207",
              miles: "46307725.6547539766",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: "http://www.neowsapp.com/rest/v1/neo/3713989?api_key=DEMO_KEY",
        },
        id: "3713989",
        neo_reference_id: "3713989",
        name: "(2015 FC35)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3713989",
        absolute_magnitude_h: 21.9,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.1108038821,
            estimated_diameter_max: 0.2477650126,
          },
          meters: {
            estimated_diameter_min: 110.8038821264,
            estimated_diameter_max: 247.7650126055,
          },
          miles: {
            estimated_diameter_min: 0.068850319,
            estimated_diameter_max: 0.1539539936,
          },
          feet: {
            estimated_diameter_min: 363.5298086356,
            estimated_diameter_max: 812.8773639568,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2015-09-07",
            close_approach_date_full: "2015-Sep-07 20:01",
            epoch_date_close_approach: 1441656060000,
            relative_velocity: {
              kilometers_per_second: "8.7635337423",
              kilometers_per_hour: "31548.7214721789",
              miles_per_hour: "19603.1486280881",
            },
            miss_distance: {
              astronomical: "0.3213750441",
              lunar: "125.0148921549",
              kilometers: "48077022.068516067",
              miles: "29873676.2526010446",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: "http://www.neowsapp.com/rest/v1/neo/3726788?api_key=DEMO_KEY",
        },
        id: "3726788",
        neo_reference_id: "3726788",
        name: "(2015 RG2)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3726788",
        absolute_magnitude_h: 26.7,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.0121494041,
            estimated_diameter_max: 0.0271668934,
          },
          meters: {
            estimated_diameter_min: 12.14940408,
            estimated_diameter_max: 27.1668934089,
          },
          miles: {
            estimated_diameter_min: 0.0075492874,
            estimated_diameter_max: 0.0168807197,
          },
          feet: {
            estimated_diameter_min: 39.8602508817,
            estimated_diameter_max: 89.1302305717,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2015-09-07",
            close_approach_date_full: "2015-Sep-07 17:58",
            epoch_date_close_approach: 1441648680000,
            relative_velocity: {
              kilometers_per_second: "8.0887368746",
              kilometers_per_hour: "29119.4527484721",
              miles_per_hour: "18093.6955147381",
            },
            miss_distance: {
              astronomical: "0.0163818512",
              lunar: "6.3725401168",
              kilometers: "2450690.046176944",
              miles: "1522788.1820680672",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: "http://www.neowsapp.com/rest/v1/neo/3727036?api_key=DEMO_KEY",
        },
        id: "3727036",
        neo_reference_id: "3727036",
        name: "(2015 RL35)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3727036",
        absolute_magnitude_h: 26.3,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.0146067964,
            estimated_diameter_max: 0.0326617897,
          },
          meters: {
            estimated_diameter_min: 14.6067964271,
            estimated_diameter_max: 32.6617897446,
          },
          miles: {
            estimated_diameter_min: 0.0090762397,
            estimated_diameter_max: 0.020295089,
          },
          feet: {
            estimated_diameter_min: 47.92256199,
            estimated_diameter_max: 107.1581062656,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2015-09-07",
            close_approach_date_full: "2015-Sep-07 03:58",
            epoch_date_close_approach: 1441598280000,
            relative_velocity: {
              kilometers_per_second: "3.5171675095",
              kilometers_per_hour: "12661.8030343488",
              miles_per_hour: "7867.552002093",
            },
            miss_distance: {
              astronomical: "0.0692512488",
              lunar: "26.9387357832",
              kilometers: "10359839.315320056",
              miles: "6437305.6487105328",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: "http://www.neowsapp.com/rest/v1/neo/3727179?api_key=DEMO_KEY",
        },
        id: "3727179",
        neo_reference_id: "3727179",
        name: "(2015 RH36)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3727179",
        absolute_magnitude_h: 23.6,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.0506471459,
            estimated_diameter_max: 0.1132504611,
          },
          meters: {
            estimated_diameter_min: 50.6471458835,
            estimated_diameter_max: 113.2504610618,
          },
          miles: {
            estimated_diameter_min: 0.0314706677,
            estimated_diameter_max: 0.0703705522,
          },
          feet: {
            estimated_diameter_min: 166.1651821003,
            estimated_diameter_max: 371.5566426699,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2015-09-07",
            close_approach_date_full: "2015-Sep-07 11:50",
            epoch_date_close_approach: 1441626600000,
            relative_velocity: {
              kilometers_per_second: "7.2717413945",
              kilometers_per_hour: "26178.2690200377",
              miles_per_hour: "16266.1583252562",
            },
            miss_distance: {
              astronomical: "0.1093378172",
              lunar: "42.5324108908",
              kilometers: "16356704.563569364",
              miles: "10163584.9241066632",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: "http://www.neowsapp.com/rest/v1/neo/3727662?api_key=DEMO_KEY",
        },
        id: "3727662",
        neo_reference_id: "3727662",
        name: "(2015 RX83)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3727662",
        absolute_magnitude_h: 22.9,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.0699125232,
            estimated_diameter_max: 0.1563291544,
          },
          meters: {
            estimated_diameter_min: 69.9125232246,
            estimated_diameter_max: 156.3291544087,
          },
          miles: {
            estimated_diameter_min: 0.0434416145,
            estimated_diameter_max: 0.097138403,
          },
          feet: {
            estimated_diameter_min: 229.3718026961,
            estimated_diameter_max: 512.8909429502,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2015-09-07",
            close_approach_date_full: "2015-Sep-07 21:46",
            epoch_date_close_approach: 1441662360000,
            relative_velocity: {
              kilometers_per_second: "2.6950620297",
              kilometers_per_hour: "9702.2233069217",
              miles_per_hour: "6028.584254237",
            },
            miss_distance: {
              astronomical: "0.2895756794",
              lunar: "112.6449392866",
              kilometers: "43319904.842042878",
              miles: "26917740.6766245964",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: "http://www.neowsapp.com/rest/v1/neo/3727663?api_key=DEMO_KEY",
        },
        id: "3727663",
        neo_reference_id: "3727663",
        name: "(2015 RY83)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3727663",
        absolute_magnitude_h: 24.2,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.0384197891,
            estimated_diameter_max: 0.0859092601,
          },
          meters: {
            estimated_diameter_min: 38.4197891064,
            estimated_diameter_max: 85.9092601232,
          },
          miles: {
            estimated_diameter_min: 0.0238729428,
            estimated_diameter_max: 0.0533815229,
          },
          feet: {
            estimated_diameter_min: 126.0491808919,
            estimated_diameter_max: 281.8545369825,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2015-09-07",
            close_approach_date_full: "2015-Sep-07 16:55",
            epoch_date_close_approach: 1441644900000,
            relative_velocity: {
              kilometers_per_second: "6.9807843196",
              kilometers_per_hour: "25130.823550526",
              miles_per_hour: "15615.3164444921",
            },
            miss_distance: {
              astronomical: "0.0764955043",
              lunar: "29.7567511727",
              kilometers: "11443564.507855841",
              miles: "7110701.2575829658",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: "http://www.neowsapp.com/rest/v1/neo/3759353?api_key=DEMO_KEY",
        },
        id: "3759353",
        neo_reference_id: "3759353",
        name: "(2016 RU33)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3759353",
        absolute_magnitude_h: 27.5,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.008405334,
            estimated_diameter_max: 0.0187948982,
          },
          meters: {
            estimated_diameter_min: 8.4053340207,
            estimated_diameter_max: 18.7948982439,
          },
          miles: {
            estimated_diameter_min: 0.0052228308,
            estimated_diameter_max: 0.0116786047,
          },
          feet: {
            estimated_diameter_min: 27.5765560686,
            estimated_diameter_max: 61.6630539546,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2015-09-07",
            close_approach_date_full: "2015-Sep-07 16:37",
            epoch_date_close_approach: 1441643820000,
            relative_velocity: {
              kilometers_per_second: "13.2123670367",
              kilometers_per_hour: "47564.5213322291",
              miles_per_hour: "29554.743824462",
            },
            miss_distance: {
              astronomical: "0.2269940616",
              lunar: "88.3006899624",
              kilometers: "33957828.118008792",
              miles: "21100415.9532416496",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: "http://www.neowsapp.com/rest/v1/neo/3759690?api_key=DEMO_KEY",
        },
        id: "3759690",
        neo_reference_id: "3759690",
        name: "(2016 RN41)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3759690",
        absolute_magnitude_h: 31.028,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.0016555983,
            estimated_diameter_max: 0.0037020304,
          },
          meters: {
            estimated_diameter_min: 1.6555983184,
            estimated_diameter_max: 3.7020303833,
          },
          miles: {
            estimated_diameter_min: 0.0010287408,
            estimated_diameter_max: 0.0023003343,
          },
          feet: {
            estimated_diameter_min: 5.4317531869,
            estimated_diameter_max: 12.1457693628,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2015-09-07",
            close_approach_date_full: "2015-Sep-07 19:17",
            epoch_date_close_approach: 1441653420000,
            relative_velocity: {
              kilometers_per_second: "13.4808615405",
              kilometers_per_hour: "48531.1015456618",
              miles_per_hour: "30155.3391798586",
            },
            miss_distance: {
              astronomical: "0.1205142504",
              lunar: "46.8800434056",
              kilometers: "18028675.164486648",
              miles: "11202499.2804178224",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: "http://www.neowsapp.com/rest/v1/neo/3827337?api_key=DEMO_KEY",
        },
        id: "3827337",
        neo_reference_id: "3827337",
        name: "(2018 RZ2)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3827337",
        absolute_magnitude_h: 22.2,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.096506147,
            estimated_diameter_max: 0.2157943048,
          },
          meters: {
            estimated_diameter_min: 96.5061469579,
            estimated_diameter_max: 215.7943048444,
          },
          miles: {
            estimated_diameter_min: 0.059966121,
            estimated_diameter_max: 0.134088323,
          },
          feet: {
            estimated_diameter_min: 316.6212271853,
            estimated_diameter_max: 707.9865871058,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2015-09-07",
            close_approach_date_full: "2015-Sep-07 05:29",
            epoch_date_close_approach: 1441603740000,
            relative_velocity: {
              kilometers_per_second: "18.5110770021",
              kilometers_per_hour: "66639.877207403",
              miles_per_hour: "41407.4281459",
            },
            miss_distance: {
              astronomical: "0.4190239309",
              lunar: "163.0003091201",
              kilometers: "62685087.541667183",
              miles: "38950707.2300978054",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: "http://www.neowsapp.com/rest/v1/neo/3843641?api_key=DEMO_KEY",
        },
        id: "3843641",
        neo_reference_id: "3843641",
        name: "(2019 QK4)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3843641",
        absolute_magnitude_h: 20.7,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.1925550782,
            estimated_diameter_max: 0.4305662442,
          },
          meters: {
            estimated_diameter_min: 192.5550781879,
            estimated_diameter_max: 430.566244241,
          },
          miles: {
            estimated_diameter_min: 0.1196481415,
            estimated_diameter_max: 0.2675413778,
          },
          feet: {
            estimated_diameter_min: 631.7424027221,
            estimated_diameter_max: 1412.6189567557,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2015-09-07",
            close_approach_date_full: "2015-Sep-07 10:04",
            epoch_date_close_approach: 1441620240000,
            relative_velocity: {
              kilometers_per_second: "38.3497078258",
              kilometers_per_hour: "138058.9481727335",
              miles_per_hour: "85784.461435441",
            },
            miss_distance: {
              astronomical: "0.3387067327",
              lunar: "131.7569190203",
              kilometers: "50669805.766579349",
              miles: "31484757.3357550562",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: "http://www.neowsapp.com/rest/v1/neo/3986741?api_key=DEMO_KEY",
        },
        id: "3986741",
        neo_reference_id: "3986741",
        name: "(2020 BY)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3986741",
        absolute_magnitude_h: 24.449,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.0342574456,
            estimated_diameter_max: 0.0766019771,
          },
          meters: {
            estimated_diameter_min: 34.2574455887,
            estimated_diameter_max: 76.6019770718,
          },
          miles: {
            estimated_diameter_min: 0.0212865832,
            estimated_diameter_max: 0.0475982471,
          },
          feet: {
            estimated_diameter_min: 112.3931977852,
            estimated_diameter_max: 251.3188304562,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2015-09-07",
            close_approach_date_full: "2015-Sep-07 05:39",
            epoch_date_close_approach: 1441604340000,
            relative_velocity: {
              kilometers_per_second: "27.1899295698",
              kilometers_per_hour: "97883.7464513592",
              miles_per_hour: "60821.1534547348",
            },
            miss_distance: {
              astronomical: "0.4067667856",
              lunar: "158.2322795984",
              kilometers: "60851444.712506672",
              miles: "37811334.4094771936",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: "http://www.neowsapp.com/rest/v1/neo/54088823?api_key=DEMO_KEY",
        },
        id: "54088823",
        neo_reference_id: "54088823",
        name: "(2020 WZ)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54088823",
        absolute_magnitude_h: 26.827,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.0114592179,
            estimated_diameter_max: 0.0256235901,
          },
          meters: {
            estimated_diameter_min: 11.4592178704,
            estimated_diameter_max: 25.6235901273,
          },
          miles: {
            estimated_diameter_min: 0.0071204257,
            estimated_diameter_max: 0.0159217558,
          },
          feet: {
            estimated_diameter_min: 37.5958603581,
            estimated_diameter_max: 84.0668994332,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2015-09-07",
            close_approach_date_full: "2015-Sep-07 19:56",
            epoch_date_close_approach: 1441655760000,
            relative_velocity: {
              kilometers_per_second: "20.077734961",
              kilometers_per_hour: "72279.8458594394",
              miles_per_hour: "44911.8853341611",
            },
            miss_distance: {
              astronomical: "0.4622033374",
              lunar: "179.7970982486",
              kilometers: "69144634.781931338",
              miles: "42964483.7639069444",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
    ],
  },
};
