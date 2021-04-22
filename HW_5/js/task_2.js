'use strict';
 
// Partition                 Product
// [8]                          8
// [7, 1]                       7
// [6, 2]                      12
// [6, 1, 1]                    6
// [5, 3]                      15
// [5, 2, 1]                   10
// [5, 1, 1, 1]                 5
// [4, 4]                      16
// [4, 3, 1]                   12
// [4, 2, 2]                   16
// [4, 2, 1, 1]                 8
// [4, 1, 1, 1, 1]              4
// [3, 3, 2]                   18 <---partition with maximum product value
// [3, 3, 1, 1]                 9
// [3, 2, 2, 1]                12
// [3, 2, 1, 1, 1]              6
// [3, 1, 1, 1, 1, 1]           3
// [2, 2, 2, 2]                16
// [2, 2, 2, 1, 1]              8
// [2, 2, 1, 1, 1, 1]           4
// [2, 1, 1, 1, 1, 1, 1]        2
// [1, 1, 1, 1, 1, 1, 1, 1]     1


// findPartMaxProd(10) --> [[4, 3, 3], [3, 3, 2, 2], 36]
// Enjoy it!
// Tests:
//  describe("Example Tests", function(){
//    it("Small Integers", function(){
//     Test.assertSimilar(findPartMaxProd(8), [[3, 3, 2], 18]);
//     Test.assertSimilar(findPartMaxProd(10), [[4, 3, 3], [3, 3, 2, 2], 36]);
//    });
//  });

function findPartMaxProd(n) {
	const result = [];
	let num = n - 1;
		
	function partition(num) {
		let i;

		if (num > 0) {

			for (i = num; i > 0; i--) {
				result.push(i);
				console.log('step: ' + i);
				console.log('result: ' + result);
				partition(num - 1);
			}
		}

		console.log(result);
		return result;
	}

	partition(num);
}

findPartMaxProd(3);
