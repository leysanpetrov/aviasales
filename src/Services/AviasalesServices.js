
class AviasalesServices {

  getResource = async (url) => {
    const res = await fetch(url);
    console.log(res.json())
    return res.json();

  }

}

const aviasales = new AviasalesServices()
aviasales.getResource("//front-test.beta.aviasales.ru/search")
  .then((body)=> {
    console.log(body)
  })