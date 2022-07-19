import React, { useContext } from 'react'
import { CourseContext, UserContext } from '../../App'

function ConsumerC() {
    const user = useContext(UserContext);
    const course = useContext(CourseContext);
  return (
    <div>
        User Context value {user} course context value is {course}
    </div>
  )
}

export default ConsumerC