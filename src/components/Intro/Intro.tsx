import { GetStaticProps } from "next";
import Image from "next/image";
import styles from "./Intro.module.css";
import { Grid } from "@mui/material";
import lukePhoto from "public/Luketest.svg";

export default function Intro({ projects }: { projects: string }) {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <div className={styles.imageContainer}>
              <Image
                priority
                src={lukePhoto}
                className={styles.image}
                sizes="(max-width: 768px) 50,
              (max-width: 1200px) 50,
              33"
                alt="Luke Mifflen Headshot"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <h1 className={styles.hello}>
                {" "}
                HELLO <br></br>I'M LUKE{" "}
              </h1>
              <div className={styles.FSD}> Full Stack Developer </div>
              <div className={styles.PM}> Technical Project Manager </div>
              <div className={styles.FSD}> Adventurer </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
