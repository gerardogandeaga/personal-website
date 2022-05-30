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
        name: "Personal Website",
        description: "The website you are currently viewing! This is a static webpage built with Next.js, React.js and MUI as the primary component library. The website is hosted using Firebase hosting services.",
        link: "https://github.com/gerardogandeaga/personal-website",
        tags: ["JavaScript", "Next.js", "React.js", "Firebase"],
        cover_image: "placeholder.png"
      },
      {
        name: "STodo",
        description: "STodo, or \"something to do\", is CLI tool to view built purely in Rust to quickly view and manage your project TODOs and FIXMEs interactively from the terminal!",
        link: "https://github.com/gerardogandeaga/stodo",
        tags: ["Rust", "CLI Tools"],
        cover_image: "stodo.png"
      },
      {
        name: "DynaPix",
        description: "A Krita extension that empowers artists to quickly gernerate pixel art from high resolution images. The extension also uses machine learning to generate a normal maps for game-ready art.",
        link: "https://github.com/gerardogandeaga/CMPT461-ImagePixelizer",
        tags: ["Python3", "Krtia", "OpenCV", "Image Processing", "Computer Vision"],
        cover_image: "dynapix.png"
      },
      {
        name: "Earthquake Detection Cluster",
        description: "An embedded program written in C++ that manages a Beaglebone Green microcomputer cluster to detect earthquake magnitudes over a given region. EDC leverages a REST API backend hosted on an EC2 instance for fault tolerant communication.",
        link: "https://github.com/gerardogandeaga/CMPT433-EDC",
        tags: ["C++", "Python Flask", "AWS EC2", "Circuits", "Embedded Software", "Beaglebone Green"],
        cover_image: "edc.jpeg"
      },
      {
        name: "Branch Confidence Predictors",
        description: "As a computer architecture project, I worked with a team to implement and evaluate the performance of branch confidence predictors. This project leverages ChampSim to write and simulate CPU behaviors using C++. We implemented BPRU, SBI, JRS condpredictors as well as experimented with combining predictors.",
        link: "https://github.com/gerardogandeaga/CMPT450-BCP-Project",
        tags: ["C++", "ChampSim", "CPU Architecture"],
        cover_image: "cpu.jpeg"
      },
      {
        name: "Mix-N-Match",
        description: "A 3D model generator that creates novel chairs from parts in the PartNet chair dataset. Mix-N-Match automatically identifies chair parts using a symmetry heirachy to create plausible chair models and exports it to an OBJ. The validity of the chair model is checked using a pre-trained image recognition model.",
        link: "https://github.com/gerardogandeaga/Chair-Mix-N-Match",
        tags: ["Python", "OpenGL", "Computer Graphics", "Computer Vision"],
        cover_image: "placeholder.png"
      },
      {
        name: "Bilby Compiler",
        description: "A compiler written in Java which is capable of compiling programs with basic constructs such as functions, variables, complex arrays, maths, program flow control, and more. Bilby is designed to compile programs down to ASM which can be executed by an ASM emulator. The compiler’s architecture resembles real-world compilers featuring lexical analysis, parsing, semantic analysis, and code generation.",
        link: "",
        tags: ["Java", "Compiler"],
        cover_image: "placeholder.png"
      },
      {
        name: "Odin",
        description: "A mobile app that streamlines exam proctoring and identity verification for universities during the lockdown. Examiners can monitor who signed into the exam and review school id from a single source. Android app written natively in Java and the backend driven by Firebase. I leveraged Firebase document triggers for responsive in-app events which discouraged phone usage during an exam.",
        link: "https://github.com/gerardogandeaga/odin",
        tags: ["Java", "Android Studio", "NoSQL", "Firebase"],
        cover_image: "placeholder.png"
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
