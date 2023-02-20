import AnyChart from "anychart-react";
import anychart from "anychart";
import colors from "./styles/colors.scss";

export const IncomeChart = ({ refId, ...props }) => {
  const chart = anychart.pie(props.chartData);

  let palette = anychart.palettes.distinctColors();
  palette.items([
    { color: `${colors.chartDarkBlue}` },
    { color: `${colors.chartBlue}` },
  ]);
  chart.innerRadius("82%").palette(palette);

  // set the position of labels
  // chart.labels().format("{%x} - {%y}%").fontSize(10);
  const labels = chart.labels();
  labels.position("inside");
  // configure the labels: font, overlap, offset
  labels.fontColor(`${colors.black}`);
  chart.overlapMode(true);
  chart.insideLabelsOffset("60%");

  chart.legend(false);

  chart.tooltip().format("Income: {%Value}");

  const label = anychart.standalones.label();
  label
    .useHtml(true)
    .text(
      '<span style = "color:grey; font-family:arial; font-size:14px; font-weight: 600">Estimated Household <br/> Annual Income</span>' +
        `<br/><br/></br><span style="color:#000000; font-size: 24px;"><b> ${props.totalIncome}</b></span>`
    )
    .position("center")
    .anchor("center")
    .hAlign("center")
    .vAlign("middle");
  chart.center().content(label);

  // set container id for the chart
  chart.container("container");
  chart.draw();
  return <AnyChart ref={refId} instance={chart} width={280} height={280} />;
};
