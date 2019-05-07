class SceneAlpha extends Phaser.Scene {
  constructor() {
    super();
  }
  // creates a class that's based on phser's default scene
  preload(){

    this.load.image("emuFace", "assets/emuFace.png");
    this.load.image("hands", "assets/hands.png");
    this.load.image("feet", "assets/feet.png");
    this.load.image("torso", "assets/torso.png");
    this.load.image("bg", "assets/background.png");
    //loads up the images ready for use
  }
  create(){
  //  this.add.image(2048, 1536,'bg').setOrigin(0,0);
    this.matter.world.setBounds();
    // restricts the shapes later created from leaving the bounds of the canvas.
    var Engine = Phaser.Physics.Matter.Matter.Engine;
    var World = this.matter.world

	//oh look, a shortcut!!!!!!!! DAYUM! - Aaron 27/03/2019
	var bodies_factory = Phaser.Physics.Matter.Matter.Bodies;
  var singular_factory =Phaser.Physics.Matter.Matter.Body;
  var Constraint = Phaser.Physics.Matter.Matter.Constraint;

  /*  |---------------------------Break---------------------------------------|*/
  let Eface;
  for (let i = 0; i < 20; i++){
    const x = Phaser.Math.Between(0, config.width);
    const y = Phaser.Math.Between(0, config.height);
    Eface = this.matter.add.sprite(0, 0, "emuFace");
}

var config = {
  //Settings for the game
  type: Phaser.AUTO,
  width: 1000,
  height: 1840,
  backgroundColor: '#330000',
  parent: 'classes',
  physics: {
    default: 'matter',
    matter: {
      gravity: {
        y: 0.9
      },

    //debug:false
    debug:true
    }
  },
/*  scene: {
    preload: preload,
    create: create
  },*/
  scene:[SceneAlpha]
};
var main = new Phaser.Game(config);
