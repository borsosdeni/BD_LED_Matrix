module.exports = [
    {
        name: "LedMatrix",
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
			'LedMatrix_8x8_set_text'

        ]
    }
];