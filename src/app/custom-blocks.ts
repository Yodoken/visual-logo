import { CustomBlock,BlockMutator } from 'ngx-blockly';
declare var Blockly: any;

export class GoForwardBlock extends CustomBlock {

    constructor(type: string, block: any, blockMutator: BlockMutator, ...args: any[]) {
        super(type, block, blockMutator, ...args);
        this.class = GoForwardBlock;
    }

    defineBlock() {
        this.block.jsonInit({
            "type": "block_type",
            "message0": "前へ %1",
            "args0": [
            {
                "type": "input_value",
                "name": "distance",
                "check": "Number"
            }],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
        });
    }

    toJavaScriptCode(block: any): string | any[] {
        var value_distance = Blockly.JavaScript.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_ATOMIC);
        if (value_distance != "") {
            var code = 'drawing.goForward(' + value_distance + ');';
            return code;
        } else {
            return "";
        }
    }
}


export class GoBackwardBlock extends CustomBlock {

    constructor(type: string, block: any, blockMutator: BlockMutator, ...args: any[]) {
        super(type, block, blockMutator, ...args);
        this.class = GoBackwardBlock;
    }

    defineBlock() {
        this.block.jsonInit({
            "type": "block_type",
            "message0": "後ろへ %1",
            "args0": [
            {
                "type": "input_value",
                "name": "distance",
                "check": "Number"
            }],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
        });
    }

    toJavaScriptCode(block: any): string | any[] {
        var value_distance = Blockly.JavaScript.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_ATOMIC);
        if (value_distance != "") {
            var code = 'drawing.goForward(-1 * ' + value_distance + ');';
            return code;
        } else {
            return "";
        }
    }
}


export class TurnLeftBlock extends CustomBlock {

    constructor(type: string, block: any, blockMutator: BlockMutator, ...args: any[]) {
        super(type, block, blockMutator, ...args);
        this.class = TurnLeftBlock;
    }

    defineBlock() {
        this.block.jsonInit({
            "type": "block_type",
            "message0": "左へ %1",
            "args0": [
              {
                "type": "field_angle",
                "name": "angle",
                "angle": 90
              }
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
        });
    }

    toJavaScriptCode(block: any): string | any[] {
        var value_angle = block.getFieldValue('angle');
        var code = 'drawing.turnLeft(' + value_angle + ');';
        return code;
    }
}


export class TurnRightBlock extends CustomBlock {

    constructor(type: string, block: any, blockMutator: BlockMutator, ...args: any[]) {
        super(type, block, blockMutator, ...args);
        this.class = TurnRightBlock;
    }

    defineBlock() {
        this.block.jsonInit({
            "type": "block_type",
            "message0": "右へ %1",
            "args0": [
              {
                "type": "field_angle",
                "name": "angle",
                "angle": 90
              }
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
        });
    }

    toJavaScriptCode(block: any): string | any[] {
        var value_angle = block.getFieldValue('angle');
        var code = 'drawing.turnRight(' + value_angle + ');';
        return code;
    }
}


export class PenColorBlock extends CustomBlock {

    constructor(type: string, block: any, blockMutator: BlockMutator, ...args: any[]) {
        super(type, block, blockMutator, ...args);
        this.class = PenColorBlock;
    }

    defineBlock() {
        this.block.jsonInit({
            "type": "block_type",
            "message0": "ペンのいろ %1",
            "args0": [
              {
                "type": "field_colour",
                "name": "color",
                "colour": 90
              }
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
        });
    }

    toJavaScriptCode(block: any): string | any[] {
        var value_color = block.getFieldValue('color');
        var code = 'drawing.penColor("' + value_color + '");';
        return code;
    }
}
