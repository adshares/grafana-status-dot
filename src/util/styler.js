export class Styler {
  constructor (panel) {
    this.panel = panel
  }

  call (dots) {
    dots.forEach(this._style.bind(this))
  }

  _style (dot) {
    dot.style = { }
    dot.style['background'] = dot.color
    dot.style['width'] = this.panel.radius
    dot.style['height'] = this.panel.radius
    dot.style['line-height'] = this.panel.radius
    dot.style['text-align'] = 'center'
    dot.style['font-size'] = this.panel.labelFontSize
    dot.style['color'] = this.panel.labelColor

    dot.linkStyle = { }
    dot.linkStyle['font-size'] = this.panel.radius
  }
}
