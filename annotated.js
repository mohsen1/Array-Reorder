var myArray = ['one', 'two', 'three','four', 'five'];

Array.prototype.reorder = function (a){
  var o = [], _ = this, i = 0;
  _.forEach(function(){
    o.push(_[a[i]] ? _[a[i]] : _[i]);
	i++;
  });
  return o;
};
console.log( myArray.reorder([1, 0, 2, 2, 4, 5]) );
