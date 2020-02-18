import React from "react"
import Intro from "../components/intro"
import Navbar from "../components/navbar"
import styles from "./index.module.css"
import Particles from "react-particles-js"
import ParticlesConfig from "../../assets/particlesjs-config.json"

export default () => (
  <div>
    <Particles className={styles.particles} params={ParticlesConfig} />
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <Intro />
        <Navbar />
      </div>
    </div>
  </div>
)
