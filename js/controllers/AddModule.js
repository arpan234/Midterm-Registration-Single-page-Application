myApp.controller('AddModule', function($scope) {
    let counter = 2
    let modulearray = []
    let signuparray = []
    

    $scope.addNew = function() {
      
        let str = []


        for(let key in modulearray){


                  if(!str.includes($scope.modulename)){

                        // console.log($scope.modulename)

                    // counter = 2
                  }
                  if(modulearray[key].modulename === $scope.modulename){


                    // console.log(counter)
                    modulearray[key].modulename = modulearray[key].modulename + '-Group ' + counter
                    counter++
                  }
              }
 
         modulearray.push({
             'modulename': $scope.modulename,
             'modulelink': $scope.modulelink
         })
        str.push($scope.modulename)


        $scope.modulearray = modulearray
 
             
         //$scope.module = module
      


        // for (let i = 0; i < $scope.modulearray.length; i++) {

        //     if ($scope.modulearray[i].modulename.includes(" ")) {
        //           let yo =  $scope.modulearray[i].modulename.split(' ',1)
        //         yo[0] = $scope.modulearray[i].modulename

        //     } else {
        //         $scope.modulearray[i].modulename = $scope.modulearray[i].modulename
        //     }
        // }

    //      $scope.modulearray.push({
    //             'modulename': $scope.modulename,
    //             'modulelink': $scope.modulelink
    //     })

    // if (modulearray.length >= 1){
    //     for(let i = 0; i <= $scope.modulearray.length; i++) {
        	
    //          if ($scope.modulearray[i].modulename === $scope.modulename	) {

    //          	if($scope.modulearray.length > 1)
    //          	 {
    //          	$scope.modulearray[i].modulename = $scope.modulearray[i].modulename + " -" + "GROUP" + counter
    //             counter++
    //          	 }
    //          	else
    //          	{
    //          	 $scope.modulearray[i].modulename = $scope.modulearray[i].modulename
    //          	}
    //         } 
    //         else
    //     	{
              
    //            // $scope.modulearray[i].modulename = $scope.modulearray[i].modulename
    //     		//$scope.modulearray.push('modulename':$scope.modulename, 'modulelink':$scope.modulelink )
    //     	}
    //     }
    // }
    // else {
    //         $scope.modulearray.push('modulename':$scope.modulename, 'modulelink':$scope.modulelink )        
    // }
    }

    $scope.signUp = function() {

        signuparray.push({
            'firstname': $scope.firstname,
            'lastname': $scope.lastname,
            'email': $scope.email,
            'dropdown': $scope.dropdown
        })
        	$scope.signuparray = signuparray
        	

    }

    $scope.removeModule = function(modulename) {
        let id = -1;
        let arr = eval($scope.modulearray)
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].modulename === modulename) {
                id = i
                break
            }
        }
        if (id === -1) {
            alert("Error")
        }
        $scope.modulearray.splice(id, 1)
    }


    $scope.removeStudent = function(firstname) {
        let id = -1;
        let collection = eval($scope.signuparray)
        for (let i = 0; i < collection.length; i++) {
            if (collection[i].firstname === firstname) {
                id = i
                break
            }
        }
        if (id === -1) {
            alert("Error")
        }
        $scope.signuparray.splice(id, 1)
    }




    $scope.formControlForModule = function() {

        const alpha = document.getElementById('moduleId')
        if (alpha.style.display === 'none') {
            alpha.style.display = 'block'
        } else {
            alpha.style.display = 'none'
        }


    }

    $scope.formControlForSignUp = function() {
        const gamma = document.getElementById('signupId')

        if (gamma.style.display === 'none') {

            gamma.style.display = 'block'
        } else {
            gamma.style.display = 'none'
        }

    }

})