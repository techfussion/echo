import Head from "next/head";
// import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Box,
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import Login from "../components/auth/Login.jsx";
import SignUp from "../components/auth/SignUp.jsx";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Echo - Beta Chat Experince</title>
        <meta name="echo" content="Echo - Beta Chat Experince" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Container maxW="xl" centerContent>
          {/* className={`${styles.main} ${inter.className}`}> */}
          <Box bg="white" w="100%" borderRadius="md" p="10">
            <Tabs variant="enclosed">
              <TabList>
                <Tab width="50%">Login</Tab>
                <Tab width="50%">Sign Up</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Login />
                </TabPanel>
                <TabPanel>
                  <SignUp />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Container>
      </main>
    </>
  );
}
