interface Values {
  name: string;
  email: string;
  phone?: string;
  comment: string;
}

export const sendContactForm = async(data: Values) => fetch('/api/contact', {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }
}).then((res)=>{
  if(!res.ok) throw new Error("Failed to send message");
  return res.json()
})
