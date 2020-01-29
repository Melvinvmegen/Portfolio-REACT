import React, { Fragment } from 'react'

const testimonial = (props) => {
  return (
    <Fragment>
      {
        props.testimonials.map(testimonial => {
          return <div className="testimonials-slide col-xs-12 col-sm-6 col-md-4 d-sm-flex show-on-scroll is-visible" >
            <div className="slide-container">
              <div className="card-testimonial testimonials">
                <div className="testimonials-content">
                  <div className="testimonial-infos">
                    <div className="testimonials-bloc-images">
                      <div className="testimonial-picture"><img className="avatar-large" alt={testimonial.name}
                        src={testimonial.avatar} />
                      </div>
                    </div>
                    <div className="testimonial-text">
                      <p>{testimonial.name}<span>{testimonial.company}</span></p>
                    </div>
                  </div>
                  <div className="testimonial-quote">
                    <blockquote>
                      "{testimonial.quote}"
                        </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        })
      }
    </Fragment>
  )
}

export default testimonial;
