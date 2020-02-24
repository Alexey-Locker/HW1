function Alist(array) {
    this.defaultArr = array;
    this.arr = []
    this.init(array)

}
Alist.prototype.Size = function () {
    let size = 0;
    for (let s of this.defaultArr) { size++; }
    return size;
}
Alist.prototype.init = function () {
 for(let i = 0; i < this.Size(); i++){
     this.arr[i] = this.defaultArr[i]
 }
 return this.arr;
}
