import React from 'react'
import CountUp from 'react-countup'

const MainCountry = ({data, loading}) => {
  if (!loading && data !== null) {
    return (
      <div className="main-country">
        <div className="main-country__list">
          <div className="main-country__row">
            <div className="main-country__item border__color--pink">
              <span className="main-country__item__text">country</span>
              <span className="main-country__item__value">{data.country}</span>
            </div>

            <div className="main-country__item border__color--blue">
              <span className="main-country__item__text">total</span>
              <span className="main-country__item__value">
                <CountUp start={0} end={data.cases.total} duration={1} separator=','/>
              </span>
            </div>

            <div className="main-country__item border__color--light-blue">
              <span className="main-country__item__text">active</span>
              <span className="main-country__item__value">
                <CountUp start={0} end={data.cases.active} duration={1} separator=','/>
              </span>
            </div>

            <div className="main-country__item border__color--light-green">
              <span className="main-country__item__text">new</span>
              <span className="main-country__item__value">
                <CountUp start={0} end={data.cases.new !== null ? data.cases.new : 0} duration={1} separator=','/>
              </span>
            </div>
          </div>

          <div className="main-country__row">
            <div className="main-country__item border__color--green">
              <span className="main-country__item__text">recovered</span>
              <span className="main-country__item__value">
                <CountUp start={0} end={data.cases.recovered} duration={1} separator=','/>
              </span>
            </div>

            <div className="main-country__item border__color--yellow">
              <span className="main-country__item__text">critical</span>
              <span className="main-country__item__value">
                <CountUp start={0} end={data.cases.critical} duration={1} separator=','/>
              </span>
            </div>

            <div className="main-country__item border__color--orange">
              <span className="main-country__item__text">new death</span>
              <span className="main-country__item__value">
                <CountUp start={0} end={data.deaths.new !== null ? data.deaths.new : 0} duration={1} separator=','/>
              </span>
            </div>

            <div className="main-country__item border__color--light-red">
              <span className="main-country__item__text">total death</span>
              <span className="main-country__item__value">
                <CountUp start={0} end={data.deaths.total} duration={1} separator=','/>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default React.memo(MainCountry)
