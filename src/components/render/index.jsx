const JsxRender = {
  name: "JsxRender",
  props: {
    r: {
      type: Function,
      default: () => {}
    },
    row: {
      type: Object,
      default: () => {}
    }
  },
  render(createElement) {
    const { r, row } = this
    return (
      <div>{r(row)}</div>
    )
  }
}
export {
  JsxRender
}
