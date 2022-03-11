// TODO: Write your class in this file
class SoftPlay {
  constructor() {
    this.adults = 0;
    this.children = 0;
  }
  occupancy() {
    return {
      adults: this.adults,
      children: this.children
    }
  }
  enter(numParents, numKids) {
    if (nums >= numChildren){
      this.adults += numParents;
      this.children += numKids
    return true
  } 
  else{
      return false
    }
  }
  leave(numParents, numKids) {
    if (numAdults !== 0){
      if(this.adults - numParents < this.children - numKids) {
        return false
      }
      else if(this.adults < numParents || this.children < numKids) {
        return false
      }
      this.adults -= numParents;
      this.children -= numKids;
      return true
    } 
    else{
      return false
    }
  }
}
// TODO: Change undefined to the name of your class
module.exports = {
  SoftPlay: SoftPlay
}
