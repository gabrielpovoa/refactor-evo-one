import { Client } from "./componets/Clients/Client"
import { GetInTouch } from "./componets/Contact/GetInTouch"
import { Banner } from "./componets/Home/Banner"
import { Project } from "./componets/Projects/Project"
import { System } from "./componets/System/System"
import { Track } from "./componets/Track/Track"

export default function Home() {
  return <>
    <Banner />
    <Track/>
    <System/>
    <Project/>
    <Client/>
    <GetInTouch/>
  </>
}