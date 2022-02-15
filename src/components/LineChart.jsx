import { palette } from "@toptal/picasso/utils";
import { LineChart } from "@toptal/picasso-charts";
import Picasso from "@toptal/picasso-provider";
import { getLineData } from "../data/data";

export default function LineChartWidget({ accountId = 1 }) {
  const { HIGHLIGHTS, CHART_DATA } = getLineData(accountId);
  return (
    <Picasso>
      <LineChart
        data={CHART_DATA}
        highlights={HIGHLIGHTS}
        lineConfig={{
          talents: { color: palette.blue.main },
        }}
      />
    </Picasso>
  );
}
