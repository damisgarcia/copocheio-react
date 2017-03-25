export default API = {
  baseurl: "http://hermesdelivery.herokuapp.com"
}

API.fetchProducts = async ()=>{
  let request = [API.baseurl, 'visitors.json'].join('/')
  let response = await fetch(request)
  let responseJSON = await response.json()
  return responseJSON.products
}
