import React, { FC, ChangeEvent, useEffect } from "react";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Lesson from "./Lesson";
import { PlanItem } from "./Plans.interface";
import { planData, planTime } from "./../../data/PlansData";
import { PUPILS } from "./../../constants/Plans";
import { useState } from "react";

const FiltersStyled = styled.div`
  font-weight: bold;
`;

const Plans: FC = () => {
  const [filteredPlanData, setFilteredPlanData] =
    useState<PlanItem[]>(planData);
  const [pupilsSelected, setPupilsSelected] = useState<{
    [x: string]: boolean;
  }>(
    Object.assign({}, ...Object.entries(PUPILS).map(([k]) => ({ [k]: true })))
  );

  const getLessons = (row: number, col: number): PlanItem[] => {
    return filteredPlanData.filter(
      ({ day, lesson }) => day === col && lesson === row
    );
  };

  const handlePupilCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setPupilsSelected({
      ...pupilsSelected,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    setFilteredPlanData(
      planData.filter(({ pupil }) => !!pupilsSelected[pupil])
    );
  }, [pupilsSelected, planData]);

  return (
    <Stack spacing={2} direction="column">
      <FiltersStyled>
        {Object.keys(PUPILS).map((key: string) => (
          <FormControlLabel
            key={key}
            control={
              <Checkbox
                checked={!!pupilsSelected[key]}
                onChange={handlePupilCheck}
                name={key}
              />
            }
            label={PUPILS[key]}
          />
        ))}
      </FiltersStyled>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Pn</TableCell>
            <TableCell>Wt</TableCell>
            <TableCell>Śr</TableCell>
            <TableCell>Czw</TableCell>
            <TableCell>Pt</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[...Array(10)].map((e, row) => (
            <TableRow key={`row-${row}`}>
              <TableCell>{planTime[row]}</TableCell>
              {[...Array(5)].map((e, col) => (
                <TableCell key={`${row}-${col}`}>
                  {getLessons(row, col)?.map((lesson) => (
                    <Lesson
                      key={`lesson-${row}-${col}-${lesson.pupil}`}
                      lesson={lesson}
                    />
                  ))}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  );
};

export default Plans;
