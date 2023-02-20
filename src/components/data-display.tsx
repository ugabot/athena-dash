import React, { useMemo, useState } from "react";
import { User } from "../api/types";
import { alphabeticalSort } from "../modules/alphabetical-sort";
import { eligibleAgeSort } from "../modules/eligible-age-sort";
import { incomeFilter } from "../modules/income-filter";

export interface DataDisplayProps {
  users: User[];
  error?: boolean;
}

const RenderDataPoints = ({ usersData }: { usersData: User[] }) => {
  return useMemo(
    () => (
      <div>
        {usersData.map((user, i) => (
          <div key={i}>
            <p>
              {`Name: ${user.full_name}, Age:${user.age}, Income: ${user.income}, Eligible: ${user.eligible}`}{" "}
            </p>
          </div>
        ))}
      </div>
    ),
    [usersData]
  );
};

export const DataDisplay = ({ users, error }: DataDisplayProps) => {
  const [showAlphabetical, setShowAlphabetical] = useState<boolean>(false);
  const [showIncomeFilter, setShowIncomeFilter] = useState<boolean>(false);
  const [showEligibleAgeSort, setShowEligibleAgeSort] =
    useState<boolean>(false);

  const renderCondition = !error && users;
  const alphabeticalData =
    showAlphabetical && renderCondition ? alphabeticalSort(users) : undefined;
  const incomeFilterData =
    showIncomeFilter && renderCondition ? incomeFilter(users) : undefined;
  const eligibleAgeData =
    showEligibleAgeSort && renderCondition ? eligibleAgeSort(users) : undefined;

  return (
    <div style={{ margin: "30px" }}>
      Data Display
      <div>
        <button
          onClick={() => {
            setShowAlphabetical(!showAlphabetical);
            setShowIncomeFilter(false);
            setShowEligibleAgeSort(false);
          }}
        >
          Alphabetical Sort
        </button>
        <button
          onClick={() => {
            setShowIncomeFilter(!showIncomeFilter);
            setShowAlphabetical(false);
            setShowEligibleAgeSort(false);
          }}
        >
          Income Filter
        </button>
        <button
          onClick={() => {
            setShowEligibleAgeSort(!showEligibleAgeSort);
            setShowAlphabetical(false);
            setShowIncomeFilter(false);
          }}
        >
          Eligible Age Sort
        </button>
      </div>
      <div>
        {alphabeticalData ? (
          <RenderDataPoints usersData={alphabeticalData} />
        ) : null}
        {incomeFilterData ? (
          <RenderDataPoints usersData={incomeFilterData} />
        ) : null}
        {eligibleAgeData ? (
          <RenderDataPoints usersData={eligibleAgeData} />
        ) : null}
      </div>
    </div>
  );
};
