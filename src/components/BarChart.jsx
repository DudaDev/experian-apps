import { BarChart } from "@toptal/picasso-charts";
import Picasso from "@toptal/picasso-provider";
import { palette } from "@toptal/picasso/utils";
import { getChartData } from "../data/data";

const COLORS_MAPPING = {
  "active talent": palette.blue.main,
  "potential talent": palette.grey.dark,
};

export default function BarChartWidget({ accountId = 1, tooltip }) {
  const CHART_DATA = getChartData(accountId);
  return (
    <Picasso>
      <BarChart
        data={CHART_DATA}
        getBarColor={({ dataKey }) => COLORS_MAPPING[dataKey]}
        getBarLabelColor={() => palette.grey.dark}
        width={720}
        tooltip={tooltip}
      />
    </Picasso>
  );
}
