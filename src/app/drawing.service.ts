import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrawingService {
  private _context: CanvasRenderingContext2D;

  private _width: number;
  private _height: number;
  private _x: number;
  private _y: number;
  private _angle: number;

  constructor() { }

  init(context: CanvasRenderingContext2D, width: number, height: number) {
    this._context = context;
    this._width = width;
    this._height = height;
    this._x = width / 2;
    this._y = height / 2;
    this._angle = 90;

    // Transform
    this._context.setTransform(1, 0, 0, 1, 0, 0);

    // Clear the canvas.
    this._context.fillStyle = 'white';
    this._context.fillRect(0, 0, width, height);
    //this._context.clearRect(0, 0, width, height);

    // Position
    this._context.moveTo(this._x, this._y);

    // Stroke
    this._context.strokeStyle = 'black';
  }

  goForward(distance: number) {
    console.log('Go Forward ' + distance);
    this._context.beginPath();
    this._context.moveTo(this._x, this._y);
    this._context.lineTo(this._x, this._y - distance);
    this._context.stroke();
    this._y -= distance;
  }

  turnLeft(angle: number) {
    console.log('Turn Left ' + angle);
    this._context.translate(this._x, this._y);
    this._context.rotate(-Math.PI * angle / 180.0);
    this._context.translate(-this._x, -this._y);
  }

  turnRight(angle: number) {
    console.log('Turn Right ' + angle);
    this._context.translate(this._x, this._y);
    this._context.rotate(Math.PI * angle / 180.0);
    this._context.translate(-this._x, -this._y);
  }

  penColor(color: string) {
    console.log('Pen Color ' + color);
    this._context.strokeStyle = color;
  }
}
