/* eslint-disable react/prop-types */

const AboutCard = ({title, content}) => {
  return (
    <div>
            <h2 className="text-3xl text-center font-semibold mb-4">
             {title}
            </h2>
            <p className="text-gray-700">
            {content}
            </p>
          </div>
  )
}

export default AboutCard