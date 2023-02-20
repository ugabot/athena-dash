import React, { useEffect, useMemo, useRef, useState } from "react";
import { IncomeChart } from "./income-chart";
import { getUsers } from "../modules/get-users";
import { Data, User } from "../api/types";
import colors from "./styles/colors.scss";
import {
  MainCardDiv,
  DivWrapper,
  Headline,
  SubHeadline,
  P,
  Select,
  TwoColDiv,
  Input,
  Button,
  ListItem,
  Divider,
  Ul,
} from "./styles/main-card-components";

interface IProps {
  users: User[];
  chartData: Data;
  legendData: Data;
  totalIncome: string;
}

const options: Record<string, string>[] = [{ value: "", text: "Choose..." }];

export const MainCard = ({
  users,
  chartData,
  legendData,
  totalIncome,
}: IProps) => {
  const [selected, setSelected] = useState<string>(options[0].value);
  const [value, setValue] = useState<number>(63);
  // Work-around to force the chart to re-render
  const [chartKey, setChartKey] = useState<number>(0);
  const chartRef = useRef(chartKey);
  useEffect(() => {
    sessionStorage.setItem("reloading", "true");
    chartRef.current = chartKey;
  }, [chartKey]);

  useEffect(() => {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
      sessionStorage.removeItem("reloading");
      setChartKey((chartKey) => chartKey + 1);
    }
  }, []);

  // Build the options for the select
  const userNames = getUsers(users);
  userNames?.forEach((element) => {
    options.push({ value: element, text: element });
  });

  // Event Handlers
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
  };
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  const renderLegend = useMemo(
    () => (
      <Ul style={{}}>
        {legendData.map((legend, i) => (
          <li key={i}>
            <span>
              <ListItem>{`${legend[0]} claim at ${legend[1]}`}</ListItem>
            </span>
          </li>
        ))}
      </Ul>
    ),
    [legendData]
  );

  const onClickHandler = (value?: number) =>
    selected
      ? console.log(`Name: ${selected} - Retirement Age: ${value}`)
      : console.log(`Name: select a name - Retirement Age: ${value}`);

  return (
    <MainCardDiv>
      <DivWrapper
        bgColor={colors.limeGreen}
        boxShadow={`0px 3px 10px ${colors.grey}`}
      >
        <p style={{ fontWeight: 600, lineHeight: "2px" }}>Interaction</p>
      </DivWrapper>
      <DivWrapper>
        <Headline>Best Social Security Claimed Age </Headline>
        <SubHeadline>Our Recommendation</SubHeadline>
      </DivWrapper>
      <div style={{ display: "flex" }}>
        <DivWrapper justifyContent="center" style={{ paddingBottom: "30px" }}>
          {renderLegend}
        </DivWrapper>
        <DivWrapper>
          <IncomeChart
            refId={chartRef}
            chartData={chartData}
            totalIncome={totalIncome}
          />
        </DivWrapper>
      </div>
      <Divider />
      <DivWrapper>
        <P margin="2px 24px 2px 0px" fontWeight="400">
          Household Members
        </P>
        <Select value={selected} onChange={handleSelectChange}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.text}
            </option>
          ))}
        </Select>
      </DivWrapper>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <TwoColDiv marginLeft="30px">
          <P textAlign="left">Your ideal retire age</P>
          <Input
            id="ideal-age"
            type="number"
            value={value}
            // Assuming one cannot retire before they turn 18.
            min={18}
            max={100}
            onChange={handleInput}
          />
          <Button onClick={() => onClickHandler(value)}>
            Use ideal {value}
          </Button>
        </TwoColDiv>
        <TwoColDiv marginRight="30px" alignItems="center">
          <P textAlign="right">Annual Social Security Payment</P>
          <h2 style={{ color: `${colors.darkGrey}` }}>$18,000</h2>
          <Button isDark={true} onClick={() => onClickHandler(70)}>
            Accept 70
          </Button>
        </TwoColDiv>
      </div>
    </MainCardDiv>
  );
};
