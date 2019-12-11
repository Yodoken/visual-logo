import { Component, ViewChild } from '@angular/core';
import { NgxBlocklyConfig,NgxBlocklyGeneratorConfig,NgxToolboxBuilderService,CustomBlock,
  LOGIC_CATEGORY,
  LOOP_CATEGORY,
  MATH_CATEGORY,
  TEXT_CATEGORY,
  LISTS_CATEGORY,
  COLOUR_CATEGORY,
  VARIABLES_CATEGORY,
  FUNCTIONS_CATEGORY,
  Category,
  Separator
} from 'ngx-blockly';
import { GoForwardBlock, TurnLeftBlock, TurnRightBlock, PenColorBlock } from './custom-blocks';
import { DrawingService} from './drawing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public config: NgxBlocklyConfig = {
    toolbox:
    '<xml id="toolbox" style="display: none">' +
    '  <category name="Control">' +
    '    <block type="controls_if"></block>' +
    '    <block type="controls_repeat_ext"></block>' +
    '  </category>' +
    '  <category name="Logic">' +
    '    <block type="logic_compare"></block>' +
    '    <block type="logic_operation"></block>' +
    '    <block type="logic_boolean"></block>' +
    '  </category>' +
    '  <category name="Math">' +
    '    <block type="math_number"></block>' +
    '    <block type="math_arithmetic"></block>' +
    '    <block type="text"></block>' +
    '  </category>' +
    '  <category name="Variable">' +
    '    <block type="variables_get"></block>' +
    '    <block type="variables_set"></block>' +
    '  </category>' +
    '  <category name="Functions">' +
    '    <block type="text_print"></block>' +
    '  </category>' +
    '</xml>',
    scrollbars: true,
    trashcan: true
  };
  public generatorConfig: NgxBlocklyGeneratorConfig = {
    dart: false,
    javascript: true,
    lua: false,
    php: false,
    python: false,
  };
  public customBlocks: CustomBlock[] = [
    new GoForwardBlock('go_forward', null, null),
    new TurnLeftBlock('turn_left', null, null),
    new TurnRightBlock('turn_right', null, null),
    new PenColorBlock('pen_color', null, null)
  ];
  title = 'visual-logo';
  private _code = '';
  @ViewChild('turtleCanvas', {"static":true}) turtleCanvas;
  
  constructor(
    private drawing: DrawingService,
    private ngxToolboxBuilder: NgxToolboxBuilderService) {
    ngxToolboxBuilder.nodes = [
               new Category(this.customBlocks, '#FF00FF', 'カメの操作', null),
               LOGIC_CATEGORY,
               LOOP_CATEGORY,
               MATH_CATEGORY,
               TEXT_CATEGORY,
               new Separator(), //Add Separator
               LISTS_CATEGORY,
               COLOUR_CATEGORY,
               VARIABLES_CATEGORY,
               FUNCTIONS_CATEGORY
    ];
    this.config.toolbox = ngxToolboxBuilder.build();
  }
  
  ngOnInit() {
    
  }

  onCode(code: string) {
    this._code = code;
  }

  onRun() {
    console.log("run");
    console.log(this._code);
    var canvas = this.turtleCanvas.nativeElement;
    this.drawing.init(canvas.getContext('2d'), canvas.width, canvas.height);

    var func = new Function('drawing', this._code);
    func(this.drawing);
  }

  onClear() {
    console.log("run");
    console.log(this._code);
    var canvas = this.turtleCanvas.nativeElement;
    this.drawing.init(canvas.getContext('2d'), canvas.width, canvas.height);
  }
}
