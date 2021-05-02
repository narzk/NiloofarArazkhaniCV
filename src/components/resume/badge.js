import React from "react"
import PropTypes from "prop-types"

const Badge = ({ title, level }) => <div className="resume__badge"><div className="resume__badge--progress" style={{width:`${level}`}}>{title}</div></div>

Badge.propTypes = {
  title: PropTypes.string,
}

Badge.defaultProps = {
  title: ``,
}

export default Badge
