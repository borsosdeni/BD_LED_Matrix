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
      .appendField("LED Matrix Clear");
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
      .appendField("LED Matrix Scroll the Text Left");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["LedMatrix_8x8_scrollTextRight"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("LedMatrix_8x8", null, ["Plugin.LedMatrix_8x8"], ["Plugin.LedMatrix_8x8"]), "instance")
      .appendField("LED Matrix Scroll the Text Right");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//oscillateText

Blockly.Blocks["LedMatrix_8x8_oscillateText"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("LedMatrix_8x8", null, ["Plugin.LedMatrix_8x8"], ["Plugin.LedMatrix_8x8"]), "instance")
      .appendField("LED Matrix Oscillate Text");
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
      .appendField("LED Matrix Draw Text");
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
      .appendField("LED Matrix Commit");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};




Blockly.Blocks["LedMatrix_8x8_set_intemsiti"] = {
  init: function () {
    this.appendValueInput("BRIGHT")
      .appendField(new Blockly.FieldVariable("LedMatrix_8x8", null, ["Plugin.LedMatrix_8x8"], ["Plugin.LedMatrix_8x8"]), "instance")
      .setCheck("Number")
      .appendField("LED Matrix Set Intensity (0-15)");
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
   this.appendValueInput("arrl")
	  .appendField(new Blockly.FieldVariable("LedMatrix_8x8", null, ["Plugin.LedMatrix_8x8"], ["Plugin.LedMatrix_8x8"]), "instance")
      .appendField("LED Matrix Text: ")
    // .appendField(new Blockly.FieldTextInput(""), "arr1")
   this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['LedMatrix_8x8_setNextText'] = {
  init: function () {
   this.appendValueInput("arrl")
	  .appendField(new Blockly.FieldVariable("LedMatrix_8x8", null, ["Plugin.LedMatrix_8x8"], ["Plugin.LedMatrix_8x8"]), "instance")
      .appendField("LED Matrix set next Text: ")
     // .appendField(new Blockly.FieldTextInput(""), "arr1")
	 // .appendField('"')
   this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//setPixel
Blockly.Blocks["LedMatrix_8x8_setPixel"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("LedMatrix_8x8", null, ["Plugin.LedMatrix_8x8"], ["Plugin.LedMatrix_8x8"]), "instance")
      .appendField("LED Matrix set Pixel");
    this.appendValueInput("PIN")
      .setCheck("Number")
      .appendField("x");
    this.appendValueInput("NUM")
      .setCheck("Number")
      .appendField("y");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['LedMatrix_8x8_textAlignment'] = {
  init: function () {
   
   
	  
	this.appendDummyInput()
	  .appendField(new Blockly.FieldVariable("LedMatrix_8x8", null, ["Plugin.LedMatrix_8x8"], ["Plugin.LedMatrix_8x8"]), "instance")
      .appendField("LED Matrix Select Text Alignment")
      .appendField(new Blockly.FieldDropdown([
        ["TEXT_ALIGN_LEFT", "TEXT_ALIGN_LEFT"],
        ["TEXT_ALIGN_LEFT_END", "TEXT_ALIGN_LEFT_END"],
        ["TEXT_ALIGN_RIGHT", "TEXT_ALIGN_RIGHT"],
        ["TEXT_ALIGN_RIGHT_END", "TEXT_ALIGN_RIGHT_END"]
       
      ]), "OPERATOR");
	  
	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["LedMatrix_8x8_sendByteAll"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("LedMatrix_8x8", null, ["Plugin.LedMatrix_8x8"], ["Plugin.LedMatrix_8x8"]), "instance")
      .appendField("LED Matrix Send a byte to all devices");
    this.appendValueInput("PIN")
      .setCheck("Number")
      .appendField("Register");
    this.appendValueInput("NUM")
      .setCheck("Number")
      .appendField("Data");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["LedMatrix_8x8_sendByte"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("LedMatrix_8x8", null, ["Plugin.LedMatrix_8x8"], ["Plugin.LedMatrix_8x8"]), "instance")
      .appendField("LED Matrix Send a byte to a specific device");
	this.appendValueInput("DEV")
      .setCheck("Number")
      .appendField("Device");
    this.appendValueInput("PIN")
      .setCheck("Number")
      .appendField("Register");
    this.appendValueInput("NUM")
      .setCheck("Number")
      .appendField("Data");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["LedMatrix_8x8_setColumn"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("LedMatrix_8x8", null, ["Plugin.LedMatrix_8x8"], ["Plugin.LedMatrix_8x8"]), "instance")
      .appendField("Set a specific column");
    this.appendValueInput("PIN")
      .setCheck("Number")
      .appendField("Register");
    this.appendValueInput("NUM")
      .setCheck("Number")
      .appendField("Data");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

    
     
   