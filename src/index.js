module.exports = function reverse (n) {

	let str = String(n);
    let result ='';

   
    str = String(Math.abs(n));
    

    for (let i = str.length; i > 0; i--) {
    	result += str[i - 1];
    }
      
      return Number(result);

}



