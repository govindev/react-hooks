import React from "react";
import { CourseContext, UserContext } from "../../App";

function ComponentC() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <CourseContext.Consumer>
              {(course) => {
                return (
                  <div>
                    User Context value {user} course context value is {course}
                  </div>
                );
              }}
            </CourseContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentC;
