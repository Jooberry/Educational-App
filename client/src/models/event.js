/*
 * {
 * 	"code": "55537b7f1d6a5131db0d794aa6a13174be9fc7d4-733900",
 * 	"description": "Born into a family of street musicians, Ingrid Lucia sang in her family band, the Flying Neutrinos, from the age of eight, so she has music coursing deep in her soul. This sassy New Orleans native has a voice that's prompted thousands of comparisons to Billie Holiday as she sings in a manner which is irrepressibly sultry, with the sway of a humid afternoon. Despite her stylistic similarities to Lady Day, Lucia's delivery is upbeat, fun and just a bit naughty, in the true Big Easy tradition. She's Tony Bennet's favourite opening act- why not come along and find out why.",
 * 	"latitude": -3.205519,
 * 	"longitude": 55.951242,
 * 	"website": "http://www.edinburghjazzfestival.com/programme/artists/artist-information.html?artist_id=Ingrid+Lucia+Sings+Billie+Holiday+",
 "title": "Ingrid Lucia Sings Billie Holiday ",
 * }
 */

var Event = function(options) {
  this.code = options.code;
  this.title = options.title;
  this.description = options.description;
  this.latitude = options.latitude;
  this.longitude = options.longitude;
  this.website = options.longitude;
}

Event.prototype = {};

module.exports = Event;
