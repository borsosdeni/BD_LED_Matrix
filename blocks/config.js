module.exports = [
    {
        name: "BD_LedMatrix v1.0.2",
        blocks: [
            {
                xml:
                    `<block type="LedMatrix_8x8_blocks_begin">
                        <value name="PIN">
                            <shadow type="math_number">
                                <field name="NUM">15</field>
                            </shadow>
                        </value>
                        <value name="NUM">
                            <shadow type="math_number">
                                <field name="NUM">4</field>
                            </shadow>
                        </value>
                    </block>`
            },
            'LedMatrix_8x8_clear',
			'LedMatrix_8x8_scrollTextLeft',
			'LedMatrix_8x8_scrollTextRight',
			'LedMatrix_8x8_oscillateText',
			'LedMatrix_8x8_drawText',
			'LedMatrix_8x8_commit',
            {
                xml:
                    `<block type="LedMatrix_8x8_set_intemsiti">
                        <value name="BRIGHT">
                            <shadow type="math_number">
                                <field name="NUM">7</field>
                            </shadow>
                        </value>
                    </block>`
            },
			'LedMatrix_8x8_set_text',
			'LedMatrix_8x8_setNextText',
			{
                xml:
                    `<block type="LedMatrix_8x8_setPixel">
                        <value name="PIN">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="NUM">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
            },
			'LedMatrix_8x8_textAlignment',
			{
                xml:
                    `<block type="LedMatrix_8x8_sendByteAll">
                        <value name="PIN">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="NUM">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
            },
			{
                xml:
                    `<block type="LedMatrix_8x8_sendByte">
                        <value name="DEV">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
						<value name="PIN">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="NUM">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
            },

			{
                xml:
                    `<block type="LedMatrix_8x8_setColumn">
                        <value name="PIN">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="NUM">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
            }

        ]
    }
];