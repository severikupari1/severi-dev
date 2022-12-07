import React from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { useEcWidProduct } from "../hooks/useEcWidProduct";

export default () => {
  library.add(fas)
  let storeId = `80971795`;
  const status = useEcWidProduct({
    storeId,
  });

  return (
    status === "ready" &&
    <section id="pricing">
      <div id={`my-store-${storeId}`}></div>
    </section>
  )
}
