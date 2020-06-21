

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
  
  var arr1 = block.getFieldValue('arr1');
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);

 var code =
    `
${variable_instance}.setText("${arr1}");
`;
  return code;
};

