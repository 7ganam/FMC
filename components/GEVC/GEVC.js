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
  { id: 1, team: "ABC Private School", location: "Abu Dhabi, UAE" },
  { id: 2, team: "Al Basma British School", location: "Abu Dhabi, UAE" },
  { id: 3, team: "Al Najah Private School & Basmat Amal", location: "Abu Dhabi, UAE" },
  { id: 4, team: "Al Yasat Private School - Boys", location: "Abu Dhabi, UAE" },
  { id: 5, team: "Al Yasat Private School - Girls", location: "Abu Dhabi, UAE" },
  { id: 6, team: "American Community School", location: "Abu Dhabi, UAE" },
  { id: 7, team: "Emirates National School Abu Dhabi Campus - Boys", location: "Abu Dhabi, UAE" },
  { id: 8, team: "Emirates National School Abu Dhabi Campus - Girls", location: "Abu Dhabi, UAE" },
  { id: 9, team: "International School of Choueifat - Khalifa City", location: "Abu Dhabi, UAE" },
  { id: 10, team: "Khalifa Bin Zayed Al Awal School", location: "Abu Dhabi, UAE" },
  { id: 11, team: "Vocational Education Development Centre - ADVETI", location: "Abu Dhabi, UAE" },
  { id: 12, team: "Al Rayaheen School", location: "Al Ain, Abu Dhabi, UAE" },
  { id: 13, team: "International School of Choueifat - Al Ain", location: "Al Ain, Abu Dhabi, UAE" },
  { id: 14, team: "Al Ittihad Private School Jumeira", location: "Dubai, UAE" },
  { id: 15, team: "Ambassador School Dubai", location: "Dubai, UAE" },
  { id: 16, team: "Bloom World Academy", location: "Dubai, UAE" },
  { id: 17, team: "GEMS Winchester School Dubai", location: "Dubai, UAE" },
  { id: 18, team: "International School of Choueifat - DIP", location: "Dubai, UAE" },
  { id: 19, team: "International School of Choueifat - Dubai", location: "Dubai, UAE" },
  { id: 20, team: "International School of Choueifat - Ras Al Khaimah", location: "Ras Al Khaimah, UAE" },
  { id: 21, team: "SABIS International School", location: "Ruwais, Abu Dhabi, UAE" },
  { id: 22, team: "Volkswagen Applied Technology School", location: "Cairo, Egypt" },
  { id: 23, team: 'Istituto di Istruzione Superiore "Luigi di Savoia"', location: "Chieti, Italy" },
  { id: 24, team: "Prince George’s Clippers", location: "Maryland, USA" },
  { id: 25, team: "Harrisonburg High School", location: "Virginia, USA" },
  { id: 26, team: "Shenandoah Valley Short Circuits", location: "Virginia, USA" },
  { id: 27, team: "Jackson-Reed High School", location: "Washington DC, USA" },
  { id: 28, team: "McKinley Technology High School", location: "Washington DC, USA" },
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
          <Grid item lg={4} md={2} xs={12}>
            <div
              style={{ boxShadow: "-6px 5px 12px 13px rgb(0 0 0 / 6%)" }}
              className="sticky w-full h-[250px]  bg-slate-600 top-[-150px] left-[50px] z-50 rounded-r-full rounded-b-full overflow-hidden"
            >
              <img src="/Photo1.jpg" alt="cover" className="object-cover w-full h-full" />
            </div>
          </Grid>
          <Grid item lg={8} md={10} xs={12}>
            <Paper
              style={{ boxShadow: "-6px 5px 12px 13px rgb(0 0 0 / 6%)" }}
              className="w-full min-h-[300px] text-xl md:text-2xl p-6 z-50"
            >
              <Typography color="primary" variant="h6">
                TEAMS
              </Typography>
              <table className="w-full">
                <tbody>
                  {schools.map(({ id, team, location }) => (
                    <tr key={id} className="flex flex-row items-center justify-between">
                      <td className="text-xl">{team}</td>
                      <td className="text-xl">{location}</td>
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
