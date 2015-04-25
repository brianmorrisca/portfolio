Router.route('/', function() {
	this.layout('layout');
	this.render('home');
});

Router.route('/projects', function() {
	this.layout('layout');
	this.render('projects');
});

Router.route('/contact', function() {
	this.layout('layout');
	this.render('contact');
});