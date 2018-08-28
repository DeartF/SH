app.controller('MenShoesCtrl' , MenShoesCtrl);

MenShoesCtrl.$inject = ['$http' , '$scope'];

function MenShoesCtrl($http , $scopre) {
	var vm = this

	vm.mens = [
		{
			price: '$90.00',
			gender: 'men',
			model: 'Adidas Alphabounce 1M'
		},
		{
			price: '$30.00',
			gender: 'women',
			model: 'Nike 270'
		}
	]
}

