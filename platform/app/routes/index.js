module.exports = function(application){
	application.get('/', function(req, res){
		console.log('route:index'); // has loaded this page
		application.app.controllers.index.index(application, req, res);
	});
	application.get('/orderbyname', function (req, res) {
		console.log('route:index:orderbyname'); // has loaded this page
		application.app.controllers.index.orderbyname(application, req, res);
	});
	application.get('/orderbyprice', function (req, res) {
		console.log('route:index:orderbyprice'); // has loaded this page
		application.app.controllers.index.orderbyprice(application, req, res);
	});
}
