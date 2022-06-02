import { Container, Grid } from "@mui/material";

import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";


const content = {
  about: {
    title: "Gerardo Gandeaga",
    about: "I'm a recent computer science graduate from Simon Fraser University. I enjoy learning new programming languages and working on interesting projects. While the field of computer science is loaded with a wide range of intriguing avenues; I found myself particularly interested in embedded software, computer vision, and computer graphics. I have worked on course projects and personal projects in all these areas. While software development is my passion, I also strive to live a balanced and healthy life. I enjoy going to the gym regularly, playing video games, watching movies, spending time with friends, and having a cold one on a hot summer's day. If you have time, check out some of the projects I have worked – or am – working on. I’ll be updating this website every so often with projects, personal updates, and more. Big thanks if you’ve read this far! ",
    social_links: [
      "https://github.com/gerardogandeaga",
      "https://linkedin.com/in/gerardo-gandeaga",
    ]
  },
  projects: {
    title: "What I've Been Up To",
    projects: [
      {
        name: "Personal Website",
        description: "The website you are currently viewing! This is a static webpage built with Next.js, React.js, and Material UI as the primary component library. The website is hosted using Firebase hosting services.",
        link: "https://github.com/gerardogandeaga/personal-website",
        tags: ["JavaScript", "Next.js", "React.js", "Firebase", "MUI"],
        cover_image: "website.png"
      },
      {
        name: "STodo",
        description: "STodo, or \"something to do\", is a CLI tool built purely in Rust to quickly interactively view your project TODOs and FIXMEs from the terminal!",
        link: "https://github.com/gerardogandeaga/stodo",
        tags: ["Rust", "CLI Tools"],
        cover_image: "stodo.png"
      },
      {
        name: "DynaPix",
        description: "A Krita extension that empowers artists to quickly generate pixel art from high-resolution images. The extension also uses machine learning to generate pixelated normal maps for game-ready art. Interestingly, my partner and I collaborated with our professor and another grad student to submit the project as a poster submission to SIGGRAPH 2022 in Vancouver!",
        link: "https://github.com/gerardogandeaga/CMPT461-ImagePixelizer",
        tags: ["Python3", "Krtia", "OpenCV", "Image Processing", "Computer Vision"],
        cover_image: "dynapix.png"
      },
      {
        name: "Earthquake Detection Cluster",
        description: "An embedded program written in C++ that manages a Beaglebone Green microcomputer cluster to detect earthquake magnitudes over a given region. EDC leverages a REST API backend hosted on an EC2 instance for fault-tolerant communication.",
        link: "https://github.com/gerardogandeaga/CMPT433-EDC",
        tags: ["C++", "Python Flask", "AWS EC2", "Circuits", "Embedded Software", "Beaglebone Green"],
        cover_image: "edc.jpeg"
      },
      {
        name: "Branch Confidence Predictors",
        description: "For a computer architecture project, I worked with a team to implement and evaluate the performance of branch confidence predictors. This project leveraged ChampSim to write and simulate CPU branching and caching behaviors in C++. We implemented BPRU, SBI, and JRS confidence predictors as well as experimented with combined predictors.",
        link: "https://github.com/gerardogandeaga/CMPT450-BCP-Project",
        tags: ["C++", "ChampSim", "CPU Architecture"],
        cover_image: "cpu.jpeg"
      },
      {
        name: "Mix-N-Match",
        description: "A 3D model generator that creates novel chairs from parts in the PartNet chair dataset. Mix-N-Match automatically identifies chair parts by parsing a symmetry hierarchy 3D model representation to create completely new and plausible chair models; exporting the result to an OBJ. The validity of the chair model is checked by rendering the model at different angles and using a trained image recognition network we trained.",
        link: "https://github.com/gerardogandeaga/Chair-Mix-N-Match",
        tags: ["Python", "OpenGL", "Computer Graphics", "Computer Vision"],
        cover_image: "mix-n-match.png"
      },
      {
        name: "Bilby Compiler",
        description: "A compiler written in Java that is capable of compiling programs from a high-level language to assembly. It supports functions, variables, mutability/immutability, complex arrays, maths, program flow control, and more. Bilby is designed to compile programs down to ASM which an ASM emulator can execute. The compiler’s architecture resembles real-world compilers featuring lexical analysis, parsing, semantic analysis, and code generation.",
        link: null,
        tags: ["Java", "Compiler"],
        cover_image: "tree.jpeg"
      },
      {
        name: "Odin",
        description: "A mobile app that streamlines exam proctoring and identity verification for universities during lockdowns. Examiners can monitor who signed into the exam and review school IDs from a single source. The android app is written natively in Java while the system backend is driven by Firebase services. Odin leverages Firebase document triggers for responsive in-app events which are used to discourage phone usage during an exam.",
        link: "https://github.com/gerardogandeaga/odin",
        tags: ["Java", "Android Studio", "NoSQL", "Firebase", "Mobile App"],
        cover_image: "odin.png"
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
