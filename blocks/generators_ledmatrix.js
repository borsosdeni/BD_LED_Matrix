

const ORDER_ATOMIC = Blockly.JavaScript.ORDER_ATOMIC;
const valueToCode = (a, b) => Blockly.JavaScript.valueToCode(a, b);

Blockly.JavaScript["LedMatrix_8x8_blocks_begin"] = function (block) {
  let [value_pin, value_num] = [
    valueToCode(block, "PIN", ORDER_ATOMIC),
    valueToCode(block, "NUM", ORDER_ATOMIC)
  ];

  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);

  var code =
    `
#EXTINC#include "SPI.h" #END
#EXTINC#include "LedMatrix.h" #END
#VARIABLE#define CS_PIN            ${value_pin} #END
#VARIABLE#define NUMBER_OF_DEVICES      ${value_num} #END

#VARIABLELedMatrix ${variable_instance} = LedMatrix(NUMBER_OF_DEVICES, CS_PIN); #END

${variable_instance}.init();
`;
  return code;
};

Blockly.JavaScript["LedMatrix_8x8_clear"] = function (block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code =
    `
${variable_instance}.clear();
`;
  return code;
};

//LedMatrix_8x8_scrollTextLeft
Blockly.JavaScript["LedMatrix_8x8_scrollTextLeft"] = function (block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code =
    `
${variable_instance}.scrollTextLeft();
`;
  return code;
};

//LedMatrix_8x8_scrollTextRight
Blockly.JavaScript["LedMatrix_8x8_scrollTextRight"] = function (block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code =
    `
${variable_instance}.scrollTextRight();
`;
  return code;
};

//LedMatrix_8x8_oscillateText
Blockly.JavaScript["LedMatrix_8x8_oscillateText"] = function (block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code =
    `
${variable_instance}.oscillateText();
`;
  return code;
};

//LedMatrix_8x8_drawText
Blockly.JavaScript["LedMatrix_8x8_drawText"] = function (block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code =
    `
${variable_instance}.drawText();
`;
  return code;
};

//LedMatrix_8x8_commit
Blockly.JavaScript["LedMatrix_8x8_commit"] = function (block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code =
    `
${variable_instance}.commit();
`;
  return code;
};



Blockly.JavaScript["LedMatrix_8x8_set_intemsiti"] = function (block) {
  var value_bright = valueToCode(block, "BRIGHT", ORDER_ATOMIC);
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code =
    `
${variable_instance}.setIntensity(${value_bright});
`;
  return code;
};


Blockly.JavaScript['LedMatrix_8x8_set_text'] = function (block) {
  
 
  var arrl = valueToCode(block, "arrl", ORDER_ATOMIC);
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);

 var code =
    `
${variable_instance}.setText(${arrl});
`;
  return code;
};

//LedMatrix_8x8_setNextText
Blockly.JavaScript['LedMatrix_8x8_setNextText'] = function (block) {
  
 var arrl = valueToCode(block, "arrl", ORDER_ATOMIC);
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);

 var code =
    `
${variable_instance}.setNextText(${arrl});
`;
  return code;
};

//LedMatrix_8x8_setPixel
Blockly.JavaScript["LedMatrix_8x8_setPixel"] = function (block) {
  let [value_pin, value_num] = [
    valueToCode(block, "PIN", ORDER_ATOMIC),
    valueToCode(block, "NUM", ORDER_ATOMIC)
  ];

  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);

  var code =
    `
${variable_instance}.setPixel( ${value_pin}, ${value_num});
`;
  return code;
};

Blockly.JavaScript['LedMatrix_8x8_textAlignment'] = function (block) {
  
 var  dropdown_name = block.getFieldValue("OPERATOR");
var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
 
  var code =
    `
${variable_instance}.setTextAlignment( ${dropdown_name});
`;
  return code;
};

//LedMatrix_8x8_sendByteAll
Blockly.JavaScript["LedMatrix_8x8_sendByteAll"] = function (block) {
  let [value_pin, value_num] = [
    valueToCode(block, "PIN", ORDER_ATOMIC),
    valueToCode(block, "NUM", ORDER_ATOMIC)
  ];

  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);

  var code =
    `
${variable_instance}.sendByte( ${value_pin}, ${value_num});
`;
  return code;
};

//LedMatrix_8x8_sendByte
Blockly.JavaScript["LedMatrix_8x8_sendByte"] = function (block) {
  let [value_dev, value_pin, value_num] = [
    valueToCode(block, "DEV", ORDER_ATOMIC),
    valueToCode(block, "PIN", ORDER_ATOMIC),
    valueToCode(block, "NUM", ORDER_ATOMIC)
  ];

  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);

  var code =
    `
${variable_instance}.sendByte( ${value_dev}, ${value_pin}, ${value_num});
`;
  return code;
};

//LedMatrix_8x8_setColumn
Blockly.JavaScript["LedMatrix_8x8_setColumn"] = function (block) {
  let [value_pin, value_num] = [
    valueToCode(block, "PIN", ORDER_ATOMIC),
    valueToCode(block, "NUM", ORDER_ATOMIC)
  ];

  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);

  var code =
    `
${variable_instance}.setColumn( ${value_pin}, ${value_num});
`;
  return code;
};
