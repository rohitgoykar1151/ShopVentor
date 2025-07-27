const orderForm = document.getElementById("orderForm");
const orderStatus = document.getElementById("orderStatus");

if (orderForm) {
  orderForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const vendor = orderForm.vendor.value;
    const item = orderForm.item.value;
    const quantity = orderForm.quantity.value;

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ vendor, item, quantity }),
      });

      const data = await res.json();
      console.log(data);

      orderStatus.textContent = data.message;
      orderStatus.style.color = "green";
      orderStatus.style.fontWeight = "600";
      orderForm.reset();
    } catch (err) {
      console.error("Error placing order", err);
      orderStatus.textContent = "❌ Failed to place order. Try again.";
      orderStatus.style.color = "red";
    }
  });
}
