/**
 * @license
 *
 * Copyright 2015 Erle Robotics
 * http://turtlebro.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Blocks for TurtleBro.
 * @author roman@turtlebro.com (Roman Scherbov)
 */
'use strict';


/**
 * Common HSV hue for all blocks in this category.
 */


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

Blockly.Blocks['turtlebro_movetodistance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move ")
    this.appendDummyInput()
        .appendField("Distance ")
        .appendField(new Blockly.FieldTextInput("1"), "movetothisistance")
        .appendField("Speed ")
        .appendField(new Blockly.FieldDropdown([["Fast", "0.6"], ["Normal", "0.4"], ["Slow", "0.2"]]), "moveatthispeed")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
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

Blockly.Blocks['turtlebro_wait'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Wait ")
        .appendField(new Blockly.FieldTextInput("1"), "WAIT_SECS")
        .appendField("seconds");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.turtlebro.ru');
  }
};

Blockly.JavaScript['turtlebro_movetodistance'] = function(block) {
  var dropdown_moveatthisspeed = block.getFieldValue('moveatthisspeed');
  var number_movetothisdistance = block.getFieldValue('movetothisdistance');
  // TODO: Assemble JavaScript into code variable.
  var code = `
  goal_movetodistance.send()
  console.log('goal sent');`
  return code;
};

