import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import ConstraintLayout from "~/components/ConstraintLayout/ConstraintLayout";
import "~/styles/main.scss";

const IndexPage = () => {
  return (
    <main>
      <ConstraintLayout>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        />
      </ConstraintLayout>
    </main>
  )
}

export default IndexPage
