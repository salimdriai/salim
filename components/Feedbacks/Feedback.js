import React from 'react'

const Stars = () => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <div key={star}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#ff0"
            viewBox="0 0 24 24"
            strokeWidth={0.1}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        </div>
      ))}
    </div>
  )
}

const Feedback = (props) => {
  const { name, country, time, feedback, flag } = props
  return (
    <div className=" md:h-48 shadow-2xl p-4 bg-base-300 m-2 rounded-xl cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-102">
      <h6 className="text-xl font-bold ">{name}</h6>
      <div className="flex gap-2 items-end">
        <img src={flag} width={24} />
        <p className="text-sm text-secondary">{country}</p>
      </div>

      <div className="flex items-center my-2">
        <Stars />{' '}
        <div className="border-l border-secondary ml-2 pl-2">
          <p className="text-sm">{time}</p>
        </div>
      </div>
      <p className="text-sm ">{feedback}</p>
    </div>
  )
}

export default Feedback
