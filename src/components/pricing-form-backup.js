import React from "react"
import { Link } from "gatsby"
import content from "../../content/pricing-form.yaml"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import SelectComponent from "./select/select";

const PricingForm = () => {

  library.add(fas)

  return (
    <section id="pricing">

      <div className="row">
        <div className="pricing-tables align-center ">
          { content.plans.map((plan, index) =>
            <div className="six columns">
              <div className="price-block">
                <h3 className="plan-title">
                  <i className="fa"><FontAwesomeIcon icon={ plan.fa }/></i>
                  { plan.title }
                </h3>
                <p className="plan-price">
                  { plan.price }
                  <span>{ plan.per }</span>
                </p>

                <ul className="features">
                  { plan.features.map((value, index) => {
                    return <li>{ value }
                      <hr className={ "style-two" }/>
                    </li>
                  })
                  }
                </ul>
              </div>
            </div>
          )
          }
        </div>
      </div>
      <div className="row">
        <div className="four columns push-4">
          <SelectComponent/>
        </div>
      </div>
    </section>
  )
}
export default PricingForm