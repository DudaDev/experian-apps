export async function getWidget(widgetName) {
  switch (widgetName) {
    case "charts":
      return import("./widgets/Charts");
    case "table":
      return import("./widgets/Table");
    default:
      return null;
  }
}
