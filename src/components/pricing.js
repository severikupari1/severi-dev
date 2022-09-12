import React from "react"
import { Link } from "gatsby"
import content from "../../content/pricing.yaml"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import IndeterminateCheckbox from "./indeterminate-checkbox";
import CheckboxLabels from "./checkbox-labels";

export default () => {

  library.add(fas)

  return (
    <section id="pricing">
      <div className="row section-head">
        <h1>{ content.title }</h1>
        <p>{ content.body }</p>
      </div>

      <div className="row">
        <div className="pricing-tables align-center ">
          { content.plans.map((plan, index) =>
            <div className="ten columns">
              <div className="price-block">
                <h3 className="plan-title">
                  <i className="fa"><FontAwesomeIcon icon={ plan.fa } /></i>
                  { plan.title }
                </h3>
                <p className="plan-price">
                  { plan.price }
                  <span>{ plan.per }</span>
                </p>

                <ul className="features">
                  { plan.features.map((value, index) => {
                      return <li>{ value } <hr className={"style-two"}/></li>
                    })
                  }
                </ul>
                <ul className="features-2">
                  { plan.commonfeatures.map((value, index) => {
                    return <IndeterminateCheckbox
                      style={ {
                        textAlign: 'initial'
                      } }
                      commonFeatures={value}
                      >

                      </IndeterminateCheckbox>
                    })
                  }
                  <CheckboxLabels
                    style={ {
                      textAlign: 'initial'
                    } }
                    extraFeatures={plan.extrafeatures}
                  >

                  </CheckboxLabels>

                </ul>
                {/*<footer className="plan-sign-up">*/}
                {/*  <Link className="button" to={ plan.signup.to }>*/}
                {/*    { plan.signup.label }*/}
                {/*  </Link>*/}
                {/*</footer>*/}


              </div>
            </div>
          )
          }
        </div>
      </div>
    </section>
  )
}
