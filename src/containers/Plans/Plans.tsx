import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const Plans = () => {
  return (
    <Stack spacing={2} direction="row">
      {/*<Button variant="outlined">Agatka</Button>*/}
      {/*<Button variant="outlined">Kuba</Button>*/}
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={6}>Agatka</TableCell>
            </TableRow>
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
            <TableRow>
              <TableCell>8:00 - 8:45</TableCell>
              <TableCell></TableCell>
              <TableCell>Plastyka</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>J. ang.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>8:50 - 9:55</TableCell>
              <TableCell></TableCell>
              <TableCell>J. pol.</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>J. niem.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>9:45 - 10:30</TableCell>
              <TableCell></TableCell>
              <TableCell>J. pol.</TableCell>
              <TableCell></TableCell>
              <TableCell>Informatyka</TableCell>
              <TableCell>Przyroda</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>10:40 - 11:25</TableCell>
              <TableCell></TableCell>
              <TableCell>Muzyka</TableCell>
              <TableCell></TableCell>
              <TableCell>J. pol.</TableCell>
              <TableCell>J. pol.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>11:40 - 12:25</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>Matematyka</TableCell>
              <TableCell>Matematyka</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>12:45 - 13:30</TableCell>
              <TableCell>J. pol.</TableCell>
              <TableCell></TableCell>
              <TableCell>G. wych.</TableCell>
              <TableCell>Technika</TableCell>
              <TableCell>Religia</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>13:40 - 14:25</TableCell>
              <TableCell>Przyroda</TableCell>
              <TableCell></TableCell>
              <TableCell>J. ang.</TableCell>
              <TableCell>J. ang.</TableCell>
              <TableCell>W-F</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>14:35 - 15:20</TableCell>
              <TableCell>Matematyka</TableCell>
              <TableCell></TableCell>
              <TableCell>J. niem.</TableCell>
              <TableCell>W-F</TableCell>
              <TableCell>W-F</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>15:30 - 16:15</TableCell>
              <TableCell>Historia</TableCell>
              <TableCell></TableCell>
              <TableCell>Matematyka</TableCell>
              <TableCell>W-F</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>16:20 - 17:05</TableCell>
              <TableCell>Religia</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </Stack>
  );
};

export default Plans;
