/*
 * Services
 */

var rhyme_service = new Appery.RestService({
    'url': 'http://rhymebrain.com/talk?function=getRhymes&word',
    'dataType': 'json',
    'type': 'get',
});