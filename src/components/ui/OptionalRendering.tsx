import React from "react";

function OptionalRendering({
  condition,
  classname,
  children,
}: {
  condition: boolean;
  classname?: string;
  children: React.ReactNode;
}): React.ReactElement {
  return condition ? <div className={classname ?? ""}>{children}</div> : <></>;
}

export default OptionalRendering;
