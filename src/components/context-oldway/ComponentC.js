import React from "react";
import { CourceContext, UserContext } from "../../App";

function ComponentC() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <CourceContext.Consumer>
              {(cource) => {
                return (
                  <div>
                    User Context value {user} course context value is {cource}
                  </div>
                );
              }}
            </CourceContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentC;
