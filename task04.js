var nestedObject = {
  speakers: [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 38000000
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
};

function task04(nestedObject,countryName,capital,population){
var newObj={};
newObj.capital=capital;
newObj.population=population;
var countryObj=nestedObject.data.continents.europe.countries;
countryObj[countryName]=newObj;
var keys=Object.keys(countryObj);
var keyname=keys[key.length-1];
return keyname;
}
module.exports=task04;
