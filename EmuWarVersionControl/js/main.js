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

    const body = bodies_factory.rectangle(
      x, y, Eface, Eface.width, Eface.height, { chamfer: {radius: 20}}
    )
    Eface.setExistingBody(body);
  }

  var theTorso = this.matter.add.sprite(200,200, 'torso');
  const theTorsoConst = bodies_factory.rectangle(
    500, 920, theTorso.width, theTorso.height, { chamfer:{radius: 110}}
  )
  theTorso.setExistingBody(theTorsoConst);
  this.matter.add.mouseSpring()
  /*to later be used to connec the components of the Body
  https://code.tutsplus.com/tutorials/getting-started-with-matterjs-composite-and-composites-module--cms-28836
  */

  var head = this.matter.add.sprite(150, 100, 'emuFace');
  const theHead = bodies_factory.rectangle(
    500, 799, head.width, head.height, {chamfer:{radius:110}})
  //assigns a variable to an image so that the preloaded image can be seen.

  head.setExistingBody(theHead);
  this.matter.add.mouseSpring()
  //tells it to have the native shape of a circle

  /* https://github.com/nua-bsc/Composite-Bodies/blob/master/main.js
  */
                      // x,  y,  radius
  var rightHand =  this.matter.add.sprite(100,100, 'hands');
  const rightHandBody = bodies_factory.rectangle(
  736, 920,  rightHand.width, rightHand.height, { chamfer: {radius: 50}}
  )
  rightHand.setExistingBody(rightHandBody);
  this.matter.add.mouseSpring()


  var leftHand = this.matter.add.sprite(150,150, 'hands', {chamfer: 100});
  const leftHandBody = bodies_factory.rectangle(264,920, leftHand.width, leftHand.height, {chamfer: {radius: 50}}
  )
  leftHand.setExistingBody(leftHandBody);
  this.matter.add.mouseSpring();


  var leftFoot = this.matter.add.sprite(160,160, 'feet', {chamfer: {radius: 50}});
  const leftFootBody = bodies_factory.rectangle(430,1137,leftFoot.width, leftFoot.height, {chamfer: {radius:50}
  })
  leftFoot.setExistingBody(leftFootBody);
  this.matter.add.mouseSpring();


  var rightFoot = this.matter.add.sprite(110,110, 'feet', {chamfer: {radius: 50}})
  const rightFootBody = bodies_factory.rectangle(570,1137, rightFoot.width, rightFoot.height, {chamfer: {radius:50}
  })
  rightFoot.setExistingBody(rightFootBody);
  this.matter.add.mouseSpring();
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
