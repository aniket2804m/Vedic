// import React, { useEffect, useState } from "react";
// import api from "../config/";
// import { useNavigate } from "react-router-dom";
// import razorpayLogo from "../assets/raz.png";
// import paymentMethods from "../assets/payment.png";

// const CheckoutPage = () => {
//   const [cart, setCart] = useState(null);
//   const [coupon, setCoupon] = useState("");
//   const [discount, setDiscount] = useState(0);
//   const navigate = useNavigate();
//   const [selectedItems, setSelectedItems] = useState([]);


//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

// useEffect(() => {
//   const handleResize = () => setIsMobile(window.innerWidth < 768);
//   window.addEventListener("resize", handleResize);
//   return () => window.removeEventListener("resize", handleResize);
// }, []);

//   const [form, setForm] = useState({
//     name: "",
//     address: "",
//     city: "",
//     state: "",
//     pincode: "",
//     country: "India",
//     phone: "",
//     email: ""
//   });

//   const [payment, setPayment] = useState("cod");

//   useEffect(() => {
//   if (cart?.items) {
//     setSelectedItems(cart.items.map(item => item._id));
//   }
// }, [cart]);

//   useEffect(() => {
//     api.get("/cart").then(res => setCart(res.data));
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const applyCoupon = async () => {
//   try {
//     const token = localStorage.getItem("token");

//     const res = await api.post(
//       "/apply-coupon",
//       { code: coupon },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       }
//     );

//     setDiscount(res.data.discount);
//     alert("🎉 Coupon Applied");

//   } catch (err) {
//     alert(err.response?.data?.msg || "Invalid coupon");
//     setDiscount(0);
//   }
// };

//   useEffect(() => {
//   const autoApplyCoupon = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       if (!token) return;

//       const res = await api.post(
//         "/apply-coupon",
//         { code: "WELCOME100" },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );

//       // 🔥 set coupon + discount
//       setCoupon("WELCOME100");
//       setDiscount(res.data.discount);

//       console.log("Auto coupon applied");

//     } catch (err) {
//       // silent fail (user already used coupon)
//       console.log("Coupon not applicable");
//     }
//   };

//   autoApplyCoupon();
// }, []);

//   const placeOrder = async () => {
//   try {

//     // 🔥 VALIDATION
//     if (
//       !form.name ||
//       !form.phone ||
//       !form.email ||
//       !form.address ||
//       !form.city ||
//       !form.state ||
//       !form.pincode
//     ) {
//       alert("Please fill all required fields");
//       return;
//     }

    
//     const selectedCartItems = cart.items.filter(item =>
//       selectedItems.includes(item._id)
//     );

//     // 🔥 validation
//     if (selectedCartItems.length === 0) {
//       alert("Please select at least one item");
//       return;
//     }

  
//     if (payment === "razorpay") {

//       const res = await api.post("/orders/razorpay", {
//         couponCode: coupon,
//         items: selectedCartItems
//       });

//       const options = {
//         key: "rzp_live_RctImpMZSvU1CZ",
//         amount: res.data.amount,
//         currency: "INR",
//         name: "Your Store",
//         description: "Order Payment",
//         order_id: res.data.razorpayOrderId,

//         handler: async function () {
//           await api.post("/orders/verify", {
//             billingDetails: form,
//             couponCode: coupon,
//             items: selectedCartItems
//           });

//           navigate("/order-success");
//         }
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//       return;
//     }

//     const res = await api.post("/orders", {
//       items: selectedCartItems,
//       billingDetails: form,
//       paymentMethod: "cod",
//       couponCode: coupon
//     });

//     navigate("/order-success", {
//       state: { orderId: res.data.orderId }
//     });

//   } catch (err) {
//     console.log(err);
//     alert("Error placing order");
//   }
// };

//   if (!cart) return <p>Loading...</p>;

//  const subtotal = cart.items
//   .filter(item => selectedItems.includes(item._id))
//   .reduce(
//     (sum, item) => sum + item.product.finalPrice * item.quantity,
//     0
//   );

//   // 🔥 DELIVERY LOGIC
//   const deliveryCharge = payment === "cod" ? 70 : 0;

//   const total = subtotal - discount + deliveryCharge;

//   return (
//     <div style={{
//       display: "grid",
//       gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr",
//       gap: "40px",
//       padding: isMobile ? "90px 10px" : "100px",
//       background: "#fff"
//     }}>

//       {/* LEFT */}
//       <div>
//         <h2>Billing details</h2>

//         {[
//           { label: "Your Name", name: "name" },
//           { label: "Street address", name: "address" },
//           { label: "Town / City", name: "city" },
//           { label: "State", name: "state" },
//           { label: "Postcode / ZIP", name: "pincode" },
//           { label: "Country", name: "country" },
//           { label: "Phone", name: "phone" },
//           { label: "Email", name: "email" }
//         ].map((field, i) => (
//           <div key={i} style={{ marginBottom: "15px" }}>
//             <label>{field.label} *</label>
//             <input
//               name={field.name}
//               value={form[field.name]}
//               onChange={handleChange}
//               style={{
//               ...input,
//               maxWidth: isMobile ? "95%" : "100%",
//               marginLeft: isMobile ? "auto" : "0",
//               marginRight: isMobile ? "auto" : "0"
//             }}
//             />
//           </div>
//         ))}
//       </div>

//       {/* RIGHT */}
//       <div style={{
//         background: "#fff",
//         padding: "20px",
//         borderRadius: "10px"
//       }}>
//         <h3 style={{ marginBottom: "15px" }}>Your order</h3>

//         {cart.items.map(item => (
//           <div key={item._id} style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             flexWrap: isMobile ? "wrap" : "nowrap",
//             marginBottom: "15px"
//           }}>
//             <div style={{
//               display: "flex",
//               gap: "10px",
//               alignItems: "center"
//             }}>
//               <div style={{ position: "relative" }}>

//   {/* 🔥 CHECKBOX */}
//   <input
//     type="checkbox"
//     checked={selectedItems.includes(item._id)}
//     onChange={() => {
//       if (selectedItems.includes(item._id)) {
//         setSelectedItems(prev => prev.filter(id => id !== item._id));
//       } else {
//         setSelectedItems(prev => [...prev, item._id]);
//       }
//     }}
//     style={{
//       position: "absolute",
//       top: "5px",
//       left: "5px",
//       zIndex: 2,
//       width: "18px",
//       height: "18px",
//       cursor: "pointer",
//       accentColor: "#1A5B0F"
//     }}
//   />

//   <img
//     src={item.product.colors?.[0]?.images?.[0]}
//     style={{
//       width: "60px",
//       height: "60px",
//       objectFit: "cover",
//       borderRadius: "5px"
//     }}
//   />
// </div>

//               <div>
//                 <p style={{ margin: 0, fontSize: "14px", fontWeight: "500" }}>
//                   {item.product.name}
//                 </p>

//                 <div style={{
//                   display: "flex",
//                   gap: "5px",
//                   fontSize: "13px",
//                   marginTop: "3px"
//                 }}>
//                   <span style={{
//                     textDecoration: "line-through",
//                     color: "gray"
//                   }}>
//                     ₹{item.product.price}
//                   </span>

//                   <span style={{ fontWeight: "600" }}>
//                     ₹{item.product.finalPrice}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div style={{ fontWeight: "600" }}>
//               ₹{item.product.finalPrice * item.quantity}
//             </div>
//           </div>
//         ))}

//         <hr />

//         {/* SUBTOTAL */}
//         <p style={{ display: "flex", justifyContent: "space-between" }}>
//           <span>Subtotal</span>
//           <span>₹{subtotal}</span>
//         </p>

//         <p style={{ display: "flex", justifyContent: "space-between" }}>
//   <span>Delivery Charges</span>
//   <span>
//     {payment === "cod" ? "₹70" : "FREE"}
//   </span>
// </p>

//         {/* TOTAL */}
//         <h3 style={{
//           display: "flex",
//           justifyContent: "space-between"
//         }}>
//           <span>Total</span>
//           <span>₹{total}</span>
//         </h3>

//         {discount > 0 && (
//         <p style={{
//          marginTop: "5px",
//          fontSize: "13px",
//          color: "#1A5B0F",
//          fontWeight: "700"
//         }}>
//         Coupon: Last day
//         </p>
//        )}

//         {/* COUPON */}
//         <div style={{
//           marginTop: "15px",
//           display: "flex",
//           gap: "10px"
//         }}>
//           <input
//             type="text"
//             placeholder="Apply Coupon"
//             value={coupon}
//             onChange={(e) => setCoupon(e.target.value)}
//             style={{
//               flex: 1,
//               padding: "8px",
//               border: "1px solid #ddd",
//               borderRadius: "5px",
//               fontWeight:"bold"
//             }}
//           />

//           <button
//             onClick={applyCoupon}
//             style={{
//               padding: "8px 12px",
//               background: "#1A5B0F",
//               color: "#fff",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer"
//             }}
//           >
//             Apply
//           </button>
//         </div>

//         {/* DISCOUNT */}
//         {discount > 0 && (
//           <p style={{
//             display: "flex",
//             justifyContent: "space-between",
//             color: "#1A5B0F",
//             marginTop: "10px",
//             fontWeight:"bold"

//           }}>
//             <span>Discount</span>
//             <span>-₹{discount}</span>
//           </p>
//         )}

//         {/* PAYMENT */}
//         <div style={{ marginTop: "20px" }}>

//   {/* 🔥 RAZORPAY BLOCK */}
//   <div style={{ marginBottom: "15px" }}>
    
//     <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//       <input
//         type="radio"
//         checked={payment === "razorpay"}
//         onChange={() => setPayment("razorpay")}
//       />
//       <span style={{ fontWeight: "600", fontSize: "15px" }}>
//         Razorpay Payment Gateway
//       </span>
//     </label>

//     {/* Razorpay logo text */}
//     <div style={{
//       display: "flex",
//       alignItems: "center",
//       gap: "8px",
//       marginLeft: "25px",
//       marginTop: "5px"
//     }}>
//       <img
//     src={razorpayLogo}
//     alt="razorpay"
//     style={{
//       width: "200px",
//       height: "80px",
//       objectFit: "contain"
//     }}
//   />
//     </div>

//     {/* Description */}
//     <p style={{
//       fontSize: "13px",
//       color: "#666",
//       marginLeft: "25px",
//       marginTop: "5px",
//       lineHeight: "1.5"
//     }}>
//       Pay securely by Credit or Debit card or Internet Banking through Razorpay.
//     </p>

//   </div>

//   {/* 🔥 COD BLOCK */}
//   <div>
//     <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//       <input
//         type="radio"
//         checked={payment === "cod"}
//         onChange={() => setPayment("cod")}
//       />
//       <span style={{ fontWeight: "600", fontSize: "15px" }}>
//         Cash on delivery
//       </span>
//     </label>
//   </div>

//   {/* 🔥 PRIVACY TEXT */}
//   <p style={{
//     fontSize: "12px",
//     color: "#777",
//     marginTop: "15px",
//     lineHeight: "1.6"
//   }}>
//     Your personal data will be used to process your order, support your experience
//     throughout this website, and for other purposes described in our privacy policy.
//   </p>

// </div>

//         <button onClick={placeOrder} style={btn}>
//           PLACE ORDER
//         </button>
//       </div>

//       <div style={{
//   marginTop: "10px",
//   textAlign: isMobile ? "center" : "right"
  
  
// }}>
//   <img
//     src={paymentMethods}
//     alt="payment methods"
//     style={{
//       width: "100%",
//       maxWidth: isMobile ? "300px" : "500px",
//       objectFit: "contain"
//     }}
//   />
// </div>

//     </div>
//   );
// };

// const input = {
//   width: "100%",
//   maxWidth: "100%",
//   padding: "10px",
//   marginTop: "5px",
//   border: "1px solid #ddd",
//   borderRadius: "5px"
// };

// const btn = {
//   marginTop: "20px",
//   width: "100%",
//   padding: "12px",
//   background: "#1A5B0F",
//   color: "#fff",
//   border: "none"
// };

// export default CheckoutPage;