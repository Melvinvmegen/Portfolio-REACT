import React, { Fragment } from 'react';
import { Breakpoint } from 'react-socks';

const testimonial = (props) => {
  return (
    <Fragment>
      <Breakpoint medium up className="testimonials-list">
        {props.testimonials.map(testimonial => {
          return <div className="testimonials-slide col-xs-12 col-sm-4 col-md-4 d-sm-flex show-on-scroll is-visible" key={testimonial.id}>
            <div className="slide-container card-testimonial testimonials">
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
        })
        }
      </Breakpoint>
      <Breakpoint small down className="testimonials-list">
        <div className="testimonials-slide col-xs-12 col-sm-4 col-md-4 d-sm-flex show-on-scroll is-visible" key={props.testimonials[2].id}>
          <div className="slide-container card-testimonial testimonials">
            <div className="testimonials-content">
              <div className="testimonial-infos">
                <div className="testimonials-bloc-images">
                  <div className="testimonial-picture"><img className="avatar-large" alt={props.testimonials[2].name}
                    src={props.testimonials[2].avatar} />
                  </div>
                </div>
                <div className="testimonial-text">
                  <p>{props.testimonials[2].name}<span>{props.testimonials[2].company}</span></p>
                </div>
              </div>
              <div className="testimonial-quote">
                <blockquote>
                  "{props.testimonials[2].quote}"
                        </blockquote>
              </div>
            </div>
          </div>
        </div>
      </Breakpoint>

    </Fragment>
  )
}

export default testimonial;
