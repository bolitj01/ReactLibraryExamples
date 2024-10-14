import { v4 } from 'uuid';

//Participant class
class Participant {
  constructor(name) {
    this.id = v4();
    this.name = name;
    this.room = null;
  }
  toString() {
    return this.name;
  }
}

export default Participant;