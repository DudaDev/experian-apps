import reactDom from "react-dom";
import { getWidget } from "./widgetsMapper";

export async function renderWidget(widgetName, container, props) {
  const widget = await getWidget(widgetName);
  if (widget) {
    const Component = widget.default;
    reactDom.render(<Component {...props} />, container);
  }
}
