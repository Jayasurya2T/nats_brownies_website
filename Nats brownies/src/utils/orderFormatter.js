/**
 * Format cart items into order summary messages
 */

export function formatOrderMessage(cartItems, total) {
  const itemsList = cartItems
    .map((item) => {
      return `${item.name} (${item.category}) - Qty: ${item.quantity} × ₹${item.price} = ₹${item.price * item.quantity}`;
    })
    .join('\n');

  const message = `🍫 *Order from Nats Brownies* 🍫

*Order Details:*
${itemsList}

*Total Amount: ₹${total}*

Please confirm the order and provide delivery details.

Thank you! 😊`;

  return message;
}

export function getWhatsAppLink(cartItems, total) {
  const message = formatOrderMessage(cartItems, total);
  const phoneNumber = '918428382877'; // +91 84283 82877 without + and spaces
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

export function getEmailLink(cartItems, total) {
  const subject = encodeURIComponent('Order from Nats Brownies Website');
  const body = formatOrderMessage(cartItems, total);
  const encodedBody = encodeURIComponent(body);
  return `mailto:nats.brownies@example.com?subject=${subject}&body=${encodedBody}`;
}

export function getInstagramMessage(cartItems, total) {
  const message = formatOrderMessage(cartItems, total);
  return `@nats_vlog29 ${message}`;
}

export function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text);
  } else {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return Promise.resolve();
    } catch (err) {
      document.body.removeChild(textArea);
      return Promise.reject(err);
    }
  }
}

