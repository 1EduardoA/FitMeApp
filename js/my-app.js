// Initialize your app
var app = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	panel:{
		swipe:true
	},
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Fitme',
	dialog: {
		title: 'Fitme',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/productos/',
    	url: 'productos.html',
    	name: 'productos',
  		},
		{
		path: '/info/',
    	url: 'info.html',
    	name: 'info',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;


$$('#btnLogin').on('click', function () {
	var Email = $$('#email').val();
	var Password = $$('#password').val();
	
  	if(Email == "jframos" && Password == "123"){
		app.dialog.alert('¡ Welcome to FitMe !');
		app.loginScreen.close(".modal-login");
		
	}else{
		app.dialog.alert('Lo sentimos, sus datos son incorrectos');
	}
	
	
});





 

