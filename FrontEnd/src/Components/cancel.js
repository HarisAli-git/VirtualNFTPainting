import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Check_Out } from "../Middleware/Rest_Api";
import { displayProfile } from "../Middleware/Rest_Api";

const Cancel = () => {
  return <div>Payment Cancelled</div>;
};

export default Cancel;
