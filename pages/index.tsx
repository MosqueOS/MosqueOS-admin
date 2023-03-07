export const getServerSideProps = async () => {
  return {
    props: {
      pageTitle: "Dashboard",
      activeIndex: 0,
    },
  }
}

export default function Home() {
  return (
    <div className="prose prose-slate max-w-none">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae
        congue risus. Nunc egestas euismod tortor. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Ut sit
        amet lectus et urna luctus tristique. Sed interdum, arcu id mollis
        sagittis, est massa interdum lacus, id volutpat tellus erat nec leo.
        Phasellus pharetra facilisis lectus, vitae maximus urna fermentum
        imperdiet. Fusce facilisis justo nibh, sed aliquam libero vehicula nec.
      </p>
      <p>
        Nulla tempor efficitur facilisis. Etiam in sapien eget neque aliquam
        fringilla. Duis consequat diam at libero lacinia eleifend. Phasellus nec
        imperdiet lectus, quis hendrerit libero. Aenean scelerisque nisl massa,
        dignissim vestibulum lacus eleifend vel. Quisque id lectus dictum,
        fermentum quam vitae, lacinia tellus. Vivamus gravida nibh id nunc
        suscipit, in vehicula nisi feugiat. Curabitur ut suscipit neque, auctor
        pretium nisl. Quisque convallis nec lectus ut laoreet. Sed velit dui,
        facilisis sit amet convallis quis, fermentum id augue.
      </p>
      <p>
        Aenean sed pellentesque urna. Nunc eget sagittis erat. Sed convallis
        nulla quis ultricies commodo. Quisque egestas scelerisque nisl, a auctor
        lorem aliquam nec. In finibus nunc porttitor nulla porta pulvinar.
        Integer ullamcorper nisl sed sollicitudin faucibus. Quisque in neque
        tincidunt, porttitor urna id, cursus tellus. Proin pellentesque aliquet
        nisl. Pellentesque pretium ante vitae ante vulputate cursus. Phasellus
        tristique, tortor eget consectetur maximus, sapien ante interdum tortor,
        non porta leo risus sed leo. Duis consequat sit amet sem at luctus. Nam
        vitae ipsum venenatis, ullamcorper augue at, ullamcorper sapien. Donec
        eu erat eu felis tempus maximus et eu nisi. Praesent lobortis urna
        pulvinar quam lobortis, at fermentum tortor tristique. Nam quis semper
        quam.
      </p>
      <p>
        Nulla in odio velit. Etiam non diam rhoncus, efficitur diam id,
        pellentesque lectus. Etiam ac odio ipsum. Ut volutpat massa laoreet
        augue volutpat, in tincidunt nulla rhoncus. Etiam rutrum facilisis
        sagittis. Maecenas porta ullamcorper ligula, quis hendrerit ante
        scelerisque sed. Quisque consequat ac ligula a consectetur. Nam nisl ex,
        porttitor vitae lorem placerat, viverra fermentum mauris. Praesent
        auctor turpis turpis, at lobortis sapien laoreet ut. Integer sodales
        tempus nunc, nec aliquet ante tincidunt sed. Fusce ac magna vel ante
        hendrerit tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </p>
      <p>
        Aenean sagittis sit amet libero eget gravida. Pellentesque dapibus ante
        vitae elit rutrum, vitae consequat tortor feugiat. Cras finibus erat id
        cursus tempor. Proin a libero eget odio laoreet tristique. Vivamus
        faucibus lacus sit amet rutrum tristique. Phasellus scelerisque a nunc a
        efficitur. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Nullam tincidunt pharetra nibh, at
        gravida neque facilisis vel.
      </p>
    </div>
  )
}
