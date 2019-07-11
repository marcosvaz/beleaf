module.exports = function(application){
	application.get('/', function(req, res){
		console.log('route:index'); // has loaded this page
		application.app.controllers.index.index(application, req, res);
	});
}
