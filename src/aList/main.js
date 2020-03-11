function AList(array) {
  this.defaultArray = array
  this.arr = [];
  this.init();
}
AList.prototype.size = function () {
  let size = 0;
  for (let s of this.defaultArray) {
    size++;
  }
  return size;
}
AList.prototype.init = function () {
  let i = 0;
  for (let s of this.defaultArray) {
    this.arr[i] = s;
    i++
  }
  return this.arr;
}
AList.prototype.addStart = function (number) {
  let arrs = [];
  arrs[0] = number
  for (let i = 0; i < this.size(); i++) {
    arrs[i + 1] = this.arr[i];
  }
  return this.arr = arrs;
}
AList.prototype.addEnd = function (number) {
  this.arr[this.size()] = number;
  return this.arr
}
AList.prototype.delStart = function () {
  let delElement = [];
  for (let i = 1; i < this.size(); i++) {
    delElement[i] = this.arr[i];
  }
  this.arr = delElement;
  return this.arr;
}
AList.prototype.delEnd = function () {
  let delElement = [];
  let num = this.arr[this.size() - 1]
  for (let i = 0; i < this.size() - 1; i++) {
    delElement[i] = this.arr[i]
  }
  this.arr = delElement;
  return num;
}

AList.prototype.max = function () {
  let max = this.arr[0];
  for (let i = 0; i < this.size(); i++) {
    if (max < this.arr[i]) {
      max = this.arr[i];
    }
  }
  return max;
}
AList.prototype.toString = function () {
  let string = "";
  for (let i = 0; i < this.size(); i++) {
    string += this.arr[i];
  }
  return string;
}
AList.prototype.reverse = function () {
  let reverse = [];
  for (let i = 0; i < this.size(); i++) {
    reverse[i] = this.arr[this.size() - 1 - i];
  }
  return reverse;
}
AList.prototype.halfRevers = function () {
  for (let i = 0; i < ((this.size() - 1) / 2); i++) {
    let num = this.delEnd();
    this.addStart(num)
    this.arr.length = this.size()
  }
  return this.arr
}
AList.prototype.maxIndex = function () {
  let max = this.arr[0];
  let Index = 0;
  for (let i = 0; i < this.size(); i++) {
    if (max < this.arr[i]) {
      max = this.arr[i];
      Index = i;
    }
  }
  return Index;
}
AList.prototype.minIndex = function () {
  let min = this.arr[0];
  let Index = 0;
  for (let i = 0; i < this.size(); i++) {
    if (min > this.arr[i]) {
      min = this.arr[i];
      Index = i;
    }
  }
  return Index;
}
AList.prototype.min = function () {
  let min = this.arr[0];
  for (let i = 0; i < this.size(); i++) {
    if (min > this.arr[i]) {
      min = this.arr[i];
    }
  }
  return min;
}
AList.prototype.delPos = function (pos) {
  let arrs = [];
 if(pos < this.size()){
    for(let i = 0; i < this.size(); i++){
      if(pos != i){
        if (i < pos){arrs[i] = this.arr[i];
        }else{
          arrs[i-1] = this.arr[i];
        }
    }
  }
 }else {return "error"}
 this.arr = arrs;
 return this.arr;
}

let array = new AList([1,2,3,4,5,6,7,8,9,10]);



