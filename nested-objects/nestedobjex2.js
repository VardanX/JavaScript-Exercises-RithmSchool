let nestedObject = {
    speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
    data: {
      continents: {
        europe: {
          countries: {
            switzerland: {
              capital: "Bern",
              population: 8000000
            }
          }
        }
      },
      languages: {
        spanish: {
            hello: "Hola"
        },
        french: {
            hello: "Bonjour"
        }
      }
    }
  }
  

  function addSpeaker(speakerName) {
    nestedObject.speakers.push({name:speakerName});
    return nestedObject.speakers;
  }

  console.log(addSpeaker("vardan"));

  function addLanguage(language, helloInLanguage) {
    nestedObject.data["languages"][language] = {"hello":helloInLanguage};
    return nestedObject.data.languages;
  }

  console.log(addLanguage("Nepali","Namaste"));

  function addCountry(country, city, population) {
    nestedObject.data.continents.europe.countries[country] = {
        "capital":city,
        "population":population
    }
    return nestedObject.data.continents.europe;
  }

  console.log(addCountry("Germany", "Berlin", 82000000));