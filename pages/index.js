import { Container, Grid } from "@mui/material";

import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";


const content = {
  about: {
    title: "A Little Bit About Me",
    about:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  },

  projects: {
    title: "What I've Been Up To",
    projects: [
      {
        name: "STodo",
        description: "stodo, or \"something to do\", is CLI tool to view built purely in Rust to quickly view and manage your project TODOs and FIXMEs interactively from the terminal!",
        link: "https://github.com/gerardogandeaga/stodo",
        tags: ["Rust", "CLI Tools"],
        cover_image: "stodo.png"
      },
      {
        name: "DynaPix",
        description: "A Krita extension that empowers artists to quickly gernerate pixel art from high resolution images. The extension also uses machine learning to generate a normal maps for game-ready art.",
        link: "https://github.com/gerardogandeaga/CMPT461-ImagePixelizer",
        tags: ["Python3", "Krtia", "Image Processing", "Computer Vision"],
        cover_image: "dynapix.png"
      },
      {
        name: "Earthquake Detection Cluster",
        description: "An embedded program written in C++ that manages a Beaglebone Green microcomputer cluster to detect earthquake magnitudes over a given region. EDC leverages a REST API backend hosted on an EC2 instance for fault tolerant communication.",
        link: "https://github.com/gerardogandeaga/CMPT433-EDC",
        tags: ["C++", "Python Flask", "AWS EC2", "Circuits", "Embedded Software", "Beaglebone Green"],
        cover_image: "edc.jpeg"
      },
    ],
  }
};

export default function Home() {
  return (
    <Container maxWidth={"lg"} sx={{ pb: 4 }}>
      <Header />
        <main>
          <Grid 
            container 
            direction={"row"} 
            columnSpacing={8} 
            sx={{ mt: 2 }}>
            <About {...content.about} />
            <Projects {...content.projects} />
          </Grid>
        </main>
      
    </Container>
  );
}
