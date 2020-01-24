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

goog.provide('Blockly.Blocks.turtlebro');
goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.turtlebro.HUE = 120;



Blockly.Blocks['turtlebro_forwards'] = {
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