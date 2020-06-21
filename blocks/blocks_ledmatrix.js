Blockly.Blocks["LedMatrix_8x8_blocks_begin"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("LedMatrix_8x8", null, ["Plugin.LedMatrix_8x8"], ["Plugin.LedMatrix_8x8"]), "instance")
      .appendField("LED Matrix");
    this.appendValueInput("PIN")
      .setCheck("Number")
      .appendField("Pin");
    this.appendValueInput("NUM")
      .setCheck("Number")
      .appendField("Number of 8x8 matrix");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["LedMatrix_8x8_clear"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("LedMatrix_8x8", null, ["Plugin.LedMatrix_8x8"], ["Plugin.LedMatrix_8x8"]), "instance")
      .appendField("Clear");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["LedMatrix_8x8_scrollTextLeft"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("LedMatrix_8x8", null, ["Plugin.LedMatrix_8x8"], ["Plugin.LedMatrix_8x8"]), "instance")
      .appendField("Scroll the Text Left");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["LedMatrix_8x8_drawText"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("LedMatrix_8x8", null, ["Plugin.LedMatrix_8x8"], ["Plugin.LedMatrix_8x8"]), "instance")
      .appendField("Draw Text");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["LedMatrix_8x8_commit"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("LedMatrix_8x8", null, ["Plugin.LedMatrix_8x8"], ["Plugin.LedMatrix_8x8"]), "instance")
      .appendField("Commit");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};



/*
ledMatrix.setIntensity(4); // range is 0-15
  ledMatrix.setText("MAX7219 Demo");
  
 
  */



Blockly.Blocks["LedMatrix_8x8_set_intemsiti"] = {
  init: function () {
    this.appendValueInput("BRIGHT")
      .appendField(new Blockly.FieldVariable("LedMatrix_8x8", null, ["Plugin.LedMatrix_8x8"], ["Plugin.LedMatrix_8x8"]), "instance")
      .setCheck("Number")
      .appendField("Set Intensity (0-15)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['LedMatrix_8x8_set_text'] = {
  init: function () {
    this.appendDummyInput()
	  .appendField(new Blockly.FieldVariable("LedMatrix_8x8", null, ["Plugin.LedMatrix_8x8"], ["Plugin.LedMatrix_8x8"]), "instance")
      .appendField("LED Matrix Text: ")
      .appendField(new Blockly.FieldTextInput(""), "arr1")
   this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

