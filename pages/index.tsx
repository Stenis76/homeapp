import Head from "next/head";
import { NextPage } from "next";
import Mui from "../components/Mui";
import Image from "next/image";
import ActionBar from "../components/ActionBar";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Layout from "../components/Layout";
import StatusCard from "../components/StatusCard";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: "grey",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  hero: {
    height: "90vh",
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.3)),url(/hero-house.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  heroText: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(5, 5, 5, 5),
    color: theme.palette.common.white,
  },
}));
type HomeProps = {};
const Home: NextPage<HomeProps> = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Head>
        <title>MyHOME</title>
        <meta name="keywords" content="homefix, house-application"></meta>
      </Head>
      <Mui.Container maxWidth="md" className={classes.container}>
        <div className={classes.hero}>
          <div className={classes.heroText}>
            <Mui.Typography variant="h1">MyHome</Mui.Typography>
            <Mui.Typography variant="body2">
              Your digital house, Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Molestias deleniti blanditiis earum, error
              distinctio dignissimos a minima hic minus omnis repudiandae modi
              harum deserunt, odit culpa vitae in! Quasi, nulla!
            </Mui.Typography>
          </div>
        </div>

        <StatusCard />
      </Mui.Container>
    </Layout>
  );
};
export default Home;
