class Ship {
  constructor(length) {
    this.length = length;
    this.hitted = [];
    this.sunk = false;
    this.position = [];
  }

  hit(x, y) {
    if(this.hitted.length >= this.length) return;
    this.hitted.push([x, y]);
  }

  isSunk() {
    if (this.hitted >= this.length) return true;
    return false;
  }
}

export { Ship };