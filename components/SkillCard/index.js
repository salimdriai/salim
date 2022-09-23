import React from 'react'

const SkillCard = ({ label, src, percentage, text }) => {
  return (
    <div className="stat bg-base-300 w-60 m-4">
      <div className="stat-figure text-primary">
        <img src={src} width={50} />
      </div>
      <div className="stat-title">{label}</div>
      <div className="stat-value text-primary">{percentage}%</div>
      <div className="stat-desc">{text}</div>
    </div>
  )
  return (
    <div className="bg-base-300 p-4 rounded-xl w-40">
      <div className="flex justify-end">
        <img src={src} width={70} />
      </div>
      <p>{label}</p>
    </div>
  )
}

export default SkillCard
