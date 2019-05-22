import React from "react";
import Layout from "../components/layout";
import Floating from "../components/floating";

export default () => (
  <main class="container">
    <Floating />
    <section style={{ paddingTop: "50%", textAlign: "center"}}>
      <h1 style={{ fontSize: "3rem", color: "grey", marginBottom: "10px"}}>Fulminacci</h1>
      <h4 class="wsf-red" style={{ fontSize: "2rem", marginBottom: "40px"}}>12 Agosto</h4>
      <h5 class="wsf-red" style={{ fontSize: "3.5rem", margin: "0px", letterSpacing: "5px"}}>00  00  00 </h5>
    </section>
  </main>
);
