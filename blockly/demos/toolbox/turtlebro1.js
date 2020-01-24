Blockly.Blocks['turtlebro_forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move ")
        .appendField(new Blockly.FieldDropdown([["Forward", "forward"], ["Backwards", "backwards"], ["Left", "left"], ["Right", "right"]]), "direction")
        .appendField(new Blockly.FieldTextInput("1"), "WALK_SECS")
        .appendField("seconds");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.turtlebro.ru');
  }
};

Blockly.Blocks['turtlebro_turn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn ")
        .appendField(new Blockly.FieldDropdown([["Left", "left"], ["Right", "right"]]), "direction")
        .appendField(new Blockly.FieldTextInput("1"), "TURN_SECS")
        .appendField("seconds");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.turtlebro.ru');
  }
};

Blockly.Blocks['turtlebro_turn_degrees'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn ")
        .appendField(new Blockly.FieldDropdown([["Left", "left"], ["Right", "right"]]), "direction")
    this.appendValueInput("TURN_DEGREES")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("degrees");   
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.turtlebro.ru');
  }
};

Blockly.Blocks['turtlebro_move_meters'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move ")
        .appendField(new Blockly.FieldDropdown([["Forward", "forward"], ["Backwards", "backwards"], ["Left", "left"], ["Right", "right"]]), "direction")
    this.appendValueInput("METERS")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("meters");   
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.turtlebro.ru');
  }
};