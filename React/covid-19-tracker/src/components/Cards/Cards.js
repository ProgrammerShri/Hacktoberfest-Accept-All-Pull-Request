import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import cx from "classnames"; //for multiple classes on one element
import React from "react";
import CountUp from "react-countup";

import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading....";
  }
  return (
    <div className={styles.container}>
      <Grid
        spacing={2}
        style={{
          display: "flex",
        }}
      >
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography
              variant="h5"
              style={{
                display: "flex",
              }}
            >
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
              <Typography>
                {"(" +
                  Math.round(
                    (confirmed.value /
                      (confirmed.value + recovered.value + deaths.value)) *
                      100
                  ) +
                  "%" +
                  ")"}
              </Typography>
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography
              variant="h5"
              style={{
                display: "flex",
              }}
            >
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
              <Typography>
                {"(" +
                  Math.round(
                    (recovered.value /
                      (confirmed.value + recovered.value + deaths.value)) *
                      100
                  ) +
                  "%" +
                  ")"}
              </Typography>
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recoveries from COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography
              variant="h5"
              style={{
                display: "flex",
              }}
            >
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
              <Typography>
                {"(" +
                  Math.round(
                    (deaths.value /
                      (confirmed.value + recovered.value + deaths.value)) *
                      100
                  ) +
                  "%" +
                  ")"}
              </Typography>
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths caused by COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
