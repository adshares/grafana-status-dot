import * as math from '../external/math.min'

export class Builder {
  constructor (panel) {
    this.panel = panel
  }

  call (seriesList = []) {
    return seriesList.map(this._eval, this)
  }

  _eval (series) {
    var scratchPadExp = this.panel.mathScratchPad
    var displayValueExp = this.panel.mathDisplayValue
    var colorValueExp = this.panel.mathColorValue
    var scope = { data: this._toValues(series) }

    return { name: series.target,
      label: this._getLabel(series.target),
      scratchPad: math.eval(scratchPadExp, scope),
      displayValue: math.eval(displayValueExp, scope),
      colorValue: math.eval(colorValueExp, scope) }
  }

  _getLabel (name) {
    var matches = (new RegExp(this.panel.label.pattern)).exec(name)
    return matches && matches.length ? matches[1] : ''
  }

  _toValues (series) {
    var points = series.datapoints.map(point => point[0])
    return points.filter(value => value != null)
  }
}
