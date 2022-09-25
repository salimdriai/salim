import React from 'react'

const SkillCard = ({ label, src, percentage, text }) => {
  return (
    <div className="stat bg-base-300 w:full md:w-60 ">
      <div className="stat-figure text-primary">
        <img src={src} width={50} />
      </div>
      <div className="stat-title">{label}</div>
      <div className="stat-value text-primary">{percentage}%</div>
      <div className="stat-desc">{text}</div>
    </div>
  )
}

export default SkillCard
