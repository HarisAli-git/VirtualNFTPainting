import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Check_Out } from "../Middleware/Rest_Api";
import { Navigate } from "react-router-dom";
import { displayProfile } from "../Middleware/Rest_Api";

const Cart = () => {
  const [url, setURL] = useState("");

  const MakeCheckout = async (e) => {
    const item = [{ id: 1, quantity: 3 }];
    const res = await Check_Out(item);
    console.log("Here is Checkout response: ", res.data.url);
    setURL(res.data.url);
  };

  useEffect(() => {
    console.log("Cart Page Opened!");
    if (url != "") {
      window.location = url;
    }
  }, [url]);

  return (
    <div>
      <Button
        onClick={() => {
          MakeCheckout();
        }}
        variant="primary"
      >
        Checkout
      </Button>{" "}
    </div>
  );
};

export default Cart;
