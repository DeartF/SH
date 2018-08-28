app.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$http' , '$scope'];

function MainCtrl($http, $scope) {
	var vm = this;

	$http.get('/api/post')
		.success(function(response) {
			vm.footwears = response
		})
		.error(function(err) {
			console.log(err)
		})

		vm.saveFootwear = function() {
			var data = {
				price: vm.price,
				gender: vm.gender,
				model: vm.model
			}

			$http.post('/api/post' , data)
				.success(function(response) {
					vm.footwears.push(response)
				})
				.error(function(err) {
					console.log(err)
				})
		}

		vm.deleteFootwear = function(footwear) {
			$http.delete('/api/post' + post._id)
				.success(function(response) {
					var index = vm.footwears.findIndex(function(item) {
						return item._id === post._id
					})

					vm.footwears.splice(index, 1)
				})
				.error(function(err) {
					console.log(err)
				})
		}
}
