const fetch = require('node-fetch')
const baseurl = 'https://api.spacedc.tk/';
const mongoose = require("mongoose")

async function request(endpoint, input='') {
 const res = `${baseurl}${endpoint}?${input}`
 return res;
}
   
module.exports.meme = async function() {
  const res = await fetch("https://api.spacedc.tk/meme")
  const json = await res.text()
  const obj = JSON.parse(json);
  return obj;
}

module.exports.job = async function() {
  const res = await fetch("https://api.spacedc.tk/job")
  const json = await res.json()
  return json.job;
}
module.exports.screenshot = async function(url) {
	if(!url) throw new Error("[Popcat Wrapper] screenshot(url) ==> 'url' parameter is missing.")
	const {isurl} = await fetch(`https://api.popcat.xyz/isurl?url=${encodeURIComponent(url)}`).then(r => r.json())
	if(isurl === false) throw new Error("[SpaceAPI Wrapper] screenshot(url) ==> 'url' is not valid!")
	const img = `https://api.spacedc.tk/screenshot?url=${url}`
	return img;
}
