
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
    title: 'Express App',
    first_title: 'First Title Brah',
    second_title: 'Second Title broham'
  });

};
