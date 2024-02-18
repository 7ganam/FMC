import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./GEVC-style";
import { Paper } from "@material-ui/core";

import Button from "@material-ui/core/Button";

const schools = [
  {
    id: 1,
    teamNumber: "001",
    team: "GEMS Winchester School Dubai",
    location: "Dubai, UAE",
  },
  {
    id: 2,
    teamNumber: "003",
    team: "International School of Choueifat - DIP",
    location: "Dubai, UAE",
  },
  {
    id: 3,
    teamNumber: "004",
    team: "ABC Private School",
    location: "Abu Dhabi, UAE",
  },
  {
    id: 4,
    teamNumber: "007",
    team: "SABIS International School - Ruwais",
    location: "Ruwais, Abu Dhabi, UAE",
  },
  {
    id: 5,
    teamNumber: "009",
    team: "Prince George’s Clippers",
    location: "Maryland, USA",
  },
  {
    id: 6,
    teamNumber: "021",
    team: "International School of Choueifat - Ras Al Khaimah",
    location: "Ras Al Khaimah, UAE",
  },
  {
    id: 7,
    teamNumber: "037",
    team: "Al Najah Private School & Basmat Amal",
    location: "Abu Dhabi, UAE",
  },
  {
    id: 8,
    teamNumber: "052",
    team: "Khalifa Bin Zayed Al Awal School",
    location: "Abu Dhabi, UAE",
  },
  {
    id: 9,
    teamNumber: "058",
    team: "Al Basma British School",
    location: "Abu Dhabi, UAE",
  },
  {
    id: 10,
    teamNumber: "090",
    team: "International School of Choueifat - Dubai",
    location: "Dubai, UAE",
  },
  {
    id: 11,
    teamNumber: "108",
    team: "Ambassador School Dubai",
    location: "Dubai, UAE",
  },
  {
    id: 12,
    teamNumber: "130",
    team: "Shenandoah Valley Short Circuits",
    location: "Virginia, USA",
  },
  {
    id: 13,
    teamNumber: "141",
    team: "McKinley Technology High School",
    location: "Washington DC, USA",
  },
  {
    id: 14,
    teamNumber: "145",
    team: 'Istituto di Istruzione Superiore "Luigi di Savoia"',
    location: "Chieti, Italy",
  },
  {
    id: 15,
    teamNumber: "222",
    team: "Volkswagen Applied Technology School",
    location: "Cairo, Egypt",
  },
  {
    id: 16,
    teamNumber: "333",
    team: "Jackson-Reed High School",
    location: "Washington DC, USA",
  },
  {
    id: 17,
    teamNumber: "364",
    team: "International School of Choueifat - Al Ain",
    location: "Al Ain, Abu Dhabi, UAE",
  },
  {
    id: 18,
    teamNumber: "365",
    team: "Emirates National School Abu Dhabi Campus - Boys",
    location: "Abu Dhabi, UAE",
  },
  {
    id: 19,
    teamNumber: "404",
    team: "Al Ittihad Private School Jumeira",
    location: "Dubai, UAE",
  },
  {
    id: 20,
    teamNumber: "441",
    team: "American Community School",
    location: "Abu Dhabi, UAE",
  },
  {
    id: 21,
    teamNumber: "445",
    team: "Harrisonburg High School",
    location: "Virginia, USA",
  },
  {
    id: 22,
    teamNumber: "545",
    team: "Al Yasat Private School - Girls",
    location: "Abu Dhabi, UAE",
  },
  {
    id: 23,
    teamNumber: "555",
    team: "International School of Choueifat - Khalifa City",
    location: "Abu Dhabi, UAE",
  },
  {
    id: 24,
    teamNumber: "666",
    team: "Al Rayaheen School",
    location: "Al Ain, Abu Dhabi, UAE",
  },
  {
    id: 25,
    teamNumber: "717",
    team: "Emirates National School Abu Dhabi Campus - Girls",
    location: "Abu Dhabi, UAE",
  },
  {
    id: 26,
    teamNumber: "822",
    team: "Bloom World Academy",
    location: "Dubai, UAE",
  },
  {
    id: 27,
    teamNumber: "901",
    team: "Al Yasat Private School - Boys",
    location: "Abu Dhabi, UAE",
  },
  {
    id: 28,
    teamNumber: "999",
    team: "Vocational Education Development Centre - ADVETI",
    location: "Abu Dhabi, UAE",
  },
];

function GEVC() {
  // Theme breakpoints
  const theme = useTheme();
  const classes = useStyles();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className={classes.root} id="GEVC">
      <div style={{ zIndex: "-1" }} className={classes.deco} />

      <Container style={{ zIndex: "1" }}>
        <Grid container spacing={isDesktop ? 3 : 0} justifyContent="center">
          <Grid item md={4} xs={12}>
            <div
              style={{ boxShadow: "-6px 5px 12px 13px rgb(0 0 0 / 6%)" }}
              className="sticky w-full h-[250px]  bg-slate-600 top-[-150px] left-[50px] z-50 rounded-l-full rounded-b-full overflow-hidden"
            >
              <img src="/Photo1.jpg" alt="cover" className="object-cover w-full h-full" />
            </div>
          </Grid>
          <Grid item md={8} xs={12}>
            <Paper
              style={{ boxShadow: "-6px 5px 12px 13px rgb(0 0 0 / 6%)" }}
              className="w-full min-h-[300px] text-xl md:text-2xl p-6 z-50 overflow-x-auto"
            >
              <Typography color="primary" variant="h6">
                TEAMS
              </Typography>
              <table className="w-full  overflow-x-auto">
                <tbody className="overflow-x-auto">
                  {schools.map(({ id, team, location, teamNumber }) => (
                    <tr
                      key={id}
                      className="flex md-flex-row items-center justify-start mt-1 bg-[#F0FAFE] p-1 md-p-[3px] rounded-md gap-2 hover:bg-[#D4E9F2] transition-all duration-300 ease-in-out overflow-x-auto"
                    >
                      <td className="text-sm bg-slate-200 px-[10px] rounded-md">{teamNumber}</td>
                      <td className="text-sm ml-4 flex-1 text-left md-text-left whitespace-nowrap">{team}</td>
                      <td className="text-sm bg-slate-200 px-[10px] rounded-md whitespace-nowrap">{location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default GEVC;
