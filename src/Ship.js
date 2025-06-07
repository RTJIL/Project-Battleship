class Ship {
  constructor(length) {
    this.length = length;
    this.hitted = 0;
    this.sunk = false;
    this.position = [];
  }

  hit() {
    if(this.hitted >= this.length) return;
    this.hitted++;
  }

  isSunk() {
    if (this.hitted >= this.length) return true;
    return false;
  }
}

export { Ship };
