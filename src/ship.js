
function Ship(name) {
 this.name = name; 
 this.startingPort = 'Vermillion City';
};

Ship.prototype.setSail = function() {
    this.startingPort = false;
}
module.exports = Ship;
